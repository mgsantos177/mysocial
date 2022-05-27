import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { IUser } from "../../interfaces/IUser";
import {
  Container,
  FriendContent,
  InfoMessage,
  UserContent,
  UserInfo,
} from "./styles";

const GET_USER = gql`
  query getUser($id: String!) {
    getUser(_id: $id) {
      _id
      name
      picture
      age
      eyeColor
      company
      email
      phone
      greeting
      friends {
        _id
        name
        picture
        age
        eyeColor
        company
        email
        phone
      }
    }
  }
`;

export function DetailPage() {
  let { userId } = useParams();

  const { data, loading, error } = useQuery<{ getUser: IUser }>(GET_USER, {
    variables: { id: userId },
  });

  console.log(data);
  console.log(error);

  if (data?.getUser == null) {
    return (
      <Container>
        <InfoMessage>User not found, please go back to Home page</InfoMessage>
      </Container>
    );
  }

  return (
    <Container>
      {loading && <InfoMessage>Loading...</InfoMessage>}
      {data?.getUser != null && (
        <>
          <UserContent>
            <img src={data.getUser.picture} alt="user" />
            <UserInfo>
              <text>
                <b>Name:</b> {data.getUser.name}
              </text>
              <text>
                <b>Age</b>: {data.getUser.age}
              </text>
              <text>
                <b>Email</b>: {data.getUser.email}
              </text>
            </UserInfo>
          </UserContent>
          <strong>Friends</strong>

          <FriendContent>
            {data.getUser.friends.map((item) => (
              <Card user={item} disableLink={true} />
            ))}
          </FriendContent>
        </>
      )}
    </Container>
  );
}
