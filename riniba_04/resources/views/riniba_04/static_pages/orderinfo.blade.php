@extends('riniba_04.layouts.default')

@section('content')

<div class="container">
  <div class="row">
    <div class="col-12">
      <div class="page-title-box">

        <!-- <h4 class="page-title">订单详情</h4> -->
      </div>
    </div>
  </div>
  <div class="orderinfo-grid">
    @foreach($orders as $index => $order)

    <div class="row">
      <div class="col-md-12">
        <h3>

          <span class="badge badge-outline-primary">
            订单号：{{ $order['order_sn'] }}
          </span>
        </h3>
      </div>
    </div>
    <div class="card card-body">
      <div class="orderinfo-card-grid">
        <div class="orderinfo-info">

          <div class="mb-1"><label>订单名称：</label><span>{{ $order['title'] }}</span>
          </div>

          <div class="mb-1"><label>下单数量：</label><span>1</span></div>

          <div class="mb-1"><label>下单时间：</label><span>{{ $order['created_at'] }}</span></div>

          <div class="mb-1"><label>邮箱：</label><span>{{ $order['email'] }}</span></div>
          <div class="mb-1">

            <label>订单类型：</label>
            <span>

              @if($order['type'] == \App\Models\Order::AUTOMATIC_DELIVERY)
              自动发货
              @else
              人工发货
              @endif

            </span>
          </div>
          <div class="mb-1">

            <label>订单总价：</label>
            <span>{{ $order['actual_price'] }}</span>
          </div>
          <div class="mb-1">

            <label>订单状态：</label>
            <span>

              @switch($order['status'])
              @case(\App\Models\Order::STATUS_EXPIRED)
              已过期
              @break
              @case(\App\Models\Order::STATUS_WAIT_PAY)
              待支付
              @break
              @case(\App\Models\Order::STATUS_PENDING)
              待处理
              @break
              @case(\App\Models\Order::STATUS_PROCESSING)
              已处理
              @break
              @case(\App\Models\Order::STATUS_COMPLETED)
              已完成
              @break
              @case(\App\Models\Order::STATUS_FAILURE)
              已失败
              @break
              @case(\App\Models\Order::STATUS_ABNORMAL)
              状态异常
              @break
              @default
              未知状态
              @endswitch

              @if($order['status'] == \App\Models\Order::STATUS_WAIT_PAY)

              <a class="btn btn-primary" href="{{ url('/bill/'.$order['order_sn']) }}">重新支付</a>
              @endif

            </span>
          </div>
          <div class="mb-1">

            <label>支付方式：</label>
            <span>{{ $order['pay']['pay_name'] ?? '' }}</span>
          </div>
        </div>
        <div class="orderinfo-kami">
          <h5 class="card-title">
            卡密
          </h5>
          @php
          $textareaID = "kami-textarea-{$index}";
          $btnID = "kami-btn-{$index}";
          @endphp
          <textarea class="form-control textarea-kami" id="{{ $textareaID }}" rows="5">{{ $order['info'] }}</textarea>
          <button type="button" class="btn btn-outline-primary kami-btn" data-copy-text-from="#{{ $textareaID }}">
            再次复制卡密信息
          </button>
          <button type="button" class="btn btn-outline-primary kami-btn" data-copy-text-from="#{{ $textareaID }}">
            复制卡密信息
          </button>

        </div>
      </div>
    </div>
    @endforeach

  </div>
</div>
@stop

@section('js')
<script>
  document.querySelectorAll('.kami-btn').forEach(function (btn) {
    let targetSelector = btn.getAttribute('data-copy-text-from');

    // 监听按钮点击事件
    btn.addEventListener('click', function () {
      // 获取需要复制的文本
      let textToCopy = document.querySelector(targetSelector).textContent;

      // 使用 Clipboard API 复制文本
      navigator.clipboard.writeText(textToCopy)
        .then(function () {
          $.NotificationApp.send("提示", "{{ __('dujiaoka.prompt.copy_text_success') }}", "top-center", "rgba(0,0,0,0.2)", "info");
        })
        .catch(function (error) {
          $.NotificationApp.send("提示", "{{ __('dujiaoka.prompt.copy_text_failed') }}", "top-center", "rgba(0,0,0,0.2)", "error");
          console.error('复制失败:', error);
        });
    });
  });
</script>


@stop