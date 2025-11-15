<script lang="ts">
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';
  import '../app.css'; // Import the new global stylesheet

  // --- PayPal Donation Logic ---
  const paypalUsername = 'AxelLab427'; // <<< REPLACE THIS
  const donationAmounts = [1, 3, 5, 10];
  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }
  function closeDropdown() {
    isDropdownOpen = false;
  }
  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        // Dispatch custom event
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
</script>

<header class="navbar">
  <div class="navbar-content">
    <div class="navbar-left">
      <a href="{base}/" aria-label="Home">
        <img
          src="{base}/AxelLab-Logo.ico"
          alt="AxelBase Logo"
          class="navbar-brand-logo"
        />
      </a>
      <a class="navbar-brand-text" href="{base}/">AxelBase</a>

      <div
        class="bmac-item"
        use:clickOutside
        on:click_outside={closeDropdown}
      >
        <button class="bmac-button" on:click={toggleDropdown}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12.35,22.2L12,22A10,10,0,0,1,2,12V10A2,2,0,0,1,4,8H7.2A5.13,5.13,0,0,1,12,3A5.13,5.13,0,0,1,16.8,8H20A2,2,0,0,1,22,10V12A10,10,0,0,1,12.35,22.2M4,10V12A8,8,0,0,0,12,20A8,8,0,0,0,20,12V10H16.8A5.11,5.11,0,0,1,12.5,5.12A5.15,5.15,0,0,1,7.2,10H4Z"
            />
          </svg>
          Buy me a coffee
        </button>

        {#if isDropdownOpen}
          <div class="bmac-dropdown" transition:fly={{ y: -10, duration: 250 }}>
            {#each donationAmounts as amount}
              <a
                href="https://paypal.me/{paypalUsername}/{amount}"
                target="_blank"
                rel="noopener noreferrer"
                on:click={closeDropdown}
              >
                ${amount}
              </a>
            {/each}
          </div>
        {/if}
      </div>
    </div>

    <nav>
      <ul class="nav-links">
        <li class="nav-link"><a href="{base}/">Home</a></li>
        <li class="nav-link"><a href="{base}/#about">About</a></li>
        <li class="nav-link"><a href="{base}/#how-to-use">How to Use</a></li>
        <li class="nav-link"><a href="{base}/#faq">FAQ</a></li>
        <li class="nav-link"><a href="{base}/blog">Blog</a></li>
      </ul>
    </nav>
  </div>
</header>

<main class="container">
  <slot />
</main>

<footer class="footer">
  <div class="footer-content">
    <span>
      &copy; {new Date().getFullYear()} AxelBase AWS ARN Parser
    </span>
    <div class="footer-links">
      <a href="{base}/privacy">Privacy</a>
      <a href="{base}/terms">Terms</a>
    </div>
  </div>
</footer>