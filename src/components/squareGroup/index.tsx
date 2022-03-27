import { Square } from "../square";
import { ButtonColor } from "../square/types";
import { SquareGroupWrapper } from "./style";

const SquareGroup = () => {
  return (
    <SquareGroupWrapper>
      <Square color={ButtonColor.RED} />
      <Square color={ButtonColor.GREEN} />
      <Square color={ButtonColor.BLUE} />
      <Square color={ButtonColor.YELLOW} />
    </SquareGroupWrapper>
  );
};

export { SquareGroup };
