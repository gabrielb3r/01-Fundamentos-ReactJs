import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post title="Carnavrau" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi odit officia animi, esse, commodi eos id quo asperiores nulla dicta natus rem nobis nihil laboriosam similique quos sed ratione quas?" />
          <Post title="Paracatu" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque perspiciatis velit! Dolore deleniti nihil dignissimos itaque? Quia eos eveniet veritatis? Molestiae aperiam ipsum a molestias cupiditate nisi commodi necessitatibus." />
        </main>
      </div>
    </div>
  )
}

export default App  