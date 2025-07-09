<script lang="ts">
  import { css } from 'styled-system/css';
  import { onMount } from 'svelte';
  import { getMikanChanStatus } from '$lib/services/api';

  let result: boolean | null = null;
  let loading = true;
  let error: string | null = null;

  onMount(async () => {
    try {
      const response = await getMikanChanStatus();
      result = response.result;
    } catch (err) {
      error = err instanceof Error ? err.message : 'Unknown error occurred';
    } finally {
      loading = false;
    }
  });
</script>

<div
	class={css({
		fontSize: '2xl',
		fontWeight: 'bold',
		color: 'red.500'
	})}
>
	Hello 🐼!
</div>

<div class={css({ marginTop: '4', padding: '4' })}>
  {#if loading}
    <p>Loading...</p>
  {:else if error}
    <p class={css({ color: 'red.500' })}>Error: {error}</p>
  {:else}
    <p>Result: <span class={css({ fontWeight: 'bold' })}>{result}</span></p>
  {/if}
</div>