<script>
    let stopwatch
    let active = false
    let seconds = 0
    let time = new Date(0)
    let formattedtime = '00:00:00'

    function runTimer(){
        active = true
        stopwatch = setInterval(() => { formatTime(seconds += 1) }, 1000)
    }

    function pauseTimer(){
        active = false
        clearInterval(stopwatch)
    }

    function resetTimer(){
        active = false
        clearInterval(stopwatch)
        formatTime(seconds = 0)
    }

    function formatTime(seconds){
        time.setSeconds(seconds)
        formattedtime = time.toISOString().substr(11, 8)
    }
</script>

<p>{formattedtime}</p>

{#if !active}
<button on:click={runTimer}>Play</button>
{:else}
<button on:click={pauseTimer}>Pause</button>
{/if}
<button on:click={resetTimer}>Reset</button>