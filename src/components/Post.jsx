import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';


// estado - variaveis que eu quero que o componente monitore
export function Post({author, publishedAt, content}){
    const [comments, setComments] = useState([
        'Post muito bacana hein!',
    ])//setComments -  o react é avisado das alterações

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })
    const publishedDateRelativeNow = formatDistanceToNow(publishedAt,{
        locale: ptBR,
        addSuffix: true
    })
    // const publishedDateFormated = new Intl.DateTimeFormat('pt-BR',{
    //     day: '2-digit',
    //     month: 'long',
    //     hour: '2-digit',
    //     minute: '2-digit'
    // }).format(publishedAt);

    function handleCreateNewComment(){
        event.preventDefault()

        // const newCommentText = event.target.comment.value;
       
        setComments([//passa qual o novo valor
           ...comments,
           newCommentText
        ])
        setNewCommentText('');
    }
    function handleNewCommentChange(){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value)
    }
    function deleteComment(commentToDelete){
        /* imutabilidade -> as coisas não sofrem mutação - 
           nunca se altera o valor de uma variavel na memoria
           nos criamos um novo espaço na memoria */

           const commentsWithoutDeletedOne = comments.filter(comment=>{
                return comment != commentToDelete;
           })

           setComments(commentsWithoutDeletedOne);
    }
    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    var isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                {/* atributos do html ficam em camel case  */}
                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
                   {publishedDateRelativeNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line =>{
                    if(line.type == 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    }else if(line.type == 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    name="comment" 
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>
            <div className={styles.commentList}>
            {comments.map(comment =>{
                return (
                        <Comment 
                            key={comment} 
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                )
            })}
            </div>
        </article>
    )

}

// export default Post

//Default exports vs named Exports
//Default exports - vc pode dar o nome que quiser na hora de importar o componente
// named Exports - precisa ter o mesmo nome na importação, entre chaves