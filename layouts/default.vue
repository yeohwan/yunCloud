<template>
  <div>
     <div class="hero is-dark" style="margin-right :25px; margin-left :25px;">
      <div class="hero-body">
        <div class="container">
          <figure class="image is-250x250"></figure>
          <h1 class="title is-1">YUN_Portfolio</h1>
          <h2 class="subtitle">윤여환의 포트폴리오입니다.</h2>
          <br>
   </div>
      </div>
    </div>
    <nav class="navbar">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item"></nuxt-link>
      </div>
      <div class="navbar-menu is-active">
        <div class="navbar-end" style="margin-right : 30px;">
          
           <nuxt-link to="/"><a class="button is-dark" style="margin : 10px; width : 150px; height : 50px;">자기소개</a></nuxt-link>
          <nuxt-link to="/work"> <a class="button is-dark" style="margin : 10px; width : 150px; height : 50px;">좋아하는 것</a></nuxt-link>
          <nuxt-link to="/stat"><a class="button is-dark" style="margin : 10px; width : 150px; height : 50px;">학점</a></nuxt-link>
           
        </div>
      </div>
    </nav>
    
    
     
<br>

<br>
    <nuxt/>

    <footer class="footer has-text-centered">
      <div>
      <figure class="image is-32x32">
        <img src="~static/dogfoot.jpg" alt="">
      </figure>2018년 목원대학교 개사랑. 모든 저작권은 개사랑에 있습니다.</div>
    </footer>
  </div>
</template>

<style>
</style>