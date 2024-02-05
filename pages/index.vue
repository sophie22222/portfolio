<script setup lang="ts">
const showBtn = ref(false);

onMounted(() => {
  setTimeout(() => {
    showBtn.value = true;
  }, 1500);
});
</script>

<template>
  <div>
    <div class="animated-title">
      <div class="text-top">
        <div>
          <span>Hello and welcome!</span>
          <span>Explore and enjoy the journey through my frontend endeavors.</span>
        </div>
      </div>
    </div>
    <div v-if="showBtn" class="wrapper">
      <div class="link_wrapper">
        <a href="/projects">See projects</a>
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
            <path
              d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:700');
@keyframes showTopText {
  0% {
    transform: translate3d(0, 100%, 0);
  }
  40%,
  60% {
    transform: translate3d(0, 50%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes showBottomText {
  0% {
    transform: translate3d(0, -100%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

.animated-title {
  color: #222;
  font-family: Roboto, Arial, sans-serif;
  height: 90vmin;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
}

.animated-title > div {
  height: 50%;
  overflow: hidden;
  position: absolute;
  width: 100%;
}

.animated-title > div div {
  font-size: 6.5vmin;
  padding: 2vmin 0;
  position: absolute;
}

.animated-title > div div span {
  display: block;
}

.animated-title > div.text-top {
  border-bottom: 1vmin solid #000;
  top: 0;
}

.animated-title > div.text-top div {
  animation: showTopText 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  bottom: 0;
  transform: translate(0, 100%);
}

.animated-title > div.text-top div span:first-child {
  color: #767676;
}

body {
  font-family: 'Lato', sans-serif;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.wrapper {
  position: fixed;
  right: 5%;
  bottom: 10%;
  transform: translate(-50%, -50%);
  animation: fadeIn 1s;
}

.link_wrapper {
  position: relative;
}

a {
  display: block;
  width: 250px;
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  text-decoration: none;
  background: #333;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 3px solid #333;
  transition: all 0.35s;
}

.icon {
  width: 50px;
  height: 50px;
  border: 3px solid transparent;
  position: absolute;
  transform: rotate(45deg);
  right: 0;
  top: 0;
  z-index: -1;
  transition: all 0.35s;
}

.icon svg {
  width: 30px;
  position: absolute;
  top: calc(50% - 15px);
  left: calc(50% - 15px);
  transform: rotate(-45deg);
  fill: #2ecc71;
  transition: all 0.35s;
}

a:hover {
  width: 200px;
  border: 3px solid #2ecc71;
  background: transparent;
  color: #2ecc71;
}

a:hover + .icon {
  border: 3px solid #2ecc71;
  right: -25%;
}
</style>
