<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>404 Not Found | AWS ARN Parser</title>
  <meta name="description" content="The page you requested could not be found on the AWS ARN Parser site." />
  <meta property="og:title" content="404 Not Found | AWS ARN Parser" />
  <meta property="og:description" content="The page you requested could not be found on the AWS ARN Parser site." />
  <meta property="og:url" content="{base}/404" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>404 Not Found</p>
  </div>

  <article class="prose">
    <h1>404 — Page Not Found</h1>

    <p class="post-meta">Last Updated: November 26, 2025</p>

    <p>Sorry — the page you were looking for doesn’t exist or has been moved. If you typed the URL directly, please check for typos. Otherwise, try returning to the home page or using the navigation links.</p>

    <h2>Helpful links</h2>
    <ul>
      <li><a href="{base}/">Home</a></li>
      <li><a href="{base}/blog">Blog</a></li>
      <li><a href="{base}/privacy">Privacy</a></li>
      <li><a href="{base}/terms">Terms and Conditions</a></li>
    </ul>

    <h2>Still stuck?</h2>
    <p>If you believe this is an error, please open an issue on the project repository or try reloading the page. The tool itself remains available at the home page.</p>

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

  .prose a {
    color: #0d6efd;
  }
</style>
