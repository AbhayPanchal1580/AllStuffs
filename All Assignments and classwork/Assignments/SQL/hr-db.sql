
To solve below queries use "hr" database

Display first name and last name after converting the first letter of each name to upper case and
the rest to lower case.
Select UPPER(SUBSTRING(First_name, 1,1))+ 
LOWER(SUBSTRING(First_name, 2, Len(First_Name)-1))As First_name,UPPER(SUBSTRING(last_name, 1,1))+ 
LOWER(SUBSTRING(last_name, 2, Len(last_Name)-1))As last_name from Employees

Display the first word in job title.
select upper(substring(job_title,1,1)) as firstjobtitle from jobs

Display the length of first name for employees where last name contain character ‘b’ after 3rd
position.
select len(first_name) as firstnamelen from employees where last_name like '___b%'

 Display first name in upper case and email address in lower case for employees where the first
name and email address are same irrespective of the case.
select upper(first_name),lower(email) from employees  

Display first name, salary, and round the salary to thousands.
SELECT FIRST_NAME, SALARY, ROUND(SALARY, -3) FROM EMPLOYEES

Display employee ID and the date on which he ended his previous job.
SELECT emplyee_id, MAX(end_date) AS Last_date FROM job_history GROUP BY employee_id;


Display first name and date of first salary of the employees.
SELECT FIRST_NAME, HIRE_DATE, LAST_DAY(HIRE_DATE)+1 FROM EMPLOYEES;

Display first name and experience of the employees
--ABS

Display first name of employees who joined in 2001.
SELECT FIRST_NAME,HIRE_DATE FROM EMPLOYEES WHERE HIRE_DATE BETWEEN '2001-01-01' AND '2001-12-12';

Display employees who joined in the current year.
SELECT * FROM employees WHERE YEAR(HIRE_DATE)= YEAR(GETDATE());


Display number of employees joined after 15th of the month
SELECT DATEDIFF(DAY, '20110101', GETDATE()) AS TOTAL_DAYS;

SELECT * FROM EMPLOYEES WHERE DATEPART(DAY FROM HIRE_DATE) > 15;
