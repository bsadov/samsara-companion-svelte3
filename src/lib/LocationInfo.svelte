<script>
    import { storedcurrent } from './stores.js'
    import { fade } from 'svelte/transition';
</script>

{#key $storedcurrent}
<div class='info-container' in:fade={{duration: 1000}}>

<div class='info'>
    <h2>{$storedcurrent.name}</h2>
    <h3>Location: {$storedcurrent.country}</h3>
    <!-- <img src='./{$storedcurrent.image}' alt='test'> -->
    <p>{@html $storedcurrent.info}</p>
</div>

<div class='map'>
    <a href='https://www.google.com/maps/search/?api=1&query={$storedcurrent.search}' target='_blank'><img src='https://maps.googleapis.com/maps/api/staticmap?markers={$storedcurrent.coordinates}&zoom=4&size=400x400&key={import.meta.env.VITE_API_KEY}' alt='map of location'></a>
</div>

</div>
{/key}

<style>
.info-container{
    display: flex;
    width: 900px;
    text-align: right;
}

.info, .map{
    flex: 1;
}
</style>