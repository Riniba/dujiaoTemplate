<header class="header">
    <div class="container container-full">
        <nav class="header-inner flx-between">
            <div class="logo">
                <a href="/" class="link">
                    <img src="{{ picture_ulr(dujiaoka_config_get('img_logo')) }}">
                </a>
            </div>

            <div class="header-menu d-lg-block d-none">

                <ul class="nav-menu flx-align ">
                    <li class="nav-menu__item">
                        <a href="/" class="nav-menu__link">{{ dujiaoka_config_get('text_logo') }}</a>
                    </li>
                </ul>
            </div>

            <div class="header-right flx-align">
                <a href="/" class="header-right__button cart-btn position-relative">
                    <img src="/assets/riniba_02/images/icons/home.svg" alt="">
                </a>
                <div class="header-right__inner gap-3 flx-align d-lg-flex d-none">

                    <a href="{{ url('order-search') }}" class="btn btn-main pill">订单查询
                    </a>

                </div>
                <button type="button" class="toggle-mobileMenu d-lg-none"> <i class="las la-bars"></i> </button>
            </div>
        </nav>
    </div>
</header>