import { describe, expect, it } from "vitest";
import isTicTacBoardWon from "../lib/isTicTacBoardWon";

describe("tests for 3x3 board", () => {
  describe("positive tests", () => {
    it("shoud return true for TicTacToe board horizontal 1st line complete", () => {
      const wonBoard = ["X", "X", "X", "", "", "", "", "", ""];

      const result = isTicTacBoardWon(wonBoard);
      expect(result).toBe(true);
    });

    it("shoud return true for TicTacToe board horizontal 1st line complete", () => {
      const wonBoard = ["O", "O", "O", "", "", "", "", "", ""];

      const result = isTicTacBoardWon(wonBoard);
      expect(result).toBe(true);
    });

    it("shoud return true for TicTacToe board horizontal 2nd line complete", () => {
      const wonBoard = ["", "", "", "X", "X", "X", "", "", ""];

      const result = isTicTacBoardWon(wonBoard);
      expect(result).toBe(true);
    });

    it("shoud return true for TicTacToe board horizontal 3rd line complete", () => {
      const wonBoard = ["", "", "", "", "", "", "X", "X", "X"];

      const result = isTicTacBoardWon(wonBoard);
      expect(result).toBe(true);
    });

    it("shoud return true for TicTacToe board vertical 1st line complete", () => {
      const wonBoard = ["X", "", "", "X", "", "", "X", "", ""];

      const result = isTicTacBoardWon(wonBoard);
      expect(result).toBe(true);
    });

    it("shoud return true for TicTacToe board vertical 2nd line complete", () => {
      const wonBoard = ["", "X", "", "", "X", "", "", "X", ""];

      const result = isTicTacBoardWon(wonBoard);
      expect(result).toBe(true);
    });

    it("shoud return true for TicTacToe board vertical 3rd line complete", () => {
      const wonBoard = ["", "", "X", "", "", "X", "", "", "X"];

      const result = isTicTacBoardWon(wonBoard);
      expect(result).toBe(true);
    });

    it("shoud return true for TicTacToe board \ line complete", () => {
      const wonBoard = ["X", "", "", "", "X", "", "", "", "X"];

      const result = isTicTacBoardWon(wonBoard);
      expect(result).toBe(true);
    });

    it("shoud return true for TicTacToe board vertical / line complete", () => {
      const wonBoard = ["", "", "X", "", "X", "", "X", "", ""];

      const result = isTicTacBoardWon(wonBoard);
      expect(result).toBe(true);
    });
  });

  describe("negative tests", () => {
    it("shoud return false for unresolved TicTacToe board", () => {
      const wonBoard = ["", "", "", "", "", "", "", "", ""];

      const result = isTicTacBoardWon(wonBoard);
      expect(result).toBe(false);
    });

    it("shoud return false for TicTacToe board without complete sequence", () => {
      const wonBoard = ["X", "O", "X", "O", "X", "O", "O", "X", "O"];

      const result = isTicTacBoardWon(wonBoard);
      expect(result).toBe(false);
    });
  });
});

describe("tests for 4x4 board", () => {
  it("shoud return true for TicTacToe board horizontal 1st line complete", () => {
    const line1 = ["X", "X", "X", ""];
    const line2 = ["", "", "", ""];
    const line3 = ["", "", "", ""];
    const line4 = ["", "", "", ""];
    const wonBoard = line1.concat(line2, line3, line4);

    const result = isTicTacBoardWon(wonBoard);
    expect(result).toBe(true);
  });
  it("shoud return true for TicTacToe board horizontal 1st line complete", () => {
    const line1 = ["", "X", "X", "X"];
    const line2 = ["", "", "", ""];
    const line3 = ["", "", "", ""];
    const line4 = ["", "", "", ""];
    const wonBoard = line1.concat(line2, line3, line4);

    const result = isTicTacBoardWon(wonBoard);
    expect(result).toBe(true);
  });
  it("shoud return true for TicTacToe board horizontal 1st line complete", () => {
    const line1 = ["X", "X", "X", "X"];
    const line2 = ["", "", "", ""];
    const line3 = ["", "", "", ""];
    const line4 = ["", "", "", ""];
    const wonBoard = line1.concat(line2, line3, line4);

    const result = isTicTacBoardWon(wonBoard, 4);
    expect(result).toBe(true);
  });
  it("shoud return true for TicTacToe board horizontal 1st line complete", () => {
    const line1 = ["X", "X", "X", ""];
    const line2 = ["", "", "", ""];
    const line3 = ["", "", "", ""];
    const line4 = ["", "", "", ""];
    const wonBoard = line1.concat(line2, line3, line4);

    const result = isTicTacBoardWon(wonBoard, 4);
    expect(result).toBe(false);
  });
  it("shoud return true for TicTacToe board horizontal 1st line complete", () => {
    const line1 = ["", "", "", ""];
    const line2 = ["X", "", "", ""];
    const line3 = ["X", "", "", ""];
    const line4 = ["X", "", "", ""];
    const wonBoard = line1.concat(line2, line3, line4);

    const result = isTicTacBoardWon(wonBoard);
    expect(result).toBe(true);
  });
  it("shoud return true for TicTacToe board horizontal 1st line complete", () => {
    const line1 = ["X", "", "", ""];
    const line2 = ["X", "", "", ""];
    const line3 = ["X", "", "", ""];
    const line4 = ["X", "", "", ""];
    const wonBoard = line1.concat(line2, line3, line4);

    const result = isTicTacBoardWon(wonBoard, 4);
    expect(result).toBe(true);
  });
  it("shoud return true for TicTacToe board horizontal 1st line complete", () => {
    const line1 = ["", "", "", "X"];
    const line2 = ["", "", "X", ""];
    const line3 = ["", "X", "", ""];
    const line4 = ["X", "", "", ""];
    const wonBoard = line1.concat(line2, line3, line4);

    const result = isTicTacBoardWon(wonBoard, 4);
    expect(result).toBe(true);
  });
  it("shoud return true for TicTacToe board horizontal 1st line complete", () => {
    const line1 = ["X", "", "", ""];
    const line2 = ["", "X", "", ""];
    const line3 = ["", "", "X", ""];
    const line4 = ["", "", "", "X"];
    const wonBoard = line1.concat(line2, line3, line4);

    const result = isTicTacBoardWon(wonBoard, 4);
    expect(result).toBe(true);
  });
});
