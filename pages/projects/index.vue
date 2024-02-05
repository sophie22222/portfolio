<script setup lang="ts">
const projects = [
  {
    id: 3,
    title: 'Golfzon Market IUT',
    description: 'Secondhand Golf Gear Marketplace App',
    image: '/images/p3-1.png'
  },
  {
    id: 4,
    title: 'HowBooks',
    description: 'Web platform for users to sell their own e-books and online courses',
    image: '/images/p4-1.png'
  },
  {
    id: 2,
    title: 'PostVel',
    description: 'Anonymous messaging application for internal company use',
    image: '/images/p2-1.gif'
  },
  {
    id: 5,
    title: 'Portfolio',
    description: 'Personal Portfolio to show my journey in web development',
    image: '/images/p5-1.png'
  },
  {
    id: 1,
    title: 'Shall we? Challenge!',
    description: 'Group Challenge App that turns personal goals into collective challenges',
    image: '/images/p1-1.gif'
  }
];
</script>

<template>
  <div class="q-pa-md row q-gutter-md justify-center card-container">
    <template v-for="(project, index) in projects" :key="index">
      <q-card class="my-card col-sm-6 col-md-4" @click="navigateTo(`/projects/detail/${project.id}`)">
        <h1 class="card-title">
          <span>{{ project.title }}</span>
        </h1>
        <img :src="project.image" :alt="project.title" class="card-image" />
        <q-card-section>
          <div class="card-desc">{{ project.description }}</div>
        </q-card-section>
      </q-card>
    </template>
  </div>
</template>

<style scoped>
.card-container {
  margin-top: 0.2rem;
}

.my-card {
  max-width: 400px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.my-card:hover {
  transform: translateY(-5px) scale(1.05);
}

.card-title {
  text-align: center;
}

.card-image {
  aspect-ratio: 1;
  object-fit: scale-down;
}

h1 {
  font-size: 22px;
  line-height: 2rem;
}

h1.card-title span {
  position: relative;
  font-weight: 400;
}

h1.card-title span:before {
  content: '';
  display: block;
  position: absolute;
  top: calc(50% + 2px);
  left: -10px;
  width: calc(100% + 20px);
  height: 25%;
  transform: translateY(-50%);
  z-index: -1;
  background-color: #2ecc71;
}

.card-desc {
  color: #333;
}
</style>
