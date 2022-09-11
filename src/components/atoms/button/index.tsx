import React from "react";
import * as S from "./styles";

export type Props = {
  icon: any;
  onClick: Function;
};

function Button({ icon, onClick }: Props) {
  return <S.Container onClick={() => onClick}>{icon}</S.Container>;
}

export default Button;
