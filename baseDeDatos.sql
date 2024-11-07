CREATE SCHEMA datos;
USE datos;

-- Tabla de usuarios con timestamps
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL
);

-- Tabla de productos con timestamps
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    imagen VARCHAR(255),
    nombre_producto VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    usuario_id INT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Insert básico de usuarios
INSERT INTO usuarios (username, email, contrasena) VALUES 
('Alice Johnson', 'alice.johnson@example.com', 'A1iC3$uperPass!'),
('Bob Smith', 'bob.smith@example.com', 'B0b$TurboEng1ne'),
('Carol Williams', 'carol.williams@example.com', 'C@rolSpeedyW1ll'),
('David Brown', 'david.brown@example.com', 'D@veLuxuryDr1ve'),
('Emma Davis', 'emma.davis@example.com', 'Emm@Exot1cR1de');

--- Productos por usuario
INSERT INTO productos (imagen, nombre_producto, descripcion, precio, usuario_id) VALUES
('ferrari_488.jpg', 'Ferrari 488', 'Ferrari 488 GTB con motor V8 y 670 HP', 262000, 1),
('lamborghini_huracan.jpg', 'Lamborghini Huracán', 'Lamborghini Huracán EVO con tracción total', 287000, 1),
('aston_martin_db11.jpg', 'Aston Martin DB11', 'Aston Martin DB11 con motor V12 Twin-Turbo', 205000, 1);

INSERT INTO productos (imagen, nombre_producto, descripcion, precio, usuario_id) VALUES
('porsche_911.jpg', 'Porsche 911', 'Porsche 911 Carrera S con 443 HP', 113000, 2),
('bentley_continental.jpg', 'Bentley Continental GT', 'Bentley Continental GT W12 con 626 HP', 214600, 2),
('mclaren_720s.jpg', 'McLaren 720S', 'McLaren 720S con motor V8 Twin-Turbo y 710 HP', 299000, 2);

INSERT INTO productos (imagen, nombre_producto, descripcion, precio, usuario_id) VALUES
('rolls_royce_ghost.jpg', 'Rolls-Royce Ghost', 'Rolls-Royce Ghost con motor V12 y acabados de lujo', 332500, 3),
('bugatti_chiron.jpg', 'Bugatti Chiron', 'Bugatti Chiron con motor W16 de 1500 HP', 3000000, 3),
('tesla_model_s_plaid.jpg', 'Tesla Model S Plaid', 'Tesla Model S Plaid con 1020 HP y aceleración ultrarrápida', 135000, 3);

INSERT INTO productos (imagen, nombre_producto, descripcion, precio, usuario_id) VALUES
('mercedes_amg_gt.jpg', 'Mercedes-AMG GT', 'Mercedes-AMG GT con motor V8 y 523 HP', 118600, 4),
('bmw_i8.jpg', 'BMW i8', 'BMW i8 híbrido deportivo con tecnología avanzada', 147500, 4),
('lexus_lc_500.jpg', 'Lexus LC 500', 'Lexus LC 500 con motor V8 de 471 HP', 93000, 4);

INSERT INTO productos (imagen, nombre_producto, descripcion, precio, usuario_id) VALUES
('audi_r8.jpg', 'Audi R8', 'Audi R8 V10 con motor de 602 HP', 142700, 5),
('jaguar_f_type.jpg', 'Jaguar F-Type', 'Jaguar F-Type R con motor V8 de 575 HP', 103200, 5),
('maserati_granturismo.jpg', 'Maserati GranTurismo', 'Maserati GranTurismo con diseño elegante y motor V8', 134000, 5);
