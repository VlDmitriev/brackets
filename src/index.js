module.exports = function check(str, bracketsConfig) {
    let openBracketsCon = '';
    let closeBracketsCon = '';
    let string = ''
    for (let i in bracketsConfig){
        //console.log(bracketsConfig[i][0])
        openBracketsCon = openBracketsCon + bracketsConfig[i][0];
        closeBracketsCon = closeBracketsCon + bracketsConfig[i][1];
    }
    //console.log(openBracketsCon)
    //console.log(closeBracketsCon)
    for (let i in str){
      let index = closeBracketsCon.indexOf(str[i])
      //console.log(index)
      if (index != -1){
          //console.log(index)
          if (string[string.length - 1] != openBracketsCon[index]){
              return false
          }else{
              string = string.slice(0, -1)
          }
      }else{
          string = string + str[i]
      }
    }
    //console.log(string)
    if(string === ''){
        return true
    }else{
        return false
    }
}
