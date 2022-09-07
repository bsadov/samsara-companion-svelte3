<script>
    import { seconds, storedcurrent, storedlocations, formatTime } from './stores.js'

    let stopwatch
    let active = false

    function runTimer(){
        active = true
        stopwatch = setInterval(() => { $seconds += 1, checkLocation()}, 1000)
    }

    function pauseTimer(){
        active = false
        clearInterval(stopwatch)
    }

    function resetTimer(){
        active = false
        clearInterval(stopwatch)
        $seconds = 0
        $storedcurrent = $storedlocations[0]
    }

    function checkLocation(){
        if($storedcurrent.key+1 < $storedlocations.length){
            if($seconds == $storedlocations[$storedcurrent.key+1].start){
                $storedcurrent = $storedlocations[$storedcurrent.key+1]
            }
        }
    }

    function forcedTimeChange(){
        for(let location of $storedlocations){
            if($seconds >= location.start && $seconds < location.end){
                $storedcurrent = location
            }
        }
    }

    function prevLocation(){
        if($storedcurrent.key-1 >= 0){
        $storedcurrent = $storedlocations[$storedcurrent.key-1]
            $seconds = $storedcurrent.start
        }
    }

    function nextLocation(){
        if($storedcurrent.key+1 < $storedlocations.length){
            $storedcurrent = $storedlocations[$storedcurrent.key+1]
            $seconds = $storedcurrent.start
        }
    }
</script>
<div class='timer'>
    <p>{formatTime($seconds)}</p>
    <!-- <input type=number bind:value={$seconds} on:change={() => forcedTimeChange()} min=0 max=6120> -->
    <input type=range bind:value={$seconds} on:input={() => forcedTimeChange()} min=0 max=35>

    <br>
    {#if !active}
        <button on:click={runTimer}>Play</button>
    {:else}
        <button on:click={pauseTimer}>Pause</button>
    {/if}
        <button on:click={resetTimer}>Reset</button>
        <button on:click={() => prevLocation()}>Prev</button>
        <button on:click={() => nextLocation()}>Next</button>
</div>

<style>
    input[type="range"]{
        width: 100%;
    }
</style>