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

export type Props = {
  onClickHome: Function;
  onClickAbout: Function;
  onClickProjects: Function;
  onClickContact: Function;
};

function Header({
  onClickAbout,
  onClickContact,
  onClickHome,
  onClickProjects,
}: Props) {
  return (
    <S.Container>
      <S.InnerHeader>
        <S.Name style={{ marginRight: "5px" }}>Julia Castro, </S.Name>
        <S.Description> desenvolvedora Full-Stack. </S.Description>
      </S.InnerHeader>
      <S.Services>
        <Button
          icon={<HomeIcon width={"50%"} height={"50%"} />}
          onClick={onClickHome}
        />

        <Button
          icon={<PersonIcon width={"50%"} height={"50%"} />}
          onClick={onClickAbout}
        />

        <Button
          icon={<ArticleIcon width={"50%"} height={"50%"} />}
          onClick={onClickProjects}
        />

        <Button
          icon={<PhoneIcon width={"50%"} height={"50%"} />}
          onClick={onClickContact}
        />
      </S.Services>
    </S.Container>
  );
}

export default Header;
