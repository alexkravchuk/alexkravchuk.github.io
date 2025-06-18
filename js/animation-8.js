/**
 * Возвращает промис, который резолвится через заданное время (fallback).
 */
function timeoutPromise(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Ожидает загрузки всех изображений внутри блока.
 * Если изображение не загрузится за maxTimeout мс, промис разрешается всё равно.
 */
function waitImages(element, maxTimeout = 1000) {
  const imgs = element.querySelectorAll("img");
  const promises = Array.from(imgs).map(img => {
    return new Promise(resolve => {
      const timer = setTimeout(resolve, maxTimeout);
      if (img.complete) {
        clearTimeout(timer);
        resolve();
      } else {
        img.addEventListener("load", () => {
          clearTimeout(timer);
          resolve();
        }, { once: true });
        img.addEventListener("error", () => {
          clearTimeout(timer);
          resolve();
        }, { once: true });
      }
    });
  });
  return Promise.all(promises);
}

/**
 * Ожидает, пока DOM внутри элемента «устоит» (нет изменений) в течение delay мс.
 * При этом fallbackTimeout обеспечивает, что ожидание не продлится дольше maxTimeout.
 */
function waitForContentSettle(element, delay = 300, maxTimeout = 500) {
  return new Promise((resolve) => {
    let timer;
    const observer = new MutationObserver(() => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        observer.disconnect();
        resolve();
      }, delay);
    });
    observer.observe(element, { childList: true, subtree: true, characterData: true });
    timer = setTimeout(() => {
      observer.disconnect();
      resolve();
    }, maxTimeout);
  });
}

/**
 * Обрабатывает отдельный блок.
 * Сначала ждём загрузки изображений, затем стабилизации DOM,
 * но при этом через Promise.race с таймаутами гарантируем показ контента.
 */
function processBlock(el) {
  Promise.race([ waitImages(el), timeoutPromise(1000) ])
    .then(() => Promise.race([ waitForContentSettle(el), timeoutPromise(500) ]))
    .then(() => {
      el.classList.add("visible");
    });
}

document.addEventListener("DOMContentLoaded", () => {
  // Обрабатываем все блоки с классом "animate"
  const blocks = document.querySelectorAll(".animate");
  blocks.forEach(el => processBlock(el));
});
