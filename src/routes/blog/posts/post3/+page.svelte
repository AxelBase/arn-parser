<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Common ARN Patterns by Service | ARN Parser Blog</title>
  <meta name="description" content="A service-by-service guide to ARN formats for S3, EC2, IAM, Lambda, DynamoDB, RDS, and more — with copyable examples." />
  <meta property="og:title" content="Common ARN Patterns by Service | ARN Parser Blog" />
  <meta property="og:description" content="A service-by-service guide to ARN formats for S3, EC2, IAM, Lambda, DynamoDB, RDS, and more — with copyable examples." />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Common ARN Patterns by Service</p>
  </div>

  <article class="prose">
    <h1>Common ARN Patterns by Service</h1>
   
    <p class="post-meta">Published: November 5, 2025</p>
   
    <p>Each AWS service uses ARNs differently. While the base structure is consistent, resource paths and optional fields vary widely. This cheat sheet covers the most common patterns — with validated, copyable examples.</p>
   
    <h2>S3 Buckets & Objects</h2>
    <ul>
      <li>Bucket: <code>arn:aws:s3:::my-bucket</code></li>
      <li>Object: <code>arn:aws:s3:::my-bucket/path/to/file.txt</code></li>
      <li>Folder: <code>arn:aws:s3:::my-bucket/logs/</code></li>
    </ul>
    <p><strong>Note:</strong> Region and account ID are omitted. Use wildcards in policies: <code>arn:aws:s3:::my-bucket/private/*</code></p>
   
    <h2>EC2 Instances & Volumes</h2>
    <ul>
      <li>Instance: <code>arn:aws:ec2:us-east-1:123456789012:instance/i-0abcd1234efgh5678</code></li>
      <li>Volume: <code>arn:aws:ec2:us-east-1:123456789012:volume/vol-0123456789abcdef0</code></li>
      <li>AMI: <code>arn:aws:ec2:us-east-1::image/ami-0abcd1234efgh5678</code></li>
    </ul>
   
    <h2>IAM Roles & Policies</h2>
    <ul>
      <li>Role: <code>arn:aws:iam::123456789012:role/MyAppRole</code></li>
      <li>Policy: <code>arn:aws:iam::123456789012:policy/MyAppPolicy</code></li>
      <li>AWS-Managed: <code>arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess</code></li>
    </ul>
   
    <h2>Lambda Functions</h2>
    <ul>
      <li>Function: <code>arn:aws:lambda:us-east-1:123456789012:function:my-function</code></li>
      <li>Version: <code>arn:aws:lambda:us-east-1:123456789012:function:my-function:1</code></li>
      <li>Alias: <code>arn:aws:lambda:us-east-1:123456789012:function:my-function:prod</code></li>
    </ul>
   
    <h2>DynamoDB Tables</h2>
    <ul>
      <li>Table: <code>arn:aws:dynamodb:us-east-1:123456789012:table/Users</code></li>
      <li>Index: <code>arn:aws:dynamodb:us-east-1:123456789012:table/Users/index/email-index</code></li>
    </ul>
   
    <h2>RDS & Other Services</h2>
    <ul>
      <li>RDS Instance: <code>arn:aws:rds:us-east-1:123456789012:db:my-database</code></li>
      <li>SNS Topic: <code>arn:aws:sns:us-east-1:123456789012:alerts</code></li>
      <li>SQS Queue: <code>arn:aws:sqs:us-east-1:123456789012:my-queue</code></li>
    </ul>
   
    <h2>Pro Tips</h2>
    <ul>
      <li>Use <code>*</code> wildcards only in resource paths (after final colon)</li>
      <li>Never hardcode account IDs in templates</li>
      <li>Validate all ARNs before applying IAM policies</li>
    </ul>
   
    <h2>FAQ</h2>
    <details>
      <summary>Can I use ARNs across regions?</summary>
      <p>Yes, if the service supports it (e.g., IAM roles, S3 with Cross-Region Replication).</p>
    </details>
    <details>
      <summary>Are ARNs required in the AWS Console?</summary>
      <p>No — the console abstracts them. But CLI, SDKs, and IaC require full ARNs.</p>
    </details>
    <details>
      <summary>How do I find a resource’s ARN?</summary>
      <p>Use the AWS Console (resource details), CLI (<code>aws resource describe</code>), or this parser.</p>
    </details>
   
    <p class="italic-note">Bookmark this page. Copy, paste, and validate ARNs instantly with zero guesswork.</p>
  </article>
</div>

<style>
  /* Same styles as post1 */
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: #6c757d;
  }
  .breadcrumbs a {
    color: #0d6efd;
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  .breadcrumbs p {
    margin: 0;
  }

  .prose {
    line-height: 1.8;
  }

  .prose .post-meta {
    color: #6c757d;
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #dee2e6;
    padding-bottom: 1rem;
  }

  .prose h1, .prose h2{
    color: #0d6efd;
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    margin-top: 2.5rem;
    border-bottom: 1px solid #e9ecef;
    padding-bottom: 0.5rem;
  }

  .prose p {
    color: #212529;
  }

  .prose ul {
    list-style-type: '→ ';
    padding-left: 1.5rem;
    color: #212529;
  }
  .prose ul li::marker {
    color: #0d6efd;
  }
  .prose ul li {
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .prose details {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 6px;
    padding: 1rem;
    margin-bottom: 1rem;
    transition: background-color 0.2s ease;
  }

  .prose details[open] {
    background-color: #e9ecef;
  }

  .prose summary {
    cursor: pointer;
    font-weight: 600;
    color: #0d6efd;
    list-style: none;
  }

  .prose summary::-webkit-details-marker {
    display: none;
  }

  .prose summary::before {
    content: '+';
    margin-right: 0.75rem;
    color: #0d6efd;
    font-weight: bold;
    display: inline-block;
    transition: transform 0.2s ease;
  }

  .prose details[open] summary::before {
    transform: rotate(45deg);
  }

  .prose details p {
    margin-top: 1rem;
    padding-left: 1.5rem;
    border-left: 2px solid #0d6efd;
    color: #495057;
  }

  .prose .italic-note {
    font-style: italic;
    color: #6c757d;
    text-align: center;
    margin-top: 3rem;
  }
</style>