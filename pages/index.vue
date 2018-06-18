<template>
  <section class="section">
    <div class="hero is-danger">
      <div class="hero-body">
        <div class="container">
          <figure class="image is-128x128">
            <img src="~static/dogdog.png" alt="">
          </figure>
          <h1 class="title is-1">개사랑</h1>
          <h2 class="subtitle">개사랑 사이트는 개를 사랑하는 사람들을 위한 상세한 정보를 제공합니다.</h2>
        </div>
      </div>
    </div>
    <br>
    <article class="message">
      <div class="message-header">개란 무엇인가?</div>
      <div class="message-body">개(학명: Canis lupus familiaris)는 식육목 개과 개속에 속하는 동물로, 회색늑대(Canis lupus)의 아종으로,[1] 현대에서 가장 널리 분포하며 개체 수가 가장 많은 지상 육식 동물이다.[2][3][4][5][6] 개는 인류가 최초로 가축으로 삼은 동물로 알려져 있으며[7], 역사적으로 애완견, 사냥견으로서 길러 왔으며 인간의 친구(Man's best friend)라고도 불린다. 미토콘드리아 DNA 분석 결과 현대의
        개와 회색늑대는 대략 10만 년 전에 분화된 것으로 추정되어 왔는데, 2013년 개의 화석을 이용한 분석에서는 33,000 - 36,000년 전 사이에 분화가 이루어 졌을 것으로 보고 있다.[7][8] 개는 여러 모로 유용하였기 때문에 모든 원시 인류 사회가 개를 길렀다.[9] 개는 사냥, 목축, 운송, 경비와 같은 일에 사용되고 있으며, 애완 동물로 기르기도 한다. 사람들은 이러한 일들에 적합하도록 오래 전부터 개를 다양한 품종으로
        육종하였다.[10] 여러 소수 문화에서 개고기를 먹지만[11], 다른 여러 문화에서는 개고기를 먹는 것을 금하는 금기를 가지고 있기도 하다. 고대 로마 시기의 역사가인 유스티누스는 페르시아의 왕 다리우스가 카르타고에게 개고기와 인신공양을 금지하는 포고를 내렸다고 기록하고 있고, 서구의 대부분 문화에서 개고기를 먹는 것은 금기로 취급된다.[11] 이슬람에서는 재난이 닥친 특별한 상황이 아니라면 개고기가 금지된다.[12] 오늘날에도 개고기를
        먹는 문제는 문화적 논란의 대상이다.[13] 청나라 만주족은 태조 누르하치가 개한테서 구해진적이 있다는 전설로 인해 개를 먹지 않는다고 한다. 개의 수명은 보통 12 - 16년 정도이지만, 최근 장수하는 개가 늘어나는 추세이다.[14] 2001년 생물학자 레이 쿠니퍼는 전 세계 개의 개체수를 약 4억 마리 정도로 추정했고[15], 2013년 하지홍은 10억 마리 이상으로 추정했다.[16]</div>
    </article>
    <div class="columns">
      <div class="column">
        <div class="notification is-danger">
          <figure class="image is-squre">
            <img src="http://famtimes.co.kr/data/media/image/news_6/201711/20171122144312982.jpg" alt="">
          </figure>
        </div>
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

<script>
  import axios from 'axios';
  export default {
    data() {
      return {};
    },
    async asyncData() {
      const myImage = await axios.get('https://dog.ceo/api/breeds/image/random');
      const myDogs = await axios.get('https://dog.ceo/api/breeds/list');
      return { image: myImage.data.message, dogs: myDogs.data.message };
    }
  };
</script>