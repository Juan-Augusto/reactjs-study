import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
})
export const api = {
    getAllPosts: async () => {
        let response = await axiosInstance.get('/posts')
        return response.data;
        // let response = await fetch(`${baseURL}/posts`);
        // let json = await response.json();
        // return json;
    },
    addNewPost: async (title, body, userId) => {
        let response = await axiosInstance.post('/posts', {
          title, body, userId
        });
        return response.data;

        // let response = await fetch(`${baseURL}/posts`, {
        //     method: "POST",
        //     body: JSON.stringify({
        //       title,
        //       body,
        //       userId
        //     }),
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //   });
        //   let json = await response.json();
        //   return json;
    }
}