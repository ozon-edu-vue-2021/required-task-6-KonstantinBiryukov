<template>
  <v-card>
    <v-card-title>
      <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table v-if="posts.length"
                  :headers="headers"
                  :items="posts"
                  :items-per-page="10"
                  :search="search"
                  class="elevation-1">
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: 'VueTable',
  data() {
    return {
      search: ""
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    headers() {
      return this.$store.state.headers;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
