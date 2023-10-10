<script lang="ts">
  export let element: HTMLElement;
  export let padding = 8;

  $: _element = element ? element.getBoundingClientRect() : {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };
  $: box = {
    top: _element.top - padding,
    bottom: _element.bottom + padding,
    left: _element.left - padding,
    right: _element.right + padding,
    width: _element.right - _element.left + padding + padding,
    height: _element.bottom - _element.top + padding + padding,
  }
</script>

<div>
  <!-- left -->
  <div class="vignette fixed left-0 top-0 h-full " style={'width: ' + box.left + 'px; '}></div>
  <!-- right -->
  <div class="vignette fixed top-0 h-full" style={'left: ' + box.right + 'px; width: 100%'}></div>
  <!-- top -->
  <div class="vignette fixed top-0" style={'width: ' + box.width + 'px; height: ' + box.top + 'px; left: ' + box.left + 'px;' }></div>
  <!-- bottom -->
  <div class="vignette fixed" style={'width: ' + box.width + 'px; top: ' + box.bottom + 'px; left: ' + box.left + 'px; height: 100%' }></div>

  <div class="fixed border border-solid input-success"
    style={'left: ' + box.left + 'px; top: ' + box.top + 'px; width: ' + box.width + 'px; height: ' + box.height + 'px;'}>
  </div>
</div>

<style>
  div.vignette {
    background-color: #333333cc;
  }
</style>