import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './search-panel.css';
import { translateEng } from '../../Header/HeaderMenu';

const SearchIcon = (
  <img
    className='search-icon'
    src={require('../../../ico/search.png')}
    alt='Иконка поиска'
  />
);

const SearchPanel = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Фильтрация списка по введенному запросу
    const filtered = ['Расписание', 'Успеваемость', 'Приказы', 'Оплата за обучение'].filter(
      (item) => item.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredItems(filtered);
  };

  return (
    <div className='search-block'>
      <input
        className='search-panel'
        type='search'
        id='site-search'
        name='q'
        placeholder='Поиск'
        value={searchQuery}
        onChange={handleSearch}
      />
      {SearchIcon}
      <ul className='search-result'>
        {filteredItems.map((item, index) => (
          <li className='header-menu-link' key={index}>
            <Link to={`/${translateEng(item)}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPanel;
