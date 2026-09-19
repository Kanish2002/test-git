<script lang="ts">
  import type { Project } from '$lib/data';
  export let project: Project;
  export let index: number;
</script>

<article class="project-card reveal">
  <div class="project-topline">
    <span>CASE / {String(index + 1).padStart(2, '0')}</span>
    <span>{project.domain}</span>
  </div>
  <h3>{project.title}</h3>
  <p>{project.summary}</p>
  {#if project.outcome}<p class="outcome">{project.outcome}</p>{/if}
  <div class="tech-list">
    {#each project.technologies as technology}<span>{technology}</span>{/each}
  </div>
  <div class="project-footer">
    {#if project.professional}
      <span>Professional work · details intentionally summarized</span>
    {:else if project.href}
      <a href={project.href} target="_blank" rel="noreferrer">View public repository ↗</a>
    {/if}
  </div>
</article>
