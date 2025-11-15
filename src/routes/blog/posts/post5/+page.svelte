<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Using the Parser in IAM Policies | ARN Parser Blog</title>
  <meta name="description" content="Best practices for writing secure, precise IAM policies using validated ARNs — avoid common pitfalls and enforce least privilege." />
  <meta property="og:title" content="Using the Parser in IAM Policies | ARN Parser Blog" />
  <meta property="og:description" content="Best practices for writing secure, precise IAM policies using validated ARNs — avoid common pitfalls and enforce least privilege." />
  <meta property="og:url" content="{base}/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Using the Parser in IAM Policies</p>
  </div>

  <article class="prose">
    <h1>Using the Parser in IAM Policies</h1>
   
    <p class="post-meta">Published: November 9, 2025</p>
   
    <p>IAM policies are only as secure as the ARNs they reference. A single typo or malformed ARN can grant unintended access — or break your application. This guide shows how to use the ARN Parser to write bulletproof policies.</p>
   
    <h2>Why Validate ARNs in Policies?</h2>
    <p>AWS evaluates IAM policies at runtime. Invalid ARNs cause:</p>
    <ul>
      <li>Access denied errors (even with correct permissions)</li>
      <li>Overly broad access via wildcards</li>
      <li>Deployment failures in CI/CD</li>
    </ul>
   
    <h3>Common Policy Mistakes</h3>
    <pre><code>{`// Wrong: Missing colon
"Resource": "arn:aws:s3::my-bucket"

// Wrong: Typos in service
"Resource": "arn:aws:ec3:us-east-1:123:instance/i-abc"

// Wrong: Hardcoded account
"Resource": "arn:aws:s3:::my-bucket" in shared templates`}</code></pre>
   
    <h2>Best Practices</h2>
    <h3>1. Always Validate Before Apply</h3>
    <p>Paste every ARN into the parser. Green table = safe to use.</p>
   
    <h3>2. Use Wildcards Strategically</h3>
    <pre><code>{`// Good: Limit to prefix
"Resource": "arn:aws:s3:::prod-logs/app1/*"

// Bad: Too broad
"Resource": "*"`}</code></pre>
   
    <h3>3. Leverage CloudFormation Parameters</h3>
    <pre><code>{`Resource: !Sub "arn:aws:lambda:${'${'}AWS::Region}:${'${'}AWS::AccountId}:function:${'${'}FunctionName}"`}</code></pre>
   
    <h3>4. Cross-Account ARNs</h3>
    <p>For cross-account access:</p>
    <pre><code>{`"Resource": "arn:aws:iam::456789012345:root"`}</code></pre>
    <p>Validate both source and target account ARNs.</p>
   
    <h2>Policy Testing Workflow</h2>
    <ol>
      <li>Write policy in JSON/YAML</li>
      <li>Extract all ARNs</li>
      <li>Paste into parser → confirm structure</li>
      <li>Apply via CLI or console</li>
    </ol>
   
    <h2>Real-World Example</h2>
    <p>Lambda function reading from S3:</p>
    <pre><code>{`{
  "Effect": "Allow",
  "Action": ["s3:GetObject"],
  "Resource": "arn:aws:s3:::data-prod-2025/input/*.csv"
}`}</code></pre>
    <p>Parser confirms: service = s3, resourceType = bucket, resourceId = data-prod-2025/input/*.csv</p>
   
    <h2>FAQ</h2>
    <details>
      <summary>Can I use variables in ARNs?</summary>
      <p>Yes, in CloudFormation/CDK. Always validate the final rendered ARN.</p>
    </details>
    <details>
      <summary>Do principals need ARNs?</summary>
      <p>Yes for cross-account. Use <code>arn:aws:iam::123:role/X</code> in trust policies.</p>
    </details>
    <details>
      <summary>What about condition keys?</summary>
      <p>Use <code>aws:ResourceTag/</code> with validated ARNs for tag-based access control.</p>
    </details>
   
    <p class="italic-note">Never deploy an IAM policy without validating every ARN. One mistake = one breach.</p>
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

  .prose ul, .prose ol {
    list-style-type: 'Arrow ';
    padding-left: 1.5rem;
    color: #212529;
  }
  .prose ul li::marker, .prose ol li::marker {
    color: #0d6efd;
  }
  .prose li {
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