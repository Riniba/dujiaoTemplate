@extends('riniba_02.layouts.default')
@section('content')
    <style>
        .main-container {
        padding: 5rem 0;
        }
        .payment-container {
            max-width: 500px;
            margin: 2rem auto;
        }
        .payment-card {
            border: none;
            border-radius: 12px;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
            overflow: hidden;
            transition: transform 0.3s ease;
        }
        .payment-card:hover {
            transform: translateY(-5px);
        }
        .payment-header {
            background: #b1d6ff;
            color: white;
            padding: 1.5rem;
            text-align: center;
        }
        .payment-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }
        .payment-body {
            padding: 2rem;
            text-align: center;
            background: white;
        }
        .qrcode-container {
            margin: 1.5rem auto;
            padding: 15px;
            background: #f8f9fa;
            border-radius: 10px;
            display: inline-block;
        }
        .qrcode-container img {
            width: 220px;
            height: 220px;
        }
        .amount-display {
            margin: 1.5rem 0;
        }
        .amount-label {
            color: #6c757d;
            font-size: 1rem;
        }
        .amount-value {
            color: #d32f2f;
            font-size: 1.5rem;
            font-weight: 600;
        }
        .time-remaining {
            color: #6c757d;
            font-size: 0.9rem;
            margin-top: 1rem;
        }
        .app-pay-btn {
            display: block;
            background: #3a0ca3;
            color: white;
            padding: 12px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 500;
            transition: background 0.3s;
            margin-top: 1.5rem;
        }
        .app-pay-btn:hover {
            background: #2a0a8a;
            color: white;
        }
        .payment-footer {
            padding: 0 2rem 2rem;
            text-align: center;
        }
    </style>

    <!-- main start -->
    <section class="main-container">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-12 payment-container">
                    <div class="payment-card">
                        <div class="payment-header">
                            <h3 class="payment-title">{{ __('dujiaoka.scan_qrcode_to_pay') }}</h3>
                        </div>
                        
                        <div class="payment-body">
                            <div class="qrcode-container">
                                <img src="data:image/png;base64,{!! base64_encode(QrCode::format('png')->size(220)->generate($qr_code)) !!}" 
                                     alt="{{ __('dujiaoka.scan_qrcode_to_pay') }}">
                            </div>
                            
                            <div class="amount-display">
                                <span class="amount-label">{{ __('dujiaoka.amount_to_be_paid') }}:</span>
                                <span class="amount-value">{{ $actual_price }}</span>
                            </div>
                            
                            <div class="time-remaining">
                                <i class="far fa-clock"></i>
                                {{ __('dujiaoka.pay_order_expiration_date_prompt', ['min' => dujiaoka_config_get('order_expire_time', 5)]) }}
                            </div>
                            
                            @if(Agent::isMobile() && isset($jump_payuri))
                                <div class="payment-footer">
                                    <a href="{{ $jump_payuri }}" class="app-pay-btn">
                                        <i class="fas fa-external-link-alt mr-2"></i>
                                        {{ __('dujiaoka.open_the_app_to_pay') }}
                                    </a>
                                </div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- main end -->
@stop

@section('js')
    <script>
        var getting = {
            url:'{{ url('check-order-status', ['orderSN' => $orderid]) }}',
            dataType:'json',
            success:function(res) {
                if (res.code == 400001) {
                    window.clearTimeout(timer);
                    Swal.fire({
                        icon: 'error',
                        title: '{{ __("dujiaoka.prompt.order_expired") }}',
                        text: '{{ __("dujiaoka.prompt.order_is_expired") }}',
                        confirmButtonText: '{{ __("dujiaoka.ok") }}'
                    }).then(() => {
                        window.location.href = '/';
                    });
                }
                if (res.code == 200) {
                    window.clearTimeout(timer);
                    Swal.fire({
                        icon: 'success',
                        title: '{{ __("dujiaoka.prompt.payment_successful") }}',
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        window.location.href = '{{ url('detail-order-sn', ['orderSN' => $orderid]) }}';
                    });
                }
            }
        };
        var timer = window.setInterval(function(){$.ajax(getting)},5000);
    </script>
@stop
