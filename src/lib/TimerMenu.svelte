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
    /* visible ? icon = 'url(/icon-close.svg)' : icon = 'url(/icon-menu.svg)' */
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
        <div class="timeline-menu" use:clickOutside on:click_outside={expandMenu} on:click={expandMenu} on:keypress={expandMenu} transition:fly="{{ x: -50, duration: 500 }}">
        <ScenesMenu /></div>
    {/if}
    <button id='menu' on:click={expandMenu} on:keypress={expandMenu} style="background-image: {icon}"><span>Menu</span></button>

    {#if !active}
        <button id='play' on:click={runTimer} on:keypress={runTimer}><span>Play</span></button>
    {:else}
        <button id='pause' on:click={pauseTimer} on:keypress={pauseTimer}><span>Pause</span></button>
    {/if}
    <button id='prev'on:click={() => prevLocation()} on:keypress={() => prevLocation()}><span>Prev</span></button>
    <button id='next'on:click={() => nextLocation()} on:keypress={() => nextLocation()}><span>Next</span></button>
    <button id='reset' on:click={resetTimer} on:keypress={resetTimer}><span>Reset</span></button>
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
        background-position: center;
        background-size: 100%;
        border: none;
    }

    #menu {
        background-image: url(/icon-menu.svg);
    }

    #play {
        background-image: url(/icon-play.svg);
    }

    #pause{
        background-image: url(/icon-pause.svg);
    }

    #reset{
        background-image: url(/icon-stop.svg);
    }

    #prev{
        background-image: url(/icon-prev.svg);
    }

    #next{
        background-image: url(/icon-next.svg);
    }

    button span{
        display: none;
    }
</style>