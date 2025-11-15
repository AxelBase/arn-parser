<script lang="ts">
  import type { Writable } from 'svelte/store';

  export let arn: Writable<string>;
  export let parse: () => void;

  const examples = [
    { label: 'S3', value: 'arn:aws:s3:::my-bucket' },
    { label: 'EC2', value: 'arn:aws:ec2:us-east-1:123456789012:instance/i-abc123' },
    { label: 'IAM Role', value: 'arn:aws:iam::123456789012:role/MyRole' },
    { label: 'RDS', value: 'arn:aws-cn:rds:cn-north-1:123456789012:db:mysql-db' }
  ];

  function setExample(value: string) {
    $arn = value;
    parse();
  }
</script>

<div class="mb-3">
  <p>Examples:</p>
  {#each examples as example}
    <button class="btn btn-link" on:click={() => setExample(example.value)}>
      {example.label}
    </button>
  {/each}
</div>