
$(function(){ //jQUeryお約束なので消したらだめよ！

// 【課題2】
// 関数定義
function triangle(x, y) { // xを底辺、yを高さとして引数を設定
    var result = x * y / 2; // 三角形の計算
    return result;
  }
  
  // 関数利用(何回でも使える)
  console.log(triangle(4, 8));
  console.log(triangle(5, 10));
  console.log(triangle(6, 12));
  console.log(triangle(7, 14));
  console.log(triangle(8, 15));


// 【課題3】
// $("どこが").on("どうされた時",以下の関数を実行する(){
//     $(どこの).なにを(どうする);
// });

// $(画像拡大ボタン).on("クリックされた時",以下の関数を実行する(){
//     $(画像).css(横幅を600px);
// });

$("#sizeUp_img_btn").on("click",function(){
    $(".portfolio img").css("width","600px");
});

$("#change_img_btn").on("click",function(){
    $(".portfolio img").attr("src","img/thumb_02.png");
});

// 【課題1】

// $("Englishボタン").on("click",以下の関数を実行する(){
//     $(見出しのエリアと書かれている部分の).文字を(Heading);
// });

$("#en_menu").on("click",function(){
    $("#headingArea").text("Heading");
    $("#flexArea").text("flexArea");
    $("#centeringArea").text("centeringArea");
    $("#portfolioArea").text("portfolio");
});

$("#ja_menu").on("click",function(){
    $("#headingArea").text("見出しのエリア");
    $("#flexArea").text("flexのエリア");
    $("#centeringArea").text("センタリングエリア");
    $("#portfolioArea").text("制作実績");
});

// 【Fadethisの実行のためのコード】
$(window).fadeThis();

// 【Drawerの実行のためのコード】
$(".drawer").drawer();





}); //jQUeryお約束なので消したらだめよ！