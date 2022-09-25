function solve(str,char,anotherStr) {
    let res = str.replace('_',char);
    let output = res === anotherStr? 'Matched' : 'Not Matched';
    console.log(output);
}

solve('Str_ng', 'i','String')