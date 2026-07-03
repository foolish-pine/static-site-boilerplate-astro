export const enforceMinViewportWidth = () => {
  const viewport = document.querySelector('meta[name="viewport"]');

  if (!viewport) return;

  viewport.setAttribute(
    "content",
    window.outerWidth > 389
      ? "width=device-width,initial-scale=1"
      : "width=390",
  );
};
