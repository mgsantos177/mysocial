export interface IUser {
  _id: string;
  name: string;
  picture: string;
  age: number;
  eyeColor: string;
  company: string;
  email: string;
  phone: string;
  greeting: string;
  friends: [
    {
      _id: string;
      picture: string;
      age: number;
      eyeColor: string;
      name: string;
      company: string;
      email: string;
      phone: string;
    }
  ];
}
