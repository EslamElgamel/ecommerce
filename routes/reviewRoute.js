const express = require("express");
const {
  createReviewValidator,
  getReviewValidator,
  updateReviewValidator,
  deleteReviewValidator,
} = require("../utils/validators/reviewValidator");

const {
  getReview,
  getReviews,
  createReview,
  updateReview,
  deleteReview,
  createFilterObj,
  setProductIdAndUserIdToBody
} = require("../services/reviewService");

const authService = require("../services/authService");

// const subcategoriesRoute = require("./subCategoryRoute");
const { deleteUserValidator } = require("../utils/validators/userValidator");

const router = express.Router({mergeParams: true});


router
  .route("/")
  .get(createFilterObj, getReviews)
  .post(
    authService.protect,
    authService.allowedTo("user"),
    setProductIdAndUserIdToBody,
    createReviewValidator,
    createReview
  );
router
  .route("/:id")
  .get(getReviewValidator, getReview)
  .put(
    authService.protect,
    authService.allowedTo("user"), // without validation layers user can udate any review untile it belongs to
    updateReviewValidator,
    updateReview
  )
  .delete(
    authService.protect,
    authService.allowedTo("admin", "user", "manager"),
    deleteReviewValidator,
    deleteReview
  );

module.exports = router;
