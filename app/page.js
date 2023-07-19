import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="bg-slate-500 rounded-md shadow-xl p-8">
        <h1 className="text-xl p-8">Hello!! I am Daniel Casado</h1>
        <p>Website in construction 🏗️</p>
      </div>
    </main>
  )
}
