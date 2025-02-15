@extends('riniba_04.layouts.default')
@section('content')

<div class="container">
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <div class="page-title-box">

        <h4 class="page-title">确认订单</h4>
      </div>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <div class="card card-body">
        <div class="mx-auto">

          <div class="mb-1"><label>订单号：</label><span>{{ $order_sn }}</span></div>
          <div class="mb-1"><label>订单名称：</label><span>{{ $title }}</span></div>
          <div class="mb-1"><label>商品单价：</label><span>{{ __('dujiaoka.money_symbol') }} {{ $goods_price }}</span></div>
          <div class="mb-1"><label>购买数量：</label><span>x {{ $buy_amount }}</span></div>
          <div class="mb-1"><label>邮箱：</label><span>{{ $email }}</span></div>
          @if($type == \App\Models\Order::AUTOMATIC_DELIVERY)
          <div class="mb-1"><label>发货类型：</label><span>{{ __('goods.fields.automatic_delivery') }}</span></div>
          @else
          <div class="mb-1"><label>发货类型：</label><span>>{{ __('goods.fields.manual_processing') }}</span></div>
          @endif
          @if(!empty($coupon))
          <div class="mb-1"><label>{{ __('order.fields.coupon_id') }}:</label><span>> {{ $coupon['coupon'] }}</span>
          </div>
          <div class="mb-1"><label> {{ __('order.fields.coupon_discount_price') }}:</label><span>>{{
              __('dujiaoka.money_symbol') }}{{ $coupon_discount_price }}</span></div>
          @endif
          <div class="mb-1"><label>支付方式：</label><span>{{ $pay['pay_name'] ?? '--' }}</span> </div>
          <div class="mb-1"><label>商品总价：</label><span>{{ __('dujiaoka.money_symbol') }}{{ $actual_price }}</span></div>


          <div class="text-center">

            <a href="{{ url('pay-gateway', ['handle' => urlencode($pay['pay_handleroute']), 'payway' => $pay['pay_check'], 'orderSN' => $order_sn]) }}"
              class="btn btn-danger">立即支付</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
@stop
@section('js')
@stop