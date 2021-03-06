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
            type : DataTypes.STRING(45),
            allowNull : false ,
        },
        price : {
            type : DataTypes.STRING(6),
            allowNull : false ,
        },
        image : {
            type : DataTypes.STRING(255),
            
        },
        id_category : {
            type : DataTypes.INTEGER,
            allowNull : false ,
        },
        description : {
            type : DataTypes.STRING(180),
            allowNull : false ,
        },
        
      
    }

    const config = {
       tableName :'food',
       timestamps : false,
       underscored : true

    }

const Food = sequelize.define(alias, cols, config)
Food.associate = function(models){
    Food.belongsTo(models.Category,{
        as:'categorias',
        foreignKey:'id_category'
    })
}


return Food

}
