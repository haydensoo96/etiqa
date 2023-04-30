module.exports = (sequelize, DataTypes) => {
  const UserSkill = sequelize.define(
    "UserSkill",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: DataTypes.UUID
      },
      name: DataTypes.STRING
    },
    {
      timestamps: true,
      freezeTableName: true
    }
  );

  UserSkill.associate = (models) => {};

  return UserSkill;
};
