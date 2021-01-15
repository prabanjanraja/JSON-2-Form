import './App.css';
import { Random2 } from "./welcome";
import { InputDetails } from "./data";

function App() {
  return (
    <div className="App">
      <form>
        <table style={{ margin: "8% auto" }}>
          {
            InputDetails.Attributes.map((data, key) => {
              return (
                <div key={key}>
                  <Random2 Data={data} />
                </div>
              );
            })
          }
        </table>
        <input type="submit" value={InputDetails.ActionDispalyName}>
        </input>
      </form>
    </div>
  );
}

export default App;
