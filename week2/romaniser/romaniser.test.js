var test = require('tape');
var romaniser = require('./romaniser.js');

test('romaniser function takes in a number and returns the number in roman numerals', function(t){
t.equal(1,1,'One should equal one');
t.equal(romaniser(1),'I','one should return I');
t.equal(romaniser(2),'II','two should return II');
t.equal(romaniser(4),'IV','four should return IV');
t.equal(romaniser(5),'V','five should return V');
t.equal(romaniser(6),'VI','six should return VI');
t.equal(romaniser(7),'VII','seven should return VII');
t.equal(romaniser(9),'IX','nine should return IX');
t.equal(romaniser(10),'X','ten should return X');
t.equal(romaniser(11),'XI','eleven should return XI');
t.equal(romaniser(14),'XIV','fourteen should return XIV');
t.equal(romaniser(19),'XIX','nineteen should return XIX');
t.equal(romaniser(40),'XL','forty should return XL');
t.equal(romaniser(50),'L','50 should return L');
t.equal(romaniser(90),'XC','90 should return XC');
t.equal(romaniser(100),'C','100 should return C');
t.equal(romaniser(400),'CD','400 should return CD');
t.equal(romaniser(500),'D','500 should return D');
t.equal(romaniser(900),'CM','900 should return CM');
t.equal(romaniser(1000),'M','1000 should return M');
t.equal(romaniser(2017),'MMXVII','2017 should return MMXVII');
t.end();
});
