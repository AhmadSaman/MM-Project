import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Genre from "./pages/Genre";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>

					<Route path="/Detail/:id">
						<Detail />
					</Route>
					<Route path="/Search">
						<Search />
					</Route>
					<Route path="/Genre">
						<Genre />
					</Route>
					<Route path="*">
						<Page404 />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
