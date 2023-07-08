let nameString: string = 'kim';
let nameArr: string[] = ['kim', 'park'];
let nameObj: { name: string } = { name: 'kim' };

// string or number
let nameUnion: string | number = 'kim';

// 타입지정 변수에 지정가능 (대문자로 많이함)
type MyType = string | number;
let nameType: MyType = 123;

function square(x: number): number {
  return x * 2;
}

// 튜플
type MemberArr = [number, boolean];
let johnArr: MemberArr = [123, true];

type MemberObj = {
  name: string;
};

let johnObj: MemberObj = {
  name: 'kim',
};

type MemberObjString = {
  [key: string]: string;
};

let johnMemberObjString: MemberObjString = {
  name: 'kim',
  age: '123',
};

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
