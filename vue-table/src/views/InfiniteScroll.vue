<template>
  <div>
    <v-card
        elevation="16"
        class="mx-auto"
    >
      <v-virtual-scroll
          bench="1"
          :items="posts"
          height="500"
          item-height="64"
      >
        <template v-slot:default="{ item }">
          <v-list-item :key="item">
            <v-list-item-content>
              <v-list-item-title>
                {{ item.id }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.name }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.email }}
              </v-list-item-title>
            </v-list-item-content>

          </v-list-item>


          <v-divider></v-divider>
        </template>
      </v-virtual-scroll>
    </v-card>
  </div>

</template>

<script>
export default {
  name: 'InfiniteScroll',
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