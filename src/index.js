import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
import App from "./components/Main";
import BgShapes from "./components/Main/BgShapes";
import { Normalize } from 'styled-normalize'
import GlobalStyles from './styles';

ReactDOM.render(
	<>
		<Provider store={store}>
			<Normalize />
			<GlobalStyles />
			<BgShapes />
			<App />
		</Provider>
	</>, document.getElementById('root'));