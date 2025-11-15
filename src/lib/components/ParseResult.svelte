<script lang="ts">
  import type { ParsedArn } from '$lib/types';

  export let parsed: ParsedArn | null;
  export let error: string | null;

  $: hasResult = parsed !== null && error === null;
</script>

{#if error}
  <div class="alert alert-danger" role="alert">
    {error}
  </div>
{:else if hasResult}
  <table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th>Component</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Partition</td>
        <td>{parsed.partition}</td>
      </tr>
      <tr>
        <td>Service</td>
        <td>{parsed.service}</td>
      </tr>
      <tr>
        <td>Region</td>
        <td>{parsed.region || 'N/A'}</td>
      </tr>
      <tr>
        <td>Account ID</td>
        <td>{parsed.accountId || 'N/A'}</td>
      </tr>
      <tr>
        <td>Resource Type</td>
        <td>{parsed.resourceType || 'N/A'}</td>
      </tr>
      <tr>
        <td>Resource ID</td>
        <td>{parsed.resourceId || 'N/A'}</td>
      </tr>
      <tr>
        <td>Full Resource</td>
        <td>{parsed.fullResource}</td>
      </tr>
      <tr>
        <td>Original ARN</td>
        <td>{parsed.original}</td>
      </tr>
    </tbody>
  </table>
{/if}