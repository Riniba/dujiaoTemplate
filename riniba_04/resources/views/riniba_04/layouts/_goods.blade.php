<a href="@if($goods['in_stock'] > 0) {{ url("/buy/{$goods['id']}") }} @else javascript:void(0); @endif" 
@if($goods['in_stock'] <= 0)
                  onclick="sell_out_tip()"
               @endif

class="home-card category">
    <img class="home-img" src="/assets/riniba_04/images/loading.gif"
        data-src="{{ picture_ulr($goods['picture']) }}" />
    <div class="flex">
        <div class="price">
            <div class="price-amount">¥<b>{{ number_format($goods['actual_price'], 2) }}</b></div>
            <div class="home-badge"><span class="home-stock">库存 {{ $goods['in_stock']}}</span></div>
        </div>
        <p class="name">
            {{ $goods['gd_name'] }}
        </p>
        @if($goods['in_stock'] > 0)
        <div class="btn buy fr">购买→</div>
        @else
        <div class="btn buy fr">缺货</div>
    @endif

    </div>
</a>


