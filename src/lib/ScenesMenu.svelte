<script>
    import { seconds, storedcurrent, storedscenes, formatTime } from './stores.js'
	  
    function selectLocation(location){
      $storedcurrent = location
      $seconds = location.start
    }
</script>

<ul>
  {#each $storedscenes as scene}
    <li tabindex="0" on:click={() => selectLocation(scene)}>
      {#if $storedcurrent == scene}
        [{formatTime(scene.start)}] <b>{scene.name}</b>
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

b{
  font-family: 'Oregano';
  font-size: 1.2em;
  color: lightblue
}
</style>