@extends('riniba_01.layouts.default')
@section('content')

<div class="page-content">
    <section class="all-product p-96">
        <div class="container">
            <div class="newsletter">
                <h3 class="mb-24">查询订单 注意：最多只能查询近5笔订单。</h3>
                <div class="card mb-0">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs gap-75 mb-32" data-bs-tabs="tabs">
                            <li class="nav-item">
                                <a href="#pills-home" class="active" aria-current="true" data-bs-toggle="tab">订单</a>
                            </li>
                            <li class="nav-item">
                                <a href="#pills-profile" aria-current="false" data-bs-toggle="tab">邮箱</a>
                            </li>
                            <li class="nav-item">
                                <a href="#pills-contact" aria-current="false" data-bs-toggle="tab">缓存</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                        aria-labelledby="pills-home-tab" tabindex="0">
                        <form action="{{ url('search-order-by-sn') }}" method="post">
                            {{ csrf_field() }}
                            <input type="text" name="order_sn" id="order_sn" placeholder="请您输入订单号..."
                                class="form-control mb-16" required />
                            <button type="submit" class="cus-btn primary w-100">
                                查询
                            </button>
                        </form>

                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                        tabindex="0">
                        <form action="{{ url('search-order-by-email') }}" method="post">
                            {{ csrf_field() }}
                            <input type="email" name="email" id="email" placeholder="请您输入邮箱..."
                                class="form-control mb-16" required />
                            @if(dujiaoka_config_get('is_open_search_pwd', \App\Models\BaseModel::STATUS_CLOSE) ==
                            \App\Models\BaseModel::STATUS_OPEN)
                            <div class="form-group mb-3">

                                <input type="password" name="search_pwd" id="search_pwd" required
                                    placeholder="请您输入查询密码..." class="form-control mb-16" required />

                            </div>
                            @endif
                            <button type="submit" class="cus-btn primary w-100">
                                查询
                            </button>
                        </form>

                    </div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                        tabindex="0">

                        <form action="{{ url('search-order-by-browser') }}" method="post">
                            {{ csrf_field() }}
                            <button type="submit" class="cus-btn primary w-100">
                                查询
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </section>

</div>


@stop