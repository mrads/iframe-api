(function initlogTo() {

  var log = console.log.bind(console);
  var logTo = document.createElement('div');
  logTo.style.width = '100%';
  logTo.style.minHeight = '200px';
  logTo.style.fontFamily = 'monospace';
  document.body.appendChild(logTo);

  function toString(x) {
    return typeof x === 'string' ? x : JSON.stringify(x);
  }

  console.log = function () {
    log.apply(null, arguments);
    var msg = Array.prototype.slice.call(arguments, 0)
      .map(toString)
      .join(' ');
    var text = logTo.innerText;
    logTo.innerText = text + msg + '\n';
  };

}());