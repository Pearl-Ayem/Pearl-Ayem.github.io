// Scroll reveals and count-up stats for the showcase components in _sass/_showcase.scss.
// Markup: add `sc-reveal` to any block to fade it in when scrolled into view, and
// `data-count="94"` (optional `data-prefix`, `data-suffix`, `data-decimals`,
// `data-format="comma"`) to a number inside it to count up from zero.
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function render(el, value) {
    var decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
    var text = el.getAttribute("data-format") === "comma" ? Math.round(value).toLocaleString("en-GB") : value.toFixed(decimals);
    el.textContent = (el.getAttribute("data-prefix") || "") + text + (el.getAttribute("data-suffix") || "");
  }

  function countUp(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    if (reduce) return render(el, target);
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min(1, (ts - start) / 1600);
      render(el, target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function show(el) {
    el.classList.add("in");
    el.querySelectorAll("[data-count]").forEach(countUp);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var blocks = document.querySelectorAll(".sc-reveal");
    if (!blocks.length) return;
    if (!("IntersectionObserver" in window) || reduce) {
      blocks.forEach(show);
      return;
    }
    document.documentElement.classList.add("sc-js");
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            show(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    blocks.forEach(function (b) {
      io.observe(b);
    });
  });
})();
