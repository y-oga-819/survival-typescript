// let: 再代入可能な変数
let x = 1;
console.log(x); // 1

x = 2;
console.log(x); // 2

// const: 再代入できない変数
const y = 1;
console.log(y); // 1

y = 1; // TypeError: Assignment to constant variable.


// const: オブジェクトのプロパティは変更可能
const obj = { a: 1 };
obj = {a: 2} // TypeError: Assignment to constant variable.
obj.a = 2;

// const: 変数の再代入はできないが、配列の要素は変更可能
const arr = [1, 2];
arr = [1, 2, 3]; // TypeError: Assignment to constant variable.
arr.push(3); // [1, 2, 3]