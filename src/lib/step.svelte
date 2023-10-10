<script lang="ts">
  import { gfade } from '@artesgo/holokit';
  export let from = 0;
  export let to = 0;
  export let current = 0;
  export let duration = 500;
</script>

{#if current >= from && current <= to}
  <span transition:gfade={{ duration }}>
    <slot />
  </span>
{/if}

<style>
  span {
    width: auto;
    flex-shrink: 1;
    position: absolute;
  }
</style>