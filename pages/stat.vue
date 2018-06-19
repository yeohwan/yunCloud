<template>
    <section class="section">
        <article class="hero is-info">
            <div class="hero-body">
                <h1 class="title">그동안 받아온 학점</h1>
            </div>
        </article>
        <article class="message">
            <div class="message-header">
                학점 
            </div>
            <div class="message-body">
                <div id="chartArea" ></div>
            </div>
        </article>

        <div class="tile is-parent">
        <article class="tile is-child notification is-info">
    
          <p class="subtitle">학교를 다니면서 받아온 1학년 2학년 3학년 1학기 2학기 학점을 통계를 내보았다. </p>
          <div id="chartArea" ></div>
        </article>
      </div>
    </section>
</template>

<script>
    import myBarChart from '~/plugins/myBarChart';
    export default {
        mounted() {
            if (process.client) { myBarChart('chartArea'); }
        }
    };
</script>