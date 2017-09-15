module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salt:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    company_name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    state:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  });

  // User.associate = function(models) {
  //   User.hasMany(models.Item, {
  //     onDelete: "cascade"
  //   });
  // };
  return User;
}