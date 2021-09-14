import './App.css';
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Dictionary</h1>
          <i className="sentence">dic·​tio·​nary | \ ˈdik-shə-ˌner-ē</i>
        </div>
        <div className="formrow">
          <div className="row">

            <Form />
          </div>
        </div>
        <div className="styling">

          <h2>Future</h2>
          <p className="spelling">/ˈfjuːtʃə/</p>



          <p className="noun">Noun</p>
          <ul>
            <li>a period of time following the moment of speaking or writing; time regarded as still to come.
              "we plan on getting married in the near future"</li>
            <li>contracts for assets (especially commodities or shares) bought at agreed prices but delivered and paid for later.</li>
          </ul>
          <p className="adjective">Adjective</p>
          <ul>
            <li>at a later time; going or likely to happen or exist.
              "the needs of future generations"</li>
          </ul>

          <p className="synonyms">Synonyms</p>
          <ul>
            <li>time to come</li>
            <li>time ahead</li>
            <li>what lay/lies ahead</li>
            <li>coming times</li>
          </ul>

          <div className="row">
            <div className="col">
              <img src="./future1.jpg" alt="" />
            </div>
            <div className="col">
              <img src="./future2.jpg" alt="" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <img src="./future3.jpg" class="img-fluid" alt="" />
            </div>
            <div className="col">
              <img src="./future4.jpg" alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
