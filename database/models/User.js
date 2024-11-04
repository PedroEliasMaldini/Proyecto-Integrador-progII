module.exports =  function(sequelize, dataTypes) {

    let alias = "User";

    let cols = {
        id : {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        username: {
            type : dataTypes.STRING
        },
        contrasenia: {
            type : dataTypes.STRING
        },
        email: {
            type : dataTypes.STRING
        }
    };

    let config = {
        tableName : "users",
        timestamps : false,
        underscored : true
    }

    let User = sequelize.define(alias, cols, config);

    return User;
    
}