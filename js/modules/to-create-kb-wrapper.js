/* eslint-disable linebreak-style */
const toCreateKeyboardWrapper = (lang, value, carriage) => {
  const text = lang === 'ru' ? 'Для переключения на английскую раскладку нажмите вместе клавиши <b>Alt + Shift</b> справа или слева' : 'To switch to the Russian language, press <b>Alt + Shift</b> right or left together';

  document.body.innerHTML = `
    <div class="overlay">
        <section class="keyboard">
            <h1 class="keyboard__heading">the on-screen keyboard was developed on a Xiaomi laptop on Windows 11 (version 22H2) and Google Chrome (version 112.0.5615.138)</h1>
            <div class="keyboard__text" name="keyboard-text" id="keyboard-text">${value + carriage}</div>
            <div class="keyboard__wrapper"></div>
            <p class="keyboard__note">* ${text}</p>


        </section>
    </div>
    `;
};

export default toCreateKeyboardWrapper;
