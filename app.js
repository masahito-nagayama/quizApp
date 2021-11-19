// 問題文を定数で定義する
const question = 'ごりらになりたいですか？つぎのうちどれ？';

// 選択肢を配列で定義する
const answers = [
  'なりたいよ',
  'なりたくない',
  'どちらでもいい',
  'だまれよ'
];

// 答え
const correct = 'なりたいよ';
// 関数のdocumentでbuttonタグを指定する
const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;
// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  // js-questionのidのタグを指定し、その中のテキストを定数questionに書き換える
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if (correct === e.target.textContent) {
    window.alert('正解だ！');
  } else {
    window.alert('ハズレだ！どんまい!');
  }
};

// ボタンをクリックしたら正誤判定
let handleIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++
};