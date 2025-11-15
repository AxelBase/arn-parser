<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | AWS ARN Parser</title>
  <meta name="description" content="Learn how the AWS ARN Parser protects your privacy with fully client-side processing and zero data collection." />
  <meta property="og:title" content="Privacy Policy | AWS ARN Parser" />
  <meta property="og:description" content="Learn how the AWS ARN Parser protects your privacy with fully client-side processing and zero data collection." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>

    <p class="post-meta">Effective Date: November 15, 2025</p>

    <h2>1. Introduction</h2>
    <p>Welcome to the <strong>AWS ARN Parser</strong>, a lightweight, open-source web utility developed by <strong>AxelBase.</strong> This tool enables developers to validate and break down Amazon Resource Names (ARNs) instantly in the browser. We are deeply committed to <em>privacy by design</em>. Because the entire application runs <strong>100% client-side</strong>, <strong>we collect no personal data, usage logs, or input content</strong>. This policy explains our data practices with full transparency.</p>

    <h2>2. Zero Data Collection</h2>
    <p>The ARN Parser is engineered to operate without any data gathering. We do <strong>not</strong> collect:</p>
    <ul>
      <li><strong>Personal Information</strong>: No names, emails, IP addresses, or account details.</li>
      <li><strong>Usage Analytics</strong>: No tracking pixels, cookies, or session recording.</li>
      <li><strong>ARN Input Data</strong>: All parsing happens in your browser using JavaScript — nothing is sent to servers.</li>
      <li><strong>Device or Browser Data</strong>: No fingerprinting, no telemetry.</li>
    </ul>
    <p>Your ARNs and parsed outputs <em>never leave your device</em>. There is no backend, no database, and no logging infrastructure.</p>

    <h2>3. How the Tool Works</h2>
    <p>When you use the AWS ARN Parser:</p>
    <ul>
      <li><strong>Input Processing</strong>: You enter an ARN into the text field. Validation and component extraction occur instantly via <code>arnParser.ts</code> in your browser.</li>
      <li><strong>No Network Requests</strong>: All logic is bundled in static JavaScript. No API calls are made during normal use.</li>
      <li><strong>Local Features Only</strong>: Copy to clipboard, example loading, and JSON export use native browser APIs.</li>
    </ul>
    <p>This <strong>stateless, offline-first</strong> architecture ensures complete data isolation — ideal for sensitive IAM policies and production ARNs.</p>

    <h2>4. Third-Party Dependencies</h2>
    <p>We use <strong>Bootstrap 5</strong> via CDN for styling and <strong>SvelteKit</strong> for framework logic. These are loaded from trusted CDNs but <em>do not track users or send data</em>. No analytics, ads, or marketing scripts are included. The app is deployable via GitHub Pages with zero external dependencies beyond initial load.</p>

    <h2>5. Cookies & Local Storage</h2>
    <p>The ARN Parser <strong>does not use cookies</strong>, localStorage, or IndexedDB. Your input is held in memory only during the session and is cleared on page refresh or closure. No persistence. No tracking.</p>

    <h2>6. Security & Responsibility</h2>
    <p>While we collect nothing, we recommend:</p>
    <ul>
      <li>Using the tool on secure, updated devices.</li>
      <li>Avoiding public networks when parsing sensitive ARNs.</li>
      <li>Verifying JSON output before use in production.</li>
    </ul>
    <p>We are not liable for data exposure due to user-side vulnerabilities.</p>

    <h2>7. Children's Privacy</h2>
    <p>This tool is intended for professional AWS users. We do not target or collect data from children under 13. Parental concerns should be directed to the developer via X.</p>

    <h2>8. Global Compliance</h2>
    <p>Hosted statically and collecting no data, the tool inherently complies with <strong>GDPR</strong>, <strong>POPIA Norway</strong>, <strong>CCPA</strong>, and other privacy laws by default. No consent banners required.</p>

    <h2>9. Policy Updates</h2>
    <p>Changes will be posted here with updated effective dates. Continued use constitutes acceptance.</p>

    <p class="italic-note"><strong>Your ARNs stay yours.</strong> This tool exists to help, not to harvest. Privacy isn’t a feature — it’s the foundation.</p>
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