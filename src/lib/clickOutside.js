/** Dispatch event on click outside of node
 * 
 * Thanks to https://svelte.dev/repl/4b68e2fbb09845bb85b5696f4a6a00ec?version=3.16.7
 */
export function clickOutside(node) {
  
  const handleClick = event => {
    if (node && !node.contains(event.target) && !event.defaultPrevented) {
      node.dispatchEvent(
        new CustomEvent('click_outside', node)
      )
    }
  }

	document.addEventListener('click', handleClick, true);
  
  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    }
	}
}