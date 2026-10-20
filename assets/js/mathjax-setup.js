window.MathJax = {
  tex: {
    tags: "ams",
    // Single "$" is not a delimiter, so dollar amounts in text render as-is.
    // Use $$...$$ in Markdown (Kramdown turns inline $$ into \(...\)).
    inlineMath: [["\\(", "\\)"]],
  },
  options: {
    renderActions: {
      addCss: [
        200,
        function (doc) {
          const style = document.createElement("style");
          style.innerHTML = `
          .mjx-container {
            color: inherit;
          }
        `;
          document.head.appendChild(style);
        },
        "",
      ],
    },
  },
};
