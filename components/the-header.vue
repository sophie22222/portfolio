<script setup lang="ts">
const model = ref('');
const options = [
  { label: 'About', value: 'about' },
  { label: 'Projects', value: 'projects' },
  { label: 'Contact', value: 'contact' }
];

const navigateToMain = () => {
  model.value = '';
  return navigateTo('/');
};
</script>

<template>
  <q-header class="q-pa-md bg-white text-black">
    <q-toolbar>
      <q-btn flat dense class="q-mr-sm" label="Sojin's Portfolio" @click="navigateToMain" />
      <q-space />
      <q-btn-toggle
        v-model="model"
        flat
        stretch
        toggle-color="green-13"
        :options="options"
        @update:model-value="navigateTo(`/${model}`)"
      />
    </q-toolbar>
  </q-header>
</template>

<style scoped></style>
