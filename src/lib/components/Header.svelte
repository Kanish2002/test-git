<script lang="ts">
  import { profile } from '$lib/data';
  let open = false;
  const items = [
    ['About', '#about'],
    ['Experience', '#experience'],
    ['Engineering Work', '#work'],
    ['Expertise', '#expertise'],
    ['Achievements', '#achievements'],
    ['Education', '#education'],
    ['Contact', '#contact']
  ];
</script>

<header class="site-header">
  <a class="monogram" href="#top" aria-label="Kanish S — back to top"><span>K</span><span>S</span></a>
  <nav aria-label="Primary navigation" class:open>
    {#each items as item}
      <a href={item[1]} onclick={() => (open = false)}>{item[0]}</a>
    {/each}
  </nav>
  <a class="resume-nav" href={profile.links.resume} download>Resume <span>↓</span></a>
  <button class="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={open} onclick={() => (open = !open)}>
    <span></span><span></span>
  </button>
</header>
