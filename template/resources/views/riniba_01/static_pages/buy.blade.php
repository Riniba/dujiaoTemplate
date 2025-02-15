@extends('riniba_01.layouts.seo')
@section('content')
<div class="page-content">
  <section class="product-detail p-96">
    <div class="container">
      <div class="product-card">
        <form class="buy-form" id="buy-form" action="{{ url('create-order') }}" method="post">
          {{ csrf_field() }}

          <div class="row">
            <div class="col-xl-7 col-lg-6">
              <div class="image-block mb-lg-0 mb-32">
                <img src="{{ picture_ulr($picture) }}">
              </div>
            </div>
            <div class="col-xl-5 col-lg-6">
              <div class="content">
                <div class="title">
                  <div class="name-price mb-8">
                    <h6 class="h-47 bold light-black">{{ $gd_name }}</h6>
                  </div>
                </div>
                <div class="tag">
                  <div class="category mb-16">
                    @if($type == \App\Models\Goods::AUTOMATIC_DELIVERY)
                    <span class="badge text-bg-primary">自动发货</span>
                    @else
                    <span class="badge text-bg-secondary">人工发货</span>
                    @endif
                    <span class="badge text-bg-primary">库存({{ $in_stock }})</span>
                    @if($buy_limit_num > 0)
                    <span class="badge text-bg-primary">限购({{ $buy_limit_num }})</span>
                    @endif
                  </div>
                  <div class="category">
                    @if(!empty($wholesale_price_cnf) && is_array($wholesale_price_cnf))
                    @foreach($wholesale_price_cnf as $ws)
                    {{-- 购买 x 件起， x 元/件 --}}
                    <span class="badge text-bg-primary">购买 {{ $ws['number'] }} 件，{{ $ws['price'] }} 元/件</span>
                    @endforeach
                    @endif
                  </div>
                  <div class="category">
                    <h6 class="h-27 light-black">¥ {{ $actual_price }}</h6>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <input type="hidden" name="gid" value="{{ $id }}">
                    <input type="text" name="email" id="email" placeholder="请您输入邮箱..." class="form-control  mb-16"
                      required />

                  </div>


                  @if(dujiaoka_config_get('is_open_search_pwd') == \App\Models\Goods::STATUS_OPEN)
                  <div class="col-lg-6">
                    <input type="text" name="search_pwd" value="" class="form-control  mb-16" placeholder="请输入查询密码...">
                  </div>
                  @endif



                  @if(isset($open_coupon))
                  <div class="col-lg-6">
                    <input type="text" name="coupon_code" class="form-control  mb-16" placeholder="您有优惠码吗？">
                  </div>
                  @endif


                  @if($type == \App\Models\Goods::MANUAL_PROCESSING && is_array($other_ipu))
                  @foreach($other_ipu as $ipu)
                  <div class="col-lg-6">
                    <input type="text" name="{{ $ipu['field'] }}" @if($ipu['rule'] !==false) required @endif
                      class="form-control  mb-16" placeholder="{{ $ipu['desc'] }}">
                  </div>
                  @endforeach
                  @endif



                  <div class="col-lg-6">
                    <div class="buy-pay-grid">
                      <select class="form-select" name="payway">
                        @foreach($payways as $key => $way)
                        <option @if($key==0) selected @endif" value="{{ $way['id'] }}">{{ $way['pay_name'] }}</option>
                        @endforeach
                      </select>

                    </div>
                  </div>
                </div>

                @if(dujiaoka_config_get('is_open_img_code') == \App\Models\Goods::STATUS_OPEN)
                <div class="row">
                  <div class="col-lg-6">
                    <input type="text" name="img_verify_code" value="" class="form-control" placeholder="验证码">
                  </div>
                  <div class="col-lg-6">
                    <img class="captcha-img" src="{{ captcha_src('buy') . time() }}" onclick="refresh()" style="cursor: pointer;">
                  </div>

                  <script>
                    function refresh() {
                      $('img[class="captcha-img"]').attr('src', '{{ captcha_src('buy') }}' + Math.random());
                    }
                  </script>

                </div>

                @endif

                @if(dujiaoka_config_get('is_open_geetest') == \App\Models\Goods::STATUS_OPEN )
                <div class="row">
                  <div class="col-lg-12">
                    <div id="geetest-captcha"></div>
                    <p id="wait-geetest-captcha" class="show">loading...</p>
                  </div>
                </div>
                @endif




                <div class="quantity quantity-wrap">
                  <input class="decrement" type="button" value="-" />
                  <input type="text" name="by_amount" value="1" maxlength="2" size="1" class="number" />
                  <input class="increment" type="button" value="+" />
                </div>
                <div class="btn-block">
                  <button type="submit" class="cus-btn primary"> 提交订单</button>

                </div>

              </div>
            </div>
          </div>

        </form>
      </div>
      <div class="heading">
        <h2 class="text-start">商品详情</h2>
      </div>
      <div class="detail">

        {!! $description !!}


      </div>
    </div>
  </section>
</div>
<div class="modal" id="buy_prompt" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">
          <span style="color: rgb(0, 0, 0);">提示</span>

        </h5>

        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {!! $buy_prompt !!}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="img-modal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-xl" id="img-content">
        <div class="modal-content">
            <div class="modal-body">
                <img src="" alt="Zoomed Image" id="img-zoom" class="img-fluid">
            </div>
        </div>
    </div>
</div>

@stop

@section('js')
<script>

  document.addEventListener('DOMContentLoaded', function () {
    @if (!empty($buy_prompt))
      var myModal = new bootstrap.Modal(document.getElementById('buy_prompt'));
    myModal.show();
    @endif
  });
</script>
<script>
  $(function () {
    $(".detail img").on('click', function () {
      var src = $(this).attr("src");
      $("#img-zoom").attr("src", src);

      var img = new Image();
      img.onload = function() {
        var realWidth = this.width;
        var realHeight = this.height;
        var ww = $(window).width();
        var hh = $(window).height();

        $("#img-content").css({ "width": "", "height": "" });
        $("#img-zoom").css({ "width": "", "height": "", "margin-left": "auto", "margin-right": "auto" });

        $('#img-modal').modal("show");
      };
      img.src = src;
    });

    // Close modal when clicking outside the image or on the image itself
    $("#img-modal").click(function (e) {
      if ($(e.target).is("#img-zoom, .modal-dialog, .modal-content")) {
        $('#img-modal').modal("hide");
      }
    });
  });
</script>
@stop