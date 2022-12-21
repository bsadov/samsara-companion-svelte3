import { writable } from 'svelte/store'
import scenes from './scenes.json'

export function formatTime(n){
    const h = Math.floor(n / 3600).toString().padStart(2,'0'),
    m = Math.floor(n % 3600 / 60).toString().padStart(2,'0'),
    s = Math.floor(n % 60).toString().padStart(2,'0')

    return h + ':' + m + ':' + s
}

var obj = [];

for(var i in scenes){
    obj.push({
        name: i,
        key: obj.length,
        start: scenes[i].start,
        end: scenes[i].end,
        location: scenes[i].location,
        search: scenes[i].search,
        coordinates: scenes[i].coordinates,
        info: scenes[i].info
    })
}

export let seconds = writable(0)
export let storedcurrent = writable(obj[0])
export let storedscenes = writable(obj)