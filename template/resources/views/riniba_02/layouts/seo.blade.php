<!DOCTYPE html>
<html lang="{{ str_replace('_','-',strtolower(app()->getLocale())) }}">
<head>
    @include('riniba_02.layouts._header')
    @include('riniba_02.layouts._seoheader')
    @include('riniba_02.layouts._css')
</head>
<body>

    <div class="loader-mask">
        <div class="loader">
            <div></div>
            <div></div>
        </div>
    </div>
    <div class="overlay"></div>
    <div class="side-overlay"></div>
    <div class="progress-wrap">
        <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
    </div>

    @include('riniba_02.layouts._mobil_header')
    @include('riniba_02.layouts._nav_header')
    <div class="bodycontent">
    @yield('content')
    </div>
    @include('riniba_02.layouts._footer')

</body>
@include('riniba_02.layouts._script')
@section('js')

@show

</html>