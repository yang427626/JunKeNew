<template>
  <div>
    <div v-for="(item, index) in processNodeList" :key="index">
      <p>{{ item.nodeName }}</p>
      <Nava2 :processNodeList="item.processNodeList"></Nava2>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    processNodeList: Array,
  },
};
</script>