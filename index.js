// 変数
let unko = 'Hello World!';

// unko = 'Hello World!2';

// 定数
const bigUnko = 'He......Hell......Heloo Word!';

// 配列
let inoki = ['いち', 'に', 'さん', 'だー!!!!']
console.log(unko);
console.log(bigUnko);
console.log(inoki[1]);

// ループ文
let index = 0;
while(index < inoki.length) {
  // 繰り返したい命令
  console.log(inoki[index]);
  index++;
}

// if else



// 関数 基本的にはconstの定数で関数を設定するといい⇨頻繁に変わるものではないため
const test = (arg) => {
  //引数を設定することもできる。
  if(inoki.length > arg) {
    console.log('ボンバイエ!');
  } else {
    console.log('ボンバ,,,,');
  }
};


//オブジェクト
const unko2  = {
  color: 'pink',
  size: 'big',
  purfume: 'mint'
};

console.log(unko2);