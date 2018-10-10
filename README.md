# 中文数字-阿拉伯数字转换

## 阿拉伯数字转中文

numToChinese

参数: 传入数字

## 中文数字转阿拉伯数字

chineseToNum

参数: 传入中文描述

## 示例

```
import { numToChinese, chineseToNum } from 'chineseNumTransfer';

numToChinese(101000003000103); // 一百零一万亿零三百万零一百零三
chineseToNum("一百零一万亿零三百万零一百零三"); // 101000003000103

```