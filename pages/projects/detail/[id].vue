<script setup lang="ts">
const { id } = useRoute().params;
const slide = ref(1);
const fullscreen = ref(false);

interface Image {
  name: number;
  src: string;
}

interface ProjectInfo {
  img?: Image[];
  title?: string;
  date?: string;
  team?: string[];
  desc?: string;
  skills?: string[];
  tech?: string;
  link?: string;
  linkNm?: string;
  feat?: string;
}

const infos: ProjectInfo[] = [
  {
    img: [
      { name: 1, src: '/images/p1-1.gif' },
      { name: 2, src: '/images/p1-2.gif' },
      { name: 3, src: '/images/p1-3.gif' },
      { name: 4, src: '/images/p1-4.gif' },
      { name: 5, src: '/images/p1-5.gif' }
    ],
    title: 'Shall we? Challenge!',
    date: '2023.01 - 2023.02',
    team: ['3 frontend developers', '3 backend developers'],
    desc: 'This team project, conducted during a bootcamp, marked my first experience working with React. I was involved in every aspect, from ideation and design using Figma to frontend development. </br></br>The project aimed to assist individuals in achieving their personal goals by transforming them into challenges. Participants with similar objectives could join these challenges, uploading photos depicting their progress, ultimately completing the challenge and achieving their goals.</br></br>I implemented features allowing users to endlessly scroll through challenges, search, and sort them on the main page. Additionally, using React hook form, I enabled challenge registration. I also implemented the functionality for participants to upload photos and authenticate their progress within the ongoing challenges.',
    skills: ['React', 'Styled-Components', 'Redux-Toolkit', 'Axios', 'Git', 'Github', 'AWS'],
    link: 'https://github.com/soojiin/Shall-we-Challenge',
    linkNm: 'Github Repository'
  },
  {
    img: [
      { name: 1, src: '/images/p2-1.gif' },
      { name: 2, src: '/images/p2-2.png' },
      { name: 3, src: '/images/p2-3.png' },
      { name: 4, src: '/images/p2-4.gif' },
      { name: 5, src: '/images/p2-5.png' }
    ],
    title: 'PostVell',
    date: '2023.04',
    desc: 'This project was a collaboration between six internal designer and developers during an internal hackathon at the company. We managed the entire process from conceptualization to implementation.</br></br> The project introduced an internal anonymous letter delivery service, allowing individuals to convey messages that might be difficult to express in person through anonymous letters to their colleagues. Additionally, we incorporated community features. My responsibilities included handling user registration, login, and password reset functionalities.',
    team: ['1 designer', '2 frontend developers', '3 backend developers'],
    skills: ['Vue2', 'Nuxt2']
  },
  {
    img: [
      { name: 1, src: '/images/p3-1.png' },
      { name: 2, src: '/images/p3-2.png' },
      { name: 3, src: '/images/p3-3.png' },
      { name: 4, src: '/images/p3-4.png' },
      { name: 5, src: '/images/p3-5.png' }
    ],
    title: 'Golfzon Market IUT',
    date: '2023.04 - 2023.06',
    desc: 'This is a C2C service for trading used golf equipment.</br></br> I was responsible for implementing the process of registering golf products for sale, which consists of four steps. These include the model name search, inputting detailed options for the product, providing information such as product photos, selling price, and selling region, and finally, implementing the step to set the transaction method.',
    team: ['6 frontend developers', '8 backend developers'],
    skills: ['Vue3', 'Nuxt3'],
    link: 'https://play.google.com/store/apps/details?id=com.golfzon.iut&hl=en_US',
    linkNm: 'Google Play Store'
  },
  {
    img: [
      { name: 1, src: '/images/p4-1.png' },
      { name: 2, src: '/images/p4-2.png' },
      { name: 3, src: '/images/p4-3.png' },
      { name: 4, src: '/images/p4-4.png' }
    ],
    title: 'HowBooks',
    date: '2023.08',
    desc: "This MVP (Minimum Viable Product) project was a collaborative effort by a team of four in-house developers. The platform serves as an online marketplace where users can buy or sell their self-produced e-books and online courses.</br></br> Taking on the role of the frontend project lead, I faced the challenge of delivering results within a tight one-month timeframe. Despite the personal challenges associated with the short duration, I successfully implemented all the required features. From project setup to completion, I was responsible for various functionalities, including user registration, login, implementing infinite scrolling for the main product list screen, integrating a temporary payment module for product transactions, managing order history, handling review submissions and edits, enabling 1:1 inquiries, and implementing personal information modifications within the user's profile page.",
    team: ['2 frontend developers', '2 backend developers'],
    skills: ['Vue3', 'Nuxt3']
  },
  {
    img: [
      { name: 1, src: '/images/p5-1.png' },
      { name: 2, src: '/images/p5-2.png' }
    ],
    title: 'Portfolio',
    date: '2024.01',
    desc: 'This is my personal portfolio website, and it is currently deployed using Vercel.',
    skills: ['Vue3', 'Nuxt3', 'Vercel'],
    link: 'https://github.com/sophie22222/portfolio',
    linkNm: 'Github Repository'
  }
];

const currInfo: ProjectInfo = infos[id - 1] || {};
</script>

<template>
  <div class="q-pa-md">
    <div class="project-info-container">
      <q-carousel
        v-model="slide"
        v-model:fullscreen="fullscreen"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        control-color="blue-grey-13"
        arrows
        navigation
        infinite
        class="carousel"
      >
        <template v-if="currInfo.img && currInfo.img.length">
          <q-carousel-slide v-for="item in currInfo.img" :key="item.name" :name="item.name" :img-src="item.src" />
        </template>
        <template #control>
          <q-carousel-control position="bottom-right" :offset="[18, 18]">
            <q-btn
              push
              round
              dense
              color="white"
              text-color="primary"
              :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
              @click="fullscreen = !fullscreen"
            />
          </q-carousel-control>
        </template>
      </q-carousel>
      <div class="project-info">
        <div class="title">{{ currInfo.title }}</div>
        <div class="info-item">
          <h3 class="desc-title">Date</h3>
          {{ currInfo.date }}
        </div>
        <div class="info-item">
          <h3 class="desc-title">About Project</h3>
          <p v-html="currInfo.desc"></p>
        </div>
        <div v-if="currInfo.team" class="info-item">
          <h3 class="desc-title">Team</h3>
          <ul v-for="(team, idx) of currInfo.team" :key="idx">
            <li>{{ team }}</li>
          </ul>
        </div>
        <div class="info-item">
          <h3 class="desc-title">Skills</h3>
          <div class="tags">
            <div v-for="(skill, idx) of currInfo.skills" :key="idx" class="skills">
              <div>{{ skill }}</div>
            </div>
          </div>
        </div>
        <div v-if="currInfo.link" class="info-item">
          <h3 class="desc-title">Link</h3>
          <nuxt-link :to="currInfo.link" target="_blank">{{ currInfo.linkNm }}</nuxt-link>
        </div>
      </div>
    </div>
    <div class="row justify-end">
      <q-btn label="Back" class="q-mt-md back-btn" @click="navigateTo('/projects')" />
    </div>
  </div>
</template>

<style scoped>
.project-info-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.carousel {
  width: 55%;

  .q-carousel__slide {
    background-size: contain;
    background-repeat: no-repeat;
  }
}

.project-info {
  width: 40%;
}

.title {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
}

.info-item {
  font-size: 14px;
  line-height: 18px;
  text-transform: none;
  font-weight: 520;
  font-family: Helvetica;
}

.desc-title {
  font-size: 12px;
  line-height: 11px;
  margin-bottom: 9px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 32px;
  text-transform: none;
  font-weight: 400;
  font-family: monospace;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
}

div.skills div {
  font-size: 12px;
  list-style-type: none;
  padding: 5px 10px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.88);
  color: rgb(255, 234, 167);
  font-family: 'Roboto Mono', monospace;
}

.back-btn {
  margin-top: 5rem;
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
</style>
