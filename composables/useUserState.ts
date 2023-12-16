export interface User {
  userId: string;
  address: string;
  username: string | null;
  image: string | null;
  image_cover: string | null;
}

export const useUserState = () => {
  const user = useState<User | null>("user", () => null);
  return user
}