import logoTodo from "./assets/Logo.svg";

import "./App.css";
import { PlusCircle, Trash } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Task } from "./components/Task/task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [isTaskCompleted, setIsTaskCompleted] = useState(false); 

  return (
    <>
      <div className=" h-screen flex flex-col">
        <header className="bg-gray-700 h-64 flex justify-center items-center">
          <div className="h-10">
            <img src={logoTodo} alt="Logo" />
          </div>
        </header>
        <section className="bg-gray-600 flex-grow flex-col flex ">
          <div className="flex-col mt-[-20px] items-center flex ">
            <div className="flex-row justify-center items-center flex  w-2/4">
              <input
                type="text"
                className="bg-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-gray-300"
                placeholder="Adicione uma nova tarefa"
                onChange={(event: any) => {
                  setTaskTitle(event.target.value);
                }}
              ></input>

              <button
                type="button"
                className="text-center inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 ml-2 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => {
                  alert("hello");
                }}
              >
                Criar
                <PlusCircle size={20} className="ml-2" />
              </button>
            </div>

            <div className="flex-row inline-flex justify-between mt-10 w-2/4 mb-4">
              <div className="flex-row inline-flex items-center w-2/4">
                <p className="text-blue-500 font-bold mr-2">Tarefas criadas</p>
                <span className="bg-gray-300 text-white text-xs font-medium  px-2.5 py-0.5 rounded-full ">
                  5
                </span>
              </div>
              <div className="flex-row inline-flex items-center justify-end w-2/4">
                <p className="text-purple-purple font-bold mr-2">Concluídas</p>
                <span className="bg-gray-300 text-white text-xs font-medium  px-2.5 py-0.5 rounded-full ">
                  2 de 5
                </span>
              </div>
            </div>

            <div className="flex-col items-center flex  w-2/4">
              {tasks.map((task: any, index: number) => {
                return (
                  <>
                    <div key={index} className="h-[72px] p-4 rounded-lg bg-gray-500 flex-row inline-flex items-center w-full justify-between">
                      <div className="flex-row inline-flex items-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-5 h-5 mr-2 text-purple-dark bg-gray-500 border-blue-500 rounded-xl focus:ring-purple-purple focus:ring-3 ring-blue-500"
                          onChange={() => {
                            setIsTaskCompleted(!isTaskCompleted);
                          }}
                        />

                        <p
                          className="text-gray-100"
                          style={{
                            textDecoration: `${
                              isTaskCompleted ? "line-through" : ""
                            }`,
                            color: `${isTaskCompleted ? "#808080" : "#F2F2F2"}`,
                          }}
                        >
                          Integer urna interdum massa libero auctor neque turpis
                          turpis semper. Duis vel sed fames integer.{" "}
                        </p>
                      </div>
                      <div className="">
                        <Trash size={24} className="text-gray-300" />
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
