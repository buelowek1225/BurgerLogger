USE burger_db;
  
INSERT INTO burgers (burger_name, devoured)
VALUES ("Betsy-Blue", false);
INSERT INTO burgers (burger_name, devoured)
VALUES ("Bean-Burst", false);
INSERT INTO burgers (burger_name, devoured)
VALUES ("Jiffy-Cheddar", false);

SELECT 
    burger_name, 
    IF(devoured, 'true', 'false') devoured
FROM burgers