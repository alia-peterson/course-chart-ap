import React, {useState} from 'react'
import styles from '../styles/addGoalsForm.module.scss'

export default function addGoalsForm() {
  return (
    <form className={styles.goalsForm}>
      <h3>Goals/Recommended Stats per task</h3>

      <div className={styles.fields}>
        <h4>Total Minutes</h4>
        <h4>Input</h4>
        <h4>Time Per Task</h4>
        <h4>Description</h4>
      </div>

      <div className={styles.goal}>
        <div className={styles.total}>
          <p className={styles.totalNum}>0</p>
          <p className={styles.type}>Reading</p>
        </div>
        <p># of Pages:</p>
        <div className={styles.circle}>
          <input className={styles.goalInput} type='text'></input>
          <label className={styles.goalLabel}>Pages Read</label>
        </div>
        <p className={styles.description}>130 wpm; 10 pages an hour</p>
        <p className={styles.description}>Description</p>
      </div>

      <div className={styles.goal}>
        <div className={styles.total}>
          <p className={styles.totalNum}>0</p>
          <p className={styles.type}>Reading</p>
        </div>
        <p># of Pages:</p>
        <div className={styles.circle}>
          <input className={styles.goalInput} type='text'></input>
          <label className={styles.goalLabel}>Pages Read</label>
        </div>
        <p className={styles.description}>130 wpm; 10 pages an hour</p>
        <p className={styles.description}>Description</p>
      </div>

      <div className={styles.goal}>
        <div className={styles.total}>
          <p className={styles.totalNum}>0</p>
          <p className={styles.type}>Reading</p>
        </div>
        <p># of Pages:</p>
        <div className={styles.circle}>
          <input className={styles.goalInput} type='text'></input>
          <label className={styles.goalLabel}>Pages Read</label>
        </div>
        <p className={styles.description}>130 wpm; 10 pages an hour</p>
        <p className={styles.description}>Description</p>
      </div>

      <div className={styles.goal}>
        <div className={styles.total}>
          <p className={styles.totalNum}>0</p>
          <p className={styles.type}>Reading</p>
        </div>
        <p># of Pages:</p>
        <div className={styles.circle}>
          <input className={styles.goalInput} type='text'></input>
          <label className={styles.goalLabel}>Pages Read</label>
        </div>
        <p className={styles.description}>130 wpm; 10 pages an hour</p>
        <p className={styles.description}>Description</p>
      </div>

      <div className={styles.goal}>
        <div className={styles.total}>
          <p className={styles.totalNum}>0</p>
          <p className={styles.type}>Reading</p>
        </div>
        <p># of Pages:</p>
        <div className={styles.circle}>
          <input className={styles.goalInput} type='text'></input>
          <label className={styles.goalLabel}>Pages Read</label>
        </div>
        <p className={styles.description}>130 wpm; 10 pages an hour</p>
        <p className={styles.description}>Description</p>
      </div>
    
    </form>
  )
}
