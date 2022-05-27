import { gql, useQuery } from "@apollo/client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { IUser } from "../interfaces/IUser";

interface IUsersProviderProps {
  children: ReactNode;
}

interface IUsersContextData {
  users: IUser[];
  loading: boolean;
  searchUser: (name: string) => void;
}

const GET_USERS = gql`
  query listUsers($name: String) {
    list(name: $name) {
      _id
      name
      picture
      age
      eyeColor
      company
      email
      phone
      greeting
    }
  }
`;

const UsersContext = createContext<IUsersContextData>({} as IUsersContextData);

export function UsersProvider({ children }: IUsersProviderProps) {
  const [users, setUsers] = useState<IUser[]>([]);
  const [name, setName] = useState("");
  const { data, loading } = useQuery<{ list: IUser[] }>(GET_USERS, {
    variables: { name },
  });

  useEffect(() => {
    if (data) {
      setUsers(data.list);
    }
  }, [data]);

  function searchUser(name: string) {
    setName(name);
  }
  return (
    <UsersContext.Provider value={{ loading, users, searchUser }}>
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UsersContext);

  return context;
}
