<div class="mobile-menu d-lg-none d-block">
    <button type="button" class="close-button"> <i class="las la-times"></i> </button>
    <div class="mobile-menu__inner">
        <a href="/" class="mobile-menu__logo">
        <img src="{{ picture_ulr(dujiaoka_config_get('img_logo')) }}">
        </a>
        <div class="mobile-menu__menu">
            <ul class="nav-menu flx-align nav-menu--mobile">
                <li class="nav-menu__item">
                    <a href="/" class="nav-menu__link">主页</a>
                </li>
                <li class="nav-menu__item">
                    <a href="{{ url('order-search') }}" class="nav-menu__link">订单查询</a>
                </li>
            </ul>
        </div>
    </div>
</div>
