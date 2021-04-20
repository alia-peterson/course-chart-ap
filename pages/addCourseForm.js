import { useState } from 'react'
import { getData, postData } from '../context/apiCalls'
import { useAppContext } from '../context/app-context'

import findGoal from '../utilities/courseGoal'
import styles from '../styles/CourseForm.module.scss'

export default function addCourseForm() {
  const { sharedState, setSharedState, hasBeenUpdated, setHasBeenUpdated  } = useAppContext()
  const [institution, setInstitution] = useState('')
  const [course, setCourse] = useState('')
  const [hours, setHours] = useState('')
  const [length, setLength] = useState('')
  let errorMessage = '' // why isn't this error message updating???

  const handleSubmit = (event) => {
    event.preventDefault()

    if (hours === '' || length === '') {
      errorMessage = 'Please fill out all fields of form.'

      setTimeout(() => {
        errorMessage = ''
      }, 1000)

    } else {
      submitForm()
    }
  }

  const submitForm = () => {
    const goal = findGoal(hours, length)
    const newCourse = {
      name: course,
      institution: institution,
      creditHours: parseInt(hours),
      length: parseInt(length),
      goal: goal
    }

    postCourse(newCourse)
  }

  const postCourse = async (postBody) => {
    let url = 'https://course-chart-be.herokuapp.com/courses'
    const response = await postData(url, postBody)

    if (response.message !== 'Course created successfully') {
      return alert('Sorry, there was an error adding your course.')

    } else {
      setHasBeenUpdated(!hasBeenUpdated)
      const newCourseIndex = sharedState.courses.length - 1
      const newCourseId = sharedState.courses[newCourseIndex].id
      setSharedState({...sharedState, currentCourse: newCourseId})
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>

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

      <div className={styles.error}>
        <p>{errorMessage}</p>
      </div>
      <button type='submit' className={styles.button}>Submit</button>
    </form>
  )
}
