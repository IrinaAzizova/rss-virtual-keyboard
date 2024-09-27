/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
const checkBtn = (value, textarea, carriage) => {
  const arr = textarea.innerHTML.split(carriage);

  if (value === 'Tab') {
    arr[0] += '&emsp;';
  }

  if (value === ' ') {
    arr[0] += '&nbsp;';
  }

  if (value === 'Enter') {
    arr[0] += '<br>';
  }

  if (value === 'Backspace') {
    if (arr[0].slice(-4) === '<br>') {
      arr[0] = arr[0].slice(0, -4);
    } else if (arr[0].slice(-5) === '&amp;') {
      arr[0] = arr[0].slice(0, -5);
    } else if (arr[0].slice(-6) === '&nbsp;') {
      arr[0] = arr[0].slice(0, -6);
    } else {
      arr[0] = arr[0].slice(0, -1);
    }
  }

  if (value === 'del') {
    if (arr[1].slice(0, 4) === '<br>') {
      arr[1] = arr[1].slice(4);
    } else if (arr[1].slice(0, 5) === '&amp;') {
      arr[1] = arr[1].slice(5);
    } else if (arr[1].slice(0, 6) === '&nbsp;') {
      arr[1] = arr[1].slice(6);
    } else {
      arr[1] = arr[1].slice(1);
    }
  }

  if (value === '◀') {
    if (arr[0].length > 0) {
      if (arr[0].slice(-4) === '<br>') {
        arr[0] = arr[0].slice(0, -4);
        arr[1] = `<br>${arr[1]}`;
      } else if (arr[0].slice(-5) === '&amp;') {
        arr[0] = arr[0].slice(0, -5);
        arr[1] = `&amp;${arr[1]}`;
      } else if (arr[0].slice(-6) === '&nbsp;') {
        arr[0] = arr[0].slice(0, -6);
        arr[1] = `&nbsp;${arr[1]}`;
      } else {
        arr[1] = arr[0].slice(-1) + arr[1];
        arr[0] = arr[0].slice(0, -1);
      }
    }
  }
  if (value === '▶') {
    if (arr[1].length > 0) {
      if (arr[1].slice(0, 4) === '<br>') {
        arr[0] = `${arr[0]}<br>`;
        arr[1] = arr[1].slice(4);
      } else if (arr[1].slice(0, 5) === '&amp;') {
        arr[0] = `${arr[0]}&amp;`;
        arr[1] = arr[1].slice(5);
      } else if (arr[1].slice(0, 6) === '&nbsp;') {
        arr[0] = `${arr[0]}&nbsp;`;
        arr[1] = arr[1].slice(6);
      } else {
        arr[0] += arr[1][0];
        arr[1] = arr[1].slice(1);
      }
    }
  }

  if (value === '▼') {
    const textArr = textarea.innerHTML.split('<br>');
    textArr.forEach((str, i) => {
      const indexOfCar = str.indexOf(carriage);
      if (indexOfCar !== -1) {
        if (textArr[i + 1]) {
          str = str.replace(carriage, '');
          textArr[i] = str;
          const result = textArr[i + 1].slice(0, indexOfCar) + carriage
              + textArr[i + 1].slice(indexOfCar);
          textArr[i + 1] = result;
        }
      }
    });
  }

  const result = arr[0] + carriage + arr[1];
  textarea.innerHTML = result;
};

export default checkBtn;
