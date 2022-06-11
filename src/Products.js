import React from "react";

const Products = ({data}) =>{ 
    return(
         <div>
<div className="row">
{data.map(data=>
<div className="col-md-4">
<div class="card" style={{"width":"18rem"}}>
 <img class="card-img-top" src={data.recipe.image} alt="card image cap" />
 <center>
  <h5 class="card-title">{data.recipe.label}</h5>
  <p class="card-text">
  TOTAL AMOUNT OF CALORIES:{data.recipe.calories}
  <a href="#" class="btn btn-primary">  
 BUY
  </a>
 </p>
  </center>  </div>
    </div>

   )

  }
  </div>

  </div>
    )
}

export default Products