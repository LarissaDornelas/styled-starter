import { useState } from "react";
import { SquareWrapper, ChangeButton } from "./style";
import { ButtonColor, ISquare } from "./types";

const Square = (props: ISquare) => {
  const { color } = props;

  const [buttonColor, setButtonColor] = useState<ButtonColor>(color);

  const colors = [
    ButtonColor.RED,
    ButtonColor.GREEN,
    ButtonColor.BLUE,
    ButtonColor.YELLOW,
  ];

  function handleClick() {
    setButtonColor(colors[Math.floor(Math.random() * colors.length)]);
  }

  return (
    <SquareWrapper color={buttonColor}>
      <ChangeButton color={buttonColor} onClick={handleClick}>
        Change
      </ChangeButton>
    </SquareWrapper>
  );
};

export { Square };
