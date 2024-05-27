import { StopWatch } from "./stopwatch.js";

// **************************************************
// 要素一覧
// **************************************************

const startButton = document.getElementById("start") as HTMLButtonElement;
const resetButton = document.getElementById("reset") as HTMLButtonElement;
const display = document.getElementById("time") as HTMLSpanElement;

// **************************************************
// 変数一覧と定数一覧
// **************************************************

const stopwatch = new StopWatch("Initial");

// **************************************************
// イベントの登録処理
// **************************************************

startButton.addEventListener("click", stopwatch.start);
resetButton.addEventListener("click", stopwatch.reset);

// **************************************************
// 処理
// **************************************************

setInterval(() => {
  // TODO: 時間を設定する
  const time = stopwatch.getTime();
  display.innerText = `秒`;
}, 10);
