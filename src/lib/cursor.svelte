<script lang="ts">
  import gsap from 'gsap';
	import { onMount } from 'svelte';
	import { linear } from 'svelte/easing';

  export let size = 48;
  // export let asset = '';

  let x = 0;
  let y = 0;

  function mousemove(e: MouseEvent) {
    x = e.clientX;
    y = e.clientY;
  }
  $: style = 'left: ' + (x + 24) + 'px; top: ' + (y + 4) + 'px;'
  $: styleCursor = 'left: ' + (x - (size / 2)) + 'px; top: ' + (y - (size / 2)) + 'px;'

  onMount(() => {
    gsap.to('#cursor', {
      rotate: 360,
      duration: 8,
      ease: linear,
      repeat: -1,
    });
  });
</script>

<svelte:window on:mousemove={mousemove} />

<!-- <div class="fixed z-10 text-amber-300 bg-slate-800 rounded-md px-4" style={style}>x: {x}, y: {y}</div> -->
<img class="fixed z-50" id="cursor" width={size + 'px'} height={size + 'px'} src="./star-cursor.svg" alt="" style={styleCursor} />

<style>
  #cursor {
    pointer-events: none;
  }
</style>