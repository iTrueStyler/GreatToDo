import React from 'react';
import axios from 'axios';

import './List.scss';
import classNames from 'classnames';
import Badge from '../Badge'
import removeBtn from "../../assets/img/remove.svg";

function List({ items, onClick, isRemovable, onRemove, onClickItem, activeItem }) {

  const removeList = (item) => {
    if (window.confirm('Вы действительно хотите удалить список?')) {
      axios.delete('http://localhost:3001/lists/' + item.id).then(() => {
        onRemove(item.id)
      })

    }
  }
  return (

    <ul onClick={onClick} className="list">
      {items.map((item, index) => (
        <li key={index} className={classNames(item.className, { 'active': item.active ? item.active : activeItem && activeItem.id === item.id })} onClick={onClickItem ? () => onClickItem(item) : null} >
          <i>
            {item.icon ? item.icon : <Badge color={item.color.name || item.color} />}
          </i>
          <span>{item.name}{item.tasks && ` (${item.tasks.length})`}</span>
          {isRemovable && <img onClick={() => removeList(item)} className={"list__remove-icon"} src={removeBtn} alt="Remove" />}
        </li>
      ))
      }
    </ul >

  );
}

export default List;
