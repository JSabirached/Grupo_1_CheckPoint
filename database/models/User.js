
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
          type : DataTypes.STRING(45),
          allowNull : false ,
      },
      email : {
        type : DataTypes.STRING(45),
        allowNull : false ,
      },
      pass : {
        type : DataTypes.STRING(70),
        allowNull : false ,
      },
      avatar : {
        type : DataTypes.STRING(255),
        defaultValue : null
      },
      category : {
        type : DataTypes.INTEGER.UNSIGNED,
        allowNull : true ,
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
        type : DataTypes.STRING(45),
        defaultValue : null
      },
       surname : {
        type : DataTypes.STRING(45),
        allowNull : false ,
    }
      
    }

    const config = {
       tableName :'user',
       timestamps : false,
       underscored : true

    }

const User = sequelize.define(alias, cols, config)

return User

}
