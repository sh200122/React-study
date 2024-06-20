import {useState} from "react"
import { nanoid } from "nanoid";
import Todo from "./component/Todo";
import Form from "./component/Form";
import FilterButton from "./component/FilterButton";
function App(props) {
  const [tasks,setTasks]=useState(props.tasks)

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // 如果此任务与编辑的任务具有相同的 ID
      if (id === task.id) {
        // 使用对象扩展来创建一个新对象
        // 其“completed”属性已被反转
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    // 调用setTasks()这个新数组来更新我们的状态。
    setTasks(updatedTasks);
  }
  
  function deleteTask(id){
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  const taskList=tasks?.map((task)=>
  <Todo 
  id={task.id} 
  name={task.name} 
  completed={task.completed}
  // 应该传递不同的 key 给任何使用迭代方式渲染的东西,不然会报错
  key={task.id}
  toggleTaskCompleted={toggleTaskCompleted}
  deleteTask={deleteTask}
  />)

  function addTask(name){
    const newTask={id:`todo-${nanoid}`,name,completed:false}
    setTasks([...tasks,newTask])
  }

  const tasksNoun=taskList.length!==1?"tasks":"task"
  const headingText=`${taskList.length} ${tasksNoun} remaining`
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      {/* 使用组件 */}
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        {/* 使用组件 */}
        <FilterButton/>
        <FilterButton/>
        <FilterButton/>
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul 
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
