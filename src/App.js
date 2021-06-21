import './App.css';
import './assets/myStyles.css';
import TopHeader from "./components/TopHeader/TopHeader";
import {Provider} from "react-redux";
import store from './redux/redux';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <TopHeader/>
            </div>
        </Provider>
    );
}

export default App;
