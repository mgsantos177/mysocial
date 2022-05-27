import { Card } from "../../components/Card";
import { useUsers } from "../../hooks/useUsers";
import { Container, Content, InfoMessage } from "./styles";

export function HomePage() {
  const { users, loading } = useUsers();

  return (
    <Container>
      <Content>
        {loading && <InfoMessage>Searching...</InfoMessage>}
        {!loading && users.length === 0 && (
          <InfoMessage>Users not found</InfoMessage>
        )}
        {!loading && users?.map((item) => <Card user={item} />)}
      </Content>
    </Container>
  );
}
