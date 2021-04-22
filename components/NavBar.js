import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

import { useState } from 'react'
import { useAppContext } from '../context/app-context'

export default function NavBar() {
  const { sharedState, setSharedState} = useAppContext()

  const courses = sharedState.courses.map((course, i) => {

    const modules = course.modules.map((mod, j) => {
      return (
        <Link key={j} href={`/moduleDashboard`}>
          <div 
          className={styles.module}
          key={j} 
          onClick={() => {
                setSharedState({
                  ...sharedState,
                  currentModule: mod.id
                })}}>
            <a>
            </a>
            <a>
              {mod.name}
            </a>
          </div>
        </Link>
      )
    })

    return (
      <div className={styles.navCourses} key={i}>
        <Link href={`/courseDashboard`}>
          <div 
            className={styles.course}
            onClick={() => {
              setSharedState({
                ...sharedState,
                currentCourse: course.id,
              })
            }}
          >
            <a id={i}>
                {course.name}
              </a>
          </div>
        </Link>

        {(sharedState.currentCourse === course.id) &&
        <>

          {modules}

          <Link href='/addModuleForm'>
            <div className={styles.addCourse}>
              <a>+ Add New Module</a>
            </div>
          </Link>
        </>
        }
      </div>
    )
  })

  return (
    <nav className={styles.navbar}>
      <Link href='/' className={styles.homeLogo}>
        <section className={styles.container}>
          <div className={styles.logo}>
            <Image src='/icon.png' alt='Course chart icon' height={50} width={50} />
          </div>
          <h1>CourseChart</h1>
        </section>
      </Link>

      <section className={styles.courseButtons}>
        <Link href='/'>
          <div className={styles.home}>
            <a>How It Works</a>
          </div>
        </Link>

        {courses}
      </section>

      <section className={styles.navButtons}>
        <Link href='/addCourseForm'>
          <div className={styles.courseButtons}>
            <a className='addCourse'>+ Add New Course</a>
          </div>
        </Link>

        <Link href='/contactDevelopers'>
          <a>Contact the Devs</a>
        </Link>
      </section>
    </nav>
  )
}
