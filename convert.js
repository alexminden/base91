const base91_char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,./:;<=>?@[]^_`{|}~"' 

function encode(data) {
    if(data<91) return "error";
    var convert='',mod;
    while(data >= 91) {
        mod = data%91;
        data =  Math.floor(data/91);
        convert+=base91_char[mod];
    }
    return (convert+base91_char[data]).split("").reverse().join("");
}

function decode(data) {
    var time = 0, power;
    var convert = data.split("").reverse().join("");
    for(let i in convert) {
        power = Math.pow(91,i);
        time+= power*(base91_char.indexOf(convert[i]));
    }
    return time;
}

function main() {
    var ts = Math.floor(Date.now()/1000);
    console.log(ts);
    var encoded = encode(ts);
    console.log(encode(ts));
    console.log(decode(encoded));
}

main();