<template>
  <b-container fluid>
    <b-row class="justify-content-center">
      <b-col lg="3">
        <container-task></container-task>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ContainerTask from './ContainerTask.vue'
export default {
  name: 'toDoList',
  components: { ContainerTask }
}
</script>
