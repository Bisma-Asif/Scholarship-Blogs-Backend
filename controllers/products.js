const Blog = require("../models/products");

const getAllProducts = async (req, res) => {
  const { DegreeType, Field, Price, sort, select } = req.query;
  const queryObject = {};

  if (DegreeType) {
    queryObject.DegreeType = DegreeType;
  }
  if (Price) {
    queryObject.Price = Price;
  }
  if (Field) {
    queryObject.Field = { $regex: Field, $options: "i" };
  }

  let apiData = Blog.find(queryObject);

  if (sort) {
    let sortFix = sort.replace(",", " ");
    apiData = apiData.sort(sortFix);
    // queryObject.sort = sortFix;
  }
  if (sort) {
    // let selectFix = select.replace(",", " ");
    let selectFix = (selectFix = select.split(",").join(""));
    apiData = apiData.select(selectFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 4;

  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);

  console.log(queryObject);

  // const BlogData = await apiData.sort(sort);
  // res.status(200).json({ BlogData });
  const BlogData = await apiData;
  res.status(200).json({ BlogData, nbHits: BlogData.length });
};

const getAllProductsTesting = async (req, res) => {
  // const BlogData = await Blog.find(req.query).sort("Field");
  // const BlogData = await Blog.find(req.query).select("DegreeType");
  const BlogData = await Blog.find(req.query).skip(2);
  res.status(200).json({ BlogData });
};

module.exports = { getAllProducts, getAllProductsTesting };
