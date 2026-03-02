<template>
  <div class="divider-shape" :class="rotate ? 'rotate' : ''">
    
  </div>
</template>

<script lang="ts" setup>


defineProps<{
rotate?:boolean
}>();
</script>

<style scoped lang="scss">
.divider-shape{

    position: relative;
    height: 17px;
    z-index:1;
    width: 100%;
    background-image: url("assets/images/shape1.png");
    
}

.rotate{
    transform: rotate(180deg);
}



</style>