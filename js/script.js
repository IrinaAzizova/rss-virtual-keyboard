/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
/* eslint-disable padded-blocks */
/* eslint-disable no-multiple-empty-lines */
import KeySetEng from './modules/key-set-en.js';
import KeySetRu from './modules/key-set-ru.js';
import toCreateBtn from './modules/to-create-btn.js';
import addActiveClassToBtn from './modules/add-active-class-to-btn.js';
import toCreateKeyboardWrapper from './modules/to-create-kb-wrapper.js';
import toCreateKeyboard from './modules/to-create-kb.js';
import checkBtn from './modules/check-btn.js';

window.addEventListener('DOMContentLoaded', () => {

  /* start initial */
  const KEY_SET_EN = KeySetEng();
  const KEY_SET_RU = KeySetRu();
  const carriage = '<span class="blink">|</span>';
  let lang;
  let keySet;
  let text = '';
  let shiftLeftStatus = false;
  let shiftRightStatus = false;
  let capsStatus = false;

  /* save lang */
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
    keySet = lang === 'en' ? KEY_SET_EN : KEY_SET_RU;
  } else {
    lang = 'en';
    keySet = KEY_SET_EN;
    localStorage.setItem('lang', lang);
  }


  /* initial create */
  toCreateKeyboardWrapper(lang, text, carriage);
  toCreateKeyboard(keySet, '.keyboard__wrapper', toCreateBtn);
  addActiveClassToBtn('.keyboard__btn');


  /* click */
  const toClickKey = () => {
    const btns = document.querySelectorAll('.keyboard__btn');
    const textarea = document.querySelector('#keyboard-text');
    const capsBtn = document.querySelector('[data-character="Caps Lock"');
    const shiftLeftBtn = document.querySelector('[data-character="shiftLeft"');
    const shiftRightBtn = document.querySelector('[data-character="shiftRight"');
    const noTap = new Set(['Backspace', 'del', 'Tab', 'Caps Lock', 'Enter', 'shiftLeft', 'shiftRight', ' ', 'Ctrl', 'Alt', 'Meta', '◀', '▶']);

    btns.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        if (!noTap.has(event.currentTarget.dataset.character)) {
          const arr = textarea.innerHTML.split(carriage);

          if (event.currentTarget.dataset.span && (shiftLeftStatus || shiftRightStatus)) {
            arr[0] += event.currentTarget.dataset.span + carriage;
            textarea.innerHTML = arr.join('');
          } else if (capsStatus || shiftLeftStatus || shiftRightStatus) {
            arr[0] += event.currentTarget.dataset.character.toUpperCase() + carriage;
            textarea.innerHTML = arr.join('');
          } else {
            // eslint-disable-next-line prefer-destructuring
            arr[2] = arr[1];
            arr[1] = '<span class="blink">|</span>';
            if (capsStatus || shiftLeftStatus || shiftRightStatus) {
              arr[0] += event.currentTarget.dataset.character.toUpperCase();
            } else {
              arr[0] += event.currentTarget.dataset.character;
            }
            textarea.innerHTML = arr.join('');
          }
        }

        checkBtn(event.target.dataset.character, textarea, carriage);

        // eslint-disable-next-line no-shadow
        const toChangeCapsShiftStatus = (character, charStatus, btn) => {
          if (event.target.dataset.character === character) {
            charStatus = !charStatus;

            if (character === 'shiftLeft' && charStatus) {
              shiftRightStatus = false;
              shiftRightBtn.classList.remove('keyboard__btn_shift');
            } else if (character === 'shiftRight' && charStatus) {
              shiftLeftStatus = false;
              shiftLeftBtn.classList.remove('keyboard__btn_shift');
            }

            if (!charStatus) {
              btn.classList.remove('keyboard__btn_shift');
            }
          }

          if (charStatus) {
            btn.classList.add('keyboard__btn_shift');
          }

          return charStatus;
        };

        capsStatus = toChangeCapsShiftStatus('Caps Lock', capsStatus, capsBtn);
        shiftLeftStatus = toChangeCapsShiftStatus('shiftLeft', shiftLeftStatus, shiftLeftBtn);
        shiftRightStatus = toChangeCapsShiftStatus('shiftRight', shiftRightStatus, shiftRightBtn);
      });
    });
  };
  toClickKey();


  /* tap btns */
  const keyCapture = () => {
    document.addEventListener('keydown', (event) => {
      event.preventDefault();
      const btns = document.querySelectorAll('.keyboard__btn');
      btns.forEach((element) => {
        if (event.code === element.dataset.code) {
          btns.forEach((item) => {
            item.classList.remove('keyboard__btn_active');
          });
          element.classList.add('keyboard__btn_active');
          setTimeout(() => {
            element.classList.remove('keyboard__btn_active');
          }, 300);
          element.click();
        }
      });

    });
  };

  keyCapture();


  /* tap btns together */
  function runOnKeys() {
    const pressed = new Set();

    document.addEventListener('keydown', (event) => {
      pressed.add(event.code);
      text = document.querySelector('#keyboard-text').innerHTML;
      text = text.slice(0, text.indexOf(carriage));
      /* change language */
      if (
        (pressed.has('AltLeft') && pressed.has('ShiftLeft')) || (pressed.has('AltRight') && pressed.has('ShiftRight'))
      ) {
        if (lang === 'en') {
          lang = 'ru';
          keySet = KEY_SET_RU;
        } else {
          lang = 'en';
          keySet = KEY_SET_EN;
        }
        localStorage.setItem('lang', lang);

        toCreateKeyboardWrapper(lang, text, carriage);
        toCreateKeyboard(keySet, '.keyboard__wrapper', toCreateBtn);
        addActiveClassToBtn('.keyboard__btn');
        toClickKey();
        shiftLeftStatus = false;
        shiftRightStatus = false;
      }
    });

    document.addEventListener('keyup', (event) => {
      pressed.delete(event.code);
    });
  }

  runOnKeys();
});
