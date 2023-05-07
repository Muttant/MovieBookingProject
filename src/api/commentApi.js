import axiosClient from "./axiosClient";

const commentApi = {
  getComment: () => {
    const path = "/commentMovie";
    return axiosClient.get(path);
  },

  postComment: (newPost) => {
    const path = "/commentMovie";
    return axiosClient.post(path, newPost);
  },
  likeComment: (id, newPost) => {
    const path = `/commentMovie/${id}`;
    return axiosClient.put(path, newPost);
  },
};

export default commentApi;