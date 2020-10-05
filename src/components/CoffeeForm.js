import React, { useState } from "react";

 function CoffeeForm() {

    const[coffee, setCoffe] = useState("1")
    const[water, setWater] = useState("16")

    return (
    <div className="CoffeeApp">
     <h1>Coffee to Water Ratio Calculator</h1>
    {/* <h3>Coffee:{coffee} Water:{water}</h3> */}

    
    
      <form>
        <h3>Ratio (Coffee : Water)</h3>
        <select className="Input2" id="ratio" name="ratio">
            <option value="2">1:16</option>
            <option value="1">1:8</option>
            <option value="3">1.32</option>   
        </select>

      {/* /////////////////////////////////// */}

        <h3>Water</h3>
        <input
              className="Input"
              type="text"
              name="water"
            //   required
              placeholder="540.64"
            //   value={valu}
            //   onChange={onChange}
        />

        <select className="Input2" id="measurement" name="measurement">
          <option  value="millilters">millilters</option>
          <option value="Grams">Grams</option>
          <option value="Ounces">Ounces</option>   
        </select>

      {/* /////////////////////////////////// */}

        <h3>Ground Coffee</h3>
        <input
              className="Input"
              type="text"
              name="water"
            //   required
              placeholder="33.79"
            //   value={valu}
            //   onChange={onChange}
        />

        <select className="Input2" id="measurement" name="measurement">
        <option value="Grams">Grams</option>
          <option  value="millilters">millilters</option>
          <option value="Ounces">Ounces</option>   
        </select>

        {/* /////////////////////////////////// */}

        <h3>Brewed Coffee</h3>
        <input
              className="Input"
              type="text"
              name="water"
            //   required
              placeholder="16"
            //   value={valu}
            //   onChange={onChange}
        />


          <select className="Input2" id="measurement" name="measurement">
          <option value="Ounces">Ounces</option>  
          <option  value="millilters">millilters</option>
          <option value="Grams">Grams</option>
           
        </select>
            
      </form> 
    </div> 
        )
}

export default CoffeeForm;