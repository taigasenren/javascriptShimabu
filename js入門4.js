import youtuber from "./foo";

youtuber.list.bussiness.youtuber[0].name
youtuber.list.bussiness.youtuber[0].teachIT();

youtuber.plan();

//定義することでtypoなくなる

//もともとwindowというオブジェクトに下記のconsole.log等が入っている
//windowは省略可能
window = {
    console : {
        log(){},
    },
    alert(){

    },
    document : {
        getElementById(){},
    }
}

window.console.log();
console.log();
window.alert();
window.document.getElementById()