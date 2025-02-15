<!DOCTYPE html>
<html lang="{{ str_replace('_','-',strtolower(app()->getLocale())) }}">

<head>
    @include('riniba_04.layouts._header')
    @include('riniba_04.layouts._css')
</head>

<body data-layout="topnav">
    <div class="wrapper">
        <div class="content-page">
            <div class="content">
                @include('riniba_04.layouts._nav')
                @yield('content')
                @include('riniba_04.layouts._footer')
            </div>
        </div>
    </div>
    @include('riniba_04.layouts._script')
</body>

@section('js')
@show

</html>