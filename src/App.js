import "./App.css";
import StudentForm from "./component/StudentForm";
import DataTable from "./component/Datapage.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={StudentForm} />
      <Route exact path="/display" component={DataTable} />
    </div>
  );
}

export default App;
