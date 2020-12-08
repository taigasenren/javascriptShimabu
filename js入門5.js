const fooWidth = document.getElementById("foo").offsetHeight;

const 変数名　= 初期値;
let 変数名　 = 初期値;
var 変数名　 = 初期値;

//下みたいな書き方も可能
const name1 = 100;
      name2 = 100;

//constは再代入できない、再定義できない
//下のはむり
const name1 = 100;
const name1 = 200;

const obj = {
    foo : 123
}

obj.foo = 456;

//上記のことをすると変更可能

//letの特徴
//再代入はできる、再定義できない
//下のはむり
let name1 = 100;
let name1 = 200;

//varの特徴　再代入できる、再定義できる

//ブロックスコープ無視
//変数の巻き上げ(hosting)といったバグの温床になる性質がある
//var使ったら負け