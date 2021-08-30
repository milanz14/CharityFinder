import Routes from "./Routes";
import Navbar from "./Navbar";
import SearchRouteContainer from "./SearchRouteContainer";
import Organizations from "./Organizations";
import "../styles/App.css";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes />
            {/* <SearchRouteContainer /> */}
            <Organizations />
        </div>
    );
}

export default App;
