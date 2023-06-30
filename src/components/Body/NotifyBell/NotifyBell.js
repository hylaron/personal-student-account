import React, { useState } from 'react';
import './notify-bell.css';

const Notify = () => {
const [isOpen, setIsOpen] = useState(false);
const NotifyImage = (
<img className='notify-image' alt="bell icon" src={require('../../../ico/bell.png')} />
);

const notifications = [
'Добро пожаловать',
];

const toggleNotify = () => {
setIsOpen(!isOpen);
};

return (
<div className='notify-container'>
<div className='notify-block' onClick={toggleNotify}>
{NotifyImage}
<div className='notify-num'>{notifications.length}</div>
</div>
{isOpen && (
<ul className='notify-list'>
    <li>Уведомления:</li>
{notifications.map((notification, index) => (
<li key={index}>{notification}</li>
))}
</ul>
)}
</div>
);
};

export default Notify;