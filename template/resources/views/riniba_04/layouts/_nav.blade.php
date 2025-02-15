<div class="top-header">
  <div class="container header-block">
    <div class="header-left">
      <div class="header-right clearfix">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <a href="/" class="topnav-logo" style="float: none"><img class="img-logo" src="{{
                                    picture_ulr(dujiaoka_config_get('img_logo'))
                                }}" />
              <div class="nav-title">{{ dujiaoka_config_get('text_logo') }}</div>
            </a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" id="myButton"
              data-bs-target="#navbarColor" aria-controls="navbarColor" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor">
              <ul class="navbar-nav me-auto centered-nav">
                <a class="btn btn-top-nav" href="/">首页</a><a class="btn btn-top-nav" href="/order-search">订单查询</a><a
                  class="btn btn-top-nav" href="https://t.me/Riniba" target="_blank">在线客服</a><a class="btn btn-top-nav"
                  href="https://github.com/Riniba/dujiaoTemplate" target="_blank"><i class="uil uil-cart"></i> 开源地址</a>
              </ul>
              @if (request()->is('/'))
              <div class="search-box-placeholder">
                <div class="search-box">
                  <input type="text" class="search-form" id="search" placeholder="输入关键词搜索..." /><span
                    class="uil-search"></span>
                </div>
              </div>
              @endif
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</div>