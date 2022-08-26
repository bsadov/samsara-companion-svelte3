<script>
    let stopwatch
    let seconds = 0
    let time = new Date(seconds * 1000).toISOString().substr(11, 8);
    let active = false

    function runTimer(){
        active = true
        stopwatch = setInterval(() => {
            seconds += 1
            time = new Date(seconds * 1000).toISOString().substr(11, 8);
            }, 1000)
    }

    function pauseTimer(){
        active = false
        clearInterval(stopwatch)
    }

    function resetTimer(){
        active = false
        clearInterval(stopwatch)
        seconds = 0
        time = new Date(seconds * 1000).toISOString().substr(11, 8);
    }
</script>

<p>{time}</p>

{#if !active}
<button on:click={runTimer}>Play</button>
{:else}
<button on:click={pauseTimer}>Pause</button>
{/if}
<button on:click={resetTimer}>Reset</button>