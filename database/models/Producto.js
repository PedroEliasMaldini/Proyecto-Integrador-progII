// models/Producto.js
module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define(
    "Producto",
    {
      imagen: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      nombre_producto: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "usuarios",
          key: "id",
        },
      },
    },
    {
      tableName: "productos",
      timestamps: true,
    }
  );

  Producto.associate = (models) => {
    // Relación: Un producto pertenece a un usuario
    Producto.belongsTo(models.Usuario, {
      foreignKey: "usuario_id",
      as: "usuario",
    });
  };

  return Producto;
};
