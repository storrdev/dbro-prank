window.addEventListener('load', function() {
  var els = document.querySelectorAll('a, button, input[type=button], input[type=submit]');
  els.forEach(function(el) {
    el.addEventListener('mouseover', function() {
      this.style.display = 'none';
    });
  });
});
