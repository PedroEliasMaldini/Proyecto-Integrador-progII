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
    nombreProducto VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    usuarioId INT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL,
    FOREIGN KEY (usuarioId) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Insert básico de usuarios
INSERT INTO usuarios (username, email, contrasena) VALUES 
('Alice Johnson', 'alice.johnson@example.com', 'A1iC3$uperPass!'),
('Bob Smith', 'bob.smith@example.com', 'B0b$TurboEng1ne'),
('Carol Williams', 'carol.williams@example.com', 'C@rolSpeedyW1ll'),
('David Brown', 'david.brown@example.com', 'D@veLuxuryDr1ve'),
('Emma Davis', 'emma.davis@example.com', 'Emm@Exot1cR1de');

-- Productos por usuario
INSERT INTO productos (imagen, nombreProducto, descripcion, precio, usuarioId) VALUES
('ferrari_488.jpg', 'Ferrari 488', 'El Ferrari 488 GTB ofrece una experiencia única con su motor V8 de 670 HP, aceleración vertiginosa y diseño aerodinámico', 262000, 1),
('lamborghini_huracan.jpg', 'Lamborghini Huracán', 'El Lamborghini Huracán EVO combina potencia y estilo con tracción total, motor V10 y tecnología de punta para una conducción excepcional', 287000, 1),
('aston_martin_db11.jpg', 'Aston Martin DB11', 'El Aston Martin DB11 cuenta con un motor V12 Twin-Turbo de alto rendimiento y un diseño elegante y distintivo', 205000, 1);

INSERT INTO productos (imagen, nombreProducto, descripcion, precio, usuarioId) VALUES
('porsche_911.jpg', 'Porsche 911', 'El Porsche 911 Carrera S de 443 HP redefine la deportividad con su diseño clásico y manejo preciso', 113000, 2),
('bentley_continental.jpg', 'Bentley Continental GT', 'Bentley Continental GT W12 de 626 HP combina lujo y potencia, con una experiencia de manejo inigualable', 214600, 2),
('mclaren_720s.jpg', 'McLaren 720S', 'El McLaren 720S con motor V8 Twin-Turbo y 710 HP es una máquina de velocidad con ingeniería de alta precisión', 299000, 2);

INSERT INTO productos (imagen, nombreProducto, descripcion, precio, usuarioId) VALUES
('rolls_royce_ghost.jpg', 'Rolls-Royce Ghost', 'El Rolls-Royce Ghost destaca por su motor V12 y lujosos acabados interiores, creando una atmósfera de máxima elegancia', 332500, 3),
('bugatti_chiron.jpg', 'Bugatti Chiron', 'El Bugatti Chiron, con su motor W16 de 1500 HP, es una maravilla de ingeniería que establece un nuevo estándar en velocidad y lujo', 3000000, 3),
('tesla_model_s_plaid.jpg', 'Tesla Model S Plaid', 'El Tesla Model S Plaid con 1020 HP ofrece aceleración ultrarrápida y tecnología avanzada en un sedán eléctrico', 135000, 3);

INSERT INTO productos (imagen, nombreProducto, descripcion, precio, usuarioId) VALUES
('mercedes_amg_gt.jpg', 'Mercedes-AMG GT', 'El Mercedes-AMG GT de 523 HP combina un potente motor V8 y diseño deportivo en un paquete impresionante', 118600, 4),
('bmw_i8.jpg', 'BMW i8', 'El BMW i8 es un híbrido deportivo con tecnología avanzada, diseño futurista y eficiencia innovadora', 147500, 4),
('lexus_lc_500.jpg', 'Lexus LC 500', 'El Lexus LC 500 con motor V8 de 471 HP destaca por su diseño elegante y desempeño dinámico', 93000, 4);

INSERT INTO productos (imagen, nombreProducto, descripcion, precio, usuarioId) VALUES
('audi_r8.jpg', 'Audi R8', 'El Audi R8 V10 de 602 HP ofrece una experiencia de manejo emocionante con su motor de alto rendimiento y diseño aerodinámico', 142700, 5),
('jaguar_f_type.jpg', 'Jaguar F-Type', 'El Jaguar F-Type R con motor V8 de 575 HP proporciona una conducción poderosa y refinada', 103200, 5),
('maserati_granturismo.jpg', 'Maserati GranTurismo', 'El Maserati GranTurismo combina elegancia y potencia con su diseño clásico y motor V8', 134000, 5);
