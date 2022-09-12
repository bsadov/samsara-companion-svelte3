<script>
    import { seconds, storedcurrent, storedlocations, formatTime } from './stores.js'
    import Timeline from './Timeline.svelte'
    import { fly } from 'svelte/transition'

    let stopwatch
    let active = false
    let visible = false
    let icon

    function expandMenu(){
    visible = !visible;
    visible ? icon = 'url(/icons8-close.png)' : icon = 'url(/icons8-menu.png)';
    }

    function runTimer(){
        active = true
        stopwatch = setInterval(() => { 
            if($seconds <= 6120)
            {$seconds += 1, checkLocation()}
            else pauseTimer()
        }, 1000)
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
<div class='nav-container'>
    {#if visible}
        <div class="timeline-menu" on:click={expandMenu} transition:fly="{{ x: -50, duration: 500 }}">
        <Timeline /></div>
    {/if}
    <button id='menu' on:click={expandMenu} style="background-image: {icon}"><span>Menu</span></button>

    {#if !active}
        <button id='play' on:click={runTimer}><span>Play</span></button>
    {:else}
        <button id='pause' on:click={pauseTimer}><span>Pause</span></button>
    {/if}
    <button id='prev'on:click={() => prevLocation()}><span>Prev</span></button>
    <button id='next'on:click={() => nextLocation()}><span>Next</span></button>
    <button id='reset' on:click={resetTimer}><span>Reset</span></button>
    <p>{formatTime($seconds)}</p>
    <input type=range bind:value={$seconds} on:input={() => forcedTimeChange()} min=0 max=6120>
</div>

<style>
    .nav-container{
        background-color: white;
        position: fixed;
        display: flex;
        align-items: center;
        bottom: 0px;
        width: 900px;
        border: 1px solid black;
        padding: 0 5px;
    }

    .timeline-menu {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        color: white;
        background-color: rgba(150, 150, 150);
        padding-right: 2em;
        border-radius: 5px;
    }

    input[type="range"]{
        width: 100%;
    }

    button{
        background-color: white;
        background-repeat: no-repeat;
        height: 25px;
        width: 25px;
        border: none;
    }

    #menu {
        background-image: url(/icons8-menu.png);
    }

    #play {
        background-image: url(/icons8-play.png);
    }

    #pause{
        background-image: url(/icons8-pause.png);
    }

    #reset{
        background-image: url(/icons8-stop.png);
    }

    #prev{
        background-image: url(/icons8-prev.png);
    }

    #next{
        background-image: url(/icons8-next.png);
    }

    button span{
        display: none;
    }
</style>