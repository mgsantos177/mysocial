import { Link } from "react-router-dom";
import { Container, Content, Text, TextContent } from "./styles";

interface ICardProps {
  user: {
    _id: string;
    picture: string;
    name: string;
    age: number;
    eyeColor: string;
    company: string;
    email: string;
  };
  disableLink?: boolean;
}

export function Card({ user, disableLink }: ICardProps) {
  return (
    <Container>
      <Link to={!disableLink ? `/detail/${user._id}` : "#"}>
        <Content>
          <img alt="user" src={user.picture} />

          <TextContent>
            <Text>Name: {user.name}</Text>
            <Text>Age: {user.age}</Text>
            <Text>Eye Color: {user.eyeColor}</Text>
            <Text>Company: {user.company}</Text>
            <Text>Email: {user.email}</Text>
          </TextContent>
        </Content>
      </Link>
    </Container>
  );
}
