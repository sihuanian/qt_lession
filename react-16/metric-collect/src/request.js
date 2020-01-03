const _XMLHTTPRequest = window.XMLHttpRequest;
// window.XMLHttpRequest.prototype.onreadystatechange

function XMLHTTPRequest() {
  const xhr = new _XMLHTTPRequest();
  function stateChange() {
    if (xhr.readyState === 4) {
      console.log('请求成功')
    }
  }
  xhr.addEventListener('readystatechange', stateChange)
  // xhr.addEventListener('timeout')
  // xhr.addEventListener('error')

  return xhr;
}

window.XMLHttpRequest = XMLHTTPRequest;

const _fetch = window.fetch;

function fetch(url, config) {
  
  return _fetch.call(window, url, config)
    .then(res => {
      console.log('响应成功');
      return res;
    })
    .catch(err => {
      console.log(err);
    })
}

window.fetch = fetch;