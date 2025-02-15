<style>
.nav-pills .nav-link {
  font-size: 1.975rem !important; 
  font-weight: 900 !important;
  box-shadow: 0px 4px 15px rgba(255, 105, 135, 0.6) !important;
  transition: all 0.3s ease-in-out !important;
  text-transform: uppercase !important;
}

@media screen and (max-width: 991px) {
  .nav-pills .nav-link {
    font-size: 1.275rem !important; 
  }
}
    
</style>
@extends('riniba_02.layouts.default')
@section('content')
@include('riniba_02.layouts._nav_notice')





<section class="arrival-product padding-y-60 section-bg position-relative z-index-1">

    <div class="container container-two">
        <div class="breadcrumb-two-content border-bottom border-color">
            <ul class="nav common-tab justify-content-center nav-pills mb-48" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all"
                        type="button" role="tab" aria-controls="pills-all" aria-selected="true">{{ __('dujiaoka.group_all') }}</button>
                </li>
    
                @foreach($data as $index => $group)
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-{{ $group['id'] }}-tab" data-bs-toggle="pill" data-bs-target="#pills-{{ $group['id'] }}" 
                        type="button" role="tab" aria-controls="pills-{{ $group['id'] }}" aria-selected="false">{{ $group['gp_name'] }}</button>
                </li>
                @endforeach
            </ul>
        </div>
    
        <div class="tab-content" id="pills-tabContent">
            <!-- All groups combined -->
            <div class="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabindex="0">
                @foreach($data as $group)
                @if(count($group['goods']) > 0)
                <div class="section-heading">
                    <h3 class="section-heading__title">{{ $group['gp_name'] }}</h3>
                </div>
                <div class="row gy-4">
                    @foreach($group['goods'] as $goods)
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="popular-item-card">
                            <div class="popular-item-card__thumb">
                                @if($goods['in_stock'] > 0)
                                <a href="{{ url("/buy/{$goods['id']}") }}" class="link w-100">
                                    <img src="{{ picture_ulr($goods['picture']) }}" alt="">
                                </a>
                                @else
                                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="link w-100">
                                    <img src="{{ picture_ulr($goods['picture']) }}" alt="">
                                </a>
                                @endif
                                <div class="product-card__bottom flx-between gap-2">
                                    <div>
                                        @if($goods['type'] == \App\Models\Goods::AUTOMATIC_DELIVERY)
                                        <span class="product-card__sales font-14 mb-0">自动发货</span>
                                        @else
                                        <span class="product-card__sales font-14 mb-0">人工发货</span>
                                        @endif
                                        @if($goods['wholesale_price_cnf'])
                                        <span class="product-card__sales font-14 mb-0">折扣</span>
                                        @endif
                                    </div>
                                    @if($goods['in_stock'] > 0)
                                    <span class="product-card__author">库存充足</span>
                                    @else
                                    <span class="product-card__author">库存不足</span>
                                    @endif
                                </div>
                            </div>
                            <h6 class="popular-item-card__title mb-0">
                                @if($goods['in_stock'] > 0)
                                <a href="{{ url("/buy/{$goods['id']}") }}"> {{ $goods['gd_name'] }}</a>
                                @else
                                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"> {{ $goods['gd_name'] }}</a>
                                @endif
                            </h6>
                            <div class="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                                <h6 class="popular-item-card__title mb-0">￥<b>{{ $goods['actual_price'] }}</b></h6>
                                @if($goods['in_stock'] > 0)
                                <a href="{{ url("/buy/{$goods['id']}") }}" class="btn-link line-height-1 flex-shrink-0">
                                    <img src="/assets/riniba_02/images/icons/buy.svg" alt="">
                                </a>
                                @else
                                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn-link line-height-1 flex-shrink-0">
                                    <img src="/assets/riniba_02/images/icons/nobuy.svg" alt="">
                                </a>
                                @endif
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
                @endif
                @endforeach
            </div>
    
            <!-- Specific group tabs -->
            @foreach($data as $index => $group)
            <div class="tab-pane fade" id="pills-{{ $group['id'] }}" role="tabpanel" aria-labelledby="pills-{{ $group['id'] }}-tab" tabindex="0">
                @if(count($group['goods']) > 0)
                <div class="section-heading">
                    <h3 class="section-heading__title">{{ $group['gp_name'] }}</h3>
                </div>
                <div class="row gy-4">
                    @foreach($group['goods'] as $goods)
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="popular-item-card">
                            <div class="popular-item-card__thumb">
                                @if($goods['in_stock'] > 0)
                                <a href="{{ url("/buy/{$goods['id']}") }}" class="link w-100">
                                    <img src="{{ picture_ulr($goods['picture']) }}" alt="">
                                </a>
                                @else
                                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="link w-100">
                                    <img src="{{ picture_ulr($goods['picture']) }}" alt="">
                                </a>
                                @endif
                                <div class="product-card__bottom flx-between gap-2">
                                    <div>
                                        @if($goods['type'] == \App\Models\Goods::AUTOMATIC_DELIVERY)
                                        <span class="product-card__sales font-14 mb-0">自动发货</span>
                                        @else
                                        <span class="product-card__sales font-14 mb-0">人工发货</span>
                                        @endif
                                        @if($goods['wholesale_price_cnf'])
                                        <span class="product-card__sales font-14 mb-0">折扣</span>
                                        @endif
                                    </div>
                                    @if($goods['in_stock'] > 0)
                                    <span class="product-card__author">库存充足</span>
                                    @else
                                    <span class="product-card__author">库存不足</span>
                                    @endif
                                </div>
                            </div>
                            <h6 class="popular-item-card__title mb-0">
                                @if($goods['in_stock'] > 0)
                                <a href="{{ url("/buy/{$goods['id']}") }}"> {{ $goods['gd_name'] }}</a>
                                @else
                                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"> {{ $goods['gd_name'] }}</a>
                                @endif
                            </h6>
                            <div class="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                                <h6 class="popular-item-card__title mb-0">￥<b>{{ $goods['actual_price'] }}</b></h6>
                                @if($goods['in_stock'] > 0)
                                <a href="{{ url("/buy/{$goods['id']}") }}" class="btn-link line-height-1 flex-shrink-0">
                                    <img src="/assets/riniba_02/images/icons/buy.svg" alt="">
                                </a>
                                @else
                                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn-link line-height-1 flex-shrink-0">
                                    <img src="/assets/riniba_02/images/icons/nobuy.svg" alt="">
                                </a>
                                @endif
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
                @endif
            </div>
            @endforeach
        </div>
    </div>
    

</section>











<!-- 模态窗口 -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content" style="color: black;">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">提示</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                商品缺货
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
            </div>
        </div>
    </div>
</div>

@stop

@section('js')
@stop