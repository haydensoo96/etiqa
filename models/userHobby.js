module.exports = (sequelize, DataTypes) => {
    const UserHobby = sequelize.define(
      "UserHobby",
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
  
    UserHobby.associate = (models) => {};
  
    return UserHobby;
  };
  