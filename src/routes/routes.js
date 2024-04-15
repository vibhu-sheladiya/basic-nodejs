const express = require("express");
const { register, login, updateUser,fetchList,deleteUser,searchApi,pagination,
    // fetchListAllSearchPage
 } = require("../controllers/user");
const { userAuth } = require("../middleware/auth");
const router = express();

router.post("/create", register);
router.post("/login", userAuth(), login);
router.put("/update", updateUser);
router.get('/list',userAuth(),fetchList)
router.get('/search',searchApi)
router.get('/page',pagination)
// router.get('/list-search',fetchListAllSearchPage)




router.delete('/delete',deleteUser)


module.exports = router;
