/* eslint-disable linebreak-style */
const KeySetRu = () => [
  [
    { key: 'ё', bgc: true, code: 'Backquote' },
    { key: '1', span: '!', code: 'Digit1' },
    { key: '2', span: '"', code: 'Digit2' },
    { key: '3', span: '№', code: 'Digit3' },
    { key: '4', span: ';', code: 'Digit4' },
    { key: '5', span: '%', code: 'Digit5' },
    { key: '6', span: ':', code: 'Digit6' },
    { key: '7', span: '?', code: 'Digit7' },
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
    { key: 'й', code: 'KeyQ' },
    { key: 'ц', code: 'KeyW' },
    { key: 'у', code: 'KeyE' },
    { key: 'к', code: 'KeyR' },
    { key: 'е', code: 'KeyT' },
    { key: 'н', code: 'KeyY' },
    { key: 'г', code: 'KeyU' },
    { key: 'ш', code: 'KeyI' },
    { key: 'щ', code: 'KeyO' },
    { key: 'з', code: 'KeyP' },
    { key: 'х', code: 'BracketLeft' },
    { key: 'ъ', code: 'BracketRight' },
    { key: '\\', span: '/', code: 'Backslash' },
    {
      key: 'del', width: '55px', bgc: true, code: 'Delete',
    },
  ],
  [
    {
      key: 'Caps Lock', width: '121px', bgc: true, code: 'CapsLock',
    },
    { key: 'ф', code: 'KeyA' },
    { key: 'ы', code: 'KeyS' },
    { key: 'в', code: 'KeyD' },
    { key: 'а', code: 'KeyF' },
    { key: 'п', code: 'KeyG' },
    { key: 'р', code: 'KeyH' },
    { key: 'о', code: 'KeyJ' },
    { key: 'л', code: 'KeyK' },
    { key: 'д', code: 'KeyL' },
    { key: 'ж', code: 'Semicolon' },
    { key: 'э', code: 'Quote' },
    {
      key: 'Enter', width: '106px', bgc: true, code: 'Enter',
    },
  ],
  [
    {
      key: 'Shift', width: '179px', bgc: true, character: 'shiftLeft', code: 'ShiftLeft',
    },
    { key: 'я', code: 'KeyZ' },
    { key: 'ч', code: 'KeyX' },
    { key: 'с', code: 'KeyC' },
    { key: 'м', code: 'KeyV' },
    { key: 'и', code: 'KeyB' },
    { key: 'т', code: 'KeyN' },
    { key: 'ь', code: 'KeyM' },
    { key: 'б', code: 'Comma' },
    { key: 'ю', code: 'Period' },
    { key: '.', span: ',', code: 'Slash' },
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

export default KeySetRu;
