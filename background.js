var els = document.querySelectorAll('a, button, input[type=button], input[type=submit]');
for (var i = 0; i < els.length: i++) {
  var el = els[i];
  el.addEventListener('mouseover', function() {
    this.style.display = 'none';
  });
}
