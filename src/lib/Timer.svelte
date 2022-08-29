<script>
    import { storedseconds, storedlocation, index} from './stores.js'

    export let seconds = 0
    let stopwatch
    let active = false

    function runTimer(){
        active = true
        stopwatch = setInterval(() => { seconds += 1; checkLocation()}, 1000)
    }

    function pauseTimer(){
        active = false
        clearInterval(stopwatch)
    }

    function resetTimer(){
        active = false
        clearInterval(stopwatch)
        $index = 0
        seconds = 0
    }

    function checkLocation(){
        if($storedseconds == $storedlocation.end){
            $index += 1;
        }
    }
</script>
<script context='module'>
    export function formatTime(e){
        const h = Math.floor(e / 3600).toString().padStart(2,'0'),
        m = Math.floor(e % 3600 / 60).toString().padStart(2,'0'),
        s = Math.floor(e % 60).toString().padStart(2,'0');

        return h + ':' + m + ':' + s;
    }
</script>

<p>{formatTime(seconds)}</p>
<p>Timer.svelte seconds: {seconds} | Stores.js seconds: {$storedseconds}</p>
<input type=number bind:value={seconds} min=0 max=6120>

<br>
{#if !active}
<button on:click={runTimer}>Play</button>
{:else}
<button on:click={pauseTimer}>Pause</button>
{/if}
<button on:click={resetTimer}>Reset</button>