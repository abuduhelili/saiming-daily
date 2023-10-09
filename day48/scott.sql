drop database if exists scott;
create database scott;
use scott;

DROP TABLE IF EXISTS BONUS;
CREATE TABLE BONUS (
ENAME VARCHAR(10) NULL ,
JOB VARCHAR(9) NULL ,
SAL DOUBLE NULL ,
COMM DOUBLE NULL 
) ;

-- ----------------------------
-- Records for BONUS
-- ----------------------------


-- ----------------------------
-- Table structure for DEPT
-- ----------------------------
DROP TABLE IF EXISTS DEPT;
CREATE TABLE DEPT (
DEPTNO INT(2) PRIMARY KEY,
DNAME VARCHAR(14) NULL ,
LOC VARCHAR(13) NULL 
);

-- ----------------------------
-- Records for DEPT
-- ----------------------------
INSERT INTO DEPT VALUES ('10', 'ACCOUNTING', 'NEW YORK');
INSERT INTO DEPT VALUES ('20', 'RESEARCH', 'DALLAS');
INSERT INTO DEPT VALUES ('30', 'SALES', 'CHICAGO');
INSERT INTO DEPT VALUES ('40', 'OPERATIONS', 'BOSTON');

-- ----------------------------
-- Table structure for EMP
-- ----------------------------
DROP TABLE IF EXISTS EMP;
CREATE TABLE EMP (
EMPNO INT(4) PRIMARY KEY ,
ENAME VARCHAR(10) NULL ,
JOB VARCHAR(9) NULL ,
MGR INT(4) NULL ,
HIREDATE DATETIME NULL ,
SAL DOUBLE(7,2) NULL ,
COMM DOUBLE(7,2) NULL ,
DEPTNO INT(2) NULL 
);

-- ----------------------------
-- Records for EMP
-- ----------------------------
INSERT INTO EMP VALUES ('7369', 'SMITH', 'CLERK', '7902', '1980-12-17 00:00:00', '800', null, '20');
INSERT INTO EMP VALUES ('7499', 'ALLEN', 'SALESMAN', '7698', '1981-02-20 00:00:00', '1600', '300', '30');
INSERT INTO EMP VALUES ('7521', 'WARD', 'SALESMAN', '7698', '1981-02-22 00:00:00', '1250', '500', '30');
INSERT INTO EMP VALUES ('7566', 'JONES', 'MANAGER', '7839', '1981-04-02 00:00:00', '2975', null, '20');
INSERT INTO EMP VALUES ('7654', 'MARTIN', 'SALESMAN', '7698', '1981-09-28 00:00:00', '1250', '1400', '30');
INSERT INTO EMP VALUES ('7698', 'BLAKE', 'MANAGER', '7839', '1981-05-01 00:00:00', '2850', null, '30');
INSERT INTO EMP VALUES ('7782', 'CLARK', 'MANAGER', '7839', '1981-06-09 00:00:00', '2450', null, '10');
INSERT INTO EMP VALUES ('7788', 'SCOTT', 'ANALYST', '7566', '1987-04-19 00:00:00', '3000', null, '20');
INSERT INTO EMP VALUES ('7839', 'KING', 'PRESIDENT', null, '1981-11-17 00:00:00', '5000', null, '10');
INSERT INTO EMP VALUES ('7844', 'TURNER', 'SALESMAN', '7698', '1981-09-08 00:00:00', '1500', '0', '30');
INSERT INTO EMP VALUES ('7876', 'ADAMS', 'CLERK', '7788', '1987-05-23 00:00:00', '1100', null, '20');
INSERT INTO EMP VALUES ('7900', 'JAMES', 'CLERK', '7698', '1981-12-03 00:00:00', '950', null, '30');
INSERT INTO EMP VALUES ('7902', 'FORD', 'ANALYST', '7566', '1981-12-03 00:00:00', '3000', null, '20');
INSERT INTO EMP VALUES ('7934', 'MILLER', 'CLERK', '7782', '1982-01-23 00:00:00', '1300', null, '10');

-- ----------------------------
-- Table structure for "SALGRADE"
-- ----------------------------
DROP TABLE IF EXISTS SALGRADE;
CREATE TABLE SALGRADE (
GRADE INT(2) NULL ,
LOSAL DOUBLE NULL ,
HISAL DOUBLE NULL 
) ;

-- ----------------------------
-- Records for SALGRADE
-- ----------------------------
INSERT INTO SALGRADE VALUES ('1', '700', '1200');
INSERT INTO SALGRADE VALUES ('2', '1201', '1400');
INSERT INTO SALGRADE VALUES ('3', '1401', '2000');
INSERT INTO SALGRADE VALUES ('4', '2001', '3000');
INSERT INTO SALGRADE VALUES ('5', '3001', '9999');



-- ----------------------------
-- Foreign Key structure for table EMP
-- ----------------------------
ALTER TABLE EMP ADD FOREIGN KEY (DEPTNO) REFERENCES DEPT (DEPTNO);
