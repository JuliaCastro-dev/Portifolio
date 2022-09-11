import React from "react";
import Button from "../../atoms/button";
import * as S from "./styles";
import {
  ReactIcon,
  HomeIcon,
  PersonIcon,
  ArticleIcon,
  PhoneIcon,
} from "../../../icons";

function Header() {
  return (
    <S.Container>
      <S.InnerHeader>
        <S.Name style={{ marginRight: "5px" }}>Julia Castro, </S.Name>
        <S.Description> desenvolvedora Full-Stack. </S.Description>
      </S.InnerHeader>
      <S.Services>
        <Button
          icon={<HomeIcon width={"50%"} height={"50%"} />}
          onClick={() => {}}
        />

        <Button
          icon={<PersonIcon width={"50%"} height={"50%"} />}
          onClick={() => {}}
        />

        <Button
          icon={<ArticleIcon width={"50%"} height={"50%"} />}
          onClick={() => {}}
        />

        <Button
          icon={<PhoneIcon width={"50%"} height={"50%"} />}
          onClick={() => {}}
        />
      </S.Services>
    </S.Container>
  );
}

export default Header;
