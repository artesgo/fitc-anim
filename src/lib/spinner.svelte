<script lang="ts">
  import gsap from 'gsap';
	import { onMount } from 'svelte';
	import { linear } from 'svelte/easing';
  export let left = 100;
  export let top = 100;
  $: style = "left: " + left + "px; top: " + top + "px;";

  onMount(() => {
    gsap.to('.spinner', {
      rotate: 360,
      duration: 12,
      ease: linear,
      repeat: -1,
    });
    
    gsap.to('.small-spinner', {
      rotate: -360,
      duration: 8,
      ease: linear,
      repeat: -1,
    });
  });
</script>

<div class='relative'>
  <div class="fixed z-50" {style}>
    <div class='spinner flex-around w-24 h-24 bg-teal-500 m-0'>
      <div class='absolute'>
        <slot></slot>
      </div>
      <div class="spinner small-spinner w-20 h-20 border border-solid m-0"></div>
    </div>
  </div>
</div>

<style lang="postcss">
  .spinner {
    @apply items-center rounded-full;
  }
  .border-solid {
    border-left: dashed;
    border-width: 2px;
    border-color: white;
  }
  .flex-around {
    @apply flex justify-around;
  }
</style>