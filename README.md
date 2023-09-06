# Onboarding
## Voucher management system(VMS) for plutosONE website

## Introduction
#### Web-based sophisticated system that allows customers to create an account and login, update their account info, delete them  & view all vouchers as well as vouchers with specific type. Admin manage vouchers including create, update and delete operations.

## Objective
#### Main objective of VMS is to create account for the customer and show them vouchers of different type as well as claim them along with access to administrators to manage vouchers.

## Entities
### Entities for the VMS :-
#### User: Attributes include id, username, email, password, phone_number, isAdmin
#### Voucher: Attributes include id, code, type, expiresBy, price

## Technologies Used
### The VMS Application is developed using the following technologies:

1. Nodejs: Used for javascript runtime environment for building server side aplications.
2. Expressjs: Used for building hybrid server aplications.
3. Mysql: Used for management of databases in form of tables.
4. Postman: Used for building, testing and modifying APIs

## Functional Requirements

### CUSTOMER FUNCTIONALITIES
1. Signup: User will be able to sign up and create an account.
2. Signin: User will be able to login successfully..
3. Get All Vouchers: User will be able to get all the vouchers.
4. Get voucher of particular type: User will be able to get the vouchers of particular type.
5. Update account info: User will be able to update his account details.
6. Delete account: User will be able to delete their account.
7. Get Voucher by Id: User will be able to view the particular voucher.

### ADMIN fUNCTIONALITIES
1. Create Voucher: Admin will be able to create vouchers. 
2. Update Voucher: Admin will be able to update vouchers.
3. Delete voucher: Admin will be able to delete vouchers.

## Non-Functional Requirements

1. Scalability: system must be able to scale up or down when needed.
2. Availablity: system must be available when needed.
3. Maintanence: system must be easily maintainable.
4. Portable: system must support different browser platforms (Chrome, firefox, edge etc)


