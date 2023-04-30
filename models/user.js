module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      userId: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.INTEGER
    },
    {
      timestamps: true,
      freezeTableName: true
    }
  );

  Users.associate = (models) => {
    Users.hasMany(models.UserHobby,{foreignKey:"userId"})
    Users.hasMany(models.UserSkill,{foreignKey:"userId"})
  };

  return Users;
};
