<script lang="ts">
  import type { Experience } from '$lib/data';
  export let item: Experience;
  export let index: number;
</script>

<article class:secondary={item.secondary} class="experience-item reveal">
  <div class="experience-index">{String(index + 1).padStart(2, '0')}</div>
  <div class="experience-meta">
    <time>{item.period}</time>
    <span>{item.location}</span>
  </div>
  <div class="experience-body">
    <p class="company">{item.company}</p>
    <h3>{item.role}</h3>
    <ul>
      {#each item.points as point}<li>{point}</li>{/each}
    </ul>
  </div>
</article>
