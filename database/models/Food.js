//const config = require("../config/config")

module.exports = (sequelize , DataTypes) => {
    const alias = 'Comidas';

    const cols = { 
        id : {
            type : DataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false ,
            autoIncrement :true 
        },
        name : {
            type : DataTypes.STRING(15),
            allowNull : false ,
        },
        price : {
            type : DataTypes.STRING(6),
            allowNull : false ,
        },
        image : {
            type : DataTypes.BLOB,
            
        },
        category : {
            type : DataTypes.STRING(20),
            allowNull : false ,
        },
        description : {
            type : DataTypes.STRING(180),
            allowNull : false ,
        },
        
      
    }

    const config = {
       tableName :'food',
       timestamps : true,
       underscored : true

    }

const Food = sequelize.define(alias, cols, config)

return Food

}
