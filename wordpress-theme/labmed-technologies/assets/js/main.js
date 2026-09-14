/* Labmed Technologies — interactions */
(function () {
  'use strict';

  var doc = document;

  /* ---------- Scroll progress + sticky header ---------- */
  var bar = doc.getElementById('scroll-progress-bar');
  var header = doc.getElementById('site-header');
  var toTop = doc.getElementById('back-to-top');

  function onScroll() {
    var y = window.scrollY || doc.documentElement.scrollTop;
    var h = doc.documentElement.scrollHeight - window.innerHeight;
    if (bar) {
      bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    }
    if (header) {
      header.classList.toggle('is-scrolled', y > 24);
    }
    if (toTop) {
      toTop.classList.toggle('is-visible', y > 600);
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Mobile navigation ---------- */
  var toggle = doc.getElementById('nav-toggle');
  if (toggle && header) {
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealables = doc.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px' }
    );
    Array.prototype.forEach.call(revealables, function (el, i) {
      el.style.transitionDelay = (i % 4) * 80 + 'ms';
      io.observe(el);
    });
  } else {
    Array.prototype.forEach.call(revealables, function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ---------- Hero slideshow ---------- */
  var hero = doc.getElementById('hero');
  if (hero) {
    var slides = hero.querySelectorAll('.hero-slide');
    var texts = hero.querySelectorAll('.hero-text');
    var dots = hero.querySelectorAll('.hero-dots button');
    var index = 0;
    var timer = null;

    function show(i) {
      index = i;
      [slides, texts, dots].forEach(function (group) {
        Array.prototype.forEach.call(group, function (el, n) {
          el.classList.toggle('is-active', n === i);
        });
      });
    }

    function start() {
      timer = window.setInterval(function () {
        show((index + 1) % slides.length);
      }, 7000);
    }

    Array.prototype.forEach.call(dots, function (dot, n) {
      dot.addEventListener('click', function () {
        window.clearInterval(timer);
        show(n);
        start();
      });
    });

    show(0);
    if (slides.length > 1) {
      start();
    }

    /* Parallax on the hero imagery */
    var heroImgs = hero.querySelectorAll('.hero-slide img');
    window.addEventListener(
      'scroll',
      function () {
        var offset = Math.min(window.scrollY, 700) * 0.25;
        Array.prototype.forEach.call(heroImgs, function (img) {
          img.style.transform = 'translate3d(0,' + offset + 'px,0)';
        });
      },
      { passive: true }
    );
  }

  /* ---------- Animated counters ---------- */
  var nums = doc.querySelectorAll('[data-count]');
  if (nums.length && 'IntersectionObserver' in window) {
    var co = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }
          var el = entry.target;
          co.unobserve(el);
          var raw = el.getAttribute('data-count') || '';
          var match = raw.match(/\d+/);
          if (!match) {
            return;
          }
          var target = parseInt(match[0], 10);
          var started = null;
          function step(ts) {
            if (!started) {
              started = ts;
            }
            var p = Math.min((ts - started) / 1400, 1);
            var value = Math.round(target * (1 - Math.pow(1 - p, 3)));
            el.textContent = raw.replace(match[0], String(value));
            if (p < 1) {
              window.requestAnimationFrame(step);
            }
          }
          window.requestAnimationFrame(step);
        });
      },
      { threshold: 0.4 }
    );
    Array.prototype.forEach.call(nums, function (el) {
      co.observe(el);
    });
  }

  /* ---------- FAQ accordion ---------- */
  Array.prototype.forEach.call(doc.querySelectorAll('.faq-q'), function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      if (!item) {
        return;
      }
      var open = item.classList.contains('is-open');
      Array.prototype.forEach.call(doc.querySelectorAll('.faq-item'), function (other) {
        other.classList.remove('is-open');
        var q = other.querySelector('.faq-q');
        if (q) {
          q.setAttribute('aria-expanded', 'false');
        }
      });
      if (!open) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ---------- Copy to clipboard ---------- */
  Array.prototype.forEach.call(doc.querySelectorAll('.copy-line'), function (btn) {
    btn.addEventListener('click', function () {
      var value = btn.getAttribute('data-copy') || '';
      var label = btn.querySelector('.copy-label');
      var done = function () {
        if (label) {
          var original = label.textContent;
          label.textContent = 'Copied';
          window.setTimeout(function () {
            label.textContent = original;
          }, 1800);
        }
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(done);
      }
    });
  });
})();
