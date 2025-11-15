<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    { href: '/blog/posts/post1', title: 'What Are AWS ARNs?', description: 'An introduction to Amazon Resource Names and why they matter in cloud architecture.' },
    { href: '/blog/posts/post2', title: 'Breaking Down the ARN Structure', description: 'Learn each component of an ARN: partition, service, region, account, and resource.' },
    { href: '/blog/posts/post3', title: 'Common ARN Patterns by Service', description: 'Explore real-world examples from S3, EC2, IAM, RDS, Lambda, and more.' },
    { href: '/blog/posts/post4', title: 'How This ARN Parser Works', description: 'Behind the scenes: deterministic parsing, validation rules, and edge case handling.' },
    { href: '/blog/posts/post5', title: 'Using the Parser in IAM Policies', description: 'Practical tips for writing secure, precise IAM policies with validated ARNs.' },
    { href: '/blog/posts/post6', title: 'Debugging Malformed ARNs', description: 'How to spot, fix, and prevent common ARN syntax errors in scripts and templates.' },
    { href: '/blog/posts/post7', title: 'Advanced ARN Use Cases in Serverless', description: 'Leverage ARNs in Lambda, API Gateway, and Step Functions for dynamic, secure workflows.' }
  ];
</script>

<svelte:head>
  <title>Blog | AWS ARN Parser Insights</title>
  <meta name="description" content="Deep dives, tutorials, and best practices for using the AWS ARN Parser tool." />
</svelte:head>

<div class="container fade-in blog-index">
  <header class="blog-header">
    <h1>Blog: ARN Parser Insights</h1>
    <p class="subtitle">
      Tutorials, deep dives, and practical guides for mastering AWS ARNs. Built for developers, by developers.
      Follow updates on <a href="https://x.com/MrAAndersen123" target="_blank" rel="noopener noreferrer">X @MrAAndersen123</a>.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 3rem;
    border-bottom: 1px solid #dee2e6;
    padding-bottom: 2rem;
  }

  .blog-header h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    color: #212529;
  }

  .subtitle {
    font-size: 1.1rem;
    color: #6c757d;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .post-card {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.2s, box-shadow 0.2s;
    border: 1px solid #e9ecef;
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .post-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  }

  .post-card .card-body {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1.5rem;
  }

  .post-title {
    font-size: 1.25rem;
    color: #0d6efd;
    margin-bottom: 0.75rem;
    font-weight: 600;
  }

  .post-description {
    color: #495057;
    flex-grow: 1;
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }

  .read-more {
    color: #0d6efd;
    font-weight: 600;
    align-self: flex-start;
    transition: transform 0.2s;
  }

  .post-card:hover .read-more {
    transform: translateX(5px);
  }
</style>