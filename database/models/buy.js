module.exports = (sequelize , DataTypes) => {
    const alias = 'Compras';

    const cols = { 
        id : {
            type : DataTypes.INTERGER.UNSIGNED,
            primarykey : true ,
            allowNull : false ,
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
            type : DataTypes.DATETIME,
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
       tableName :'buys',
       timestamps : true,
       underscored : true

    }

const Buy = sequelize.define(alias, cols, config)

}