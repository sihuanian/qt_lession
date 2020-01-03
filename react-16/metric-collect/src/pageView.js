window.addEventListener('hashchange', pageCount);

function pageCount() {
  console.log(window.location.href, '+1');
}

// history
window.addEventListener('popstate', pageCount);
// go back
// ['home', 'loagin']
// pushState replaceState
let hooks = ['pushState', 'replaceState'];
hooks.forEach(hook => {
  let method = window.history['pushState'];
  window.history[hook] = function(...args) {
    setTimeout(pageCount, 0);
    return method.apply(window.history, args);
  }
});

