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

// js-questionのidのタグを指定し、その中のテキストを定数questionに書き換える
document.getElementById('js-question').textContent = question;

// 関数のdocumentでbuttonタグを指定する
const $button = document.getElementsByTagName('button')
// buttonタグの中のテキストをanswers定数の配列の中から順番に書き換える
$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];

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