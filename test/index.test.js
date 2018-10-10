const { numToChinese, chineseToNum } = require('../src/index');

describe('阿拉伯数字转中文数字', () => {
  test('3 转为 三', () => {
    expect(numToChinese(3)).toEqual('三');
  })

  test('13 转为 一十三', () => {
    expect(numToChinese(13)).toEqual('一十三');
  })

  test('113 转为 一百一十三', () => {
    expect(numToChinese(113)).toEqual('一百一十三');
  })

  test('2 0301 4101 转为 二亿零三百零一万四千一百零一', () => {
    expect(numToChinese(203014101)).toEqual('二亿零三百零一万四千一百零一');
  })

  test('101 0101 0101 0111 转为 一百零一万亿零一百零一亿零一百零一万零一百一十一', () => {
    expect(numToChinese(101010101010111)).toEqual('一百零一万亿零一百零一亿零一百零一万零一百一十一');
  })

  test('101 0000 0300 0103 转为 一百零一万亿零三百万零一百零三', () => {
    expect(numToChinese(101000003000103)).toEqual('一百零一万亿零三百万零一百零三');
  })

  test('10 0000 3000 0103 转为 一十万亿零三千万零一百零三', () => {
    expect(numToChinese(10000030000103)).toEqual('一十万亿零三千万零一百零三');
  })
})

describe('中文数字转阿拉伯数字', () => {
  test('三 转为 3', () => {
    expect(chineseToNum('三')).toEqual(3);
  })

  test('一十三 转为 13', () => {
    expect(chineseToNum('一十三')).toEqual(13);
  })

  test('一百一十三 转为 113', () => {
    expect(chineseToNum('一百一十三')).toEqual(113);
  })

  test('二亿零三百零一万四千一百零一 转为 2 0301 4101', () => {
    expect(chineseToNum('二亿零三百零一万四千一百零一')).toEqual(203014101);
  })

  test('一百零一万亿零一百零一亿零一百零一万零一百一十一 转为 101 0101 0101 0111', () => {
    expect(chineseToNum('一百零一万亿零一百零一亿零一百零一万零一百一十一')).toEqual(101010101010111);
  })

  test('一百零一万亿零三百万零一百零三 转为 101 0000 0300 0103', () => {
    expect(chineseToNum('一百零一万亿零三百万零一百零三')).toEqual(101000003000103);
  })

  test('一十万亿零三千万零一百零三 转为 10 0000 3000 0103', () => {
    expect(chineseToNum('一十万亿零三千万零一百零三')).toEqual(10000030000103);
  })
})
