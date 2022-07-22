import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import styles from './App.module.css'
import './global.css'

//author: {avatar_url:"", name:"", role:""}
//publishAt: DateTime
//content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat',
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'jane.design/doctorcare'},
      // {type: 'link', content:'#novoprojeto'},
      // {type: 'link', content:'#nlw'},
      // {type: 'link', content:'#rocketseat'},
    ],
    publishAt: new Date('2022-07-17 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @ Rocketseat',
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'jane.design/doctorcare'},
      // {type: 'link', content:'#novoprojeto'},
      // {type: 'link', content:'#nlw'},
      // {type: 'link', content:'#rocketseat'},
    ],
    publishAt: new Date('2022-07-22 20:30:00'),
  },
]

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post =>{
            return(
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishAt={post.publishAt}
              />
            ) 
          })}
        </main>
      </div>
    </div>
  )
}

export default App