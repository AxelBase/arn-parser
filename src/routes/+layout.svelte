<script lang="ts">
    import { base } from '$app/paths';
    import { fly } from 'svelte/transition';
    import '../app.css';

    // --- Buy Me a Coffee Logic (from File 1 - BuyMeACoffee + Bitcoin) ---
    let isDropdownOpen = false;

    function toggleDropdown() {
        isDropdownOpen = !isDropdownOpen;
    }
    function closeDropdown() {
        isDropdownOpen = false;
    }

    // Click outside directive
    function clickOutside(node: HTMLElement) {
        const handleClick = (event: MouseEvent) => {
            if (node && !node.contains(event.target as Node)) {
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
                <button
                    class="bmac-button d-flex align-items-center gap-2 text-white border-0 px-4 py-2 rounded-pill shadow-sm"
                    on:click={toggleDropdown}
                    aria-label="Support options"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
                    </svg>
                    <span class="d-none d-sm-inline fw-semibold">Buy me a Coffee</span>
                </button>

                {#if isDropdownOpen}
                    <div class="bmac-dropdown mt-2" transition:fly={{ y: -10, duration: 250 }}>
                        <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                            <span class="amount">$3</span> One Coffee
                        </a>
                        <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                            <span class="amount">$5</span> Two Coffees
                        </a>
                        <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                            <span class="amount">$10</span> Three Coffees
                        </a>

                        <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown} class="custom-amount">
                            Custom Amount
                        </a>

                        <a
                            href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
                            on:click={closeDropdown}
                            class="custom-amount"
                        >
                            Buy via Crypto (Bitcoin)
                        </a>
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

<style>
    /* Button styles kept from File 1, adapted to File 2's violet theme */
    .bmac-button {
        background: var(--signal-violet);
        font-size: 0.95rem;
        transition: all 0.3s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .bmac-button:hover {
        background: var(--signal-violet-dark);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(146, 78, 125, 0.3);
    }

    /* Dropdown styles from File 1, adapted to File 2's light violet theme */
    .bmac-dropdown {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 240px;
        background: var(--white);
        border-radius: 16px;
        box-shadow: 0 12px 32px rgba(146, 78, 125, 0.15); /* violet-tinted shadow */
        overflow: hidden;
        border: 1px solid rgba(146, 78, 125, 0.1);
        z-index: 1030;
    }

    .bmac-dropdown a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 20px;
        color: var(--text-color);
        text-decoration: none;
        font-size: 0.98rem;
        transition: all 0.2s ease;
    }

    .bmac-dropdown a:hover {
        background: rgba(146, 78, 125, 0.1); /* light violet hover */
        color: var(--signal-violet);
        padding-left: 28px;
    }

    .bmac-dropdown .amount {
        font-weight: 700;
        color: var(--signal-violet);
        font-size: 1.1rem;
    }

    .bmac-dropdown .custom-amount {
        font-weight: 600;
        color: var(--signal-violet);
        border-top: 1px solid var(--border-color);
        justify-content: center !important;
    }

    .bmac-dropdown .custom-amount:hover {
        background: rgba(146, 78, 125, 0.1);
        color: var(--signal-violet-dark);
    }
</style>