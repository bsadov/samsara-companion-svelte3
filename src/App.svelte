<script>
  import { storedseconds } from './lib/stores.js'
  import Timeline from './lib/Timeline.svelte'
  import Timer from './lib/Timer.svelte'
</script>

<main>
  <h1>Samsara Companion</h1>
  <!-- <Locations /> -->
  <Timer bind:seconds={$storedseconds}/>
  <Timeline />

  <!-- <p>Stored Seconds value = {$storedseconds}</p> -->
</main>
