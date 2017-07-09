var test = require('tape');
var romaniser = require('./romaniser.js');

test('is working', function(t){
t.equal(1,1,'One should equal one');
t.end();
});
test('romaniser test 1', function(t){
t.equal(romaniser(1),'I','one should return I');
t.end();
});
test('romaniser test 2', function(t){
t.equal(romaniser(2),'II','two should return II');
t.end();
});
test('romaniser test 4', function(t){
t.equal(romaniser(4),'IV','four should return IV');
t.end();
});
test('romaniser test 5', function(t){
t.equal(romaniser(5),'V','five should return V');
t.end();
});
test('romaniser test 6', function(t){
t.equal(romaniser(6),'VI','six should return VI');
t.end();
});
test('romaniser test 7', function(t){
t.equal(romaniser(7),'VII','seven should return VII');
t.end();
});
test('romaniser test 9', function(t){
t.equal(romaniser(9),'IX','nine should return IX');
t.end();
});
test('romaniser test 10', function(t){
t.equal(romaniser(10),'X','ten should return X');
t.end();
});
test('romaniser test 10', function(t){
t.equal(romaniser(10),'X','ten should return X');
t.end();
});
test('romaniser test 11', function(t){
t.equal(romaniser(11),'XI','eleven should return XI');
t.end();
});
test('romaniser test 14', function(t){
t.equal(romaniser(14),'XIV','fourteen should return XIV');
t.end();
});
test('romaniser test 19', function(t){
t.equal(romaniser(19),'XIX','nineteen should return XIX');
t.end();
});
test('romaniser test 40', function(t){
t.equal(romaniser(40),'XL','forty should return XL');
t.end();
});
test('romaniser test 50', function(t){
t.equal(romaniser(50),'L','50 should return L');
t.end();
});
test('romaniser test 90', function(t){
t.equal(romaniser(90),'XC','90 should return XC');
t.end();
});
test('romaniser test 100', function(t){
t.equal(romaniser(100),'C','100 should return C');
t.end();
});
test('romaniser test 400', function(t){
t.equal(romaniser(400),'CD','400 should return CD');
t.end();
});
test('romaniser test 500', function(t){
t.equal(romaniser(500),'D','500 should return D');
t.end();
});
test('romaniser test 900', function(t){
t.equal(romaniser(900),'CM','900 should return CM');
t.end();
});
test('romaniser test 1000', function(t){
t.equal(romaniser(1000),'M','1000 should return M');
t.end();
});
test('romaniser test 2017', function(t){
t.equal(romaniser(2017),'MMXVII','2017 should return MMXVII');
t.end();
});
