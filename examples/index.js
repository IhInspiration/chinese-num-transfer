import { numToChinese, chineseToNum } from 'chinese-num-transfer';

const chineseNum = numToChinese(101000003000103); // 一百零一万亿零三百万零一百零三
const arabicNum = chineseToNum("一百零一万亿零三百万零一百零三"); // 101000003000103

console.log('chineseNum', chineseNum);
console.log('arabicNum', arabicNum);
