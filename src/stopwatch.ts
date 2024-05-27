export type State = "Initial" | "Measuring" | "Paused";

export class StopWatch {
  // 状態
  private _state: State;
  // 開始時間のタイムスタンプ
  private _startTime: number;
  // 経過時間の合計のタイムスタンプ
  private _elapsedTime: number;

  constructor(state: State = "Initial") {
    this._state = state;
    this._startTime = 0;
    this._elapsedTime = 0;
  }

  /**
   * 状態を取得する(getter)
   * @returns {State} 状態
   */
  get state(): State {
    return this._state;
  }

  /**
   * 経過時間を取得する
   * @returns {number} 経過時間(タイムスタンプ)
   */
  getTime = (): number => {
    // TODO: 各状態の時の経過時間を返す
    switch (this._state) {
      case "Initial":
        return 0;
      case "Measuring":
        return 0;
      case "Paused":
        return 0;
      default:
        // Stateの抜け漏れがないか検証するために使用している
        const neverValue: never = this._state;
        return neverValue;
    }
  };

  /**
   * スタートボタンが押された時の処理
   */
  start = () => {
    switch (this._state) {
      case "Initial":
        // TODO: 計測準備中にスタートボタンが押された時の処理
        break;
      case "Measuring":
        // TODO: 計測中にスタートボタンが押された時の処理
        break;
      case "Paused":
        // TODO: 一時停止中にスタートボタンが押された時の処理
        break;
      default:
        // Stateの抜け漏れがないか検証するために使用している
        const neverValue: never = this._state;
        break;
    }
  };

  /**
   * リセットボタンが押された時の処理
   */
  reset = () => {
    switch (this._state) {
      case "Initial":
        // TODO: 計測準備中にリセットボタンが押された時の処理
        break;
      case "Measuring":
        // TODO: 計測中にリセットボタンが押された時の処理
        break;
      case "Paused":
        // TODO: 一時停止中にリセットボタンが押された時の処理
        break;
      default:
        // Stateの抜け漏れがないか検証するために使用している
        const neverValue: never = this._state;
        break;
    }
  };
}
