import axios from 'axios'

export interface HttpAdapter {
  get: <T>(x: string) => Promise<T>;
}

export const http: HttpAdapter = {
  get: async <T>(x: string): Promise<T> => {
    const { data } = await axios.get<T>(x)
    return data
  }
}