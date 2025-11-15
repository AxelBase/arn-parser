<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | AWS ARN Parser</title>
  <meta name="description" content="Review the terms of use for the AWS ARN Parser — a free, open-source tool with no warranties or liabilities." />
  <meta property="og:title" content="Terms and Conditions | AWS ARN Parser" />
  <meta property="og:description" content="Review the terms of use for the AWS ARN Parser — a free, open-source tool with no warranties or liabilities." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>

    <p class="post-meta">Last Updated: November 15, 2025</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using the <strong>AWS ARN Parser</strong> ("the Tool"), you agree to these Terms and Conditions. This is a <em>free, open-source utility</em> provided as-is for educational and professional use. If you do not agree, do not use the Tool.</p>

    <h2>2. Nature of the Tool</h2>
    <p>The AWS ARN Parser is a <strong>client-side web application</strong> built with SvelteKit, TypeScript, and Bootstrap. It parses and validates Amazon Resource Names (ARNs) entirely in your browser. <strong>No data is transmitted, stored, or logged</strong> by the developer or any third party.</p>

    <h2>3. License to Use</h2>
    <p>You are granted a <strong>non-exclusive, royalty-free, worldwide license</strong> to use, copy, and modify the Tool under the <strong>MIT License</strong>. You may:</p>
    <ul>
      <li>Use it for personal or commercial AWS development.</li>
      <li>Fork and deploy your own version.</li>
      <li>Integrate it into internal tools or documentation.</li>
    </ul>
    <p>Attribution is appreciated but not required.</p>

    <h2>4. Prohibited Actions</h2>
    <p>You must <strong>not</strong>:</p>
    <ul>
      <li>Use the Tool for illegal purposes or to violate AWS policies.</li>
      <li>Attempt to reverse-engineer or extract proprietary algorithms (none exist — it’s open source).</li>
      <li>Claim the Tool is officially endorsed by AWS.</li>
      <li>Remove or alter the MIT license or copyright notice in forks.</li>
    </ul>

    <h2>5. No Warranties</h2>
    <p>The Tool is provided <strong>"AS IS"</strong> without warranties of any kind, express or implied, including but not limited to:</p>
    <ul>
      <li>Accuracy of parsing results</li>
      <li>Fitness for a particular purpose</li>
      <li>Non-infringement</li>
      <li>Availability or uptime</li>
    </ul>
    <p><em>Use at your own risk.</em> Always validate critical ARNs in the AWS Console or CLI.</p>

    <h2>6. Limitation of Liability</h2>
    <p>In no event shall <strong>AxelBase</strong> or contributors be liable for any damages, including:</p>
    <ul>
      <li>Loss of access due to malformed ARNs</li>
      <li>Security incidents from incorrect IAM policies</li>
      <li>Business interruption or data loss</li>
    </ul>
    <p>Maximum liability is limited to <strong>ZAR 0.00</strong>.</p>

    <h2>7. Accuracy & AWS Compliance</h2>
    <p>The Tool follows the official AWS ARN specification as of November 2025. However, <strong>AWS may update formats</strong>. We are not responsible for:</p>
    <ul>
      <li>Future ARN changes</li>
      <li>Service-specific edge cases</li>
      <li>Errors in user-input ARNs</li>
    </ul>
    <p>Always cross-reference with <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html" target="_blank" rel="noopener">AWS documentation</a>.</p>

    <h2>8. Termination</h2>
    <p>We reserve the right to suspend or terminate access to the hosted version at <code>arn-parser.vercel.app</code> or GitHub Pages without notice.</p>

    <h2>9. Governing Law</h2>
    <p>These terms are governed by the laws of <strong>Norway</strong>. Disputes shall be resolved in the courts of Cape Town.</p>

    <h2>10. Changes to Terms</h2>
    <p>We may update these terms. Changes will be posted here. Continued use implies acceptance.</p>

    <p class="italic-note"><strong>Built to help, not to hinder.</strong> Use responsibly. Validate wisely. Deploy confidently.</p>
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

  .prose h1, .prose h2 {
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

  .prose .italic-note {
    font-style: italic;
    color: #6c757d;
    text-align: center;
    margin-top: 3rem;
  }
</style>