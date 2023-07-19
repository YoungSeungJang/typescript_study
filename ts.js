/*
number
string
boolean
null
undefined
any
*/
var a = 3;
// 에러뜬다
// a='123'
var b = 'love you';
var c = 4;
c = 'asdfasd';
// 에러가 나지않음 any기 때문에
// but any를 많이쓰는건 자제를 해야한다 => 이걸쓰면 typescript를 쓰는 이유가 없는데??
// 아직 타입이 정해지지 않았을 경우, 타입이 변하는 경우만 한정적으로 사용, 남발 X
var d = 'asdafsd';
d = 3;
d = null;
// ??왜 에러가 안뜨지
console.log(d);
// 타입을 여러개 설정도 가능!
var e = ['apple', 'mongo'];
var f = [1, 2];
function addNumber(a, b) {
    return a + b;
}
