<script lang="ts">
  import { onMount } from 'svelte';
  import type { ParsedArn } from '$lib/types';

  export let parsed: ParsedArn | null;

  let copied = false;

  async function copyToClipboard() {
    if (parsed) {
      const json = JSON.stringify(parsed, null, 2);
      await navigator.clipboard.writeText(json);
      copied = true;
      setTimeout(() => (copied = false), 2000);
    }
  }
</script>

<button class="btn btn-primary" on:click={copyToClipboard} disabled={!parsed}>
  {copied ? 'Copied!' : 'Copy JSON'}
</button>