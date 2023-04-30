let express = require("express");
let Router = express();
let IndexController = require("../controllers/indexControllers");

//Navigation Route
Router.get("/user", IndexController.GetUser);

Router.post("/create", IndexController.CreateUser)

Router.post("/update", IndexController.UpdateUser)

Router.post("/delete", IndexController.DeleteUser)

Router.post("/update/skill", IndexController.UpdateUserSkill)

Router.post("/update/hobby", IndexController.UpdateUserHobby)



module.exports = Router;
