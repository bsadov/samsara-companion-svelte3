import { writable } from 'svelte/store';

export let storedseconds = writable(0);
export let index = writable(0)

const currentlocation = 
{
    name: 'Movie Start',
    start: 0,
    end: 3,
    short:'Home'
}


export let storedlocation = writable(currentlocation);