import logoTodo from "./assets/Logo.svg";
import "./App.css";
import { ClipboardText, PlusCircle, Trash } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function App() {
  interface Task {
    id: string;
    name: string;
    isComplete: boolean
  }


  const [tasks, setTasks] = useState<Task[]>([]); 
  const [completedTasksCount, setCompletedTasksCount] = useState(0);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [error, setError] = useState(false)

  useEffect(() => {
    setCompletedTasksCount(
      tasks.filter((task) => task.isComplete == true).length
    );
  }, [tasks]);

  function addTask(event: any) {
    event.preventDefault()
    if (newTaskTitle !== "") {
      setError(false)
      const newTask = {
        id: uuidv4(),
        name: newTaskTitle,
        isComplete: false
      }
      const newTaskArray = [...tasks, newTask]
      setNewTaskTitle("")  
      setTasks(newTaskArray)
    } else {
      setError(true)
    }
  
  }

console.log(tasks)


  const handleTaskDeletion = (id: string) =>  {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  function handleCheckboxChange(id: string) {
    const newTasksArray = tasks.map((task: Task) => {
      if (task.id === id) task.isComplete = !task.isComplete;
      return task;
    });
    setTasks(newTasksArray);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-700 h-64 flex justify-center items-center">
        <div className="h-10">
          <img src={logoTodo} alt="Logo" />
        </div>
      </header>
      <section className="bg-gray-600 flex-grow flex-col flex px-4">
        <div className="flex-col mt-[-20px] items-center flex ">
          <form
            onSubmit={addTask}
            className=" flex w-full md:w-2/4"
          >
           
              <div className="flex w-full flex-col ">
                <input
                  type="text"
                  name="taskTitle"
                   value={newTaskTitle}                 
                  onChange={(event) => setNewTaskTitle(event.target.value)}
                  className={`h-14 bg-gray-500 text-white text-sm rounded-lg  block w-full p-2.5 placeholder:text-gray-300 ${
                    error ? "border-red-500" : ""
                  }`}
                  placeholder="Adicione uma nova tarefa"
                />
                {error &&  <span className="text-red-500 text-md mt-2">É necessário um título para a task</span>}
              </div>

              <button
                type="submit"
                className="h-14 text-center inline-flex items-center text-white bg-blue-600 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 ml-2 focus:outline-none dark:focus:ring-blue-800"
              >
                Criar
                <PlusCircle size={20} className="ml-2" />
              </button>
           
          </form>

          <div className="flex-row inline-flex justify-between mt-16 w-full md:w-2/4 mb-4">
            <div className="flex-row inline-flex items-center w-2/4">
              <p className="text-blue-500 font-bold mr-2">Tarefas criadas</p>
              <span className="bg-gray-300 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                {tasks.length}
              </span>
            </div>
            <div className="flex-row inline-flex items-center justify-end w-full md:w-2/4">
              <p className="text-purple-purple font-bold mr-2">Concluídas</p>
              <span className="bg-gray-300 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                {completedTasksCount} de {tasks.length}
              </span>
            </div>
          </div>
          {tasks.length > 0 ? (
            <div className="flex-col items-center flex w-full md:w-2/4">
              {tasks.map((task: Task) => (
                <div
                  key={task.id}
                  className="h-[72px] mb-4 p-4 rounded-lg bg-gray-500 flex-row inline-flex items-center w-full justify-between"
                >
                  <div className="flex-row inline-flex items-center">
                    <input
                      id={`checkbox-${task.id}`}
                      type="checkbox"
                      value=""
                      className="w-5 h-5 mr-2 text-purple-dark bg-gray-500 border-blue-500 rounded-xl focus:ring-purple-purple focus:ring-3 ring-blue-500 cursor-pointer"
                      onChange={() => 
                        handleCheckboxChange(task.id)
                      }
                    />
                    <p
                      className="text-gray-100"
                      style={{
                        textDecoration: `${
                         task.isComplete ? "line-through" : ""
                        }`,
                        color: `${
                          task.isComplete ? "#808080" : "#F2F2F2"
                        }`,
                      }}
                    >
                      {task.name}
                    </p>
                  </div>
                  <div className="">
                    <Trash
                      size={24}
                      className="text-gray-300 cursor-pointer"
                      onClick={() => handleTaskDeletion(task.id)}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex-col items-center flex w-full md:w-2/4 mt-4 text-center">
              <ClipboardText size={56} className="text-gray-300 mb-4" />
              <h2 className="font-bold text-gray-300">
                Você ainda não tem tarefas cadastradas
              </h2>
              <p className="font-normal text-gray-300">
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
