<template>
<div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-primary">
          <p class="title">취미</p>
          <p class="subtitle">운동, 독서, 공부</p>
        </article>
        <article class="tile is-child notification is-primary">
          <p class="title">SNS</p>
          <p class="subtitle">Face book</p>
          <a href="https://www.facebook.com/profile.php?id=100025595700510">
           <figure class="image is-4by3">
            <img src="~static/facebook.png">
          </figure>
          </a>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-primary">
          <p class="title">Middle tile</p>
          <p class="subtitle">With an image</p>
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/640x480.png">
          </figure>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-primary">
        <p class="title">Wide tile</p>
        <p class="subtitle">Aligned with the right tile</p>
        <div class="content">
          <!-- Content -->
        </div>
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child notification is-primary">
      <div class="content">
        <p class="title">Tall tile</p>
        <p class="subtitle">With even more content</p>
        <div class="content">
          <!-- Content -->
        </div>
      </div>
    </article>
  </div>
</div>
</template>
