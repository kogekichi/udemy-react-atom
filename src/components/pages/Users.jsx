import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organism/user/UserCard";

export const Users = () => {
  return (
    <SContainer>
      <h2>Users</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image: "https://source.unsplash.com/7bhSz2zMQas",
    name: `名前${val}`,
    email: "mail@example.com",
    phone: "000-123-4567",
    company: {
      name: "A会社"
    },
    website: "www.example.com"
  };
});
