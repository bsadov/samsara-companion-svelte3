<script>
  	import { fly } from 'svelte/transition';
    import Locations from './Locations.svelte'
	  
    let visible = false;
    let display = 'none';

    function expandMenu(){
      visible = !visible;
      visible ? display = 'flex' : display = 'none';
    }
</script>


<!-- <div class="timeline-toggle" on:click={expandMenu}>TIMELINE</div>

{#if visible}
<div class="timeline-bar" on:click={expandMenu} style="display: {display}" transition:fly="{{ y: 70, duration: 1000 }}">
<Locations />
</div>
{/if} -->


<div class="timeline-bar" transition:fly="{{ y: 70, duration: 1000 }}">
<Locations />
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
</style>