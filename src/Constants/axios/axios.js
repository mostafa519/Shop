import axios from "axios";

const Instance = axios.create({
  baseURL: "https://console.firebase.google.com/project/clothes-shop-c92c1/firestore/data/~2FT-sharts~2F",
  // params: {
  //   apiKey: "5a72e6ea7b5640b8a0422619db6c9d91",
  // },
});

export default Instance;
