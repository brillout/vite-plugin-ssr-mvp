import { Counter } from './Counter'
import styles from './test.module.css'

export { Page }

function Page() {
  return (
    <div className={styles.container}>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </div>
  )
}
