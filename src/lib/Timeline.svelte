<script>
    import { seconds, storedcurrent, storedlocations, formatTime } from './stores.js'
	  
  	/* import { fly } from 'svelte/transition'; */

    /*
    let visible = false;
    let display = 'none';

    function expandMenu(){
      visible = !visible;
      visible ? display = 'flex' : display = 'none';
    }*/

    function selectLocation(location){
      $storedcurrent = location
      $seconds = location.start
    }
</script>


<!-- <div class="timeline-toggle" on:click={expandMenu}>TIMELINE</div>

{#if visible}
<div class="timeline-bar" on:click={expandMenu} style="display: {display}" transition:fly="{{ y: 70, duration: 1000 }}">
<Locations />
</div>
{/if} -->


<div class="timeline-bar">
  <ul>
    {#each $storedlocations as location}
      <li on:click={() => selectLocation(location)}>{#if $seconds >= location.start && $seconds < location.end}
            <strong>[{formatTime(location.start)}] {location.name}</strong>
          {:else}
            [{formatTime(location.start)}] {location.name}
          {/if}
      </li>
    {/each}
  </ul>
</div>

<style>
.timeline-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  overflow-y: auto;
	width: 30%;
  overflow-wrap: break-word;
}

ul{
  text-align: left;
  list-style: none;
}

/* .timeline-toggle, .timeline-bar{
  position: fixed;
  /* bottom: 0;
  left: 0;
  width: 100%;
}

.timeline-toggle{
  background-color: purple;
  height: 25px;
  color: white;
  padding: 2px;
}

.timeline-bar {
   display: none;
  height: 300px; 
  background-color: white;
  overflow-y:auto;
  justify-content: center;
}*/
</style>