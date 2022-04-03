import {configureStore} from '@reduxjs/toolkit';
import navigation from './reducers/navigation';

export const store = configureStore({
  reducer: {
    nav: navigation,
  },
});
