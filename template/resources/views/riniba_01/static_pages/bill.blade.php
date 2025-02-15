@extends('riniba_01.layouts.default') @section('content')

<div class="page-content">
  <section class="all-product p-96">
    <div class="container">
      <div class="cart p-96 pb-0">
        <h2 class="h-47 bold color-white mb-48">确认订单</h2>
        <div class="row">
          <div class="col-xl-12">
            <div class="row">
              <div class="col-xl-12 col-lg-6">
                <div class="payment mb-32">
                  <h4 class="h-36 bold light-black mb-32">订单信息</h4>
                  <div class="radio-button mb-16">
                    <input type="radio" name="order_sn" id="order_sn" />
                    <label for="order_sn">订单编号:{{ $order_sn }}</label>
                  </div>
                  <div class="radio-button mb-16">
                    <input type="radio" name="title" id="title" />
                    <label for="title">商品名称:{{ $title }}</label>
                  </div>
                  <div class="radio-button mb-16">
                    <input type="radio" name="goods_price" id="goods_price" />
                    <label for="goods_price">商品单价:{{ $goods_price }}</label>
                  </div>
                  <div class="radio-button mb-16">
                    <input type="radio" name="buy_amount" id="buy_amount" />
                    <label for="buy_amount">购买数量:{{ $buy_amount }}</label>
                  </div>
                  @if(!empty($coupon))
                  <div class="radio-button mb-16">
                    <input type="radio" name="coupon" id="coupon" />
                    <label for="coupon">优惠码:{{ $coupon["coupon"] }}</label>
                  </div>
                  <div class="radio-button mb-16">
                    <input type="radio" name="coupon_discount_price" id="coupon_discount_price" />
                    <label for="coupon_discount_price">优惠金额:{{ $coupon_discount_price }}</label>
                  </div>
                  @endif

                  <div class="radio-button mb-16">
                    <input type="radio" name="actual_price" id="actual_price" />
                    <label for="actual_price">商品总价:{{ $actual_price }}</label>
                  </div>
                  <div class="radio-button mb-16">
                    <input type="radio" name="email" id="email" />
                    <label for="email">电子邮箱:{{ $email }}</label>
                  </div>
                  @if(!empty($info))

                  <div class="radio-button mb-16">
                    <input type="radio" name="info" id="info" />
                    <label for="info">订单资料:{{ $info }}</label>
                  </div>

                  @endif
                  <div class="radio-button mb-16">
                    <input type="radio" name="pay_name" id="pay_name" />
                    <label for="pay_name">支付方式:{{ $pay["pay_name"] }}</label>
                  </div>

                </div>
                <div class="total">
                  <ul class="unstyled mb-32">
                    <li class="m-0">
                      <h4 class="h-36 bold light-black">订单总额</h4>
                      <h4 class="h-36 bold light-black">￥ {{ $actual_price }}</h4>
                    </li>
                  </ul>
                  <a href="{{ url('pay-gateway', ['handle' => urlencode($pay['pay_handleroute']),'payway' => $pay['pay_check'], 'orderSN' => $order_sn]) }}" class="cus-btn primary w-100">立即支付</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

@stop @section('js') @stop