<script>
    import { storedcurrent } from './stores.js'
    import { fade } from 'svelte/transition'
</script>

{#key $storedcurrent}
<div class='info-container' in:fade={{duration: 1000}}>

<div class='info'>
    <h2>{$storedcurrent.name}</h2>
    <h3><span style="color:lightblue">Location: </span>{$storedcurrent.location}</h3>
    <p>{@html $storedcurrent.info}</p>
</div>
<div class='map'>
    {#if $storedcurrent.coordinates == null}
        <a href='https://www.google.com/maps/search/?api=1&query={$storedcurrent.name}+{$storedcurrent.location}' target='_blank'><img src='./placeholder.jpg' alt='placeholder'><br>click for full map (new tab)</a>
    {:else}
        <a href='https://www.google.com/maps/search/?api=1&query={$storedcurrent.search}' target='_blank'><img src='https://maps.googleapis.com/maps/api/staticmap?markers={$storedcurrent.coordinates}&size=400x400&key={import.meta.env.VITE_API_KEY}' alt='click for google maps'><br>click for full map (new tab)</a>
    {/if}
</div>

</div>
{/key}

<style>
.info-container{
    display: flex;
    border-radius: 0 0 10px 10px;
    min-height: 450px;
    width: 900px;
    padding: .5em;
    text-align: right;
    background-color: rgba(62,62,62,255);
}

.info, .map{
    flex: 1;
}

h2{
    color: lightblue;
}

a {
    font-size: .9em;
}
</style>