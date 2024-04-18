const express = require("express");
const { register, login, updateUser,fetchList,deleteUser,searchApi,pagination,
    // fetchListAllSearchPage
 } = require("../controllers/user");
const { userAuth } = require("../middleware/auth");
const { registerTeacher,updateTeacher } = require("../controllers/teacher");
const { upload } = require("../heplers/upload");
const router = express();

router.post("/create", register);
router.post("/create-teacher",
upload.single("image"),
registerTeacher);

router.post("/login", userAuth(), login);
router.put("/update", updateUser);

router.put("/update-teacher",
upload.single("image"),

updateTeacher);


router.get('/list',userAuth(),fetchList)
router.get('/search',searchApi)
router.get('/page',pagination)
// router.get('/list-search',fetchListAllSearchPage)




router.delete('/delete',deleteUser)


module.exports = router;
