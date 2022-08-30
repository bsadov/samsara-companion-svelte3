<script>
  	import { fly } from 'svelte/transition';
    import { storedlocations, storedcurrent, index } from './stores.js'
    import { formatTime } from './Timer.svelte'
	  
    let visible = false;
    let display = 'none';

    function expandMenu(){
      visible = !visible;
      visible ? display = 'flex' : display = 'none';
    }

    $: $index, changeLocation()

    function changeLocation(){
      $storedcurrent = $storedlocations[$index]
    }
</script>


<!-- <div class="timeline-toggle" on:click={expandMenu}>TIMELINE</div>

{#if visible}
<div class="timeline-bar" on:click={expandMenu} style="display: {display}" transition:fly="{{ y: 70, duration: 1000 }}">
<Locations />
</div>
{/if} -->


<div class="timeline-bar" transition:fly="{{ y: 70, duration: 1000 }}">
  <p>Index: {$index} Current Location: {$storedcurrent.name}</p>
  <ul>
      {#each $storedlocations as location}
              <li>{#if $storedcurrent == location}
                      <strong>{formatTime(location.start)} - {location.name}</strong>
                  {:else}
                      {formatTime(location.start)} - {location.name}
                  {/if}
              </li>
  
      {/each}
  </ul>
</div>

<style>
/* .timeline-toggle, */ .timeline-bar{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

/* .timeline-toggle{
  background-color: purple;
  height: 25px;
  color: white;
  padding: 2px;
} */

.timeline-bar {
  /* display: none; */
  height: 300px;
  background-color: white;
  overflow-y:auto;
  justify-content: center;
}

ul{
  text-align: left;
  list-style: none;
}
</style>