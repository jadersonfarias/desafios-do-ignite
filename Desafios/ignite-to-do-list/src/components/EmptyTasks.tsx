import styles from './EmptyTasks.module.css'
import list from '../assets/list.svg'

export function EmptyTasks(){
  return(
    <div className={styles.container}>
        <img src={list} alt="lista" />
        <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer
        </p>
    </div>
  )
}