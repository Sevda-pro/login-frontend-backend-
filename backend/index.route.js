const express=require("express")
const path=require("path")
const router=express.Router();
const controller=require(path.join(__dirname+'/customer.controller'));

router.route("/").post( controller.createCustomer);
router.route("/data").get( controller.findAllCustomer);
module.exports=router;
