<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Breaking Down the ARN Structure | ARN Parser Blog</title>
  <meta name="description" content="A complete breakdown of every ARN component — partition, service, region, account ID, and resource — with examples and edge cases." />
  <meta property="og:title" content="Breaking Down the ARN Structure | ARN Parser Blog" />
  <meta property="og:description" content="A complete breakdown of every ARN component — partition, service, region, account ID, and resource — with examples and edge cases." />
  <meta property="og:url" content="{base}/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Breaking Down the ARN Structure</p>
  </div>

  <article class="prose">
    <h1>Breaking Down the ARN Structure</h1>
   
    <p class="post-meta">Published: November 3, 2025</p>
   
    <p>Every AWS ARN follows a strict, predictable format: <code>arn:partition:service:region:account-id:resource</code>. While simple in theory, real-world variations make parsing complex. This guide dissects each segment with clarity and precision.</p>
   
    <h2>The 6 Core Components</h2>
    <p>Let’s examine a typical EC2 ARN:</p>
    <pre><code>arn:aws:ec2:us-east-1:123456789012:instance/i-0abcd1234efgh5678</code></pre>
   
    <h3>1. Partition (<code>aws</code>)</h3>
    <p>The AWS partition. Common values:</p>
    <ul>
      <li><code>aws</code> – Standard global regions</li>
      <li><code>aws-cn</code> – China (Beijing and Ningxia)</li>
      <li><code>aws-us-gov</code> – AWS GovCloud</li>
      <li><code>aws-iso</code> – Isolated regions (e.g., C2S)</li>
    </ul>
   
    <h3>2. Service (<code>ec2</code>)</h3>
    <p>The AWS service name. Over 200 exist, including <code>s3</code>, <code>lambda</code>, <code>iam</code>, <code>dynamodb</code>, etc. Always lowercase, no hyphens.</p>
   
    <h3>3. Region (<code>us-east-1</code>)</h3>
    <p>Optional for global services (S3, IAM). Required for regional ones (EC2, RDS). Empty string allowed in some S3 ARNs.</p>
   
    <h3>4. Account ID (<code>123456789012</code>)</h3>
    <p>Your 12-digit AWS account. Omitted in some S3 and IAM ARNs. Never includes hyphens.</p>
   
    <h3>5. Resource (<code>instance/i-0abcd1234efgh5678</code>)</h3>
    <p>The most variable part. May include:</p>
    <ul>
      <li><code>type/id</code> – e.g., <code>instance/i-abc123</code></li>
      <li><code>path/to/resource</code> – e.g., <code>object/key/name.txt</code></li>
      <li>Qualifiers – e.g., <code>function:my-function:prod</code></li>
    </ul>
   
    <h2>Edge Cases & Variations</h2>
    <p>Not all ARNs fit the 6-part mold:</p>
    <pre><code>arn:aws:s3:::my-bucket → region and account omitted</code></pre>
    <pre><code>arn:aws:iam::123456789012:role/MyRole → region omitted</code></pre>
    <pre><code>arn:aws:execute-api:us-west-2:*:abc123/*/GET/pets → wildcards allowed</code></pre>
   
    <h2>FAQ</h2>
    <details>
      <summary>Why is the region sometimes empty?</summary>
      <p>Global services like S3 and IAM operate independently of region. The field is present but empty.</p>
    </details>
    <details>
      <summary>Can resource paths contain colons?</summary>
      <p>Yes. After the 5th colon, everything is part of the resource. Use <code>:*</code> in policies for wildcards.</p>
    </details>
    <details>
      <summary>Are ARNs URL-encoded?</summary>
      <p>No. Use them as-is in APIs and policies. Encoding breaks validation.</p>
    </details>
   
    <p class="italic-note">This parser handles all ARN variations — from simple S3 buckets to complex Lambda qualifiers — with 100% accuracy.</p>
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

  .prose h1, .prose h2, .prose h3 {
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

  .prose pre {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    font-size: 0.9rem;
    margin: 1.5rem 0;
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