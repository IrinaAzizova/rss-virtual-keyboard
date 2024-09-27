/* eslint-disable linebreak-style */
const toCreateBtn = ({
  key, span, character, code,
}) => {
  const btn = document.createElement('button');
  btn.classList.add('keyboard__btn');
  btn.dataset.character = character || key;
  btn.dataset.code = code || false;
  const keySpan = document.createElement('span');
  btn.innerHTML = key;
  if (span) {
    keySpan.textContent = span;
    btn.dataset.span = span;
    btn.append(keySpan);
  }
  return btn;
};

export default toCreateBtn;
