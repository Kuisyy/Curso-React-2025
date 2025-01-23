import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, deleteTask, toggleTaskCompletion, editTask } = useContext(TaskContext);
  const [editingTaskId, setEditingTaskId] = useState(null); // ID de la tarea que está en edición

  const handleEditChange = (taskId, newTitle) => {
    editTask({ id: taskId, title: newTitle }); // Actualizar título directamente
  };

  const handleKeyDown = (e) =>{
    if(e.key==="Enter"){
      setEditingTaskId(null)
    };
    
  } 
  return (
    <div className="p-4 mt-10 bg-gray-300 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Lista de Tareas</h2>
      {tasks.length === 0 && (
        <p className="text-xl text-gray-800">No hay tareas</p>
      )}
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-2 mb-2 bg-white rounded-md shadow-md"
          >
            {/* Si está en modo edición, mostrar un input */}
            {editingTaskId === task.id ? (
              <input
                className="flex-1 px-2 py-1 mr-2 border rounded"
                type="text"
                value={task.title}
                onChange={(e) => handleEditChange(task.id, e.target.value)} // Editar título en tiempo real
                onBlur={() => setEditingTaskId(null)} // Salir del modo edición al perder el foco
                onKeyDown={(e)=> handleKeyDown(e)}
              />
            ) : (
              <span
                className={`flex-1 ${
                  task.completed ? "line-through text-gray-600" : ""
                }`}
              >
                {task.title}
              </span>
            )}

            {/* Botones */}
            <button
              className="px-3 py-1 bg-blue-500 text-white rounded mr-2"
              onClick={() => toggleTaskCompletion(task.id)}
            >
              Completar
            </button>

            <button
              className="px-3 py-1 bg-black text-white rounded mr-2"
              onClick={() => setEditingTaskId(task.id)} // Habilitar el modo edición
            >
              Editar
            </button>

            <button
              className="px-3 py-1 bg-red-500 text-white rounded mr-2"
              onClick={() => deleteTask(task.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
