module.exports = (sequelize , DataTypes) => {
    const alias = 'Category';

    const cols = { 
        id : {
            type : DataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false ,
            autoIncrement :true 
        },
        name : {
            type : DataTypes.STRING(25),
            allowNull : false ,
        },
        
      
    }

    const config = {
       tableName :'category',
       timestamps : false,
       underscored : true

    }

const Category = sequelize.define(alias, cols, config)

Category.associate = function(models){
    Category.hasMany(models.Comidas,{
        as:'Comidas',
        foreignKey:'id_category'
    })
}
return Category

}
