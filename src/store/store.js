import { configureStore } from '@reduxjs/toolkit';
import { contactosReduser } from './backend';
import { filterReduser } from './sliceFilter';


export const store = configureStore({
  reducer: {
    contacts: contactosReduser,
    filter: filterReduser,
  },
});


