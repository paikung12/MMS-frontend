<template>
  <v-app>
    <ErrorSnackbar/>
    <router-view></router-view>
  </v-app>
</template>

<script>

import ErrorSnackbar from "./components/error";
export default {
  name: 'App',
  components: {ErrorSnackbar},
  data: () => ({

  }),
};
</script>
