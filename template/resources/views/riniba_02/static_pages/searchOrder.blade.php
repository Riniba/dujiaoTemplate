@extends('riniba_02.layouts.default') @section('content')

<section
    class="breadcrumb-two position-relative z-index-1 overflow-hidden">
    <div class="container container-two">
        <div class="breadcrumb-two-content border-bottom border-color">
            <h5 class="author-profile__name mb-2">
                查询订单 注意：最多只能查询近5笔订单。
            </h5>
            <ul class="nav tab-bordered nav-pills mt-4" id="pills-tabbs" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="true">
                        订单
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-portfolio-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-portfolio" type="button" role="tab" aria-controls="pills-portfolio"
                        aria-selected="false">
                        邮箱
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-download-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-download" type="button" role="tab" aria-controls="pills-download"
                        aria-selected="false">
                        缓存
                    </button>
                </li>
            </ul>
        </div>
    </div>
</section>
<section class="profile">
    <div class="container container-two">
        <div class="tab-content" id="pills-tabb">
            <div class="tab-pane fade show active" id="pills-profile" role="tabpanel"
                aria-labelledby="pills-profile-tab" tabindex="0">
                <div class="cart-payment__box position-relative z-index-1 overflow-hidden">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 col-sm-10">
                            <h5 class="cart-payment__title mb-4">订单号查询订单</h5>
                            <div class="cart-payment-card">
                                <form action="{{ url('search-order-by-sn') }}" method="post">
                                    {{ csrf_field() }}
                                    <div class="row gy-4">
                                        <div class="col-lg-12">
                                            <label for="nmbr"
                                                class="form-label mb-2 font-18 font-heading fw-600">订单号</label>
                                            <div class="position-relative">
                                                <input type="text"
                                                    class="common-input common-input--bg common-input--withIcon"
                                                    id="order_sn" name="order_sn" placeholder="请您输入订单号..." required>
                                                <span class="input-icon"><img
                                                        src="/assets/riniba_02/images/icons/check-cirlce.svg"
                                                        alt=""></span>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <button type="submit" class="btn btn-main btn-lg w-100 pill"> 查询</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="pills-portfolio" role="tabpanel" aria-labelledby="pills-portfolio-tab"
                tabindex="0">
                <div class="row justify-content-center">
                    <div class="col-lg-7">
                        <div class="breadcrumb-one-content">
                            <h3 class="breadcrumb-one-content__title text-center mb-3 text-capitalize">
                                请输入邮箱进行查询
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="cart-payment__box position-relative z-index-1 overflow-hidden">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 col-sm-10">
                            <h5 class="cart-payment__title mb-4">邮箱查询订单</h5>
                            <div class="cart-payment-card">
                                <form action="{{ url('search-order-by-email') }}" method="post">
                                    {{ csrf_field() }}
                                    <div class="row gy-4">
                                        <div class="col-lg-12">
                                            <label for="nmbr"
                                                class="form-label mb-2 font-18 font-heading fw-600">邮箱</label>
                                            <div class="position-relative">
                                                <input type="email"
                                                    class="common-input common-input--bg common-input--withIcon"
                                                    id="email" name="email" placeholder="请您输入邮箱..." required>
                                                <span class="input-icon"><img
                                                        src="/assets/riniba_02/images/icons/check-cirlce.svg"
                                                        alt=""></span>
                                            </div>
                                        </div>
                                        @if(dujiaoka_config_get('is_open_search_pwd',
                                        \App\Models\BaseModel::STATUS_CLOSE) ==
                                        \App\Models\BaseModel::STATUS_OPEN)
                                        <div class="col-lg-12">
                                            <label for="holder"
                                                class="form-label mb-2 font-18 font-heading fw-600">查询密码</label>
                                            <div class="position-relative">
                                                <input type="password"
                                                    class="common-input common-input--bg common-input--withIcon"
                                                    name="search_pwd" id="search_pwd" placeholder="请您输入查询密码..."
                                                    required>
                                                <span class="input-icon"><img src="/assets/riniba_02/images/icons/check-cirlce.svg"
                                                        alt=""></span>
                                            </div>
                                        </div>
                                        @endif
                                        <div class="col-lg-12">
                                            <button type="submit" class="btn btn-main btn-lg w-100 pill"> 查询</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="pills-download" role="tabpanel" aria-labelledby="pills-download-tab"
                tabindex="0">
                <div class="cart-payment__box position-relative z-index-1 overflow-hidden">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 col-sm-10">
                            <h5 class="cart-payment__title mb-4">缓存查询订单</h5>
                            <div class="cart-payment-card">
                                <form action="{{ url('search-order-by-browser') }}" method="post">
                                    {{ csrf_field() }}
                                    <div class="row gy-4">
                                        <div class="col-lg-12">
                                            <button type="submit" class="btn btn-main btn-lg w-100 pill"> 查询</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>@stop