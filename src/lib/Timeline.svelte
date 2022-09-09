<script>
    import { seconds, storedcurrent, storedlocations, formatTime } from './stores.js'
	  
    function selectLocation(location){
      $storedcurrent = location
      $seconds = location.start
    }
</script>

<ul>
  {#each $storedlocations as location}
    <li on:click={() => selectLocation(location)}>
      {#if $seconds >= location.start && $seconds < location.end}
        <strong>[{formatTime(location.start)}] {location.name}</strong>
      {:else}
        [{formatTime(location.start)}] {location.name}
      {/if}
    </li>
  {/each}
</ul>

<style>
ul{
  text-align: left;
  list-style: none;
}
</style>