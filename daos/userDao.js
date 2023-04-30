let Models = require("../models/index");
const { sequelize } = require("../models/index");
let uuid = require("uuid");

exports.GetUser = async function () {
  try {
    let User = await Models.Users.findAll({
      include: [{model: Models.UserSkill, attributes:['name']}, {model: Models.UserHobby, attributes:['name']}]
    });

    return User;
  } catch (error) {
    console.log("GetUser DAO ERROR :", error);
    return { message: "Error retrieving User" };
  }
};

exports.CreateUser = async function (data) {
  const { username, phone, email } = data;

  try {
    const newUserId = uuid.v1();
    await Models.Users.findOrCreate({
      where: {
        email: email
      },
      defaults: {
        userId: newUserId,
        username: username,
        phone: phone
      }
    });
    return { Success: true };
  } catch (error) {
    console.log("CreateUser DAO ERROR :", error);
    return { message: "Error creating User" };
  }
};

exports.UpdateUser = async function (data) {
  const { userId, email, phone, username } = data;

  try {
    await sequelize.transaction(async (t) => {
      const user = await Models.Users.findOne({
        where: {
          userId: userId
        }
      });

      if (user) {
        await Models.Users.update(
          {
            email: email,
            phone: phone,
            username: username
          },
          { where: { userId } },
          { transaction: t }
        );
      } else {
        throw { message: "User Not found" };
      }
    });

    return { Success: true };
  } catch (error) {
    console.log("UpdateUser DAO ERROR :", error);
    return error;
  }
};

exports.DeleteUser = async function (data) {
  const { userId } = data;

  try {
    await Models.Users.destroy({
      where: {
        userId: userId
      }
    });

    return { Success: true };
  } catch (error) {
    console.log("UpdateUser DAO ERROR :", error);
    return { message: "Error deleting User" };
  }
};

exports.UpdateUserSkill = async function (data) {
  const { userId, skills } = data;

  try {
    await sequelize.transaction(async (t) => {
      const skillModels = [];
      const user = await Models.Users.findOne({
        where: {
          userId: userId
        }
      });

      if (user && skills.length > 0) {
        for (const skill of skills) {
          skillModels.push({ name: skill, userId });
        }

        await sequelize.transaction(async (t) => {
          await Models.UserSkill.destroy({ where: { userId }, transaction: t });
          await Models.UserSkill.bulkCreate(skillModels, { transaction: t });
        });
      } else {
        throw { message: "User Not found" };
      }
    });

    return { Success: true };
  } catch (error) {
    console.log("UpdateUserSkill DAO ERROR :", error);
    return error;
  }
};

exports.UpdateUserHobby = async function (data) {
    const { userId, hobbies } = data;
  
    try {
      await sequelize.transaction(async (t) => {
        const hobbyModels = [];
        const user = await Models.Users.findOne({
          where: {
            userId: userId
          }
        });
  
        if (user && hobbies.length > 0) {
          for (const hobby of hobbies) {
            hobbyModels.push({ name: hobby, userId });
          }
  
          await sequelize.transaction(async (t) => {
            await Models.UserHobby.destroy({ where: { userId }, transaction: t });
            await Models.UserHobby.bulkCreate(hobbyModels, { transaction: t });
          });
        } else {
          throw { message: "User Not found" };
        }
      });
  
      return { Success: true };
    } catch (error) {
      console.log("UpdateUserHobby DAO ERROR :", error);
      return error;
    }
  };
