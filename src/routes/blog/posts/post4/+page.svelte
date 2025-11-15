<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>How This ARN Parser Works | ARN Parser Blog</title>
  <meta name="description" content="Explore the inner workings of the AWS ARN Parser — deterministic validation, regex patterns, edge case handling, and zero-server architecture." />
  <meta property="og:title" content="How This ARN Parser Works | ARN Parser Blog" />
  <meta property="og:description" content="Explore the inner workings of the AWS ARN Parser — deterministic validation, regex patterns, edge case handling, and zero-server architecture." />
  <meta property="og:url" content="{base}/blog/posts/post4" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>How This ARN Parser Works</p>
  </div>

  <article class="prose">
    <h1>How This ARN Parser Works</h1>
   
    <p class="post-meta">Published: November 7, 2025</p>
   
    <p>This AWS ARN Parser is a fully client-side, zero-dependency web tool built with SvelteKit and Bootstrap. It validates and extracts ARN components instantly — no API calls, no tracking, no data sent to servers. Let’s dive into the technical architecture and parsing logic.</p>
   
    <h2>Core Design Principles</h2>
    <p>The parser follows three strict rules:</p>
    <ul>
      <li><strong>Deterministic</strong>: Same input → same output, every time</li>
      <li><strong>Privacy-first</strong>: All processing happens in your browser</li>
      <li><strong>Instant</strong>: Results appear in under 100ms</li>
    </ul>
   
    <h3>Why Client-Side?</h3>
    <p>ARNs often appear in IAM policies, CloudFormation templates, and CLI scripts — sensitive contexts. Running validation locally eliminates data exposure risks. The entire app is static HTML/JS/CSS, deployable on GitHub Pages.</p>
   
    <h2>Parsing Logic Step-by-Step</h2>
    <p>The <code>arnParser.ts</code> utility uses a multi-stage validation pipeline:</p>
   
    <h3>1. Prefix Check</h3>
    <p>Ensures input starts with <code>arn:</code>. Case-sensitive.</p>
    <pre><code>{`if (!input.startsWith('arn:')) → error`}</code></pre>
   
    <h3>2. Colon Count</h3>
    <p>Splits on <code>:</code> and requires 6+ parts (S3 ARNs may have empty fields).</p>
    <pre><code>{`parts.length >= 6`}</code></pre>
   
    <h3>3. Partition Validation</h3>
    <p>Checks against known AWS partitions:</p>
    <pre><code>{`['aws', 'aws-cn', 'aws-us-gov', 'aws-iso', 'aws-iso-b']`}</code></pre>
   
    <h3>4. Service & Resource Extraction</h3>
    <p>Service is always part 3. Resource is everything after part 5. The parser then intelligently splits resource into <code>type</code> and <code>id</code> using <code>/</code> or <code>:</code> delimiters.</p>
   
    <h3>5. Special Cases</h3>
    <ul>
      <li>S3: <code>arn:aws:s3:::bucket</code> → region/account omitted</li>
      <li>IAM: <code>arn:aws:iam::123:role/X</code> → region empty</li>
      <li>Lambda versions: <code>:prod</code>, <code>:1</code></li>
    </ul>
   
    <h2>Output Structure</h2>
    <p>Parsed result is a structured object:</p>
    <pre><code>{`{
  partition: "aws",
  service: "ec2",
  region: "us-east-1",
  accountId: "123456789012",
  resourceType: "instance",
  resourceId: "i-abc123",
  fullResource: "instance/i-abc123",
  original: "arn:aws:ec2:..."
}`}</code></pre>
   
    <h2>Validation Edge Cases</h2>
    <p>The parser handles:</p>
    <ul>
      <li>Empty region/account in global services</li>
      <li>Colons in resource paths (e.g., Lambda qualifiers)</li>
      <li>Wildcards in IAM policies (<code>*</code>)</li>
      <li>Case sensitivity in resource IDs</li>
    </ul>
   
    <h2>FAQ</h2>
    <details>
      <summary>Does it support future AWS partitions?</summary>
      <p>Yes. Add new partitions to the validation array in <code>arnParser.ts</code>.</p>
    </details>
    <details>
      <summary>Can I fork and customize it?</summary>
      <p>Absolutely. It’s open-source, MIT-licensed, and deployable anywhere.</p>
    </details>
    <details>
      <summary>Why not use AWS SDK?</summary>
      <p>SDKs are heavy and require credentials. This tool is lightweight and works offline.</p>
    </details>
   
    <p class="italic-note">Built for speed, privacy, and accuracy — validate ARNs before they break your deployment.</p>
  </article>
</div>

<style>
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
    list-style-type: 'Arrow ';
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
    white-space: pre-wrap;
    word-break: break-all;
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