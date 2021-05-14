# CourseChart

Sometimes you have to xcel: at CourseChart, we help you excell. 

Educators and those helping them have enough to do without poorly designed tools. Leave behind the stress of course planning, time on task visualization, and unhelpful spreadsheets filled with hours of buggy copy-pasting.

[CourseChart](https://course-chart-ap.vercel.app/) is here to help!

This is a tool for:
- Teachers planning courses
- Course consultatants and SME (subject matter experts)
- Course auditors for industry accredation

This is the capstone, fullstack group project of [Turing School](https://turing.edu/).
## Technologies

This app utilized:
- Next.js using React and JSX
- Chart.js
- ES6 Javascript
- RESTful API, CRUD application
- Go backend with Gorm
- circle.ci continuous integration
- deployed using Vercel
- Git rebase workflow and issue tracking
- PR and issue templates
- a kanban-style project board
- miro wireframing and desing spec
- agile-inspired standups and sprints
- 'client' meetings for UX/UI

Our main focus was working with a backend team to recreate an xcel spreadsheet as a web app and enhance a tangible tool for a client.
## User Flow
To use CourseChart:

- click on the "Add a course" tab in the side bar
- input information about the course name, description, credit hours, duration of  course, and the institution associated
- click on the "Add Course" button, you will be taken to your new page for that course, which will be updated with composit
- if hovering over a course in the sidebar, a dropdown will appear to the side showing all modules
- click on the "Add a module" in the side bar
- input information about the add Module name, description, and inputs for various tasks assigned during that module
- the total time per each task will be displayed as the task inputs are entered, along with a target hours per week for the course based on credit hours and duration
- click on the "Add Module" button, you will be taken to your new page for that module
- click on the 'See All Courses' or logo in the sidebar to see all courses dashboard
## Set Up 
In order to contribute, test, or run files locally please follow these instructions: 
- Clone Down Repo
- `npm install`
- Run `npm run dev` to run app locally
- Cypress Testing: `npx cypress open`

## Contributors

This app was coded on the front end by [Alice Ruppert](https://github.com/srslie), [Cameron Aragon](https://github.com/camaragon), [Lucas Merchant](https://github.com/lbmerchant93), [Alia Peterson](https://github.com/alia-peterson). Our back end team consisted of [Gus Cunningham](https://github.com/cunninghamge) and [Ely Hess](https://github.com/elyhess). 

This app was evaluated using this [rubric](https://mod4.turing.edu/projects/capstone) by Turing School staff, and presented at a Demo Fair to software industry professionals.

## Future Iterations

We completed this project in a tight turnaround, and had more ideas than time. Future features might include (with deference to the needs to the clients and after user interviews):

- login functionality for specific users
- display of course by institution
- overarching metrics for course inputs, etc.
- ability to update activities/multiplier for time totals
  - this project had this in mind and is designed to make this easily implemented
