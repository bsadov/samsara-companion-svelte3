<script>
  	import { fly } from 'svelte/transition';
	  
    let visible = false;
    let display = 'none';
  

    function expandMenu(){
      visible = !visible;
      visible ? display = 'block' : display = 'none';
    }
</script>


<div class="timeline-toggle" on:click={expandMenu}></div>

{#if visible}
<div class="timeline-bar" on:click={expandMenu} style="display: {display}" transition:fly="{{ y: 70, duration: 1000 }}">
<p>Timeline</p>
</div>
{/if}

<style>
.timeline-toggle, .timeline-bar{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
}
.timeline-toggle{
  background-color: purple;
  height: 25px;
}

.timeline-bar {
  display: none;
  height: 200px;
  background-color: blue;
}

/* .footer-menu:hover + .timeline-bar {
  display: block;
  color: red;
} */
</style>