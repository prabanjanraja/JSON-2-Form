import './App.css';
import { Random } from "./welcome";
import { Random2 } from "./welcome";
import { InputDetails } from "./data";

function App() {
  return (
    <div className="App">
      Welcome to my demo project
      <Random />
      <form>
        {
          InputDetails.Attributes.map((data, key) => {
            return (
              <div key={key}>
                <Random2 />
              </div>
            );
          })
        }
        <input type="submit" value={InputDetails.ActionDispalyName}>
        </input>
      </form>
    </div>
  );
}

export default App;
