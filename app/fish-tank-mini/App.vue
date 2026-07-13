<template>
  <view><page-meta><navigation-bar :title="navTitle" /></page-meta><router-view /></view>
</template>
<script>
export default { data() { return { navTitle: '迷你鱼箱' } } }
</script>
<style>page{background:#f5f5f5}uni-page{background:#f5f5f5}</style>
