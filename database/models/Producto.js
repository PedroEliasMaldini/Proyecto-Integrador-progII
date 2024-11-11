module.exports = function (sequelize, DataTypes) {
  let alias = "Producto"; // alias para llamarlo desde el controlador

  let cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nombreProducto: {
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
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "usuarios",
        key: "id",
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  };

  let config = {
    tableName: "productos",
    timestamps: true,
    paranoid: true,
    underscored: false,
  };

  const Producto = sequelize.define(alias, cols, config);

  Producto.associate = function (models) {
    // Relación: Un producto pertenece a un usuario
    Producto.belongsTo(models.Usuario, {
      as: "usuario", // alias de la relación
      foreignKey: "usuarioId",
    });
  };

  return Producto;
};
