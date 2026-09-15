USE acme_school;

-- 1. Insertar tipos de documento y ciudades
INSERT INTO identification_types (code, name, description) VALUES 
('DPI', 'Documento Personal de Identificación', 'Documento oficial de Guatemala'),
('PAS', 'Pasaporte', 'Pasaporte internacional');

INSERT INTO cities (code, name) VALUES 
('GUA-01', 'Ciudad de Guatemala'),
('GUA-02', 'Mixco');

-- 2. Insertar profesores y estudiantes
INSERT INTO teachers (firstName, lastName, identification_type_id, identificationNumber, email) VALUES 
('Carlos', 'Mendoza', 1, '1990123450101', 'cmendoza@school.edu');

INSERT INTO students (code, firstName, lastName, identification_type_id, identificationNumber, gender, birthdate, email, address, city_id) VALUES 
('STU-2026-001', 'Henrik', 'García', 1, '3001987650101', 'Masculino', '2005-04-12 00:00:00', 'henrik@gmail.com', 'Zona 6', 1);

-- 3. Insertar aulas, cursos y temas
INSERT INTO classrooms (code, description, capacity, active) VALUES 
('AUL-101', 'Laboratorio de Computación 1', 30, 1);

INSERT INTO courses (code, description, intensity, weight, active) VALUES 
('DEV-201', 'Desarrollo Web Fullstack', 120, 5, 1);

INSERT INTO topics (course_id, code, title, description, active) VALUES 
(1, 'TOP-01', 'Modelado BD y MySQL', 'Diseño de bases de datos relacionales con InnoDB', 1);

-- 4. Insertar horarios/programación de cursos
INSERT INTO courses_schedules (course_id, teacher_id, classroom_id, start_date, end_date, active) VALUES 
(1, 1, 1, '2026-02-01 08:00:00', '2026-06-30 12:00:00', 1);

-- 5. Insertar inscripción y calificación (rate)
INSERT INTO inscriptions (course_schedule, student_id, register_date, active) VALUES 
(1, 1, NOW(), 1);

INSERT INTO rates (inscription_id, rate, comments) VALUES 
(1, 95, 'Excelente desempeño en el proyecto de MySQL.');