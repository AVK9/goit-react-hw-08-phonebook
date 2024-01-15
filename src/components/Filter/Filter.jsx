import css from './Filter.module.css';
import { Icon } from '../img/Icon';
import { useDispatch } from 'react-redux';

import { useState } from 'react';
import { filterContactAction } from 'store/sliceFilter';
export const Filter = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handInputFilter = e => {
    setValue(e.target.value);
    dispatch(filterContactAction(e.target.value));
  };

  return (
    <div>
      <label htmlFor="Name" className={css.formLabel}>
        Find contacts by name
      </label>
      <div className={css.boxInput}>
        <input
          type="text"
          name="filter"
          value={value}
          onChange={handInputFilter}
          className={css.filterInput}
        />
        <Icon id="search" className={css.iconsInput} />
      </div>
    </div>
  );
};
