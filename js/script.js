'use strict';

import KeySetEng from './modules/key-set-en.js';
import KeySetRu from './modules/key-set-ru.js';
import toCreateBtn from './modules/to-create-btn.js';
import addActiveClassToBtn from './modules/add-active-class-to-btn.js';
import toCreateKeyboardWrapper from './modules/to-create-kb-wrapper.js';
import toCreateKeyboard from './modules/to-create-kb.js';
import checkBtn from './modules/check-btn.js';

window.addEventListener('DOMContentLoaded', () => {

	/* page layout */

	const KEY_SET_EN = KeySetEng(),
		KEY_SET_RU = KeySetRu();
	let lang, keySet;

    let text = '';
    const carriage = '<span class="blink">|</span>';

    let shiftLeftStatus = false,
        shiftRightStatus = false,
        capsStatus = false;

	if (localStorage.getItem('lang')) {
		lang = localStorage.getItem('lang');
		keySet = lang == 'en' ? KEY_SET_EN : KEY_SET_RU;
	} else {
		lang = 'en';
		keySet = KEY_SET_EN;
		localStorage.setItem('lang', lang);
	}



	/* initial create */

	toCreateKeyboardWrapper(lang, text,carriage);
	toCreateKeyboard(keySet, '.keyboard__wrapper', toCreateBtn);
	addActiveClassToBtn('.keyboard__btn');



    /* click */

    const toClickKey = () => {
        const btns = document.querySelectorAll('.keyboard__btn'),
              textarea = document.querySelector('#keyboard-text'),
              capsBtn = document.querySelector('[data-character="Caps Lock"'),
              shiftLeftBtn = document.querySelector('[data-character="shiftLeft"'),
              shiftRightBtn = document.querySelector('[data-character="shiftRight"'),
              noTap = new Set(['Backspace', 'Tab', 'del', 'Caps Lock', 'Enter', 'shiftLeft', 'shiftRight', 'Ctrl', 'Alt', 'Meta']);

        btns.forEach( btn => {
            btn.addEventListener('click', (event) => {
                if (!noTap.has(event.currentTarget.dataset.character)) {
                    let carrInd = textarea.innerHTML.indexOf('<span class="blink">|</span>');
                    if (event.currentTarget.dataset.span && (shiftLeftStatus || shiftRightStatus)) {
                        textarea.innerHTML = textarea.innerHTML.slice(0, carrInd) + event.currentTarget.dataset.span + '<span class="blink">|</span>';
                        console.log(event.currentTarget.dataset.span);
                    } else if (capsStatus || shiftLeftStatus || shiftRightStatus) {
                        textarea.innerHTML = textarea.innerHTML.slice(0, carrInd) + event.currentTarget.dataset.character.toUpperCase() + '<span class="blink">|</span>';
                    } else {
                        textarea.innerHTML = textarea.innerHTML.slice(0, carrInd) + event.currentTarget.dataset.character.toLowerCase() + '<span class="blink">|</span>';
                    }            
                }
                
                checkBtn(event.target.dataset.character, textarea, carriage);

                const toChangeCapsShiftStatus = (character, charStatus, btn) => {
                    if (event.target.dataset.character == character) {
                        charStatus = !charStatus;

                        if (character == 'shiftLeft' && charStatus) {
                            shiftRightStatus = false;
                            shiftRightBtn.classList.remove('keyboard__btn_active');
                        } else if (character == 'shiftRight' && charStatus) {
                            shiftLeftStatus = false;
                            shiftLeftBtn.classList.remove('keyboard__btn_active');
                        }

                        if (!charStatus) {
                            btn.classList.remove('keyboard__btn_active');
                        }
                        console.log(charStatus);
                    }

                    if (charStatus) {
                        btn.classList.add('keyboard__btn_active');
                    }

                    return charStatus;
                }
                
                capsStatus = toChangeCapsShiftStatus('Caps Lock', capsStatus, capsBtn);
                shiftLeftStatus = toChangeCapsShiftStatus('shiftLeft', shiftLeftStatus, shiftLeftBtn);
                shiftRightStatus = toChangeCapsShiftStatus('shiftRight', shiftRightStatus, shiftRightBtn);
            });
        });
    }
    toClickKey();


	/* tap btns together */

	function runOnKeys() {
		let pressed = new Set();

		document.addEventListener('keydown', (event) => {
			pressed.add(event.code);            
            text = document.querySelector('#keyboard-text').innerHTML;
            text = text.slice(0, text.indexOf(carriage));
            console.log(text);
            /* change language */
			if (
				(pressed.has('AltLeft') && pressed.has('ShiftLeft')) ||
				(pressed.has('AltRight') && pressed.has('ShiftRight'))
			) {
				if (lang == 'en') {
					lang = 'ru';
					keySet = KEY_SET_RU;
				} else {
					lang = 'en';
					keySet = KEY_SET_EN;
				}                
                localStorage.setItem('lang', lang);
                
            console.log(text);
				toCreateKeyboardWrapper(lang, text, carriage);
				toCreateKeyboard(keySet, '.keyboard__wrapper', toCreateBtn);
				addActiveClassToBtn('.keyboard__btn');
                toClickKey();
			}
		});

		document.addEventListener('keyup', function (event) {
			pressed.delete(event.code);
		});
	}

	runOnKeys();

	const keyCapture = function (){
        document.addEventListener("keydown", (e)=>{
            let key = e.key;
            console.log(key);
        });
    };

    keyCapture();
});
