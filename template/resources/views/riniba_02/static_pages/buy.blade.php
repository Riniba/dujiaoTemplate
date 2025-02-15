@extends('riniba_02.layouts.seo')
@section('content')
<section class="breadcrumb border-bottom p-0 d-block section-bg position-relative z-index-1">
  <div class="breadcrumb-two">
    <div class="container container-two">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="breadcrumb-two-content">

            <h3 class="breadcrumb-two-content__title mb-3 text-capitalize">{{ $gd_name }}</h3>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="product-details mt-32 padding-b-120">
  <div class="container container-two">
    <div class="row gy-4">
      <div class="col-lg-8">
        <div class="gooddescription">
          {!! $description !!}

        </div>
      </div>
      <div class="col-lg-4">
        <div class="product-sidebar section-bg">
          <div class="position-relative flx-between gap-1">
            <img src="{{ picture_ulr($picture) }}">

            <h6 class="product-sidebar__title">¥ {{ $retail_price }}</h6>
          </div>
          <ul class="sidebar-list">
            <li class="sidebar-list__item flx-align gap-2 font-14 fw-300 mb-2">
              <span class="icon"><img src="/assets/riniba_02/images/icons/check-cirlce.svg" alt=""></span>
              @if($type == \App\Models\Goods::AUTOMATIC_DELIVERY)
              <span class="text">自动发货</span>
              @else
              <span class="text">人工发货</span>
              @endif
            </li>

            <li class="sidebar-list__item flx-align gap-2 font-14 fw-300 mb-2">
              <span class="icon"><img src="/assets/riniba_02/images/icons/check-cirlce.svg" alt=""></span>
              <span class="text">库存:({{ $in_stock }})</span>
            </li>
            @if($buy_limit_num > 0)
            <li class="sidebar-list__item flx-align gap-2 font-14 fw-300">
              <span class="icon"><img src="/assets/riniba_02/images/icons/check-cirlce.svg" alt=""></span>
              <span class="text">限购({{ $buy_limit_num }})</span>
            </li>
            @endif

          </ul>

          <div class="flx-between mt-3">
            <div class="flx-align gap-2">
              <span class="product-card__prevPrice text-decoration-line-through">¥ {{ $retail_price }}</span>
              <h6 class="product-card__price mb-0 font-14 fw-500">¥ {{ $actual_price }}</h6>
            </div>
          </div>
          <form id="buy-form" action="{{ url('create-order') }}" method="post">
            {{ csrf_field() }}
            <div class="row gy-4">
              <div class="col-12">
                <input type="hidden" name="gid" value="{{ $id }}">
                <label for="email" class="form-label mb-2 font-18 fw-500">邮箱</label>
                <input type="text" name="email" id="email" placeholder="请您输入邮箱..."
                  class="common-input radius-8 common-input--md" required />
              </div>
              @if(dujiaoka_config_get('is_open_search_pwd') == \App\Models\Goods::STATUS_OPEN)
              <div class="col-12">
                <label for="search_pwd" class="form-label mb-2 font-18 fw-500">查询密码</label>
                <input type="text" name="search_pwd" value="" class="common-input radius-8 common-input--md"
                  placeholder="请输入查询密码...">
              </div>
              @endif

              @if(isset($open_coupon))
              <div class="col-12">
                <label for="coupon_code" class="form-label mb-2 font-18 fw-500">优惠码</label>
                <input type="text" name="coupon_code" value="" class="common-input radius-8 common-input--md"
                  placeholder="您有优惠码吗？...">
              </div>
              @endif

              @if($type == \App\Models\Goods::MANUAL_PROCESSING && is_array($other_ipu))
              @foreach($other_ipu as $ipu)
              <div class="col-12">
                <label for="coupon_code" class="form-label mb-2 font-18 fw-500">{{ $ipu['desc'] }}</label>
                <input type="text" name="{{ $ipu['field'] }}" @if($ipu['rule'] !==false) required @endif
                  class="common-input radius-8 common-input--md" placeholder="{{ $ipu['desc'] }}">
              </div>
              @endforeach
              @endif


              @if(dujiaoka_config_get('is_open_img_code') == \App\Models\Goods::STATUS_OPEN)
              <div class="col-12">
                <label for="img_verify_code" class="form-label mb-2 font-18 fw-500">验证码</label>
                <input type="text" name="img_verify_code" value="" class="common-input radius-8 common-input--md"
                  placeholder="验证码">
              </div>
              <div class="col-12">
                <img class="captcha-img" src="{{ captcha_src('buy') . time() }}" onclick="refresh()"
                  style="cursor: pointer;" data-src="{{ captcha_src('buy') }}">
              </div>
              <script>
                function refresh() {
                  var captcha = document.querySelector('img.captcha-img');
                  captcha.src = captcha.getAttribute('data-src') + '?' + Math.random();
                }
              </script>
              @endif




              @if(dujiaoka_config_get('is_open_geetest') == \App\Models\Goods::STATUS_OPEN )
              <div class="col-12">
                <div id="geetest-captcha"></div>
                <p id="wait-geetest-captcha" class="show">loading...</p>
              </div>
              @endif

              <div class="col-12">

                <div class="cart-item__count">
                  <button type="button" data-decrease="data-decrease"> <i class="fas fa-minus"></i></button>
                  <input data-value="data-value" type="number" value="1" size="1" name="by_amount" id="by_amount"
                    minlength="0">
                  <button type="button" data-increase="data-increase"><i class="fas fa-plus"></i></button>
                </div>
              </div>
              <div class="col-12">
                <label for="payway" class="form-label mb-2 font-18 fw-500">支付方式</label>
                <select class="common-input border" name="payway">
                  @foreach($payways as $key => $way)
                  <option @if($key==0) selected @endif" value="{{ $way['id'] }}">{{ $way['pay_name'] }}</option>
                  @endforeach
                </select>
  
              </div>




              <div class="col-12">
                <button type="submit"
                  class="btn btn-main d-flex w-100 justify-content-center align-items-center gap-2 pill px-sm-5 mt-32">
                  <img src="/assets/riniba_02/images/icons/add-to-cart.svg" alt="">
                  下单
                </button>
              </div>
            </div>
          </form>




        </div>
      </div>
    </div>
  </div>
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

@stop