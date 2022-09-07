<script>
    import { storedcurrent } from './stores.js'

</script>

<div class='info-container'>
    <p>{$storedcurrent.name}</p>
    <p>Location: {$storedcurrent.country}</p>
    <img src='./{$storedcurrent.image}' alt='test'>
    <p>{$storedcurrent.info}</p>

</div>

<style>
.info-container{
    max-width: 900px;
}

img{
    width: 50%;
}
</style>