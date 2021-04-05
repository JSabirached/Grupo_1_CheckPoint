module.exports = (sequelize , DataTypes) => {
    const alias = 'Compras';

    const cols = { 
        id: {
            type : DataTypes.INTEGER(10).UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement :true 
        },
        fecha_Compra : {
            type : DataTypes.DATE,
            allowNull : false ,
        },
        fecha_Entrega : {
            type : DataTypes.DATE,
            allowNull : false ,
        },
       horario_Entrega: {
            type : DataTypes.DATE,
            allowNull : false ,
        },
       total : {
            type : DataTypes.STRING(10),
            defaultValue : null
        },
        Factura_idUser : {
            type : DataTypes.STRING(45),
            defaultValue : null
        },
        Factura_idFood : {
            type : DataTypes.STRING(45),
            defaultValue : null
        },
      
    }

    const config = {
       tableName :'buy',
       timestamps : false,
       underscored : true

    }

const Buy = sequelize.define(alias, cols, config)

return Buy

}

