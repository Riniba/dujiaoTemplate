<!DOCTYPE html>
<html lang="{{ str_replace('_','-',strtolower(app()->getLocale())) }}">

<head>
    @include('riniba_01.layouts._header')
    @include('riniba_01.layouts._css')
</head>

<body>

    <div id="preloader">
        <div class="image-loader">
            <img src="/assets/riniba_01/media/loading.png" alt="Loading" />
        </div>
    </div>

    <a href="#main-wrapper" id="backto-top" class="back-to-top"><i class="fas fa-angle-up"></i></a>
    <div id="main-wrapper" class="overflow-hidden">
        @include('riniba_01.layouts._nav_header')
        @yield('content')
        @include('riniba_01.layouts._footer')

    </div>






</body>
@include('riniba_01.layouts._script')
@section('js')

@show

</html>