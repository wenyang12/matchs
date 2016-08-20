/**
 * 根据指定的正则表达式返回匹配结果列表
 * @author luoying
 */

'use strict';

module.exports = (content, regExp) => {
  let matchs = [];
  let match = null;
  while ((match = regExp.exec(content))) {
    matchs.push(match);
  }
  return matchs;
};
