/* eslint-disable linebreak-style */
const KeySetEng = () => [
  [
    {
      key: '`', span: '~', bgc: true, code: 'Backquote',
    },
    { key: '1', span: '!', code: 'Digit1' },
    { key: '2', span: '@', code: 'Digit2' },
    { key: '3', span: '#', code: 'Digit3' },
    { key: '4', span: '$', code: 'Digit4' },
    { key: '5', span: '%', code: 'Digit5' },
    { key: '6', span: '^', code: 'Digit6' },
    { key: '7', span: '&', code: 'Digit7' },
    { key: '8', span: '*', code: 'Digit8' },
    { key: '9', span: '(', code: 'Digit9' },
    { key: '0', span: ')', code: 'Digit0' },
    { key: '-', span: '_', code: 'Minus' },
    { key: '=', span: '+', code: 'Equal' },
    {
      key: 'Backspace', width: '123px', bgc: true, code: 'Backspace',
    },
  ],
  [
    {
      key: 'Tab', width: '60px', bgc: true, code: 'Tab',
    },
    { key: 'q', code: 'KeyQ' },
    { key: 'w', code: 'KeyW' },
    { key: 'e', code: 'KeyE' },
    { key: 'r', code: 'KeyR' },
    { key: 't', code: 'KeyT' },
    { key: 'y', code: 'KeyY' },
    { key: 'u', code: 'KeyU' },
    { key: 'i', code: 'KeyI' },
    { key: 'o', code: 'KeyO' },
    { key: 'p', code: 'KeyP' },
    { key: '[', span: '{', code: 'BracketLeft' },
    { key: ']', span: '}', code: 'BracketRight' },
    { key: '\\', span: '|', code: 'Backslash' },
    {
      key: 'del', width: '55px', bgc: true, code: 'Delete',
    },
  ],
  [
    {
      key: 'Caps Lock', width: '121px', bgc: true, code: 'CapsLock',
    },
    { key: 'a', code: 'KeyA' },
    { key: 's', code: 'KeyS' },
    { key: 'd', code: 'KeyD' },
    { key: 'f', code: 'KeyF' },
    { key: 'g', code: 'KeyG' },
    { key: 'h', code: 'KeyH' },
    { key: 'j', code: 'KeyJ' },
    { key: 'k', code: 'KeyK' },
    { key: 'l', code: 'KeyL' },
    { key: ';', span: ':', code: 'Semicolon' },
    { key: "'", span: '"', code: 'Quote' },
    {
      key: 'Enter', width: '106px', bgc: true, code: 'Enter',
    },
  ],
  [
    {
      key: 'Shift', width: '179px', bgc: true, character: 'shiftLeft', code: 'ShiftLeft',
    },
    { key: 'z', code: 'KeyZ' },
    { key: 'x', code: 'KeyX' },
    { key: 'c', code: 'KeyC' },
    { key: 'v', code: 'KeyV' },
    { key: 'b', code: 'KeyB' },
    { key: 'n', code: 'KeyN' },
    { key: 'm', code: 'KeyM' },
    { key: ',', span: '≺', code: 'Comma' },
    { key: '.', span: '≻', code: 'Period' },
    { key: '/', span: '?', code: 'Slash' },
    { key: '▲', bgc: true, code: 'ArrowUp' },
    {
      key: 'Shift', bgc: true, character: 'shiftRight', code: 'ShiftRight',
    },
  ],
  [
    {
      key: 'Ctrl', width: '80px', bgc: true, code: 'ControlLeft',
    },
    { key: 'Meta', bgc: true, code: 'MetaLeft' },
    { key: 'Alt', bgc: true, code: 'AltLeft' },
    { key: ' ', width: '339px', code: 'Space' },
    { key: 'Alt', bgc: true, code: 'AltRight' },
    {
      key: 'Ctrl', width: '80px', bgc: true, code: 'ControlRight',
    },
    { key: '◀', bgc: true, code: 'ArrowLeft' },
    { key: '▼', bgc: true, code: 'ArrowDown' },
    { key: '▶', bgc: true, code: 'ArrowRight' },
  ],
];

export default KeySetEng;
