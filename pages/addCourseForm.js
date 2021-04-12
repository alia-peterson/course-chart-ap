import styles from '../styles/CourseForm.module.scss'

export default function addCourseForm() {
  return (
    <form className={styles.form}>
      <label htmlFor='institution'>Institution Name: </label>
      <input type='text' id='institution' />

      <label htmlFor='course'>Course Name: </label>
      <input type='text' id='course' />

      <label htmlFor='hours'>Credit Hours: </label>
      <input type='number' id='hours' />

      <label htmlFor='length'>Course Length in Weeks: </label>
      <input type='number' id='length' />
    </form>
  )
}
