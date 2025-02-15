@extends('riniba_02.layouts.default') @section('content')

<section class="cart-thank section-bg position-relative z-index-1 ">
  <div class="container container-two">
      <div class="cart-thank__box">
        <div class="row gy-4">
          @foreach($orders as $order)

          <div class="col-lg-6">
            <div class="thank-card">
              <h5 class="thank-card__title mb-3">
                订单订单名称:{{ $order["title"] }}
              </h5>
              <ul class="list-text">
                <li class="list-text__item flx-align flex-nowrap">
                  <span class="text text-heading fw-500 font-heading fw-700 font-18">订单编号</span>
                  <span class="text text-heading fw-500">{{
                    $order["order_sn"]
                    }}</span>
                </li>
                <li class="list-text__item flx-align flex-nowrap">
                  <span class="text text-heading fw-500 font-heading fw-700 font-18">下单数量</span>
                  <span class="text text-heading fw-500">{{
                    $order["buy_amount"]
                    }}</span>
                </li>
                <li class="list-text__item flx-align flex-nowrap">
                  <span class="text text-heading fw-500 font-heading fw-700 font-18">下单时间</span>
                  <span class="text text-heading fw-500">{{
                    $order["created_at"]
                    }}</span>
                </li>
                <li class="list-text__item flx-align flex-nowrap">
                  <span class="text text-heading fw-500 font-heading fw-700 font-18">付款邮箱</span>
                  <span class="text text-heading fw-500">{{
                    $order["email"]
                    }}</span>
                </li>
                <li class="list-text__item flx-align flex-nowrap">
                  <span class="text text-heading fw-500 font-heading fw-700 font-18">订单类型</span>
                  @if($order['type'] == \App\Models\Order::AUTOMATIC_DELIVERY)
                  <span class="text text-heading fw-500">自动发货</span>
                  @else
                  <span class="text text-heading fw-500">人工发货</span>
                  @endif
                </li>
                <li class="list-text__item flx-align flex-nowrap">
                  <span class="text text-heading fw-500 font-heading fw-700 font-18">订单总价</span>
                  <span class="text text-heading fw-500">{{
                    $order["actual_price"]
                    }}</span>
                </li>
                <li class="list-text__item flx-align flex-nowrap">
                  <span class="text text-heading fw-500 font-heading fw-700 font-18">订单状态</span>
                  @switch($order['status'])
                  @case(\App\Models\Order::STATUS_EXPIRED)
                  <span class="text text-heading fw-500">已过期</span>
                  @break @case(\App\Models\Order::STATUS_WAIT_PAY)
                  <span class="text text-heading fw-500">待支付</span>
                  @break @case(\App\Models\Order::STATUS_PENDING)
                  <span class="text text-heading fw-500">待处理</span>
                  @break @case(\App\Models\Order::STATUS_PROCESSING)
                  <span class="text text-heading fw-500">已处理</span>
                  @break @case(\App\Models\Order::STATUS_COMPLETED)
                  <span class="text text-heading fw-500">已完成</span>
                  @break @case(\App\Models\Order::STATUS_FAILURE)
                  <span class="text text-heading fw-500">已失败</span>
                  @break @case(\App\Models\Order::STATUS_FAILURE)
                  <span class="text text-heading fw-500">状态异常</span>
                  @break @endswitch
                </li>
                <li class="list-text__item flx-align flex-nowrap">
                  <span class="text text-heading fw-500 font-heading fw-700 font-18">卡密信息</span>
                  <span class="text text-heading fw-500">{{
                    $order["info"]
                    }}</span>
                </li>
              </ul>
            </div>
          </div>
          @endforeach @if(!count($orders))

          <div class="cart-payment__box position-relative z-index-1 overflow-hidden">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-sm-10">
                    <h5 class="cart-payment__title mb-4">没有找到订单信息</h5>
                    <a href="javascript:history.back(-1);" class="btn btn-main btn-lg w-100 pill">
                      返回
                    </a>
        

                </div>
            </div>
        </div>



          @endif
        </div>
      </div>
  </div>
</section>
@stop @section('js') @stop