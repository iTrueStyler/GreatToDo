import React from 'react';
import './List.scss';
import classNames from 'classnames';

function List({ items }) {
  return (
    <div>
      <ul className="list">
        {items.map((item,index) => (
          <li key={index} className={classNames(item.classNames,{'active':item.active})}>
            <i>
              {item.icon?item.icon:<i className={`badge badge--${item.color}`}></i>}
            </i>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
