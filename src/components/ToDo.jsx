import { useState } from "react"

const ToDo = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [addMessage, setAddMessage] = useState("");
    const [deleteMessage, setDeleteMessage] = useState("");
    const [editTask, setEditTask] = useState(null);
    const [editedTaskValue, setEditedTaskValue] = useState("");
    const [editMessage, setEditMessage] = useState({text: "", type: ""});
    
    const handleAddTask = () =>{
        if(newTask.trim() === ""){
            setAddMessage("Please type in the input below.");
            setTimeout(() => setAddMessage(""), 3000);
            return;
        }
        if(tasks.some(task => task.trim().toLowerCase() === newTask.trim().toLowerCase())){
            setAddMessage("Task already exists.");
            setTimeout(() => setAddMessage(""), 3000);
            return;
        }

        setTasks(prev => [...prev, newTask]);
        setNewTask("");
    }

    const handleSaveEdit = () => {
        if (editedTaskValue.trim() === "") {
            setEditMessage({text: "Task cannot be empty.", type: "error"});
            setTimeout(() => setEditMessage({text: "", type: ""}), 3000);
            return;
        }

        if (
            editedTaskValue.trim().toLowerCase() !== editTask.trim().toLowerCase() &&
            tasks.some(task => task.trim().toLowerCase() === editedTaskValue.trim().toLowerCase())
        ) {
            setEditMessage({text: "Task already exists.", type: "error"});
            setTimeout(() => setEditMessage({text: "", type: ""}), 3000);
            return;
        }

        setTasks(prev =>
            prev.map(task =>
            task === editTask ? editedTaskValue : task
            )
        );

        setEditTask(null);
        setEditedTaskValue("");
        setEditMessage({text: "Task updated successfully!", type: "success"});
        setTimeout(() => setEditMessage({text: "", type: ""}), 3000);
    };

    
    const handleDeleteTask = (taskToDelete) => {
        setTasks(prev => prev.filter(task => task !== taskToDelete));

        setDeleteMessage("Task Deleted.")
        setTimeout(() => setDeleteMessage(""), 3000);
    }

    return (
        <section className="w-full h-screen flex justify-center gap-20 items-center">
            <div className="bg-gray-300 w-[450px] h-[450px] p-3 rounded-lg">
                <h1 className="font-medium text-lg">Add new to do here:</h1>
                <hr />
                <div className="flex flex-col mt-2">
                    <label htmlFor="task" className="text-lg">Insert new task:</label>
                    <input className="bg-white p-2 rounded" name="task" placeholder="Add here..." type="text" value={newTask} onChange={e => setNewTask(e.target.value)} />  
                    <p className="font-medium text-red-500">{addMessage}</p>
                    <button type="button" onClick={handleAddTask} className="bg-green-500 text-medium text-lg p-1 mt-2 rounded text-white hover:bg-green-600 transition duration-75 cursor-pointer">Submit</button>  
                </div>
                
            </div>
            <div className="bg-gray-300 w-[450px] h-[450px] p-3 rounded-lg">
                <h1 className="font-medium text-lg">To Do list</h1>
                <hr />
                {tasks.map((task, index) =>(
                <div key={index} className="flex justify-between mt-2">
                    <span className="text-black text-lg">{task}</span>
                    <div className="space-x-2">
                        <button onClick={() =>{
                            setEditTask(task);
                            setEditedTaskValue(task);
                        }} className="bg-blue-500 p-2 text-white hover:bg-blue-600 transition duration-75 rounded cursor-pointer">Edit</button>
                        <button onClick={() => handleDeleteTask(task)} type="button" className="bg-red-500 p-2 text-white hover:bg-red-600 transition duration-75 rounded cursor-pointer">Delete</button>
                    </div>
                </div>
                
                ))}
                {editTask && (
                    <div className="space-y-1 mt-2 flex flex-col">
                        <label htmlFor="edit">Edit your task below:</label>
                        <input className="bg-white p-2 rounded" type="text" placeholder="Edit your task here..." name="edit" value={editedTaskValue} onChange={(e) => setEditedTaskValue(e.target.value)} />
                        
                        <div className="mt-1 space-x-1">
                            <button onClick={handleSaveEdit} type="button" className="bg-blue-500 p-2 text-white rounded hover:bg-blue-600 transition duration-75 cursor-pointer">Save</button>
                            <button onClick={() =>{
                                setEditTask(null);
                                setEditedTaskValue("");
                            }} className="bg-red-500 p-2 rounded text-white hover:bg-red-600 transition duration-75 cursor-pointer">Cancel</button>
                        </div>
                        
                    </div>
                )}
                {editMessage.text && (
                    <p className={`font-medium text-lg ${editMessage.type === "error" ? "text-red-500" : "text-blue-500"}`}>{editMessage.text}</p>
                )}
                {deleteMessage && <p className="text-lg text-green-500">{deleteMessage}</p>}
            </div>
        </section>
    )
}

export default ToDo