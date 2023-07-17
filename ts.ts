/* 
number
string
boolean
null
undefined
any
*/

let a: number = 3;

// 에러뜬다
// a='123'

let b: string = 'love you';

let c: any = 4;
c = 'asdfasd';
// 에러가 나지않음 any기 때문에
// but any를 많이쓰는건 자제를 해야한다 => 이걸쓰면 typescript를 쓰는 이유가 없는데??
// 아직 타입이 정해지지 않았을 경우, 타입이 변하는 경우만 한정적으로 사용, 남발 X

let d: string | number = 'asdafsd';
d = 3;
d = null;
// ??왜 에러가 안뜨지
console.log(d);
// 타입을 여러개 설정도 가능!

let e: string[] = ['apple', 'mongo'];
let f: number[] = [1, 2];
