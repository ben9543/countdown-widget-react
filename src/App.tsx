import "./index.css";
import CountDown from "./components/CountDown";

const D_DAY = "03/24/2021";
const URL = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80";

function App() {
  return (
    <div className="App" style={{height:"100vh", width: "100%", backgroundImage: `url("${URL}")`}}>
        <div style={{height: "100vh", width:"100%", display:"grid", placeItems:"center"}}>
          <h1>BeachHacks 6.0</h1>
          <CountDown 
            dDay={D_DAY} 
            bgColor={"transparent"} 
            numberBgColor={"transparent"} 
            borderColor={"white"}
            />
          <h1>Footer</h1>
        </div>
    </div>
  );
}

export default App;
