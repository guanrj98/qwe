// $.get("http://jx.xuzhixiang.top/ap/api/reg.php",{
//   "username": "guanrenjiang",
//   "password": 123
// }, data => {

//   console.log(data);
// })


$.get("http://jx.xuzhixiang.top/ap/api/login.php",{
  username: "guanrenjiang",
  password: 123
}).then(data =>{
  console.log(data);
})

//44105







// $.get("http://jx.xuzhixiang.top/ap/api/productlist.php",{
//   uid: 44105

// }).then(data=> {
//   console.log(data);
// })

// $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php",{
//     pimg:"img/1.jpg",
//     pname:"商品1",
//     pprice:"100",
//     pdesc: "十分士大夫的",
//     uid: 44105
// }, data => {
//   console.log(data);

// })

// $.get("http://jx.xuzhixiang.top/ap/api/goods/goods-delete.php",{
// pid:344859,
// uid:44105,
// token: "b46693f2532735471904582723c5d5d6"
// }, data => {
//   console.log(data);
// })











