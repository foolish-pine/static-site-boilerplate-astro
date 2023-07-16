const viewport = document.querySelector('meta[name="viewport"]');

export const fixViewport = () => {
  const value = window.outerWidth > 374 ? "width=device-width,initial-scale=1" : "width=375";
  if (viewport !== null && viewport.getAttribute("content") !== value) {
    viewport.setAttribute("content", value);
  }
};
