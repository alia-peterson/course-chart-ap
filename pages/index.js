export default function Home() {
  return (
      <>
        <h1 className="welcome">Welcome to Course Chart!</h1>
        <section className="instructions">
          <h1 className="instructionsTitle">Instructions</h1>
          <p className="purpose">
            CourseChart is used to track and visualize the tasks assigned to students and an estimate of the time needed to complete them. This allows you to see the breakdown of time on task for each module, and wholistically, each course.
            <br />
            <br />
            This can be used for auditors looking to see if a course meets the standards for accredition. It can also be used for teachers in order to plan module lessons and estimate the needed time contributions for students based on their inputs. It's also a great tool for teaching consultants and subject matter experts (SMEs) to provide insight on course design.
          </p>
          <p className="general">
            To use CourseChart:
          </p>
          <ul>
            <li>click on the "Add a course" tab in the side bar</li>
            <li>input information about the course name, description, credit hours, duration of course, and the institution associated</li>
            <li>click on the "Add Course" button, you will be taken to your new page for that course, which will be updated with composit </li>
            <li>if hovering over a course in the sidebar, a dropdown will appear to the side showing all modules </li>
            <li>click on the "Add a module" in the side bar</li>
            <li>input information about the add Module name, description, and inputs for various tasks assigned during that module</li>
            <li>the total time per each task will be displayed as the task inputs are entered, along with a target hours per week for the course based on credit hours and duration</li>
            <li>click on the "Add Module" button, you will be taken to your new page for that module</li>
            <li>click on the 'See All Courses' or logo in the sidebar to see all courses dashboard</li>
          </ul>
          <style jsx>{`
            .instructions {
              margin: 0 5rem;
            }
            .instructionsTitle {
              text-align: center;
              margin-top: 0;
            }
            li {
              padding: .5rem;
            }
          `}</style>
        </section>
      </>
  )
}
