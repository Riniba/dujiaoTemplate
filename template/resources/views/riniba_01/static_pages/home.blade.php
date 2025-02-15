@extends('riniba_01.layouts.default')
@section('content')
@include('riniba_01.layouts._nav_notice')


<div class="page-content">

    <section class="all-product p-96">
        <div class="container">

            <div class="card mb-0">
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs gap-75 mb-32" data-bs-tabs="tabs">
                        <li class="nav-item">
                            <a href="#group-all" class="active" aria-current="true" data-bs-toggle="tab">{{
                                __('dujiaoka.group_all') }}</a>
                        </li>

                        @foreach($data as $group)
                        <li class="nav-item">
                            <a href="#group-{{ $group['id'] }}" aria-current="false" data-bs-toggle="tab">{{
                                $group['gp_name'] }}</a>
                        </li>

                        @endforeach


                    </ul>
                </div>
            </div>


            <div class="row">
                <div class="col-xl-12">
                    <div class="card mb-32">


                        <form class="card-body tab-content">

                            <div class="tab-pane active"  id="group-all">    
                                @foreach($data as $group)
                                @if(count($group['goods']) > 0)
                                <div class="badge-item">
                                    <span><i class="fal fa-shopping-cart"></i>{{ $group['gp_name'] }}</a></span>
                                </div>                 
                                <div class=" product type-2">
                                @foreach($group['goods'] as $goods)
                                <div class="product-card sec">
                                    <div class="img-block">
                                        @if($goods['in_stock'] > 0)
                                        <a href="{{ url("/buy/{$goods['id']}") }}" class="text-body">
                                            <img src="{{ picture_ulr($goods['picture']) }}" class="goodimage" />
                                        </a>
                                        @else
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                            class="text-body" onclick="sell_out_tip()">
                                            <img src="{{ picture_ulr($goods['picture']) }}" class="goodimage" /> </a>
                                        </a>

                                        @endif
                                    </div>
                                    <div class="content">
                                        <div class="name-price mb-38">
                                            <div class="product-name">
                                                @if($goods['in_stock'] > 0)
                                                <a href="{{ url("/buy/{$goods['id']}") }}" class="text-body">
                                                    <h5>{{ $goods['gd_name'] }}</h5>
                                                </a>
                                                @else
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                    class="text-body" onclick="sell_out_tip()">
                                                    <h5>{{ $goods['gd_name'] }}</h5>
                                                </a>
                                                @endif

                                                @if($goods['type'] == \App\Models\Goods::AUTOMATIC_DELIVERY)
                                                <span class="badge text-bg-primary">自动发货</span>
                                                @else
                                                <span class="badge text-bg-secondary">人工发货</span>
                                                @endif

                                                @if($goods['in_stock'] > 0)
                                                <span class="badge text-bg-primary">库存充足</span>
                                                @else
                                                <span class="badge text-bg-secondary">库存不足</span>
                                                @endif

                                                @if($goods['wholesale_price_cnf'])
                                                <span class="badge text-bg-warning">折扣</span>
                                                @endif



                                            </div>
                                        </div>
                                        <div class="name-price mb-38">
                                            <div class="product-name">
                                                @if($goods['in_stock'] > 0)
                                                <h5 class="bold">￥<b>{{ $goods['actual_price'] }}</b></h5>

                                                @else
                                                <h5 class="bold">￥<b>{{ $goods['actual_price'] }}</b></h5>
                                                @endif

                                            </div>

                                        </div>
                                        <div class="btn-block">

                                            @if($goods['in_stock'] > 0)
                                            <a href="{{ url("/buy/{$goods['id']}") }}" class="btn btn-success"
                                                tabindex="-1" role="button" aria-disabled="true">购买</a>

                                            @else
                                            {{-- 缺货 --}}
                                            <a href="javascript:void(0);" class="btn btn-outline-secondary disabled"
                                                tabindex="-1" role="button" aria-disabled="true">缺货</a>


                                            @endif
                                        </div>
                                    </div>
                                </div>
                                @endforeach
                                </div>
                                @endif
                                @endforeach                                            
                            </div>
                            @foreach($data as $index => $group)
                            <div class="tab-pane fade" id="group-{{ $group['id'] }}">
                                @if(count($group['goods']) > 0)
                                <div class="badge-item">
                                    <span><i class="fal fa-shopping-cart"></i>{{ $group['gp_name'] }}</span>
                                </div>                 
                                <div class="product type-2">
                                    @foreach($group['goods'] as $goods)
                                    <div class="product-card sec">
                                        <div class="img-block">
                                            @if($goods['in_stock'] > 0)
                                            <a href="{{ url("/buy/{$goods['id']}") }}" class="text-body">
                                                <img src="{{ picture_ulr($goods['picture']) }}" class="goodimage" />
                                            </a>
                                            @else
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="text-body" onclick="sell_out_tip()">
                                                <img src="{{ picture_ulr($goods['picture']) }}" class="goodimage" /> 
                                            </a>
                                            @endif
                                        </div>
                                        <div class="content">
                                            <div class="name-price mb-38">
                                                <div class="product-name">
                                                    @if($goods['in_stock'] > 0)
                                                    <a href="{{ url("/buy/{$goods['id']}") }}" class="text-body">
                                                        <h5>{{ $goods['gd_name'] }}</h5>
                                                    </a>
                                                    @else
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="text-body" onclick="sell_out_tip()">
                                                        <h5>{{ $goods['gd_name'] }}</h5>
                                                    </a>
                                                    @endif
                        
                                                    @if($goods['type'] == \App\Models\Goods::AUTOMATIC_DELIVERY)
                                                    <span class="badge text-bg-primary">自动发货</span>
                                                    @else
                                                    <span class="badge text-bg-secondary">人工发货</span>
                                                    @endif
                        
                                                    @if($goods['in_stock'] > 0)
                                                    <span class="badge text-bg-primary">库存充足</span>
                                                    @else
                                                    <span class="badge text-bg-secondary">库存不足</span>
                                                    @endif
                        
                                                    @if($goods['wholesale_price_cnf'])
                                                    <span class="badge text-bg-warning">折扣</span>
                                                    @endif
                                                </div>
                                            </div>
                                            <div class="name-price mb-38">
                                                <div class="product-name">
                                                    <h5 class="bold">￥<b>{{ $goods['actual_price'] }}</b></h5>
                                                </div>
                                            </div>
                                            <div class="btn-block">
                                                @if($goods['in_stock'] > 0)
                                                <a href="{{ url("/buy/{$goods['id']}") }}" class="btn btn-success" tabindex="-1" role="button" aria-disabled="true">购买</a>
                                                @else
                                                <a href="javascript:void(0);" class="btn btn-outline-secondary disabled" tabindex="-1" role="button" aria-disabled="true">缺货</a>
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                    @endforeach
                                </div>
                                @endif
                            </div>
                            @endforeach
                        </form>


                </div>
            </div>
        </div>
</div>
</section>
<!-- All Product End -->
</div>


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
<script>
    $("#search").on("input", function (e) {
        var txt = $("#search").val();
        if ($.trim(txt) != "") {
            $(".product-card.sec").hide().filter(":contains('" + txt + "')").show();
        } else {
            $(".product-card.sec").show();
        }
    });
</script>
@stop