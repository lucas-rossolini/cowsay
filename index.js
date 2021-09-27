const wilderInfo = require('./information');

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `hello i'm ${wilderInfo.name} from ${wilderInfo.campus}`,
    e : "oO",
    T : "U "
}));