import { combineReducers } from 'redux';
// import { sessionReducer } from 'redux-react-session';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import AuthReducer from './authReducer';
import PointsReducer from './pointsReducer';
import TimeReducer from './timeReducer';

const rootPersistConfig = {
  key: 'root',
  storage,
};

const authPersistConfig = {
  key: 'auth',
  storage,
};

const pointsPersistConfig = {
  key: 'points',
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, AuthReducer),
  points: persistReducer(pointsPersistConfig, PointsReducer),
  time: TimeReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
