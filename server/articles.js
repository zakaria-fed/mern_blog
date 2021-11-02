import mongoose from "mongoose";

const articles = mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  img: String,
});

export default mongoose.model("articles", articles);
