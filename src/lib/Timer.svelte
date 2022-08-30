<script>
    import { seconds, storedcurrent, storedlocations, index} from './stores.js'


    let stopwatch
    let active = false

    function runTimer(){
        active = true
        stopwatch = setInterval(() => { $seconds += 1; checkLocation()}, 1000)
    }

    function pauseTimer(){
        active = false
        clearInterval(stopwatch)
    }

    function resetTimer(){
        active = false
        clearInterval(stopwatch)
        $index = 0
        $seconds = 0
    }

    function checkLocation(){
        if($seconds == $storedcurrent.end){
            $index += 1
        }
        if($seconds == $storedlocations[$index].start){
            $storedcurrent = $storedlocations[$index]
        }
    }

    function forcedTimeChange(){
        for(let location of $storedlocations){
            if( $seconds >= location.start && $seconds < location.end){
                $storedcurrent = location
                $index = location.key
            }
        }
    }
</script>
<script context='module'>
    export function formatTime(e){
        const h = Math.floor(e / 3600).toString().padStart(2,'0'),
        m = Math.floor(e % 3600 / 60).toString().padStart(2,'0'),
        s = Math.floor(e % 60).toString().padStart(2,'0')

        return h + ':' + m + ':' + s
    }
</script>

<p>{formatTime($seconds)}</p>
<p>Stores.js seconds: {$seconds}</p>
<input type=number bind:value={$seconds} on:change={() => forcedTimeChange()} min=0 max=6120>

<br>
{#if !active}
<button on:click={runTimer}>Play</button>
{:else}
<button on:click={pauseTimer}>Pause</button>
{/if}
<button on:click={resetTimer}>Reset</button>