const question = 'ごりらになりたいですか？つぎのうちどれ？';
const answers = [
  'なりたい',
  'なりたくない',
  'どちらでもいい',
  'だまれよ'
];
const correct = 'なりたい';

document.getElementById('js-question').textContent = question;

const $button = document.getElementsByTagName('button')
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