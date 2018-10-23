import { combineReducers } from 'redux';
import librariesReducers from './librariesReducer';
import selectionReducer from './selectionReducer';

export default combineReducers({
  libraries: librariesReducers,
  selectedLibraryId: selectionReducer,
});
