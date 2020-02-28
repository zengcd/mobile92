<template>
  <div class='container'>
    <!-- van-skeleton
    skeleton:骨架屏
    作用：占位置，内容占位，内容准备好了，骨架屏小时，显示内容
    title:第一行内容
    :row  :设置行数显示（除第一行还有几行内容）
    avatar：设置前面小圆圈 -->
    <van-skeleton title avatar :row="3" />
    <van-skeleton title avatar :row="3" />
    <van-skeleton title avatar :row="3" />
  </div>
</template>

<script>
export default {
  name: 'video-index'
}
</script>

<style scoped lang='less'>
.van-skeleton{
  margin-top: 10px;
}
</style>
