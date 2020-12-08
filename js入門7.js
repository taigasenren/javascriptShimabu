// function 高階関数(コールバック関数){
//     //処理
//     コールバック関数();
// }

function bring(food){
    if (手洗いが終えたら)
}

//高階関数を使った場合の処理

function washed(fn,food){
    if(手洗いが終えたら){
        //
        fn(food);
    }
}

function bring(food){
    //食材を持ってきてもらう処理
}

//これで上記の関数を両方使える
washed(bring,"food");

function unfollow(){
    console.log("フォローフォローを外しました")
}

function cancelTweet(){
    console.log("フォローフォローを外しました")
}

function confirmed(fn){
    const input = window.prompt("実行しますか？")
    if (input === "実行"){
    //if (window.confirm("実行しますか？"));
    fn();
}   
}

confirmed(cancekTweet);

const foods = ["にんじん","じゃがいも","玉ねぎ"];

//下の処理をすると
foods.forEach(function(){
    console.log("foo");
})

