// 質問タブを変数に入れる
const tabs = document.querySelectorAll(".accordion__tab");
// 回答コンテンツを変数に入れる
const contents = document.querySelectorAll(".accordion__content");

for (let i = 0; i < tabs.length; i++) {
  // 質問タブをクリックしたら発火
  tabs[i].addEventListener("click", function () {
    // クリックした質問タブのactiveクラスを付け替える
    this.classList.toggle("active");
    // クリックした質問タブのindex番号の回答コンテンツのactiveクラスを付け替える
    contents[i].classList.toggle("active");
  });
}