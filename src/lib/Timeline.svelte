<script>
    import { seconds, storedcurrent, storedscenes, formatTime } from './stores.js'
	  
    function selectLocation(location){
      $storedcurrent = location
      $seconds = location.start
    }
</script>

<ul>
  {#each $storedscenes as scene}
    <li on:click={() => selectLocation(scene)}>
      {#if $seconds >= scene.start && $seconds < scene.end}
        <strong>[{formatTime(scene.start)}] {scene.name}</strong>
      {:else}
        [{formatTime(scene.start)}] {scene.name}
      {/if}
    </li>
  {/each}
</ul>

<style>
ul{
  text-align: left;
  list-style: none;
}

strong{
  font-family: 'Oregano';
  font-size: 1.2em;
}
</style>