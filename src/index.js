const numCharArr = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
const powerCharArr = ['', '十', '百', '千'];
const sectionCharArr = ['', '万', '亿', '万亿', '亿亿'];

const numToChinese = (value) => {
  const numStr = value.toString();
  const sectionSignStr = numStr.replace(/(?!^)(?=(\d{4})+$)/g, ',');
  const sectionArr = sectionSignStr.split(',');
  const sectionArrLen = sectionArr.length;
  let chineseStr = '';
  let allZero = false;
  
  for (let i = 0; i < sectionArrLen; i++) {
    const powerArr = sectionArr[i].split('');
    const powerLen = powerArr.length;
    if (powerLen < 4) {
      for(let j = 0; j < 4 - powerLen; j++) {
        powerArr.unshift('');
      }
    }

    powerArr.forEach((item, index) => {
      if (item === '0' && !allZero) {
        // 千位为零其他有数加零
        if (index === 0 && powerArr.some(item => item !== '0')) {
          chineseStr += '零';
        }
        // 百位为零，如果千位不为零且后面有数则加零
        if (index === 1 && powerArr[0] !== '0' && powerArr.slice(2).some(item => item !== '0')) {
          chineseStr += '零';
        }
        // 十位为零，如果百位不为零且个位有数则加零
        if (index === 2 && powerArr[1] !== '0' && powerArr[3] !== '0') {
          chineseStr += '零';
        }
      } else if (item !== '' && item !== '0') {
        allZero = false;
        chineseStr += numCharArr[item] + powerCharArr[(3 - index)];
      }
    });
    if (powerArr.some(item => item !== '0')) {
      chineseStr += sectionCharArr[(sectionArrLen - 1 - i)];
    } else {
      allZero = true;
      chineseStr += '零';
    }
  }

  return chineseStr;
};

const chineseToNum = (value) => {
  const nonZeroStr = value.replace(/零/g, '');
  const ast = [];
  let tempNum = 0;
  let powerNum = 0;
  let sectionNum = 0;
  let result = 0;

  nonZeroStr.split("").forEach(item => {
    const num = numCharArr.indexOf(item);
    const powerIndex = powerCharArr.indexOf(item);
    const sectionIndex = sectionCharArr.indexOf(item);

    if (num > -1) {
      ast.push({
        type: 'number',
        value: num,
      })
    } else if (powerIndex > -1) {
      ast.push({
        type: 'power',
        value: Math.pow(10, powerIndex),
      });
    } else if (sectionIndex > -1) {
      ast.push({
        type: 'section',
        value: Math.pow(10000, sectionIndex),
      });
    }
  });

  ast.forEach((item, index) => {
    if (item.type === 'number') {
      if (ast[index - 1] && ast[index - 1].type === 'section') {
        result += sectionNum;
      }
      if (ast[index + 1] && ast[index + 1].type === 'section') {
        powerNum += item.value;
      }
      tempNum = item.value;
    } else if (item.type === 'power') {
      powerNum += tempNum * item.value;
    } else if (item.type === 'section') {
      if (ast[index - 1].type === 'section') {
        sectionNum = sectionNum * item.value;
      } else {
        sectionNum = powerNum * item.value;
        tempNum = 0;
        powerNum = 0;
      }
    }

    if (index >= ast.length - 1) {
      result += powerNum + tempNum;
    }
  })


  return result;
};

export {
  numToChinese,
  chineseToNum,
}