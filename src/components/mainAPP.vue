<template>
  <div class="mainAPP">
    <moduleList class="list"/>
  </div>
</template>

<script>
import moduleList from './moduleList';

export default {
  name: 'mainAPP',
  props: {
    msg: String
  },
  components: {
    moduleList
  }
}
</script>

<style scoped lang="scss">

</style>
