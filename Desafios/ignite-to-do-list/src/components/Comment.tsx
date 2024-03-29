import styles from "./Comment.module.css";
import { Trash } from "phosphor-react";




interface props {
  text: string
  id: string
  isComplete: boolean
  onRemoveComment: (id:string, isComplete: boolean) => void
  toggleTaskStatus: ({ id, value }: { id: string; value: boolean }) => void
}

export function Comment({ id ,text, onRemoveComment, toggleTaskStatus, isComplete }: props) {
  function handleDeleteComment() {
    onRemoveComment(id, isComplete)
  }

  function handleTaskToggle() {
    toggleTaskStatus({ id:id, value:!isComplete })
  }
  


  return (
    <section className={styles.container}>
      <div>
        <label htmlFor="checkbox" onClick={handleTaskToggle}>
          <input readOnly type="checkbox" />
          <p>{text}</p>
        </label>
      </div>

      <button className={styles.deleteButton} onClick={handleDeleteComment}>
        <Trash size={22} />
      </button>
    </section>
  );
}
