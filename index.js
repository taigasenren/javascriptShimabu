const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

button.addEventListener("click",async function(){
    console.log("foo");
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

for (let index = 0; index < users.length; index++) {
    const user = users[index];
    const list = document.createElement("li")
        list.innerText = user.name;
        lists.appendChild(list);
}

    // users.forEach(function(user) {
    //     const list = document.createElement("li")
    //     list.innerText = user.name;
    //     lists.appendChild(list);
    // });

})

//リファクタリングというのがコードをきれいにすること


//同じ処理を共通化
//処理を分解する
//順序をリファクタリング
//コメントを追加する

