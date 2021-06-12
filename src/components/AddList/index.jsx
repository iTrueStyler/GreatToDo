import React, { useState } from 'react'
import List from '../List'

import './AddList.scss'
import Badge from '../Badge'
import closeSvg from "../../assets/img/close.svg";

const AddButtonList = ({ colors, onAdd }) => {

   const [visiblePopup, setvisiblePopup] = useState(false);
   const [selectedColor, selectColor] = useState(colors[0].id);
   const [inputValue, setInputValue] = useState('');

   const addList = () => {
      if (!inputValue) {
         alert('Введите название списка');
         return;
      }
      const color = colors.filter(c => c.id === selectedColor)[0].name;
      onAdd({
         id: Math.random(), name: inputValue, color: color
      });
      setvisiblePopup(false);
      setInputValue('');
      selectColor(colors[0].id);
   }






   return (
      <div className='add-list'>
         <List onClick={() => { setvisiblePopup(true) }} items={[
            {
               className: 'list__add-button',
               icon: <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
               ,
               name: 'Добавить список'
            }
         ]}
         />
         {visiblePopup && <div className='add-list__popup'>
            <img onClick={() => { setvisiblePopup(false) }} className='add-list__popup-close-btn' src={closeSvg} alt="CloseButton" />
            <input value={inputValue} onChange={(e) => {
               setInputValue(e.target.value)
            }} className='field' type="text" placeholder='Название списка' />
            <div className='add-list__popup-colors'>
               {colors.map(color => <Badge className={selectedColor === color.id && 'active'} onClick={() => { selectColor(color.id) }} key={color.id} color={color.name} />)}
            </div>
            <button onClick={addList} className='button'>Добавить</button>
         </div>}
         {/* если visible popup = true ==> отобрази разметку справа от него */}
      </div >
   )
}

export default AddButtonList;
