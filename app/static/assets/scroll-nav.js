function scrollToSection(id, tocEl) {
  var target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  setActiveToc(tocEl);
}

function setActiveToc(el) {
  document.querySelectorAll('.toc-item').forEach(function(item) {
    item.classList.remove('active');
  });
  if (el) el.classList.add('active');
}

(function() {
  var scrollContainer = document.getElementById('chatMessages');
  
  var sectionIds = [];
  document.querySelectorAll('.section[id^="section-"]').forEach(function(el) {
    sectionIds.push(el.id);
  });

  if ('IntersectionObserver' in window && scrollContainer && sectionIds.length > 0) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          var tocItem = document.querySelector('.toc-item[data-target="' + id + '"]');
          if (tocItem) setActiveToc(tocItem);
        }
      });
    }, {
      root: scrollContainer,
      rootMargin: '-10% 0px -70% 0px',
      threshold: 0
    });

    sectionIds.forEach(function(id) {
      var el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }
})();