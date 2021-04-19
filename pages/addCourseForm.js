import { useState } from 'react'
import { getData, postData } from '../context/apiCalls'
import findGoal from '../utilities/courseGoal'
import styles from '../styles/CourseForm.module.scss'

export default function addCourseForm() {
  const [institution, setInstitution] = useState('')
  const [course, setCourse] = useState('')
  const [hours, setHours] = useState('')
  const [length, setLength] = useState('')

  const submitForm = (event) => {
    event.preventDefault()
    const goal = findGoal(hours, length)
    console.log(goal);

    const newCourse = {
      name: course,
      institution: institution,
      creditHours: hours,
      length: length,
      goal: goal
    }

    console.log(newCourse);
    // POST new course object to server
  }

  return (
    <form className={styles.form} onSubmit={submitForm}>

      <div className={styles.container}>
        <div className={styles.inner}>
          <label htmlFor='institution'>Institution Name: </label>
          <input
            type='text'
            id='institution'
            className={styles.input}
            value={institution}
            onChange={(event) => setInstitution(event.target.value)}
            required
            />

          <label htmlFor='course'>Course Name: </label>
          <input
            type='text'
            id='course'
            className={styles.input}
            value={course}
            onChange={(event) => setCourse(event.target.value)}
            required
            />
        </div>

        <div className={styles.inner}>
          <label htmlFor='hours'>Credit Hours: </label>
          <select
            onChange={(event) => setHours(event.target.value)}
            className={styles.input}
            id='hours'
            defaultValue='Select Credit Hours'
            required
            >
            <option disabled value='Select Credit Hours'>Select Credit Hours</option>
            <option value='1'>1 Credit</option>
            <option value='2'>2 Credits</option>
            <option value='3'>3 Credits</option>
            <option value='4'>4 Credits</option>
            <option value='5'>5 Credits</option>
          </select>

          <label htmlFor='length'>Course Length in Weeks: </label>
          <select
            onChange={(event) => setLength(event.target.value)}
            className={styles.input}
            id='length'
            defaultValue='Select Course Length'
            required
            >
            <option disabled value='Select Course Length'>Select Course Length</option>
            <option value='4'>4 Weeks</option>
            <option value='5'>5 Weeks</option>
            <option value='7'>7 Weeks</option>
            <option value='7.5'>7.5 Weeks</option>
            <option value='8'>8 Weeks</option>
            <option value='10'>10 Weeks</option>
            <option value='12'>12 Weeks</option>
            <option value='15'>15 Weeks</option>
            <option value='16'>16 Weeks</option>
          </select>
        </div>
      </div>

      <button type='submit' className={styles.button}>Submit</button>
    </form>
  )
}
