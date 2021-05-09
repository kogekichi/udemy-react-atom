import styled from "styled-components";
import { memo } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";

export const UserIconWithName = memo((props) => {
  const { image, name } = props;
  //const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  console.log("UserIconWithName");
  return (
    <SContainer>
      <SImg alt={name} src={image} height={160} width={160} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0px;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
