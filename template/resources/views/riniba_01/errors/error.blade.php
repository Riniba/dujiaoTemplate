@extends('riniba_01.layouts.default')

@section('content')

<div class="error-info">
<h2 class="card-header">似乎遇到了一点问题~</h2>
<h2 class="card-title">{{ $content }}</h2>

<div>
@if(!$url)
            <a href="javascript:history.back(-1);"  class="cus-btn primary w-100">{{ __('dujiaoka.callback') }}</a>
        @else
            <a href="{{ $url }}"  class="cus-btn primary w-100">{{ __('dujiaoka.callback') }}</a>
        @endif

</div>


</div>


@stop
