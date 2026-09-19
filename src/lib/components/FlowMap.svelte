<script lang="ts">
  const nodes = [
    { label: 'API GATEWAY', x: 8, y: 16 },
    { label: 'ORDER SERVICE', x: 39, y: 8 },
    { label: 'KAFKA', x: 71, y: 28, accent: true },
    { label: 'EXECUTION', x: 43, y: 52 },
    { label: 'P&L SERVICE', x: 77, y: 70 },
    { label: 'WALLET', x: 14, y: 74 },
    { label: 'SETTLEMENT', x: 45, y: 86, amber: true }
  ];
</script>

<div class="flow-map" aria-hidden="true">
  <svg viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="M14 22 C26 14 31 13 44 16 S61 25 75 33" />
    <path d="M75 35 C69 48 58 52 48 58 S31 70 20 80" />
    <path d="M47 59 C59 61 69 68 81 76" />
    <path d="M20 82 C32 91 41 92 51 91" />
    <path d="M76 34 C73 53 64 74 52 90" />
  </svg>
  {#each nodes as node, index}
    <div class:accent={node.accent} class:amber={node.amber} class="flow-node" style={`left:${node.x}%;top:${node.y}%`}>
      <span class="node-dot"></span>
      <span>{node.label}</span>
      <small>0{index + 1}</small>
    </div>
  {/each}
  {#each [0, 1, 2, 3, 4] as particle}
    <span class={`particle particle-${particle + 1}`}></span>
  {/each}
  <div class="flow-caption"><span>EVENT FLOW</span><b>healthy</b></div>
</div>
