window.addEventListener('error', e => {
  console.log(e);
  e.preventDefault();
});

document.addEventListener('error', e => {
  console.log('资源错误', e);
}, true);

window.addEventListener('unhandledrejection', err => {
  console.log(err);
});

global.addListener('uncatchure');
global.addListener('unhandledrejection');
