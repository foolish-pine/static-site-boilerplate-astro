// Lock the viewport to width=390 on screens narrower than the 390px minimum design width to prevent layout breakage; wider screens keep the responsive width=device-width behavior.
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
