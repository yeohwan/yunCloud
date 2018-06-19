<template>
  <div>
    <section class="section">
    <div class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <figure class="image is-250x250"></figure>
          <h1 class="title is-1">YUN_Portfolio</h1>
          <h2 class="subtitle">윤여환의 포트폴리오입니다.</h2>
          <br>
           <nuxt-link to="/"><a class="button is-primary is-inverted is-outlined">자기소개</a></nuxt-link>
          <nuxt-link to="/work"> <a class="button is-primary is-inverted is-outlined">좋아하는 것</a></nuxt-link>
          <nuxt-link to="/stat"><a class="button is-link is-inverted is-outlined">학점</a></nuxt-link>
    </div>
    <br>
  
      </div>
    </div>
     
  </section>
    <nuxt/>

    <footer class="footer has-text-centered">
      <div>
      <figure class="image is-32x32">
        <img src="~static/dogfoot.jpg" alt="">
      </figure>MOKWON UNIVERSITY - YUNYEOHWAN - cwss1503@naver.com - 010.4757.1783</div>
    </footer>
  </div>
</template>