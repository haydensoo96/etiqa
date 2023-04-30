var UserDao = require("../daos/userDao");

exports.GetUser = async function (req, res) {
  try {
    const getUserList = await UserDao.GetUser();

    res.json(getUserList);
  } catch (error) {
    console.log("Error: Index Controller (Get User)", error);

    throw error;
  }
};

exports.CreateUser = async function (req, res) {
  const { body } = req;

  try {
    const result = await UserDao.CreateUser(body);

    res.json(result);
  } catch (error) {
    console.log("Error: Index Controller (Create User)", error);

    throw error;
  }
};

exports.UpdateUser = async function (req, res) {
  const { body } = req;

  try {
    const result = await UserDao.UpdateUser(body);

    res.json(result);
  } catch (error) {
    console.log("Error: Index Controller (Update User)", error);

    throw error;
  }
};

exports.DeleteUser = async function (req, res) {
  const { body } = req;

  try {
    const result = await UserDao.DeleteUser(body);

    res.json(result);
  } catch (error) {
    console.log("Error: Index Controller (Delete User)", error);

    throw error;
  }
};

exports.UpdateUserSkill = async function (req, res) {
    const { body } = req;
  
    try {
      const result = await UserDao.UpdateUserSkill(body);
  
      res.json(result);
    } catch (error) {
      console.log("Error: Index Controller (Update User Skill)", error);
  
      throw error;
    }
  };

  exports.UpdateUserHobby = async function (req, res) {
    const { body } = req;
  
    try {
      const result = await UserDao.UpdateUserHobby(body);
  
      res.json(result);
    } catch (error) {
      console.log("Error: Index Controller (Update User Hobby)", error);
  
      throw error;
    }
  };
