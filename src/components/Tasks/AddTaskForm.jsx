import React, { useState } from 'react'
import editSvg from '../../assets/img/add.svg'

import axios from 'axios'

const AddTaskForm = ({ list, onAddTasks }) => {

   const [visibleForm, setVisibleForm] = useState(false);
   const [inputValue, setInputValue] = useState('');
   const [isLoading, setIsLoading] = useState(false);



   const addTask = () => {
      const obj = {

         listId: list.id,
         text: inputValue,
         completed: false
      }
      setIsLoading(true)
      axios.post('http://localhost:3001/tasks', obj).then(({ data }) => {

         onAddTasks(list.id, data)
         toogleFormVisible()

      }).catch(() => {
         alert('Error')
      }).finally(() => {
         setIsLoading(false)
      })


   }

   const toogleFormVisible = () => {
      setVisibleForm(!visibleForm)
      setInputValue('')
   }

   return (
      <div className="tasks__form">
         {!visibleForm ? <div onClick={toogleFormVisible} className="tasks__form-new">
            {/* <img src={editSvg} alt="edit" /> */}
            <span>Новая задача</span>
         </div> :
            <div className="tasks__form-block">
               <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='field' type="text" placeholder='Текст задачи' />
               <button disabled={isLoading} onClick={addTask} className='button'>{isLoading ? "Добавление" : 'Добавить задачу'}</button>
               <button onClick={toogleFormVisible} className='button button--grey'>Отмена</button>
            </div>}
      </div>
   )
}

export default AddTaskForm
