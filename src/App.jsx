// import Post from './Post';
import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

export function App() {


  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="Betiza Penques" 
            content="blablabla"
          />
          <Post 
            author="Luizinho" 
            content="blublublu"
          />
        </main>
      </div>

    </div>
  )
}

// export default App



