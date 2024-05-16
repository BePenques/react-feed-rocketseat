import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(){
// function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/BePenques.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Betiza Penques</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                {/* atributos do html ficam em camel case  */}
                <time title=" 15 de maio as 08:13"dateTime="2024-05-15 08:13:30">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 {' '}<a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto </a>{' '}
                    <a href="http://">#nlw</a>{' '} 
                    <a href="http://">#rocketseat</a>{' '}
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea name="" id=""
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )

}

// export default Post

//Default exports vs named Exports
//Default exports - vc pode dar o nome que quiser na hora de importar o componente
// named Exports - precisa ter o mesmo nome na importação, entre chaves