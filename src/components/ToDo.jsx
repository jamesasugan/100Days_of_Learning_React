import { useState } from "react"

const ToDo = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    
    const handleAddTask = () =>{
        if(newTask.trim() === ""){
            return false;
        }

        setTasks(prev => [...prev, newTask]);
        setNewTask("");
    }
    
    const handleDeleteTask = (taskToDelete) => {
        setTasks(prev => prev.filter(task => task !== taskToDelete));
    }

    return (
        <section className="w-full h-screen flex justify-center gap-20 items-center">
            <div className="bg-gray-300 w-[450px] h-[450px] p-3 rounded-lg">
                <h1 className="font-medium text-lg">Add new to do here:</h1>
                <hr />
                <div className="flex flex-col mt-2">
                    <label htmlFor="task" className="text-lg">Insert new task:</label>
                    <input className="bg-white p-2 rounded" name="task" placeholder="Add here..." type="text" value={newTask} onChange={e => setNewTask(e.target.value)} />  
                    <button type="submit" onClick={handleAddTask} className="bg-green-500 text-medium text-lg p-1 mt-2 rounded text-white hover:bg-green-600 transition duration-75 cursor-pointer">Submit</button>  
                </div>
                
            </div>
            <div className="bg-gray-300 w-[450px] h-[450px] p-3 rounded-lg">
                <h1 className="font-medium text-lg">To Do list</h1>
                <hr />
                {tasks.map((task, index) =>(
                <div key={index} className="flex justify-between mt-2">
                    <span className="text-black text-lg">{task}</span>
                    <button onClick={() => handleDeleteTask(task)} type="submit" className="bg-red-500 p-2 text-white hover:bg-red-600 transition duration-75 rounded cursor-pointer">Delete</button>
                </div>
                
                ))}
            </div>
        </section>
    )
}

export default ToDo