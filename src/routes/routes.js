const express = require("express");
const { register, login, updateUser,fetchList,deleteUser } = require("../controllers/user");
const { userAuth } = require("../middleware/auth");
const router = express();

router.post("/create", register);
router.post("/login", userAuth(), login);
router.put("/update", updateUser);
router.get('/list',userAuth(),fetchList)
router.delete('/delete',deleteUser)


module.exports = router;
