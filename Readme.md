# Spreadsheet to CRUD Application

## Overview

This project is fully functional CRUD (Create, Read, Update, Delete) application using modern web development technologies.

To achieve this, I utilized the following technology stack:

- **Database**: PostgreSQL
- **ORM**: Prisma
- **Frontend**: React
- **CSS Framework**: Tailwind CSS
- **Backend**: ExpressJS and Node.js
- **Hosting**: Deployed the application on Vercel

## Features Implemented

### 1. Spreadsheet View

The application presents data in a grid-like structure resembling a spreadsheet, organized in rows and columns. This was achieved in the frontend using React components and Tailwind CSS for styling.

### 2. CRUD Operations

#### Create

Users can add new rows and columns using a '+' symbol at the end of each row and column. This functionality is implemented in the frontend, where clicking the '+' button adds a new row or column dynamically.

#### Read

Data is displayed in a spreadsheet format, allowing users to view the existing data. The frontend fetches data from the backend API and renders it in the spreadsheet view.

#### Update

Double-clicking a cell enables editing.Upon double-click, the cell becomes editable, allowing users to update the data.

#### Delete

Rows and columns can be deleted after confirming the delete operation. This functionality is implemented in the frontend, where users can select rows or columns and delete them. A confirmation dialog is displayed before the delete operation is executed.

### 3. Spreadsheet Functionalities

#### Undo/Redo

Users can revert the last action using Ctrl + Z (Undo) and repeat the last undone action using Ctrl + Y (Redo). When an undo or redo action is triggered, the application updates the state accordingly.

#### Copy/Paste

Users can copy selected data using Ctrl + C and paste it using Ctrl + V. where users can select cells, copy the data, and paste it into other cells.

## Implementation Details

### Database

- Designed and created a postgreSQL database schema based on the spreadsheet structure.
- Used Prisma ORM to interact with the database.
- Seeded the database with initial data.

### Backend

- Set up an ExpressJS server to handle API requests.
- Created RESTful API endpoints for CRUD operations.

### Frontend

- Created a React application to build the frontend.
- Used Tailwind CSS for minimal, modern, and responsive design.
- Implemented a grid layout to display data in a spreadsheet format.
- Implemented CRUD functionalities and spreadsheet features using React components and event handlers.

### Hosting

- Deployed the application on vercel, making it accessible via a public URL.
  [text](https://spreadsheet-crud-app.vercel.app/)

## Conclusion

By implementing the features mentioned above the project is a fully functional CRUD application. Users can now create, read, update, and delete data in a spreadsheet-like interface, with additional functionalities such as undo/redo, copy/paste, and auto-save.

**Doesn't understand your bonus feature fully you should explain it in better way it's not that clear secondly instead of MYSQL + sequelize ORM i use postgresql + primsa orm.**
