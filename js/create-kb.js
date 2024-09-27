/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */

// eslint-disable-next-line no-unused-vars
const createKb = (keySet, parentSelector, toCreateBtn) => {
  keySet.forEach((item) => {
    const parent = document.querySelector(parentSelector);
    const keyRow = document.createElement('div');
    keyRow.classList.add('keyboard__row');
    item.forEach((elem) => {
      const btn = toCreateBtn(elem);
      if (elem.width) btn.style.cssText = `width: ${elem.width};`;
      if (elem.bgc) btn.classList.add('keyboard__btn_yellow');
      keyRow.append(btn);
    });
    parent.append(keyRow);
  });
};

export default createKb;
