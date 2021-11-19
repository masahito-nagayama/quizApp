// オブジェクトを配列にすることができる。
const quiz = [
  {
    question: '①ごりらになりたいですか？つぎのうちどれ？',
    answers: [
      'なりたいよ',
      'なりたくない',
      'どちらでもいい',
      'だまれよ'
    ],
    correct: 'なりたいよ'
  }, {
    question: '②たぬきになりたいですか？つぎのうちどれ？',
    answers: [
      'なりたいよ',
      'なりたくない',
      'どちらでもいい',
      'だまれよ'
    ],
    correct: 'だまれよ'
  }, {
    question: '③きりんになりたいですか？つぎのうちどれ？',
    answers: [
      'なりたいよ',
      'なりたくない',
      'どちらでもいい',
      'だまれよ'
    ],
    correct: 'どちらでもいい'
  }
];

// 定数quizの配列の長さを定数quizLengthで定義しておく
const quizLength =  quiz.length;
let quizIndex = 0;

// 関数のdocumentでbuttonタグを指定する
const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;
// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  // js-questionのidのタグを指定し、その中のテキストを定数questionに書き換える
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

// if文で正解、不正解のアラートを出す。
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解だ！');
  } else {
    window.alert('ハズレだ！どんまい!');
  }
  quizIndex++;

  if(quizIndex < quizLength){
    // 問題数がまだあればここの処理を実行する。
    setupQuiz();
  } else {
    // 問題数がもうない場合はここの処理を実行する。
    window.alert('お疲れ！頑張ったな！さよなら！');
  }
};

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++
};