<template>
  <div class="home">
    <VueTable/>
  </div>
</template>

<script>
// @ is an alias to /src
import VueTable from "../components/VueTable";

export default {
  name: 'Pagination',
  components: {
    VueTable
  }
}
</script>
