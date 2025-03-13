export default function isTicTacBoardWon(
  board: string[],
  winLineLength = 3,
): boolean {
  const boardDimensionsLength = Math.sqrt(board.length);
  if (boardDimensionsLength > 9 || boardDimensionsLength < 1)
    throw "Incorrect board dimensions. Allowed dimensions are from 1x1 to 9x9";
  const dp = Array(boardDimensionsLength * boardDimensionsLength).fill(0);
  // each direction sequence is calculated without the current cell value, hence required length is 1 less
  const updatedWinLineLength = winLineLength - 1;

  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") continue;
    let value = 1111;

    // horizontal sequence check
    if (i % boardDimensionsLength > 0 && board[i] === board[i - 1]) {
      const sequenceLength = dp[i - 1] % 10;

      if (sequenceLength === updatedWinLineLength) return true;
      value += sequenceLength;
    }

    // vertical sequence check
    if (
      Math.floor(i / boardDimensionsLength) > 0 &&
      board[i] === board[i - boardDimensionsLength]
    ) {
      const sequenceLength =
        Math.floor(dp[i - boardDimensionsLength] / 10) % 10;
      if (sequenceLength === updatedWinLineLength) return true;
      value += sequenceLength * 10;
    }

    // diagonal(\) sequence check
    if (
      i % boardDimensionsLength > 0 &&
      Math.floor(i / boardDimensionsLength) > 0 &&
      board[i] === board[i - boardDimensionsLength - 1]
    ) {
      const sequenceLength =
        Math.floor(dp[i - boardDimensionsLength - 1] / 100) % 10;
      if (sequenceLength === updatedWinLineLength) return true;
      value += sequenceLength * 100;
    }

    // diagonal(/) sequence check
    if (
      i % boardDimensionsLength < boardDimensionsLength - 1 &&
      Math.floor(i / boardDimensionsLength) > 0 &&
      board[i] === board[i - boardDimensionsLength + 1]
    ) {
      const sequenceLength =
        Math.floor(dp[i - boardDimensionsLength + 1] / 1000) % 10;
      if (sequenceLength === updatedWinLineLength) return true;
      value += sequenceLength * 1000;
    }

    dp[i] = value;
  }

  return false;
}
