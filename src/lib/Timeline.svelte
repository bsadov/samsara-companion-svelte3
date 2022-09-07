<script>
    import { seconds, storedcurrent, storedlocations, formatTime } from './stores.js'
	  
  	import { fly } from 'svelte/transition'

    
    let visible = false;
    let display = 'none';

    function expandMenu(){
      visible = !visible;
      visible ? display = 'flex' : display = 'none';
    }

    function selectLocation(location){
      $storedcurrent = location
      $seconds = location.start
    }
</script>


{#if visible}
  <div class="timeline-bar" on:click={expandMenu} style="display: {display}" transition:fly="{{ x: -50, duration: 500 }}">
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
  </div>
{:else}
  <button on:click={expandMenu} transition:fly="{{ x: -50, duration: 500 }}">Timeline Menu</button>
{/if}

<style>
button{
  position: fixed;
  top: 0;
  left: 0;
}

.timeline-bar {
  position: fixed; 
  top: 0;
  left: 0;
  height: 100%;
  color: white;
  background-color: rgba(150, 150, 150);
  padding-right: 2em;
  border-radius: 5px;
}

ul{
  text-align: left;
  list-style: none;
}
</style>