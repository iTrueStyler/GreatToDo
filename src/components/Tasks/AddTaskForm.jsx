import React from 'react'
import editSvg from '../../assets/img/add.svg'



const AddTaskForm = () => {
   return (
      <div className="tasks__form">
         <div className="tasks__form-new">
            <img src={editSvg} alt="edit" />
            <span>Новая задача</span>
         </div>
         <div className="tasks__form-block">
            <button className='button'>Добавить задачу</button>
            <button className='button'>Отмена</button>
         </div>
      </div>
   )
}

export default AddTaskForm
