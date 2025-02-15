@extends('riniba_01.layouts.default')
@section('content')

<div class="page-content">
  <section class="all-product p-96">
    <div class="container">
      <div class="cart p-96 pb-0">
        <h2 class="h-47 bold color-white mb-48">订单详情</h2>
        <div class="row">
          <div class="col-xl-12">
            <div class="row">
              <div class="col-xl-12 col-lg-6">
                @foreach($orders as $order)


                <div class="payment mb-32">
                  <h4 class="h-36 bold light-black mb-32">订单信息</h4>
                  <div class="radio-button mb-16">
                    <input type="radio" name="title" id="title" />
                    <label for="title">订单编号:{{ $order['order_sn'] }}</label>
                  </div>
                  <div class="radio-button mb-16">
                    <input type="radio" name="title" id="title" />
                    <label for="title">订单名称:{{ $order['title'] }}</label>
                  </div>
                  <div class="radio-button mb-16">
                    <input type="radio" name="buy_amount" id="buy_amount" />
                    <label for="buy_amount">下单数量:{{ $order['buy_amount'] }}</label>
                  </div>
                  <div class="radio-button mb-16">
                    <input type="radio" name="created_at" id="created_at" />
                    <label for="created_at">下单时间:{{ $order['created_at'] }}</label>
                  </div>
                  <div class="radio-button mb-16">
                    <input type="radio" name="email" id="email" />
                    <label for="email">付款邮箱:{{ $order['email'] }}</label>
                  </div>
                  <div class="radio-button mb-16">
                    <input type="radio" name="type" id="type" />
                    @if($order['type'] == \App\Models\Order::AUTOMATIC_DELIVERY)
                    <label for="type">订单类型:自动发货</label>
                    @else
                    <label for="type">订单类型:人工发货</label>          
                    @endif
                  </div>

                  <div class="radio-button mb-16">
                    <input type="radio" name="actual_price" id="actual_price" />
                    <label for="actual_price">订单总价:{{ $order['actual_price'] }}</label>
                  </div>
                  <div class="radio-button mb-16">
                    <input type="radio" name="actual_price" id="actual_price" />
                    @switch($order['status'])
                            @case(\App\Models\Order::STATUS_EXPIRED)
                                <label for="actual_price">订单状态:已过期</label>
                                @break
                            @case(\App\Models\Order::STATUS_WAIT_PAY)
                                <label for="actual_price">订单状态:待支付</label>
                            @break
                            @case(\App\Models\Order::STATUS_PENDING)
                                <label for="actual_price">订单状态:待处理</label>
                            @break
                            @case(\App\Models\Order::STATUS_PROCESSING)
                                <label for="actual_price">订单状态:已处理</label>
                            @break
                            @case(\App\Models\Order::STATUS_COMPLETED)
                                <label for="actual_price">订单状态:已完成</label>
                            @break
                            @case(\App\Models\Order::STATUS_FAILURE)
                                <label for="actual_price">订单状态:已失败</label>
                            @break
                            @case(\App\Models\Order::STATUS_FAILURE)
                                <label for="actual_price">订单状态:状态异常</label>
                            @break
                        @endswitch
                  </div>
                  <div class="col-12 mb-24">
                    <textarea class="form-control">{{$order['info']}}</textarea>
                </div>
                </div>
                @endforeach

                @if(!count($orders))
                <div class="total">
                    <ul class="unstyled mb-32">
                      <li class="m-0">
                        <h4 class="h-36 bold light-black">没有找到订单信息</h4>
                    </li>
                    </ul>
                    <a href="javascript:history.back(-1);" class="cus-btn primary w-100">返回</a>

                  </div>
                  @endif
                

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>





@stop
@section('js')

@stop
