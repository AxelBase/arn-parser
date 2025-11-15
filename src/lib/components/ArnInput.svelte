<script lang="ts">
  import { onMount } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { writable } from 'svelte/store';

  export let arn: Writable<string>;
  export let parse: () => void;

  let inputElement: HTMLInputElement;

  onMount(() => {
    inputElement.focus();
  });

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    $arn = target.value;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      parse();
    }
  }
</script>

<div class="mb-3">
  <input
    type="text"
    class="form-control"
    placeholder="Enter AWS ARN (e.g., arn:aws:s3:::my-bucket)"
    bind:this={inputElement}
    value={$arn}
    on:input={handleInput}
    on:keydown={handleKeydown}
  />
</div>