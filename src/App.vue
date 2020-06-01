<template>
  <div id="app" >
    <v-header/>
    <router-view/>
  </div>
</template>
<script>
/* ============
 * Entry Point
 * ============
 *
 * The entry point of the application.
 */
import VHeader from '@/layouts/Header.vue';

export default {
  /**
   * The name of the application.
   */
  name: 'FacebookMock',

  components: {
    VHeader,
  },
  mounted() {
  },
};
</script>

<style scoped>
</style>
