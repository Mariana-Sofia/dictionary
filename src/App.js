import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Dictionary</h1>
          <i className="sentence">dic·​tio·​nary | \ ˈdik-shə-ˌner-ē</i>
        </div>
        
          <div className="row">
              <form>
                <input type="text" class="form-control" placeholder="Search..."></input>
                <button type="submit" class ="btn btn-primary" >🔎</button>
              </form>
          </div>
        
      </div>
    </div>
  );
}

export default App;
