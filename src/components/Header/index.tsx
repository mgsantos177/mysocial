import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUsers } from "../../hooks/useUsers";
import { Container, Content } from "./styles";

export function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchUser } = useUsers();

  useEffect(() => {
    searchUser(searchTerm);
  }, [searchTerm]);

  return (
    <Container>
      <Content>
        <Link to={"/"}>MySocial</Link>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </Content>
    </Container>
  );
}
