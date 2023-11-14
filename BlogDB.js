require("dotenv").config();
const connectDB = require("./db/connect");
const Blog = require("./models/products");

const ProductJson = require("./Blogs.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Blog.deleteMany();
    await Blog.create(ProductJson);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();
