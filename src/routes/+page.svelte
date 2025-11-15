<!-- src/routes/+page.svelte (Updated About, How to Use, FAQ) -->

<script lang="ts">
  import { base } from '$app/paths';
  import { writable } from 'svelte/store';
  import ArnInput from '$lib/components/ArnInput.svelte';
  import ParseResult from '$lib/components/ParseResult.svelte';
  import CopyButton from '$lib/components/CopyButton.svelte';
  import ExampleLinks from '$lib/components/ExampleLinks.svelte';
  import { parseArn } from '$lib/utils/arnParser';
  import type { ParsedArn } from '$lib/types';

  const arn = writable<string>('');
  let parsed: ParsedArn | null = null;
  let error: string | null = null;

  function parse() {
    const { parsed: result, error: err } = parseArn($arn);
    parsed = result;
    error = err;
  }
</script>

<svelte:head>
  <title>AWS ARN Parser | Validate & Decode ARNs Instantly</title>
  <meta name="description" content="Free, open-source, client-side AWS ARN parser. Validate, decode, and export Amazon Resource Names in under 100ms — no data sent, no tracking." />
  <meta property="og:title" content="AWS ARN Parser | Validate & Decode ARNs Instantly" />
  <meta property="og:description" content="Free, open-source, client-side AWS ARN parser. Validate, decode, and export Amazon Resource Names in under 100ms — no data sent, no tracking." />
  <meta property="og:url" content="{base}/" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<h1 class="text-center mb-4">AWS ARN Parser</h1>

<ArnInput {arn} {parse} />

<ExampleLinks {arn} {parse} />

<button class="btn btn-success mb-3 w-100" on:click={parse}>Parse ARN</button>

<ParseResult {parsed} {error} />

{#if parsed}
  <CopyButton {parsed} />
{/if}

<div class="mt-4 text-center">
  <a
    href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html"
    target="_blank"
    rel="noopener noreferrer"
    class="btn btn-info">AWS ARN Documentation</a
  >
</div>

<!-- ABOUT SECTION -->
<section id="about" class="mt-5 p-4 bg-light rounded">
  <h2 class="text-primary mb-3">About the AWS ARN Parser</h2>
  <p>
    The <strong>AWS ARN Parser</strong> is a free, open-source, and fully <em>client-side</em> web utility developed by <strong>AxelBase</strong> this tool was created to solve a common pain point in AWS development: validating and understanding Amazon Resource Names (ARNs) without risking data exposure.
  </p>
  <p>
    ARNs are the universal identifiers used across AWS services — from IAM policies to CloudFormation templates, Lambda triggers, and EventBridge rules. A single malformed ARN can cause access denied errors, deployment failures, or unintended privilege escalation. This parser eliminates guesswork by instantly validating syntax, extracting components, and providing structured JSON output.
  </p>
  <p>
    Built with <strong>SvelteKit</strong>, <strong>TypeScript</strong>, and <strong>Bootstrap 5</strong>, the entire application runs in your browser. No backend. No API calls. No cookies. No analytics. Your ARNs never leave your device. The source code is MIT-licensed and available on GitHub, allowing full customization, forking, and offline deployment.
  </p>
  <p>
    The parser supports all standard AWS partitions (<code>aws</code>, <code>aws-cn</code>, <code>aws-us-gov</code>, etc.), handles global services (S3, IAM), parses resource qualifiers (Lambda <code>:prod</code>, <code>:1</code>), and validates wildcards in IAM policies. It’s designed for developers, DevOps engineers, security auditors, and cloud architects who demand precision and privacy.
  </p>
  <p>
    Whether you're writing IAM roles, debugging CloudTrail logs, or building CI/CD pipelines, this tool ensures your ARNs are correct before they hit production. It’s part of a broader mission at AxelBase to create lightweight, privacy-first developer tools that work anywhere — even offline.
  </p>
  <p class="italic-note">
    <em>Accuracy. Privacy. Speed. Built for the modern AWS practitioner.</em>
  </p>
</section>

<!-- HOW TO USE SECTION -->
<section id="how-to-use" class="mt-5 p-4 bg-light rounded">
  <h2 class="text-primary mb-3">How to Use the ARN Parser</h2>
  <p>
    Using the AWS ARN Parser is straightforward and designed for instant feedback. Follow these steps to validate and decode any ARN in seconds:
  </p>
  <ol class="list-group list-group-numbered">
    <li class="list-group-item">
      <strong>Enter Your ARN</strong>: Paste or type a full ARN into the input field. Examples include S3 buckets, EC2 instances, Lambda functions, IAM roles, or DynamoDB tables. The parser supports both standard and wildcard formats.
    </li>
    <li class="list-group-item">
      <strong>Try Example ARNs</strong>: Not sure where to start? Click any of the pre-loaded example links (e.g., <em>S3 Bucket</em>, <em>Lambda Function</em>, <em>IAM Role</em>) to auto-populate the field with real-world ARNs.
    </li>
    <li class="list-group-item">
      <strong>Click “Parse ARN”</strong>: Hit the green button or press <kbd>Enter</kbd>. The parser runs instantly using deterministic logic in <code>arnParser.ts</code>. Results appear in under 100ms.
    </li>
    <li class="list-group-item">
      <strong>Review the Breakdown</strong>: A color-coded table displays:
      <ul>
        <li><strong>Partition</strong>: <code>aws</code>, <code>aws-cn</code>, etc.</li>
        <li><strong>Service</strong>: <code>s3</code>, <code>lambda</code>, etc.</li>
        <li><strong>Region & Account ID</strong>: Empty for global services</li>
        <li><strong>Resource Type & ID</strong>: Split intelligently using <code>/</code> or <code>:</code></li>
        <li><strong>Full Resource Path</strong>: Reconstructed for clarity</li>
      </ul>
    </li>
    <li class="list-group-item">
      <strong>Export Results</strong>: On success, a <em>Copy JSON</em> button appears. Click to copy the structured object to your clipboard — perfect for documentation, testing, or IaC integration.
    </li>
    <li class="list-group-item">
      <strong>Handle Errors</strong>: Invalid ARNs trigger a red alert with specific feedback (e.g., “Missing colon after service”, “Unknown partition”). Fix and re-parse.
    </li>
  </ol>
  <p class="mt-3">
    <strong>Pro Tip</strong>: Bookmark this page or deploy it locally via GitHub Pages for offline use during security reviews or on air-gapped systems.
  </p>
</section>

<!-- FAQ SECTION -->
<section id="faq" class="mt-5 p-4 bg-light rounded">
  <h2 class="text-primary mb-3">Frequently Asked Questions</h2>
  <div class="accordion" id="faqAccordion">
    <div class="accordion-item">
      <h3 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#q1">
          What exactly is an ARN?
        </button>
      </h3>
      <div id="q1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          An <strong>Amazon Resource Name (ARN)</strong> is a standardized, globally unique identifier for AWS resources. It follows the format: <code>arn:partition:service:region:account-id:resource</code>. ARNs are required in IAM policies, API operations, CloudFormation, and cross-account access. They ensure unambiguous resource targeting across regions and accounts.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h3 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q2">
          Is my ARN data sent to a server?
        </button>
      </h3>
      <div id="q2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          <strong>No.</strong> This tool is 100% client-side. All parsing happens in your browser using JavaScript. No data is transmitted, logged, or stored. You can verify this by checking network requests — zero outgoing traffic after page load.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h3 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q3">
          Can I use this offline?
        </button>
      </h3>
      <div id="q3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          Yes. Clone the GitHub repo and open <code>index.html</code> in any browser. Or deploy to GitHub Pages, Netlify, or Vercel. The app is static and works without internet after initial load.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h3 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q4">
          Does it support AWS China or GovCloud?
        </button>
      </h3>
      <div id="q4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          Absolutely. The parser recognizes all official partitions: <code>aws</code>, <code>aws-cn</code>, <code>aws-us-gov</code>, <code>aws-iso</code>, <code>aws-iso-b</code>. Future partitions can be added by editing one line in <code>arnParser.ts</code>.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h3 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q5">
          Why not use the AWS SDK?
        </button>
      </h3>
      <div id="q5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          The AWS SDK requires credentials, internet access, and adds bloat. This tool is lightweight (&lt;50KB), works offline, and needs no permissions — ideal for security audits, documentation, and quick validation.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h3 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q6">
          Can I contribute or fork it?
        </button>
      </h3>
      <div id="q6" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          Yes! It’s <strong>MIT-licensed</strong>. Fork on GitHub, customize, or integrate into internal tools. Pull requests welcome for new features like ARN generation or batch parsing.
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .italic-note {
    font-style: italic;
    color: #6c757d;
    text-align: center;
    margin-top: 2rem;
    font-size: 0.95rem;
  }

  .list-group-numbered {
    counter-reset: list-counter;
  }
  .list-group-numbered .list-group-item {
    counter-increment: list-counter;
    padding: 1rem 1rem 1rem 4rem;
    position: relative;
  }
  .list-group-numbered .list-group-item::before {
    content: counter(list-counter);
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    background: #0d6efd;
    color: white;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: bold;
  }
</style>