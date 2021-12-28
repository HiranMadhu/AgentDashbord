import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import 'antd/dist/antd.css';
import Dashboard from './pages/dashboard/dashboard.component';
import Appointments from "./pages/appointment";
import AdminLogin from "./pages/adminLogin";
import ReduxThunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from "./store/root-reducer";
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

function App() {
    const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
    const persistor = persistStore(store);
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter basename="/admin">
                    <Switch>
                        <Route exact path="/">
                            <AdminLogin/>
                        </Route>
                        <Route exact path="/dashboard">
                            <Dashboard/>
                        </Route>
                        <Route exact path="/appointment">
                            <Appointments/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}

export default App
