/* eslint-disable linebreak-style */
const addActiveClassToBtn = (btnsSelector) => {
  const btns = document.querySelectorAll(btnsSelector);
  btns.forEach((btn) => {
    btn.addEventListener('mousedown', () => {
      btns.forEach((item) => {
        item.classList.remove('keyboard__btn_active');
        setTimeout(() => {
          item.classList.remove('keyboard__btn_active');
        }, 300);
      });
      btn.classList.add('keyboard__btn_active');
    });
  });
};

export default addActiveClassToBtn;
