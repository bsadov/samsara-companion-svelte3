<script>
    import { storedcurrent } from './stores.js'
</script>

<div class='info-container'>
    <p>{$storedcurrent.name}</p>
    <p>Location: {$storedcurrent.country}</p>
    <img src='./{$storedcurrent.image}' alt='test'>
    <p>{$storedcurrent.info}</p>
<!--     <input bind:value={API_KEY}> -->
    <img src='https://maps.googleapis.com/maps/api/staticmap?center=40.714%2c%20-73.998&zoom=12&size=400x400&key={import.meta.env.VITE_API_KEY}' alt='map of location'>
</div>

<style>
.info-container{
    max-width: 900px;
}

img{
    width: 50%;
}
</style>