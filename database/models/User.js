
module.exports = (sequelize , DataTypes) => {
    const alias = 'Usuario';

    const cols = { 
      id : {
          type : DataTypes.INTEGER.UNSIGNED,
          primaryKey : true ,
          allowNull : false ,
          autoIncrement :true 
      },
      name : {
          type : DataTypes.STRING(10),
          allowNull : false ,
      },
      email : {
        type : DataTypes.STRING(20),
        allowNull : false ,
      },
      pass : {
        type : DataTypes.STRING(12),
        allowNull : false ,
      },
      avatar : {
        type : DataTypes.BLOB,
        defaultValue : null
      },
      category : {
        type : DataTypes.STRING(20),
        allowNull : false ,
      },
      provincia : {
        type : DataTypes.STRING(45),
        defaultValue : null
      },
      localidad : {
        type : DataTypes.STRING(45),
        defaultValue : null
      },
      direccion : {
        type : DataTypes.STRING(45),
        defaultValue : null
      },
      telefono : {
        type : DataTypes.STRING(10),
        defaultValue : null
      },
      
    }

    const config = {
       tableName :'user',
       timestamps : true,
       underscored : true

    }

const User = sequelize.define(alias, cols, config)

return User

}
