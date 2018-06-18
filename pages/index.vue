<template>
  <section class="section">
    <div class="hero is-danger">
      <div class="hero-body">
        <div class="container">
          <figure class="image is-250x250"></figure>
          <h1 class="title is-1">YUN_Portfolio</h1>
          <h2 class="subtitle">윤여환의 포트폴리오입니다.</h2>
          <br>
          <a class="button is-primary is-inverted is-outlined">자기소개</a>
          <a class="button is-primary is-inverted is-outlined">좋아하는 것</a>
          <a class="button is-link is-inverted is-outlined">경력</a>
    </div>
    <br>
    <article class="message">
      <div class="message-body">환영합니다 윤여환의 포트폴리오 입니다.</div>
    </article>
      </div>
      <div class="column">
        <div class="message is-danger">
          <div class="message-header">
            <p>오늘의 개 사진</p>
          </div>
          <div class="message-body">
            <figure class="image is-squre">
              <img v-bind:src="image" alt="">
            </figure>
          </div>
        </div>
      </div>
    </div>
     <div class="box">
      <h1 class="title">보고 싶은 개 정보를 누르세요.</h1>
      <span v-for="dog in dogs" v-bind:key="dog">
        <nuxt-link :to = "'/dogs/' + dog" class="button is-success is-danger">
          {{dog}}
        </nuxt-link> &nbsp;
      </span>
    </div>
  </section>
</template>

