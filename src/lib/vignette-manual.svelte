<script lang="ts">
  // manual coordinate system
  export let left = 0;
  export let top = 0;
  export let bottom = 0;
  export let right = 0;
  $: width = right - left;
  $: height = bottom - top;
</script>

<div>
  <!-- left -->
  <div class="vignette fixed left-0 top-0 h-full " style={'width: ' + left + 'px; '}></div>
  <!-- right -->
  <div class="vignette fixed top-0 h-full" style={'left: ' + right + 'px; width: 100%'}></div>
  <!-- top -->
  <div class="vignette fixed top-0" style={'width: ' + width + 'px; height: ' + top + 'px; left: ' + left + 'px;' }></div>
  <!-- bottom -->
  <div class="vignette fixed" style={'width: ' + width + 'px; top: ' + bottom + 'px; left: ' + left + 'px; height: 100%' }></div>

  <div class="fixed border border-solid input-success"
    style={'left: ' + left + 'px; top: ' + top + 'px; width: ' + width + 'px; height: ' + height + 'px;'}>
  </div>
</div>

<style>
  div.vignette {
    background-color: #333333cc;
  }
</style>