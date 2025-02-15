@extends('riniba_04.layouts.default')
@section('content')
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="page-title-box">

                <!-- <h4 class="page-title">查询订单</h4> -->
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    注意：最多只能查询近5笔订单。
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <div class="card card-body">
                <div class="tab-pane show active" id="bordered-tabs-preview">
                    <ul class="nav nav-tabs nav-bordered mb-3">
                        <li class="nav-item">
                            <a class="nav-link active" data-bs-toggle="tab" aria-expanded="false"
                                href="#order_search_by_sn">订单</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" aria-expanded="true"
                                href="#order_search_by_email">邮箱</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" aria-expanded="false"
                                href="#order_search_by_browser">缓存</a>
                        </li>
                    </ul>
                    <div id="searchTabContent" class="tab-content">
                        <div class="tab-pane fade active show" id="order_search_by_sn">
                            <form class="needs-validation" action="{{ url('search-order-by-sn') }}"
                                method="post">
                                {{ csrf_field() }}
                                <div class="form-group row">
                                    <div class="col-12 mt-3">
                                        <label for="orderSN" class="col-form-label">订单号</label>
                                        <input type="text" class="form-control" id="orderSN" name="order_sn" required
                                            placeholder="请输入订单编号">
                                    </div>
                                    <div class="col-12 mt-3">
                                        <button type="submit" class="btn btn-outline-primary">立即查询</button>

                                        <button type="reset" class="btn btn-primary">重置</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="tab-pane fade" id="order_search_by_email">
                            <form action="{{ url('search-order-by-email') }}" method="post">
                                {{ csrf_field() }}
                                <div class="form-group row">
                                    <div class="col-12 mt-3">
                                        <label for="email" class="col-form-label">邮箱</label>
                                        <input type="email" class="form-control" id="email" name="email" required
                                            placeholder="请输入邮箱">
                                    </div>
                                    @if(dujiaoka_config_get('is_open_search_pwd',
                                    \App\Models\BaseModel::STATUS_CLOSE) ==
                                    \App\Models\BaseModel::STATUS_OPEN)
                                    <div class="col-12 mt-3">
                                        <label for="validationCustom01" class="col-form-label">{{
                                            __("order.fields.search_pwd") }}</label>
                                        <input type="password" class="form-control" id="search_pwd" name="search_pwd"
                                            required placeholder="请输入查询密码">
                                    </div>
                                    @endif
                                    <div class="col-12 mt-3">
                                        <button type="submit" class="btn btn-outline-primary">立即查询</button>

                                        <button type="reset" class="btn btn-primary">重置</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="tab-pane fade" id="order_search_by_browser">
                            <form action="{{ url('search-order-by-browser') }}" method="post">
                                {{ csrf_field() }}
                                <div class="form-group row">
                                    <div class="col-12 mt-3">
                                        <button type="submit" class="btn btn-outline-primary">立即查询</button>
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

@stop
@section('js')

@stop