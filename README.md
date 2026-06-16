# To-Do-List

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and implemented as a fully operational web application for managing "to-do" lists using React and React Router for navigation.

Link: [https://github.com/atchakounte/to-do-list](https://github.com/atchakounte/to-do-list)

2. The app contains two views: /home and /contact
3. When a user navigates to /home, they are presented with a view that:

- Displays a list of the todo items
- Displays a form (text input and submit button) that allows users to add a new item to the list
- Offers a way for a task to be marked as "completed" and clearly indicates this status visually (e.g. strike-through effect)
- Offers a way for a task to be removed from the list
- Offers a way to view either
  - all todos
  - completed todos
  - incomplete todos
- When todos are added/updated/marked as complete, these changes should immediately be reflected in your internal state

4. When a user navigates to /contact, they are presented with a view that:

- Displays a contact form that displays the following fields - first name field - last name field - email field - comments field
  Renders a the form as a controlled component such that after entering text into any of the fields, the form's state has changed

## list of container and presentational components:

- ContactForm // Contact form component used for contact page
- Navbar // horizantal nav bar compoent
- TaskForm // Task form component to get new task
- TasksContainer // Task Container component to display tasks
- ToDoListTask // ToDoListTask coponent to render task content

- Completed // presentation page component to display completed tasks
- Contact // prensentation page component for contact page form
- Home // presentation page for default home page
- Incomplete // presentation page coponent to display incomplete tasks

## User stories

AS A user
I WANT TO access the webapp
SO THAT I can manage daily tasks

AS A user
I WANT TO access the webapp
SO THAT I can oraganize and prioritze tasks

AS A user
I WANT TO break down a main task into smaller subtasks.

AS A user
I WANT TO access the App to create reminders for important dates.

## TODO

- Add css to navbar component
- Provide better spacing in between navbar items
- Add logic to better display complete/incomplete task
- Add css to contact form
- Add push notification feature to remind user via email of incomplete tasks
