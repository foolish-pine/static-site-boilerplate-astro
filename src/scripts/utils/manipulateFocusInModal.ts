const INTERACTIVE_SELECTOR = "button, a";

// 要素内にあるフォーカス可能な要素を取得
const createInteractiveElementArray = (element: HTMLElement) => {
  const elements = element.querySelectorAll<HTMLButtonElement | HTMLAnchorElement>(INTERACTIVE_SELECTOR);
  const interactiveElementArray = Array.from(elements);
  return interactiveElementArray;
};

/**
 * 要素の先頭と末尾どちらかにフォーカスを与える
 * @param parentElement 対象の親要素
 * @param isFirstFocus 先頭と末尾のどちらにフォーカスを与えるか
 */
export const focusToButton = (parentElement: HTMLElement, isFirstFocus = true) => {
  if (!parentElement) {
    throw new Error("No element found.");
  }

  const focusableArray = createInteractiveElementArray(parentElement);

  if (focusableArray.length > 0) {
    focusableArray[isFirstFocus ? 0 : focusableArray.length - 1].focus();
  }
};

/**
 * モーダルのキーボードフォーカスを制御する
 * @param event
 * @param parentElement 対象の親要素
 * @param onClose モーダルを閉じる処理
 */
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
      // モーダル画面内にフォーカスが当たっているか検証
      const interactiveElArray = createInteractiveElementArray(parentElement);
      const focusIndex = interactiveElArray.findIndex((el) => el === document.activeElement);

      // フォーカス可能な要素が1つしかない場合、その要素のみフォーカス
      if (interactiveElArray.length === 1) {
        event.preventDefault();
        event.stopImmediatePropagation();

        focusToButton(parentElement, true);
        break;
      }

      // 最初の要素にふれているかつ同時にShiftキーを謳歌しているとき、最後の要素にフォーカスをあてる
      if (focusIndex === 0) {
        if (event.shiftKey) {
          event.preventDefault();
          event.stopImmediatePropagation();

          focusToButton(parentElement, false);
        }
      } else if (focusIndex >= interactiveElArray.length - 1) {
        // 最後の要素にふれていたら1番目の要素にフォーカスをあてる
        if (!event.shiftKey) {
          event.preventDefault();
          event.stopImmediatePropagation();

          focusToButton(parentElement, true);
        }
      } else if (focusIndex === -1) {
        // 画面外の要素にフォーカスがあたっていたら1番目の要素にフォーカスをあてる
        event.preventDefault();
        event.stopImmediatePropagation();

        focusToButton(parentElement, true);
      }
      break;
    }
  }
};
