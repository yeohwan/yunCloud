<template>
  <div>
    <nav class="navbar">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item">개사랑</nuxt-link>
            <figure class="image is-128x128">
            <img src="~static/dogfoot.jpg" alt="">
          </figure>
      </div>
      <div class="navbar-menu is-active">
        <div class="navbar-end">
          <nuxt-link to="/stat" class="navbar-item">통계</nuxt-link>
          <nuxt-link to="/about" class="navbar-item">소개</nuxt-link>
        </div>
      </div>
    </nav>
    <nuxt/>

    <footer class="footer has-text-centered">
      <div>
      <figure class="image is-32x32">
        <img src="~static/dogfoot.jpg" alt="">
      </figure>2018년 목원대학교 개사랑. 모든 저작권은 개사랑에 있습니다.</div>
    </footer>
  </div>
</template>