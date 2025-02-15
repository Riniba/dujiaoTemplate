@extends('riniba_02.layouts.default') @section('content')

<section class="cart-thank section-bg position-relative z-index-1">
    <div class="container container-two">
        <div class="cart-thank__box">
            <div class="row gy-4">
                <div class="cart-payment__box position-relative z-index-1 overflow-hidden">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 col-sm-10">
                            <h5 class="cart-payment__title mb-4">似乎遇到了一点问题</h5>
                            <h5 class="cart-payment__title mb-4">{{ $content }}</h5>
                            @if(!$url)
                            <a href="javascript:history.back(-1);" class="btn btn-main btn-lg w-100 pill">{{
                                __("dujiaoka.callback")
                                }}</a> 
                            @else
                            <a href="{{ $url }}" class="btn btn-main btn-lg w-100 pill">{{
                                __("dujiaoka.callback")
                                }}</a>
                            @endif
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



@stop