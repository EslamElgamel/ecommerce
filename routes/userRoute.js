const express = require("express");
const {
  getUserValidator,
  createUserValidator,
  updateUserValidator,
  deleteUserValidator,
  changeUserPasswordValidator,
  updateLoggedUserValidator,
} = require("../utils/validators/userValidator");

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  uploadUserImage,
  resizeImage,
  changeUserPassword,
  getLoggedUserData, 
  updateLoggedUserPassword,
  updateLoggedUserData,
  deleteLoggedUserData,
  logout,
} = require("../services/userService");

const authService = require("../services/authService");

const router = express.Router();

router.use(authService.protect)

router.get('/getMe', getLoggedUserData, getUser)

// changeUserPasswordValidator is optional 
router.put('/changeMyPassword', updateLoggedUserPassword, getUser)
router.put('/updateMe', updateLoggedUserValidator, updateLoggedUserData)
router.delete('/deleteMe', deleteLoggedUserData)
// router.post('/logout', logout)

router.use(authService.allowedTo("admin"));

router.put(
  "/changePassword/:id",
  changeUserPasswordValidator,
  changeUserPassword
);

router
  .route("/")
  .get(getUsers)
  .post(uploadUserImage, resizeImage, createUserValidator, createUser);
router
  .route("/:id")
  .get(getUserValidator, getUser)
  .put(
    authService.protect,
    authService.allowedTo("admin"),
    uploadUserImage,
    resizeImage,
    updateUserValidator,
    updateUser
  )
  .delete(
    authService.protect,
    authService.allowedTo("admin"),
    deleteUserValidator,
    deleteUser
  );

module.exports = router;
