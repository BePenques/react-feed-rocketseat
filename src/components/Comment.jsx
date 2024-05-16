import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img className={styles.avatar} src="https://github.com/BePenques.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Betiza Penques</strong>
                            <time title=" 15 de maio as 08:13"dateTime="2024-05-15 08:13:30">Cerca de 30 minutos atras </time>
                        </div>
                        <button title="Deletar Comentário">
                        <Trash size={24}/></button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏 </p>
                </div>
                <footer>
                   <button>
                    <ThumbsUp/>
                    Aplaudir <span>20</span>
                   </button>
                </footer>
            </div>
        </div>
    )
}