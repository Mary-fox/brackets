module.exports = function check(str, bracketsConfig) {
  const brackets = [].concat(...bracketsConfig);
  const open = brackets.filter(( _, i) => i % 2 === 0);
  const close = brackets.filter((_, i) => i % 2 !== 0);


    let stack = [];
    for (let i=0; i<str.length; i++) {
      let currentSymbol = str[i];

        if (close.includes(currentSymbol)) {
          let topElement = stack[stack.length-1];
          if (close.indexOf(currentSymbol) === open.indexOf(topElement)) {
            stack.pop()
          } else {
            stack.push(currentSymbol)
          }
    
        } else if (open.includes(currentSymbol)) {
          stack.push(currentSymbol);
      }
    
  }
  return stack.length === 0 ? true : false;
    
}
