import React, {useState} from "react";
import Products from "./Products";

const App =()=>{
  const [search,setSearch]=useState('');
  const [data,setData]=useState([]);
  const YOUR_APP_ID="adc592ea";
  const YOUR_APP_KEY="cfb034f6e8763dfe2d998be1a447eff3";

  const submithandler = e=>{
  e.preventDefault();
  fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`)
  .then(response=>response.json()).then(
    data=>setData(data.hits))}
  return(
    <div><center>
      <h4>FOOD RECIPE APP:</h4>
      <form onSubmit={submithandler}>
  <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} /><br/>

  <input type="submit" className="btn btn-primary" value="search" /><br/>

      </form>
      {data.length>1 ? <Products data={data}/>:null}
      </center>
    </div>
  )
}

export default App;