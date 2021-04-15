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

    console.log(newCourse)
  }

  return (
    <form className={styles.form} onSubmit={submitForm}>
      <label htmlFor='institution'>Institution Name: </label>
      <input
        type='text'
        id='institution'
        value={institution}
        onChange={(event) => setInstitution(event.target.value)}
        required
        />

      <label htmlFor='course'>Course Name: </label>
      <input
        type='text'
        id='course'
        value={course}
        onChange={(event) => setCourse(event.target.value)}
        required
        />

      <label htmlFor='hours'>Credit Hours: </label>
      <input
        type='number'
        id='hours'
        value={hours}
        onChange={(event) => setHours(event.target.value)}
        required
        />

      <label htmlFor='length'>Course Length in Weeks: </label>
      <input
        type='number'
        id='length'
        value={length}
        onChange={(event) => setLength(event.target.value)}
        required
        />

      <button type='submit'>Submit</button>
    </form>
  )
}
