/**
 * Возвращает промис, который разрешается через заданное время.
 */
function timeoutPromise(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Ожидает загрузки всех изображений внутри элемента.
 * Используется maxTimeout (например, 300 мс), чтобы не держать блок скрытым слишком долго.
 */
function waitImages(element, maxTimeout = 300) {
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
 * Ожидает, пока DOM внутри элемента стабилизируется
 * (то есть за delay мс не происходит мутаций).
 * Дополнительно fallback через maxTimeout.
 */
function waitForContentSettle(element, delay = 100, maxTimeout = 300) {
  return new Promise(resolve => {
    let timer;
    const observer = new MutationObserver(() => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        observer.disconnect();
        resolve();
      }, delay);
    });
    observer.observe(element, { childList: true, subtree: true, characterData: true });
    // Фоллбэк: если изменений нет, через maxTimeout всё равно разрешаем
    timer = setTimeout(() => {
      observer.disconnect();
      resolve();
    }, maxTimeout);
  });
}

/**
 * Обрабатывает отдельный блок.
 * Сначала ждёт загрузки изображений, затем стабилизации содержимого,
 * при этом используем Promise.race с таймаутами, чтобы не задерживать показ слишком долго.
 */
function processBlock(el) {
  // Непосредственный fallback: если вся обработка не успевает сработать, через 300 мс делаем элемент видимым.
  setTimeout(() => el.classList.add("visible"), 300);

  Promise.race([ waitImages(el, 300), timeoutPromise(300) ])
    .then(() => Promise.race([ waitForContentSettle(el, 100, 300), timeoutPromise(300) ]))
    .then(() => {
      el.classList.add("visible");
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".animate");
  blocks.forEach(el => processBlock(el));
});
