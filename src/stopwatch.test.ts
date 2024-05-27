import { State, StopWatch } from "./stopwatch";

// テスト用のデータ型
type TestData = {
  label: string; // テストのラベル
  stopwatch: StopWatch; // StopWatchのインスタンス
  result: State; // イベント後の状態
};

describe("状態遷移表のテストケース", () => {
  // TODO: 状態遷移表のテストケースを作成する
  // 状態遷移表のテストケース
  const data: TestData[] = [
    // 以下例
    {
      label: "1: 計測準備中にスタートボタンが押された",
      stopwatch: new StopWatch("Initial"),
      result: "Measuring",
    },
  ];

  // TODO: 状態遷移表のテストを６つ実装する

  // 以下例
  test(data[0].label, () => {
    // スタートボタンが押された
    data[0].stopwatch.start();
    // ストップウォッチの状態がresultと同じかどうかテストする
    expect(data[0].stopwatch.state).toBe(data[0].result);
  });
});

describe("１スイッチカバレッジのテストケース", () => {
  // TODO: １スイッチカバレッジのテストケースを作成する
  // １スイッチカバレッジのテストケース
  const data: TestData[] = [
    // 以下例
    {
      label: "計測準備中から計測準備中: RR",
      stopwatch: new StopWatch("Initial"),
      result: "Initial",
    },
  ];

  // TODO: １スイッチカバレッジのテストを作成する
  // TODO: １スイッチカバレッジのテストがない場合は該当のdescribeを削除する

  describe("1: 計測準備中から計測準備中", () => {
    // 以下例
    test(data[0].label, () => {
      // リセットボタンが２回押された
      data[0].stopwatch.reset();
      data[0].stopwatch.reset();
      // ストップウォッチの状態がresultと同じかどうかテストする
      expect(data[0].stopwatch.state).toBe(data[0].result);
    });
  });

  describe("2: 計測準備中から計測中", () => {});

  describe("3: 計測準備中から一時停止中", () => {});

  describe("4: 計測中から計測準備中", () => {});

  describe("5: 計測中から計測中", () => {});

  describe("6: 計測中から一時停止中", () => {});

  describe("7: 一時停止中から計測準備中", () => {});

  describe("8: 一時停止中から計測中", () => {});

  describe("9: 一時停止中から一時停止中", () => {});
});
