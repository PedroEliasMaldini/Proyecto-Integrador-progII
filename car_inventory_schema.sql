CREATE SCHEMA IF NOT EXISTS car_inventory;
USE car_inventory;

CREATE TABLE cars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    brand VARCHAR(50),
    model VARCHAR(50),
    color VARCHAR(50),
    gama ENUM('Baja', 'Media', 'Alta', 'Muy Alta', 'Super Lujo') NOT NULL,
    price DECIMAL(15, 2),
    image VARCHAR(255),
    
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

-- Insertando los datos
INSERT INTO cars (name, description, brand, model, color, gama, price, image) VALUES
('Toyota Century SUV', 'SUV de lujo para el mercado japonés', 'Toyota', 'Century', 'Negro', 'Alta', 170000.00, 'https://via.placeholder.com/400x200?text=Toyota+Century+SUV'),
('Toyota Land Cruiser J300', 'SUV todoterreno en versión GR Sport', 'Toyota', 'Land Cruiser J300', 'Blanco', 'Alta', 90000.00, 'https://via.placeholder.com/400x200?text=Toyota+Land+Cruiser+J300'),
('BMW 3.0 CSL', 'Coupé de alto rendimiento en edición limitada', 'BMW', '3.0 CSL', 'Amarillo', 'Muy Alta', 750000.00, 'https://via.placeholder.com/400x200?text=BMW+3.0+CSL'),
('BMW XM Label Red', 'SUV de lujo y alta potencia', 'BMW', 'XM Label Red', 'Rojo', 'Muy Alta', 185000.00, 'https://via.placeholder.com/400x200?text=BMW+XM+Label+Red'),
('Mercedes-AMG One', 'Hipercoche con tecnología de F1', 'Mercedes-Benz', 'AMG One', 'Plata', 'Super Lujo', 2700000.00, 'https://via.placeholder.com/400x200?text=Mercedes+AMG+One'),
('Mercedes-Maybach S680', 'Sedán de lujo con confort extremo', 'Mercedes-Benz', 'Maybach S680', 'Negro', 'Alta', 250000.00, 'https://via.placeholder.com/400x200?text=Mercedes+Maybach+S680'),
('Porsche 918 Spyder', 'Hiperdeportivo híbrido de edición limitada', 'Porsche', '918 Spyder', 'Plateado', 'Super Lujo', 845000.00, 'https://via.placeholder.com/400x200?text=Porsche+918+Spyder'),
('Porsche Carrera GT', 'Superdeportivo raro y de alta revalorización', 'Porsche', 'Carrera GT', 'Amarillo', 'Super Lujo', 1200000.00, 'https://via.placeholder.com/400x200?text=Porsche+Carrera+GT');

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    username VARCHAR(100),
    contrasenia VARCHAR(100),
    gmail  VARCHAR(100) NOT NULL UNIQUE,
    
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);