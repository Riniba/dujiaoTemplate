@extends('riniba_04.layouts.seo')
@section('content')

<div class="container">
  <style>
    .btn-disabled {
      background-color: #ccc;
      color: #666;
    }
  </style>
  <div class="buy-grid">
    <div class="buy-shop hyper-sm-last">
      <div class="card card-body sticky">
        <form id="buy-form" action="{{ url('create-order') }}" method="post">
          @csrf
          <div class="form-group">
            <h3>
              {{ $gd_name }}
            </h3>
          </div>
          <div class="form-group">

            <span class="badge badge-outline-primary"> @if($type == \App\Models\Goods::AUTOMATIC_DELIVERY)
              自动发货
              @else
              人工发货
              @endif
            </span>

            <span class="badge badge-outline-primary">库存{{ $in_stock }}</span>

            @if(!empty($wholesale_price_cnf) && is_array($wholesale_price_cnf))
            <span class="badge badge-outline-success"> 批发商品 </span>
            @endif
          </div>
          <div class="form-group">
            <h3>

              <span class="buy-price">{{ __('dujiaoka.money_symbol') }}{{ $actual_price }} </span>

              <small><del>{{ __('dujiaoka.money_symbol') }}{{ $retail_price }} </del></small>
            </h3>
          </div>
          @if(!empty($wholesale_price_cnf) && is_array($wholesale_price_cnf))
          <div class="form-group">
            @foreach($wholesale_price_cnf as $ws)
            <span class="buy-price">
              [ {{ __('dujiaoka.by_amount') }}{{ $ws['number'] }}{{ __('dujiaoka.or_the_above') }}，{{
              __('dujiaoka.each') }}{{ __('dujiaoka.money_symbol') }}{{ $ws['price'] }}]
              <br>
            </span>
            @endforeach
          </div>
          @endif
          @if($buy_limit_num > 0)
          <span class="buy-price">
            {{ __('dujiaoka.purchase_limit') }} ({{ $buy_limit_num }})
          </span>
          @endif

          <div class="form-group">
            <div class="buy-title">电子邮箱</div>
            <input type="hidden" name="gid" value="{{ $id }}">
            <input type="email" name="email" class="form-control" placeholder="接收卡密或通知">
          </div>
          @if(dujiaoka_config_get('is_open_search_pwd') == \App\Models\Goods::STATUS_OPEN)
          <div class="form-group">
            <div class="buy-title">查询密码</div>
            <input type="text" class="form-control" id="search_pwd" name="search_pwd" required placeholder="查询订单时会用到">
          </div>
          @endif


          @if($type == \App\Models\Goods::MANUAL_PROCESSING && is_array($other_ipu))
          @foreach($other_ipu as $ipu)
          <div class="form-group">
            @if($ipu['rule'] !== false)
            <div type="text">请填写 {{ $ipu['desc'] }}！</div>
            @endif
            <input type="text" class="form-control" id="{{ $ipu['field'] }}" name="{{ $ipu['field'] }}" @if($ipu['rule']
              !==false) required @endif placeholder="{{ $ipu['desc'] }}">
          </div>
          @endforeach
          @endif

          @if(isset($open_coupon))
          <div class="form-group">
            <div class="buy-title">{{ __('dujiaoka.coupon_code') }}</div>
            <input type="text" class="form-control" id="coupon" name="coupon_code" placeholder="">
          </div>
          @endif

          @if(dujiaoka_config_get('is_open_img_code') == \App\Models\Goods::STATUS_OPEN)
          <div class="form-group">
            <div class="buy-title">{{ __('dujiaoka.img_verify_code') }}</div>
            <div class="input-group">
              <input type="text" name="img_verify_code" class="form-control" id="verifyCode" required>
              <img style="margin-left: 10px;" src="{{ captcha_src('buy') . time() }}" height="33px"
                alt="{{ __('dujiaoka.img_verify_code') }}" onclick="refreshCaptcha()" id="imageCode">
            </div>
          </div>
          <script>
            function refreshCaptcha() {
              var img = document.getElementById('imageCode');
              img.src = "{{ captcha_src('buy') }}" + Math.random();
            }
          </script>
          @endif



          <div class="form-group">

            <div class="buy-title">购买数量</div>
            <div class="input-group">
              <input data-toggle="touchspin" type="text" name="by_amount" value="1" data-bts-max="999">
            </div>
          </div>
          <div class="form-group">

            <div class="buy-title">支付方式</div>
            <div class="input-group">
              <input type="hidden" id="payway" name="payway" value="{{ $payways[0]['id'] }}">

              <div class="pay-grid">
                @foreach($payways as $index => $way)

                <div class="btn pay-type   @if($index==0) active @endif  " data-type="{{ $way['pay_check'] }}"
                  data-id="{{ $way['id'] }}" data-name="{{ $way['pay_name'] }}">
                </div>
                @endforeach

              </div>
            </div>
          </div>
          <div class="mt-4 text-center">
            <input type="hidden" name="aff" value="">

            <button type="submit" class="btn btn-danger" id="submit">
              提交订单 <i class="mdi dripicons-chevron-right"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="card card-body buy-product">
      {!! $description !!}
    </div>
  </div>
  <div class="modal fade" id="buy_prompt" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">

          <h5 class="modal-title" id="myCenterModalLabel">提示</h5>
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        </div>
        <div class="modal-body">
          {!! $buy_prompt !!}
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="img-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
          <img id="img-zoom" class="img-fluid" style="border-radius: 5px;">
    </div>
  </div>
</div>



@stop
@section('js')

<script>
  @if (!empty($buy_prompt))
    $('#buy_prompt').modal('show');
  @endif
</script>
<script>
  $(document).on("click", ".buy-product img", function () {
    var src = $(this).attr("src");
    $("#img-zoom").attr("src", src);
    
    $("#img-modal").modal('show');

  });


</script>
@stop