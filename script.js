document.addEventListener('DOMContentLoaded', function() {
    // Init Parallax
    var elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
  
    // Init Tabs
    var elems = document.querySelectorAll('.tabs');
    M.Tabs.init(elems);
  });