<template>
  <List></List>
  <Card></Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from '@/components/Card.vue';
import List from '@/components/List.vue';

type tableItem = {
  date: string;
  name: string;
  address: string;
}

export default defineComponent({
  components: {
    Card,
    List,
  },
});
</script>

<style lang="ts">

</style>
