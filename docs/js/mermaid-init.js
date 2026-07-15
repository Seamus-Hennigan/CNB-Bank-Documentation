document.addEventListener("DOMContentLoaded", function () {
  if (!window.mermaid) {
    return;
  }

  document.querySelectorAll("pre.mermaid").forEach(function (pre) {
    var code = pre.querySelector("code");
    if (code) {
      pre.textContent = code.textContent;
    }
  });

  mermaid.initialize({ startOnLoad: false });
  mermaid.run({ querySelector: "pre.mermaid" });
});
