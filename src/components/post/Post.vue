<template>
  <div class="containerPost">
    <h1>Io sono il post</h1>
  </div>
</template>

<script>
  /*
  import PostDate from './PostDate.vue'
  import PostAutore from './PostAutore.vue'
  import PostOnda from './PostOnda.vue'
  import PostImg from './PostImg.vue'
*/
  export default {
    components: {
      /*PostDate,
      PostOnda,
      PostImg,
      PostAutore*/
    },
    props: {
    },
    data: function() {
      return {
      }
    }
  }
</script>

<style >
  .containerPost {
    border: 1px solid blue;
    margin: 0 auto;
  }
  .clear{width: 0.01em;height: 0.01em;clear:both;}
</style>
