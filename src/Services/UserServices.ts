import axios from "axios";

axios.defaults.baseURL = "https://reqres.in/api";

export type User = {
  data: {
    id: string;
    first_name: string;
    last_name: string;
    avatar: string;
    email: string;
  };
  support: {
    url: string;
    text: string;
  };
};
export type Users = {
  data: readonly {
    id: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }[];
  page: number;
  total_pages: number;
  total: number;
  per_page: number;
};

export type UserParams = {
  queryKey: [string, { userId: string }];
};

export async function getListUsers({ pageParam = 1 }): Promise<Users> {
  const { data } = await axios(`/users?page=${pageParam}`);
  return data;
}

export async function getUser(param: UserParams): Promise<User> {
  const [, { userId }] = param.queryKey;
  const { data } = await axios(`/users/${userId}`);
  return data;
}
