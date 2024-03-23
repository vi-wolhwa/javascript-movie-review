/**
 * querySelector의 단축 함수입니다. 선택된 요소가 없을 경우 null을 반환하거나, 옵션에 따라 에러를 발생시킵니다.
 * @param selector - 선택할 요소의 CSS 선택자입니다.
 * @param scope - 검색 범위를 지정하는 요소입니다. 기본값은 document입니다.
 * @param throwError - 선택된 요소가 없을 경우 에러를 발생시킬지 여부입니다.
 * @returns 선택된 요소를 반환합니다. 요소가 없으면 null을 반환하거나, throwError가 true이면 에러를 발생시킵니다.
 * @throws Error - throwError가 true이고 선택된 요소가 없을 경우 에러를 발생시킵니다.
 */
export const $ = (selector: string, scope: Document | Element = document, throwError = false) => {
  const element = scope.querySelector(selector);

  if (throwError && !element) {
    throw new Error('No element matches the selector:' + selector);
  }

  return element;
};

/**
 * querySelectorAll의 단축 함수입니다. 선택된 요소가 없을 경우 빈 NodeList를 반환하거나, 옵션에 따라 에러를 발생시킵니다.
 * @param selector - 선택할 요소의 CSS 선택자입니다.
 * @param scope - 검색 범위를 지정하는 요소입니다. 기본값은 document입니다.
 * @param throwError - 선택된 요소가 없을 경우 에러를 발생시킬지 여부입니다.
 * @returns 선택된 요소의 NodeList를 반환합니다. 만약 선택된 요소가 없다면, 빈 NodeList를 반환하거나 throwError가 true이면 에러를 발생시킵니다.
 * @throws Error - throwError가 true이고 선택된 요소가 없을 경우 에러를 발생시킵니다.
 */
export const $$ = (selector: string, scope: Document | Element = document, throwError = false) => {
  const elements = scope.querySelectorAll(selector);

  if (throwError && elements.length === 0) {
    throw new Error('No elements match the selector:' + selector);
  }

  return elements;
};
