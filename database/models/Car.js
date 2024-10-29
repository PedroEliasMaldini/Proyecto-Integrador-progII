module.exports = function (sequelize, dataTypes) {
    let alias = "Car"; 
    let cols = {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER,
      },
      name: {
        type: dataTypes.STRING(100),
        allowNull: false,
      },
      description: {
        type: dataTypes.TEXT,
      },
      brand: {
        type: dataTypes.STRING(50),
      },
      model: {
        type: dataTypes.STRING(50),
      },
      color: {
        type: dataTypes.STRING(50),
      },
      gama: {
        type: dataTypes.ENUM('Baja', 'Media', 'Alta', 'Muy Alta', 'Super Lujo'),
        allowNull: false,
      },
      price: {
        type: dataTypes.DECIMAL(15, 2),
      },
      image: {
        type: dataTypes.STRING(255),
      }
    }; // Eliminada la coma adicional
    let config = {
      tablename: "cars", // nombre de la tabla
      timestamps: false, // true o false por si se quiere traer los registros de tiempo
      underscored: false, // true o false si alguna columna tiene guion bajo
    };
    const Car = sequelize.define(alias, cols, config);
    return Car; // Eliminado el punto y coma adicional
};
