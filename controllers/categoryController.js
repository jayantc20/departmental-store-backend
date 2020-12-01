import asyncMiddleware from "../utils/asyncMiddleware.js";
import Category from "../models/categoryModel.js";

const addCategory = asyncMiddleware(async (req, res) => {
  const { name } = req.body;

  const category = new Category({
    name,
  });

  const createdCategory = await category.save();

  res.status(201).json(createdCategory);
});

const updateCategory = asyncMiddleware(async (req, res) => {
  const { name } = req.body;

  const category = await Category.findById(req.params.id);

  if (category) {
    category.name = name;

    const updatedCategory = await category.save();

    res.status(201).json(updatedCategory);
  } else {
    res.status(404);
    throw new Error("Category Not Found");
  }
});

const deleteCategory = asyncMiddleware(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (category) {
    await category.remove();
    res.json({ message: "category removed" });
  } else {
    res.status(404);
    throw new Error("category not found");
  }
});

const getCategoryById = asyncMiddleware(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (category) {
    res.json(category);
  } else {
    res.status(404);
    throw new Error("category not found");
  }
});

// const getCategories = asyncMiddleware(async (req, res) => {
//   const category = await Category.find({});
//   res.json(category);
// });

const getCategories = asyncMiddleware(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Category.countDocuments({ ...keyword });
  const categories = await Category.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ categories, page, pages: Math.ceil(count / pageSize) });
});

export {
  addCategory,
  getCategoryById,
  getCategories,
  updateCategory,
  deleteCategory,
};
