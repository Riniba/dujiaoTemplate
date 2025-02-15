@extends('riniba_04.layouts.default')
@section('content')
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="home-col">
                <div class="home-card-body">
                    <div class="home-notice">
                        {!! dujiaoka_config_get('notice') !!}
                        <p style="text-align: center; font-weight: 100;">&nbsp;</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="nav home-nav-list">
        <a href="#group-all" class="home-tab-link active" data-bs-toggle="tab" aria-expanded="false" role="tab"
            data-toggle="tab">
            <span class="tab-title">{{ __('dujiaoka.group_all') }}</span>
        </a>
        @foreach($data as $index => $group)
        <a href="#group-{{ $group['id'] }}" class="home-tab-link" data-bs-toggle="tab" aria-expanded="false" role="tab"
            data-toggle="tab">
            <span class="tab-title">{{
                $group['gp_name'] }}</span>
        </a>
    
        @endforeach
    
    </div>
    <div class="home-main-content">

        



<div class="tab-pane active" id="group-all">
    <div class="home-wrapper">
        @foreach($data as $group)
        @foreach($group['goods'] as $goods)
        @include('riniba_04.layouts._goods', ['goods' => $goods])
        @endforeach
        @endforeach
    </div>
</div>

@foreach($data as $group)
<div class="tab-pane" id="group-{{ $group['id'] }}">
    <div class="home-wrapper">
        @foreach($group['goods'] as $goods)
        @include('riniba_04.layouts._goods', ['goods' => $goods])
        @endforeach
    </div>
</div>
@endforeach

    </div>
</div>

@stop

@section('js')
<script>
    $("#search").on("input", function (e) {
        var txt = $("#search").val();
        if ($.trim(txt) != "") {
            $(".category").hide().filter(":contains('" + txt + "')").show();
        } else {
            $(".category").show();
        }
    });
        function sell_out_tip() {
            $.NotificationApp.send("提示", "商品缺货", "top-center", "rgba(0,0,0,0.2)", "info");
        }
    </script>
    
@stop