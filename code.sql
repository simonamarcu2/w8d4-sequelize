Some of The Most Important SQL Commands
SELECT - extracts data from a database
UPDATE - updates data in a database
DELETE - deletes data from a database
INSERT INTO - inserts new data into a database
CREATE DATABASE - creates a new database
ALTER DATABASE - modifies a database
CREATE TABLE - creates a new table
ALTER TABLE - modifies a table
DROP TABLE - deletes a table
CREATE INDEX - creates an index (search key)
DROP INDEX - deletes an index

/* Added a new row */

ALTER TABLE movies ADD film_genre VARCHAR(20)

/* Inserted new data in Database  */
INSERT INTO movies(movie_title, year, film_genre, rating)
VALUES 	("Attack on Titan", 2013, "animation",9), 
		("Encanto", 2021, "animation",7),
		("The Ice Age Adventures of Buck Wild", 2022,"animation", 4),
		("Spider-Man: Into the Spider-Verse", 2018, "adventure",8),
		("Raya and the Last Dragon", 2021, "action", 7),
		("Pinocchio: A True Story", 2021, "fantasy", 3),
		("Hotel Transylvania", 2012, "comedy", 7),
		("Lion King", 1994, "drama"	, 8);


SELECT * FROM movies;
