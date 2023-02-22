<script>
  import { moveable } from '$features/draggable';
</script>

<div use:moveable />

<style lang="scss">
  div {
    position: absolute;
    width: 100px;
    height: 100px;
    background: #000;
  }
</style>
