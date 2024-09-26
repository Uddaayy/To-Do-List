import React, {useState} from 'react'

function Todo(){
    const [tasks,setTasks]=useState(["Eat Breakfast", "Drink Water", "Watch Movies"])
    const [newTask, setNewTask]=useState("")
    function handleInputChange(event){
       setNewTask(event.target.value)    
    }
    function addTask(){
        if(newTask.trim()){
            setTasks(t=>[...t,newTask])
            setNewTask("")
        }
    }
    function deleteTask(index){
        const updatedTasks=tasks.filter((element,i)=> i!=index)
        setTasks(updatedTasks)
    }
    function moveTaskUp(index){
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
          }
    }
    function moveTaskDown(index){
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
          }
    }
    return (<>
    <div className="Todolist">
        <h1>To-Do-List</h1>
        <div>
            <input type="text" 
                    placeholder='Enter a task' 
                    value={newTask}
                    onChange={handleInputChange}/>
            <button className='addbutton' onClick={addTask}>Add</button>
        </div>
        <ol>
            {tasks.map((task,index)=>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className='deletebutton' onClick={()=>deleteTask(index)}>Delete</button>
                        <button className='moveup' onClick={()=>moveTaskUp(index)}>Up</button>
                        <button className='movedown' onClick={()=>moveTaskDown(index)}>Down</button>
                    </li>
            )}
        </ol>
    </div>
    </>)
}
export default Todo