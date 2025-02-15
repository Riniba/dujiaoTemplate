@extends('riniba_02.layouts.default') @section('content')

<section
  class="cart-thank section-bg padding-y-60 position-relative z-index-1 overflow-hidden"
>
  <div class="container container-two">
    <div class="row justify-content-center">
      <div class="col-lg-6 col-md-8 col-sm-10">
        <div class="cart-thank__content text-center">
          <h2 class="cart-thank__title mb-48">确认订单</h2>
        </div>
      </div>
    </div>

    <div class="cart-thank__box">
      <div class="row gy-4">
        <div class="col-lg-6">
          <div class="thank-card">
            <h5 class="thank-card__title mb-3">{{ $title }}</h5>
            <ul class="list-text">
              <li class="list-text__item flx-align flex-nowrap">
                <span
                  class="text text-heading fw-500 font-heading fw-700 font-18"
                  >订单编号</span
                >
                <span class="text text-heading fw-500">{{ $order_sn }}</span>
              </li>
              <li class="list-text__item flx-align flex-nowrap">
                <span class="text text-heading fw-500">商品单价:</span>
                <span class="text">￥ {{ $goods_price }}</span>
              </li>
              <li class="list-text__item flx-align flex-nowrap">
                <span class="text text-heading fw-500">购买数量:</span>
                <span class="text">{{ $buy_amount }}</span>
              </li>
              <li class="list-text__item flx-align flex-nowrap">
                <span class="text text-heading fw-500">电子邮箱</span>
                <span class="text">{{ $email }}</span>
              </li>
              <li class="list-text__item flx-align flex-nowrap">
                <span class="text text-heading fw-500">支付方式</span>
                <span class="text">{{ $pay["pay_name"] }}</span>
              </li>

            </ul>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="thank-card">
            <h5 class="thank-card__title mb-3">其他信息</h5>
            <ul class="list-text">
              @if(!empty($coupon))
              <li class="list-text__item flx-align flex-nowrap">
                <span class="text text-heading fw-500 font-heading fw-700 font-18"优惠码:</span>
                <span class="text">{{ $coupon["coupon"] }}</span>
              </li>
              <li class="list-text__item flx-align flex-nowrap">
                <span class="text text-heading fw-500">优惠金额</span>
                <span class="text">￥ {{ $coupon_discount_price }}</span>
              </li>
              @endif
              @if(!empty($info))

              <li class="list-text__item flx-align flex-nowrap">
                <span
                  class="text text-heading fw-500 font-heading fw-700 font-18"
                  >订单资料</span
                >
                <span class="text text-heading fw-500">{{ $info }}</span>
              </li>

              @endif


              <li class="list-text__item flx-align flex-nowrap">
                <span
                  class="text text-heading fw-500 font-heading fw-700 font-18"
                  >订单总额</span
                >
                <span class="text text-heading fw-500">￥ {{ $actual_price }}</span>
              </li>
            </ul>
            <div class="thank-card__thumb mt-64 mb-3">
              <img src="/assets/riniba_02/images/thumbs/rating-img.png" alt="" />
            </div>
            <div class="flx-between gap-2">
              <p class="text">请核对后进行支付</p>
              <a href="{{ url('pay-gateway', ['handle' => urlencode($pay['pay_handleroute']),'payway' => $pay['pay_check'], 'orderSN' => $order_sn]) }}" class="btn btn-main flx-align gap-2 pill">
                立即支付
                <span class="icon line-height-1 font-20"
                  ><i class="las la-arrow-right"></i
                ></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

@stop @section('js') @stop
