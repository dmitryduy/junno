import './App.css';
import {Provider} from "react-redux";
import store from './redux/redux';
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Products from "./components/Products/Products";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header/>
                <Banner/>
                <Products/>
            </div>
        </Provider>
    );
}

export default App;
