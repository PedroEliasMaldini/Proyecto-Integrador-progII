module.exports = function (sequelize, DataTypes) {
  let alias = "Usuario"; // alias para llamarlo desde el controlador

  let cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    contrasena: {
      type: DataTypes.STRING(255),
      allowNull: false,
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
    tableName: "usuarios", // nombre de la tabla
    timestamps: true,
    paranoid: true,
    underscored: false,
  };

  const Usuario = sequelize.define(alias, cols, config);

  Usuario.associate = function (models) {
    // Relación: Un usuario puede tener muchos productos
    Usuario.hasMany(models.Producto, {
      as: "productos", // alias de la relación
      foreignKey: "usuarioId",
    });
  };

  return Usuario;
};
