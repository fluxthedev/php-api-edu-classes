# Setup

## Prerequisites
You need to have Composer, php, and mySQL installed locally. Make sure you start at the mySQL console using `mysql -u root -p`. You will need to have the root mysql password.

## Create the database and fill it with courses
1. Run `CREATE DATABASE education;`
2. Run `USE education;`
3. Run 
~~~~sql
CREATE TABLE resources 
  (id INT IDENTITY(1,1) PRIMARY KEY,
  title NVARCHAR(100),
  short_description NVARCHAR(250),
  cost DECIMAL(10,2),
  grade_span NVARCHAR(50),
  tags NVARCHAR(100));
~~~~

5. Run
~~~~sql
INSERT INTO resources (title, short_description, cost, grade_span, tags)
  VALUES ('Introduction to Biology', 'Basic biology concepts', 0.00, '9-12', 'Science'),
         ('World History 101', 'Broad overview of global history', 0.00, '9-12', 'Social Studies'),
         ('Pre-Algebra', 'Foundational mathematics concepts', 0.00, '6-8', 'Math'),
         ('Reading Comprehension', 'Enhancing understanding of written texts', 0.00, 'K-5', 'English Language Arts'),
         ('Basic Chemistry', 'Introduction to the elements and compounds', 0.00, '9-12', 'Science'),
         ('Algebra 1', 'First part of fundamental algebra', 0.00, '9-10', 'Math'),
         ('Algebra 2', 'Second part of fundamental algebra', 0.00, '11-12', 'Math'),
         ('Physics Basics', 'Introductory concepts in physics', 0.00, '11-12', 'Science'),
         ('Environmental Science', 'Understanding our environment and its preservation', 0.00, '11-12', 'Science'),
         ('Geography', 'Study of places and the relationships between people and their environments', 0.00, '6-8', 'Social Studies'),
         ('US Government', 'Insights into the United States political system', 0.00, '9-12', 'Social Studies'),
         ('Introduction to Programming', 'Basic principles of computer programming', 0.00, '9-12', 'Computer Science'),
         ('Art History', 'Overview of major periods and movements in art history', 0.00, '9-12', 'Arts'),
         ('Spanish I', 'Introduction to the Spanish language', 0.00, '9-10', 'Foreign Language'),
         ('Spanish II', 'Continuation of the study of the Spanish language', 0.00, '11-12', 'Foreign Language'),
         ('Creative Writing', 'Enhancing imagination and writing skills', 0.00, '9-12', 'English Language Arts'),
         ('Calculus', 'Foundational course in infinitesimal calculus', 0.00, '11-12', 'Math'),
         ('Biology II', 'Continuation of biology with more advanced concepts', 0.00, '11-12', 'Science'),
         ('Geometry', 'Study of shapes, sizes, properties of space', 0.00, '9-10', 'Math'),
         ('Chemistry II', 'Advanced study of elements and compounds', 0.00, '11-12', 'Science'),
         ('European History', 'Study of historical events in Europe', 0.00, '11-12', 'Social Studies'),
         ('French I', 'Introduction to the French language', 0.00, '9-10', 'Foreign Language'),
         ('French II', 'Continuation of the study of the French language', 0.00, '11-12', 'Foreign Language'),
         ('Economics', 'Understanding the economy and the principles of economics', 0.00, '11-12', 'Social Studies'),
         ('Web Design', 'Introduction to designing and building websites', 0.00, '9-12', 'Computer Science');
~~~~

6. Confirm data has been added by running: `SELECT * FROM resources;`

## Create and edit the .env file
1. Run the following command in the root of the repository to create a .env file: `touch .env`
2. Open the .env file and add the following: 
~~~~
APP_NAME=education
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost
APP_TIMEZONE=UTC

LOG_CHANNEL=stack
LOG_SLACK_WEBHOOK_URL=

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=education
DB_USERNAME=root
# DB_PASSWORD=

CACHE_DRIVER=file
QUEUE_CONNECTION=sync

~~~~
3. Uncomment the DB_PASSWORD line and add your root mysql password.

## Installing dependencies and running server
1. Run `composer install`
2. Run `php -S localhost:8000 -t public` to start the server.

## Hitting the API
The resources api has the following path: `/api/resources` to view all the resources. You can also use `/api/resources/{id}` to access a specific resource (e.g. `/api/resources/1`.
