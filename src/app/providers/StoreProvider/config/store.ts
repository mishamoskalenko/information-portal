import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entitiess/Counter/model/slice/counterSlice';
import { userReducer } from 'entitiess/User';
import { loginReducer } from 'features/AuthByUsername';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };
    return configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
