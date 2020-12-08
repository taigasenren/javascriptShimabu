/*
関数とはなにか？
タスクや値計算を実行する文の始まり

→料理でいうと料理を手伝う子どもたちみたいな

オブジェクトのメソッドが関数
メソッドの短縮記法

returnの有無で何が違うのか
return 関数の返り値
return 変数名みたいな

匿名関数について
関数は値として利用できる(関数式)
→→変数や定数に宣言する

コールバック関数について理解する
windowオブジェクト等でもよく使われる
*/

window.alert();

const foo = {
    //短縮記法にすると短く書ける
    alert(){},
}

//twitterでtweetできるかの関数

function isTweetable(text){
    return text.length <= 140;
}

//両方使える

//関数詞
const isTweetable = function(text){
    return text.length <= 140;
}



//140文字以内なら云々
console.log(isTweetable("uihi"));

