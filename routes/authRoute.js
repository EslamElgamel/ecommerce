const express = require("express");
const { signupValidator, loginValidator } = require("../utils/validators/authValidator");

const { signup, login, forgetPassword, verifyPassResetCode, resetPassword, logout } = require("../services/authService");

const router = express.Router();

// router.put('/changePassword/:id',changeUserPasswordValidator, changeUserPassword)

router.post("/signup",signupValidator, signup)
router.post("/login", loginValidator, login)
router.post("/forgotPassword", forgetPassword)
router.post("/verifyResetCode", verifyPassResetCode)
router.put("/resetPassword", resetPassword)
router.post("/logout", logout)
// router
//   .route("/:id")
//   .get(getUserValidator, getUser)
//   .put(uploadUserImage, resizeImage, updateUserValidator, updateUser)
//   .delete(deleteUserValidator, deleteUser);

module.exports = router;
