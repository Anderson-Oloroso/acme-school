CREATE DATABASE IF NOT EXISTS acme_school;
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE acme_school;

-- -----------------------------------------------------
-- 1. Tablas independientes (Catalogos)
-- -----------------------------------------------------

CREATE TABLE identification_types (
    id INT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(6),
    name VARCHAR(100),
    description VARCHAR(250)
) ENGINE=InnoDB;

CREATE TABLE cities (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(10),
    name VARCHAR(100)
) ENGINE=InnoDB;

CREATE TABLE classrooms (
    id INT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(10),
    description VARCHAR(250),
    capacity INT,
    active TINYINT
) ENGINE=InnoDB;

CREATE TABLE courses (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(10),
    description VARCHAR(250),
    intensity INT,
    weight INT,
    active TINYINT
) ENGINE=InnoDB;

-- -----------------------------------------------------
-- 2. Tablas dependientes de nivel 1
-- -----------------------------------------------------

CREATE TABLE teachers (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(60),
    lastName VARCHAR(60),
    identification_type_id INT,
    identificationNumber VARCHAR(16),
    email VARCHAR(100),
    CONSTRAINT fk_teachers_identification_types 
        FOREIGN KEY (identification_type_id) REFERENCES identification_types(id) 
        ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE students (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(14),
    firstName VARCHAR(60),
    lastName VARCHAR(60),
    identification_type_id INT,
    identificationNumber VARCHAR(16),
    gender VARCHAR(20),
    birthdate DATETIME,
    email VARCHAR(60),
    address VARCHAR(100),
    city_id BIGINT,
    CONSTRAINT fk_students_identification_types 
        FOREIGN KEY (identification_type_id) REFERENCES identification_types(id) 
        ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT fk_students_cities 
        FOREIGN KEY (city_id) REFERENCES cities(id) 
        ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE topics (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    course_id BIGINT,
    code VARCHAR(10),
    title VARCHAR(100),
    description VARCHAR(250),
    active TINYINT,
    CONSTRAINT fk_topics_courses 
        FOREIGN KEY (course_id) REFERENCES courses(id) 
        ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

-- -----------------------------------------------------
-- 3. Tablas dependientes de nivel 2
-- -----------------------------------------------------

CREATE TABLE courses_schedules (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    course_id BIGINT,
    teacher_id BIGINT,
    classroom_id INT,
    start_date DATETIME,
    end_date DATETIME,
    active TINYINT,
    CONSTRAINT fk_schedules_courses 
        FOREIGN KEY (course_id) REFERENCES courses(id) 
        ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT fk_schedules_teachers 
        FOREIGN KEY (teacher_id) REFERENCES teachers(id) 
        ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT fk_schedules_classrooms 
        FOREIGN KEY (classroom_id) REFERENCES classrooms(id) 
        ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

-- -----------------------------------------------------
-- 4. Tablas dependientes de nivel 3
-- -----------------------------------------------------

CREATE TABLE inscriptions (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    course_schedule BIGINT,
    student_id BIGINT,
    register_date DATETIME,
    active TINYINT,
    CONSTRAINT fk_inscriptions_courses_schedules 
        FOREIGN KEY (course_schedule) REFERENCES courses_schedules(id) 
        ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT fk_inscriptions_students 
        FOREIGN KEY (student_id) REFERENCES students(id) 
        ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

-- -----------------------------------------------------
-- 5. Tablas dependientes de nivel 4
-- -----------------------------------------------------

CREATE TABLE rates (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    inscription_id BIGINT,
    rate BIGINT,
    comments VARCHAR(250),
    CONSTRAINT fk_rates_inscriptions 
        FOREIGN KEY (inscription_id) REFERENCES inscriptions(id) 
        ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;