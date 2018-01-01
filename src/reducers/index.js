import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import invoice from './invoiceReducer';

const config = {
  key: 'primary',
  storage
}

const rootReducer = combineReducers({
  invoice
})

export default persistReducer(config, rootReducer);
