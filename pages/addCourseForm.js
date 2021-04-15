import { useState } from 'react'
import styles from '../styles/CourseForm.module.scss'

export default function addCourseForm() {
  const [institution, setInstitution] = useState('')
  const [course, setCourse] = useState('')
  const [hours, setHours] = useState('')
  const [length, setLength] = useState('')

  const submitForm = (event) => {
    event.preventDefault()

    const newCourse = {
      Id: Date.now(),
      Institution: institution,
      Name: course,
      CreditHours: hours,
      Length: length,
      CreatedAt: Date.now(),
      UpdatedAt: Date.now(),
      Modules: []
    }

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
          <input
            type='number'
            id='hours'
            className={styles.input}
            value={hours}
            onChange={(event) => setHours(event.target.value)}
            required
            />

          <label htmlFor='length'>Course Length in Weeks: </label>
          <input
            type='number'
            id='length'
            className={styles.input}
            value={length}
            onChange={(event) => setLength(event.target.value)}
            required
            />
        </div>
      </div>

      <button type='submit' className={styles.button}>Submit</button>
    </form>
  )
}
