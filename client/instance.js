import axios from "axios";

const instance = axios.create({
	baseURL: "https://mern--blog.herokuapp.com/",
});

export default instance;
  