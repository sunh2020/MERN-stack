
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Tabs from "./components/Tabs";

function App() {
  const tabItems = [
    {header: "Tab 1", content: "Some 1st content."},
    {header: "Tab 2", content: "Cool 2nd content."}, 
    {header: "Tab 3", content: "Nice 3rd content."},  
  ];
  return (
  <div className="container pt-5">
    <Tabs items={tabItems} />
  </div>    
  );
}

export default App;
