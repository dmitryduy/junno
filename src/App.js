import './App.css';
import {Provider, useSelector} from "react-redux";
import store from './redux/redux';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import {BrowserRouter, Route} from "react-router-dom";
import AboutProduct from "./components/AboutProduct/AboutProduct";
import WishList from "./components/WishList/WishList";

function App() {

    return (
        <div className='container'>
            <BrowserRouter>
                <Provider store={store}>
                    <div className="App">
                        <WishList/>
                        <Route path='/' exact component={Home}/>
                        <Route path='/about/:id'  component={AboutProduct}/>
                    </div>
                </Provider>
            </BrowserRouter>
        </div>

    );
}

export default App;
