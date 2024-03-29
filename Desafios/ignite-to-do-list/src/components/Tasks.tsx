import styles from "./Tasks.module.css";
import { v4 as uuidv4 } from "uuid";
import { PlusCircle } from "phosphor-react";
import { EmptyTasks } from "./EmptyTasks";
import { CounterTasks } from "./CounterTasks";
import { Comment } from "./Comment";
import { useState } from "react";

interface ITask {
  id: string;
  text: string;
  isComplete: boolean;
}

export function Tasks() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputValue, setInputValue] = useState("");

  console.log(tasks);

  function handleAddTask() {
    if (!inputValue) {
      return;
    }

    const newTask: ITask = {
      id: uuidv4(),
      text: inputValue,
      isComplete: false,
    };

    setTasks((state) => [...state, newTask]);
    setInputValue("");
  }

  function deleteComment(id: string, isComplete: boolean) {
    const filteredTasks = tasks.filter(
      (task) => task.id !== id || task.isComplete !== isComplete
    );

  

    if (!confirm("Deseja mesmo apagar essa tarefa?")) {
      return;
    }
    setTasks(filteredTasks);
  }

  function handleToggleTask({ id, value }: { id: string; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: value };
      }

      return { ...task };
    });

    setTasks(updatedTasks);
  }

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isComplete) {
      return prevValue + 1;
    }

    return prevValue;
  }, 0);

  return (
    <div className={styles.tasks}>
      <header className={styles.inputTasks}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />

        <button className={styles.buttonPlus} onClick={handleAddTask}>
          Criar
          <PlusCircle size={19} />
        </button>
      </header>
      <main className={styles.wrapper}>
        <CounterTasks
          tasksCounter={tasks.length}
          checkedTasksCounter={checkedTasksCounter}
        />
        {tasks.length > 0 ? (
          <div>
            {tasks.map((task) => {
              return (
                <Comment
                  key={task.id}
                  text={task.text}
                  isComplete={task.isComplete}
                  onRemoveComment={deleteComment}
                  toggleTaskStatus={handleToggleTask}
                  id={task.id}
                />
              );
            })}
          </div>
        ) : (
          <EmptyTasks />
        )}
      </main>
    </div>
  );
}
