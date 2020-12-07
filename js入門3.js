//オブジェクトリテラルを宣言する方法
let shimabu = {
    name : "しまぶー",//プロパティ
    teachProgramming : function(){},//メソッド
}

//あとから追加変更できる
shimabu.name = "しまぶーのit大学";
shimabu.age = 20;


//youtuberのオブジェクトの例
let youtuber = {
    list: {
        bussiness :{
            youtuber:[
                {
                    name : "しまぶー",
                    sex : "man",
                    teachIT : function(){},
                },
                {
                    name : "しまぶー2",
                    sex : "man2",
                    teachIT : function(){},
                },
            ],
            testch:function(){},
        },
        entertainment : {

        },
    },
    plan :function(){},
    uploadVideo : function(){},
}

//ドットを用いたアクセス オブジェクトへのアクセス方法1
youtuber.list.bussiness.youtuber[0].name;
//→しまぶーを取得可能
youtuber.uploadVideo()
//→uploadVideo()が実行される

//角括弧を用いたアクセス オブジェクトへのアクセス2
//変数を使うときは角括弧じゃないと無理
youtuber["list"]["bussiness"]["youtuber"][0]["name"];
//メソッドを使う　
youtuber["uploadVideo"]();

window.fetch();
//→外部とデータをやり取りする

window.document.getElementById("foo");
    //dom要素のid= "foo"を取得できる

    