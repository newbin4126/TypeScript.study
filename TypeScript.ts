/*
let a = "hello";
a = "bye"; //타입스크립트는a 가 String이란 걸 알고있음
//a = 1; //스트링을 넘버로 바꾸려 해서 에러가 남 자바스크립트에서는 가능
let c = [1,2,3]
*/

//2-2
/*
type player = {
  name: string;
  age?: number;
};

let a: number[] = [1, 2];
let b: string[] = ["il", "1"];
let c: boolean[] = [true];

const player: {
  name: string;
  age?: number;
} = {
  name: "nico",
};

const playerLynn: {
  name: String;
  age?: number;
} = {
  name: "lynn",
  age: 12,
};*/

//2-3
/*
type Age = number;
type Name = string;
type Player = {
  readonly name: Name; //수정불가
  age?: Age;
};
const playerMarker = (name: string): Player => ({ name });
const nico = playerMarker("nico");
nico.age = 12;
nico.name = "las";

const numbers: readonly number[] = [1, 2, 3, 4];

const player: readonly [string, number, boolean] = ["nico", 1, true];


//2-3
let a: unknown; //타입스크립트로부터 일종의 보호를 받게 됨
//어떤 작업을 하려면 이 변수의 타입을 먼저 확인해야하는 방식으로 돌아감

//let b = a + 1; //이렇게만 쓰면 실행이 안됨

if (typeof a === "number") {
  //이런식으로 a의 타입을 먼저 확인해야 밑의 코드가 실행됨
  let b = a + 1;
}

function hello() {
  //자동으로 void(void는 아무것도 리턴하지 않는 함수)
  console.log("X");
}

function hello1(name: string | number): never {
  if (typeof name === "string") {
    name;
  } else if (typeof name === "number") {
    name;
  } else {
    name;
  }
}


//2-4
function add(a: number, b: number) => number{
  return a + b;
}

//3-0
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;


//3-1

type Add = {
    (a: number, b: number) => number;
}

//3-2 ~ 4
type SuperPrint = {
  (arr: number[]): void;
  (arr: boolean[]): void;
  (arr: string[]): void;
};

const SuperPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

SuperPrint([1, 2, 3, 4]);
SuperPrint([true, false, true]);
SuperPrint(["a", "b", "c"]);



//4

class Player {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
}

const newbin = new Player("new", "bin", "유빈");


abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickName: string
  ) {}
  abstract getNickName(): void;

  protected getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  getNickName() {
    console.log(this.nickName);
  }
}

const newbin = new Player("new", "bin", "뉴빈");



type Words = {
  [key: string]: string;
};

let dict: Words = {
  1: "food",
  2: "",
  3: "",
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
}


class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");


abstract class User {
  constructor(protected firstName: String, protected lastName: String) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}

class Player extends User {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `'Hello ${name}. My name is ${this.fullName}`;
  }
}*/

type PlayerA = {
  name: string;
};
const playerA: PlayerA = {
  name: "nico",
};
interface PlayerB {
  name: string;
}
const playerB: PlayerB = {
  name: "nico",
};
