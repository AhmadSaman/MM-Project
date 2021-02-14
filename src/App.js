import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/error">
						<Page404 />
					</Route>
					<Route path="/Detail/:id">
						<Detail />
					</Route>
					<Route path="/Search">
						<Search />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
