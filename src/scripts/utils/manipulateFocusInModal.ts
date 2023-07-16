const INTERACTIVE_SELECTOR = "button, a";

const createInteractiveElementArray = (element: HTMLElement) => {
  const elements = element.querySelectorAll<HTMLButtonElement | HTMLAnchorElement>(INTERACTIVE_SELECTOR);
  const interactiveElementArray = Array.from(elements);
  return interactiveElementArray;
};

export const focusToButton = (parentElement: HTMLElement, isFirstFocus = true) => {
  if (!parentElement) {
    throw new Error("No element found.");
  }

  const focusableArray = createInteractiveElementArray(parentElement);

  if (focusableArray.length > 0) {
    focusableArray[isFirstFocus ? 0 : focusableArray.length - 1].focus();
  }
};

export const manipulateFocusInModal = (event: KeyboardEvent, parentElement: HTMLElement, onClose: () => void) => {
  if (!parentElement) {
    return;
  }
  switch (event.code) {
    case "Enter":
    case "Space":
      break;
    case "Escape":
      onClose();
      break;
    case "Tab": {
      const interactiveElArray = createInteractiveElementArray(parentElement);
      const focusIndex = interactiveElArray.findIndex((el) => el === document.activeElement);

      if (interactiveElArray.length === 1) {
        event.preventDefault();
        event.stopImmediatePropagation();

        focusToButton(parentElement, true);
        break;
      }

      if (focusIndex === 0) {
        if (event.shiftKey) {
          event.preventDefault();
          event.stopImmediatePropagation();

          focusToButton(parentElement, false);
        }
      } else if (focusIndex >= interactiveElArray.length - 1) {
        if (!event.shiftKey) {
          event.preventDefault();
          event.stopImmediatePropagation();

          focusToButton(parentElement, true);
        }
      } else if (focusIndex === -1) {
        event.preventDefault();
        event.stopImmediatePropagation();

        focusToButton(parentElement, true);
      }
      break;
    }
  }
};
