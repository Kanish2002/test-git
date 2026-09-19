<script lang="ts">
  export let eyebrow: string;
  export let title: string;
  export let copy: string | undefined = undefined;
</script>

<header class="section-header reveal">
  <span class="eyebrow">{eyebrow}</span>
  <div class="section-title-row">
    <h2>{title}</h2>
    {#if copy}<p>{copy}</p>{/if}
  </div>
</header>
