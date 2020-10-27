<template>
  <v-app>
    <v-main>
      <div class="mt-10 d-flex align-center justify-center">
        <FundAccModal />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import FundAccModal from './components/FundAccModal/FundAccModal.vue';
export default {
  name: 'App',
  components: {
    FundAccModal,
  },
};
</script>

<style lang="scss"></style>
