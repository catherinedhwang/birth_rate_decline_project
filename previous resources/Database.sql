CREATE TABLE database (
	Index INT PRIMARY KEY,
	Country VARCHAR(5),
	Indicator VARCHAR(20),
	Subject VARCHAR(20),
	Measure VARCHAR(20),
	Time INT,
	Value Dec
);


SELECT * 
FROM database;