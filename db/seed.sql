INSERT INTO department (dep_name)
VALUES  ('Finance'),
        ('Legal'),
        ('Marketing'),
        ('Service'),
        ('Engineering');

INSERT INTO roles(title, salary, dep_id)
    VALUES ('Manager',25000,'Finance'),
            ('Director',50000,"Finance"),
            ('Representative', 15000,'Service'),
            ('Vice President', 75000,'Legal');

INSERT INTO employee(first_name,last_name,role_id,manager_id)
    VALUES ('Greg ',"Ali",'Finance','Sally'),
            ('George','Lucas','Finance','Sally'),
            ('David', 'Bowie','Service','Bob'),
            ('Flume','None','Engineering','Joe');