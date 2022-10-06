<script>
    import { seconds, storedcurrent, storedscenes, formatTime } from './stores.js'
    import ScenesMenu from './ScenesMenu.svelte'
    import { fly } from 'svelte/transition'
    import {clickOutside} from './clickOutside.js';

    let timer
    let active = false
    let visible = false
    let icon

    function expandMenu(){
    visible = !visible
    /* visible ? icon = 'url(/icon-close.png)' : icon = 'url(/icon-menu.png)' */
    }

    function runTimer(){
        active = true
        timer = setInterval(() => { 
            if($seconds == 6120) pauseTimer()
            else{$seconds += 1, checkLocation()}}, 1000)
    }

    function pauseTimer(){
        active = false
        clearInterval(timer)
    }

    function resetTimer(){
        active = false
        clearInterval(timer)
        $seconds = 0
        $storedcurrent = $storedscenes[0]
    }

    function checkLocation(){
        if($storedcurrent.key+1 < $storedscenes.length){
            if($seconds == $storedscenes[$storedcurrent.key+1].start){
                $storedcurrent = $storedscenes[$storedcurrent.key+1]
            }
        }
    }

    function forcedTimeChange(){
        for(let location of $storedscenes){
            if($seconds >= location.start && $seconds < location.end){
                $storedcurrent = location
            }
        }
    }

    function prevLocation(){
        if($storedcurrent.key-1 >= 0){
        $storedcurrent = $storedscenes[$storedcurrent.key-1]
            $seconds = $storedcurrent.start
        }
    }

    function nextLocation(){
        if($storedcurrent.key+1 < $storedscenes.length){
            $storedcurrent = $storedscenes[$storedcurrent.key+1]
            $seconds = $storedcurrent.start
        }
    }
</script>

<div class='nav-container'>
    {#if visible}
        <div class="timeline-menu" use:clickOutside on:click_outside={expandMenu} on:click={expandMenu} transition:fly="{{ x: -50, duration: 500 }}">
        <ScenesMenu /></div>
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
        background-color: rgba(25,25,25,255);
        position: relative;
        display: flex;
        align-items: center;
        top: 0px;
        width: 900px;
        /* border: 1px solid black; */
        padding: 0 5px;
    }

    .timeline-menu {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        color: white;
        background-color: rgba(62,62,62,255);
        padding-right: 2em;
        border-radius: 5px;
        overflow-y: scroll;
    }

    input[type="range"]{
        width: 100%;
    }

    button{
        background-color: rgba(25,25,25,255);
        background-repeat: no-repeat;
        height: 25px;
        width: 25px;
        border: none;
    }

    #menu {
        background-image: url(/icon-menu.png);
    }

    #play {
        background-image: url(/icon-play.png);
    }

    #pause{
        background-image: url(/icon-pause.png);
    }

    #reset{
        background-image: url(/icon-stop.png);
    }

    #prev{
        background-image: url(/icon-prev.png);
    }

    #next{
        background-image: url(/icon-next.png);
    }

    button span{
        display: none;
    }
</style>