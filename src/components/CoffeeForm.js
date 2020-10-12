import React, { useState } from "react";

 function CoffeeForm() {

    const[waterAmount, setWaterAmount] = useState(0)
    const[groundCoffee, setGroundCoffee] = useState(0)
    const[brewedCoffee, setBrewedCoffee] = useState(0)

    const onChange = (e) => {
      var option = document.getElementById("ratio").value;
      if (option ==='1'){
        // setWaterAmount(waterAmount +3)
        setWaterAmount(8)
        setGroundCoffee(8)
        setBrewedCoffee(8)
      }
      if (option ==='2'){
        setWaterAmount(540.64)
        setGroundCoffee(33.79)
        setBrewedCoffee(16)
      }  
      if (option ==='3'){
        setWaterAmount(32)
        setGroundCoffee(32)
        setBrewedCoffee(32)
      }
 
    }

    return (
    <div className="CoffeeApp">

     <h1>Coffee to Water Ratio Calculator</h1>

      <form>
        <h3>Ratio (Coffee : Water)</h3>
        <select onChange={onChange}  className="Input2" id="ratio" name="ratio">
            <option id='a'value="1">1:8</option>
            <option id='b' value="2">1:16</option>
            <option id='c'value="3">1:32</option>   
        </select>

      {/* /////////////////////////////////// */}

        <h3>Water</h3>
        <input
            className="Input"
            type="text"
            name="water"
            value={waterAmount}
            onChange={onChange}
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
            name="ground coffee"
            value={groundCoffee}
            onChange={onChange}
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
            name="brewed"
            value={brewedCoffee}
            onChange={onChange}
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