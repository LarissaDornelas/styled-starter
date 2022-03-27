export enum ButtonColor {
  RED = "red",
  BLUE = "blue",
  YELLOW = "yellow",
  GREEN = "green",
}

export interface ISquare {
  color: ButtonColor;
  children?: React.ReactNode;
}
