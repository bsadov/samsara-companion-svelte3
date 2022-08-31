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
    background-color: lightgrey;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    overflow-y: auto;
    width: 30%;
    overflow-wrap: break-word;
}

img{
    width: 50%;
}
</style>