var name = "taro";

var name; // undefined

// varで宣言した変数は同じ変数名を再宣言してもエラーにならない
function test() {
    var x = 1;
    var x = 2;
    console.log(x); // 2
}

// letは再宣言できない
let x = 1;
let x = 2; // SyntaxError: Identifier 'x' has already been declared
 
// constも再宣言できない
const y = 1;
const y = 2; // SyntaxError: Identifier 'y' has already been declared

// グローバル変数として定義するとすでに存在した変数名を上書きしてしまう危険がある
var innerWidth = 10;
console.log(window.innerWidth); // 本来は標準APIによってブラウザ幅が取れて欲しいが、グローバル変数宣言によって10が表示される

// letやconstはグローバルスコープとして定義できないので上書きしない
const innerWidth = 10;
console.log(window.innerWidth); // 500

// varは巻き上げが起こる
console.log(greeting); // undefined
var greeting = "こんにちは";
 
// letやconstは巻き上げが起こらない
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 1;
 
console.log(y); // ReferenceError: Cannot access 'y' before initialization
const y = 2;

// varは関数スコープ
function print() {
    var x = 1;
    if (true) {
      var x = 2;
      console.log(x); // 2
    }
    console.log(x); // 2
}

// letやconstはブロックスコープ
function print() {
    const x = 1;
    if (true) {
      const x = 2;
      console.log(x); // 2
    }
    console.log(x); // 1
}