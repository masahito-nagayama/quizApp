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
// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  // js-questionのidのタグを指定し、その中のテキストを定数questionに書き換える
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;
  let buttonLength = $button.length
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}

// 関数のdocumentでbuttonタグを指定する
const $button = document.getElementsByTagName('button')

$button[0].addEventListener('click', () => {
  if (correct === $button[0].textContent) {
    window.alert('正解だ！');
  } else {
    window.alert('ハズレだ！どんまい!');
  }
});
$button[1].addEventListener('click', () => {
  if (correct === $button[1].textContent) {
    window.alert('正解だ！');
  } else {
    window.alert('ハズレだ！どんまい!');
  }
});
$button[2].addEventListener('click', () => {
  if (correct === $button[2].textContent) {
    window.alert('正解だ！');
  } else {
    window.alert('ハズレだ！どんまい!');
  }
});
$button[3].addEventListener('click', () => {
  if (correct === $button[3].textContent) {
    window.alert('正解だ！');
  } else {
    window.alert('ハズレだ！どんまい!');
  }
});