
import './App.css';
import Shop from './Component/Shop/Shop';

function App() {
  return (
    <div className="App">
      <h1 style={{paddingTop:'30px'}}>Fruit Bazar</h1>
      <Shop></Shop>
       <div>
         <h3>How React Work?</h3>
         <p>Behind the scene React work by Diff algorithm .Diff algorithm <br/>
         helps to find the difference between two inputs.Here react compare <br />
         virtural Dom and Real Dom and find the differnce by the help of diff algorithm <br />
         .And where need to change react change the virtual Dom .
         </p>
         <h3>Difference between props and state?</h3>
         <p>
         <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Props</th>
      <th scope="col">state</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data can be passed from one component to another</td>
      <td>Data passed with in the component only</td>
    </tr>
    
    <tr>
      <td>Can not be modified</td>
      <td>Can be modified</td>
    </tr>
    
    <tr>
      <td>Props can be used with state and functional component</td>
      <td>State can be used with only state/class component</td>
    </tr>
    
    <tr>
      <td>Props are Read only</td>
      <td>States are read and write</td>
    </tr>
    
    
  </tbody>
</table>
         </p>
       </div>
    </div>
  );
}

export default App;
