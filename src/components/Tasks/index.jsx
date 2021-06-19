import React from 'react'
import axios from 'axios'

import './Tasks.scss'
import editIcon from "../../assets/img/edit.svg";
import AddTaskForm from './AddTaskForm'
import Task from './Task'

const Tasks = ({ list, onEditTitle, onAddTasks, withoutEmpty, onRemoveTask, onEditTask, onCompleteTask }) => {


   const editTitle = () => {
      const newTitle = window.prompt('Название списка', list.name)
      if (newTitle) {
         onEditTitle(list.id, newTitle)
         axios.patch('http://localhost:3001/lists/' + list.id, {
            name: newTitle
         }).catch(() => {
            alert('qq')
         })
      }
   }




   return (
      <div className='tasks'>

         <h2 style={{ color: list.color.hex }} className='tasks__title'>
            {list.name}
            <img src={editIcon} alt="EditCIon" onClick={editTitle} />
         </h2>

         <div className='tasks__items'>

            {!withoutEmpty && list.tasks && !list.tasks.length && <h2>No tasks</h2>}
            {
               list.tasks && list.tasks.map(task => <Task onComplete={onCompleteTask} list={list} onRemove={onRemoveTask} onEdit={onEditTask} key={task.id} {...task} />)
            }
            <AddTaskForm key={list.id} list={list} onAddTasks={onAddTasks} />
         </div>
      </div >
   )
}

export default Tasks;
