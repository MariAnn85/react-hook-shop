
import React, { useState } from 'react';
import './Product.css';
//Քանի որ total-ը այս օրինակում գինն է ապա այն միշտ կունենա երկու տասնորդական տեղ։ Օգտագործենք toLocaleString մեթոդը total-ը թվից տասնորդական թվերով երկու տողի փոխարկելու համար:(from number to a string)։Սահմանենք minimumFractionDigits-ի և  maximumFractionDigits-ի պարամետրերը, որպեսզի  տանք տասնորդական տեղերի հաջորդական քանակը։
const currencyOptions = {
  minimumFractionDigits: 2, 
  maximumFractionDigits: 2, 
  
}

export default function Product() {
//Ստեղծենք մեր առաջին hook-ը հղում անելով  դատարկ մասիվով useState hook-ին, 
  //Այստեղ Cart փոփոխականին վերագրում ենք առաջին արժեքը՝ (the state):Cart-ը կլինի մասիվ որը պարունակում է զամբյուղի մեջ պարունակող ապրանքները։ useState-ին փոխանցելով դատարկ մասիվ որպես արգումենտ մենք  Cart-ին  որպես առաջի արժեք մենք տալիս ենք դատարկ  մասիվ
  //empty state 
  // Cart փոփոխականին լրացնելով մենք նշանակել ենք 
//setCart անունով փոփոխականի update ֆունկցիա
 // setCart-ի օգնությամբ մենք կտեանենք զամբյուղի մեջ փոփոխությունները։
  const [cart, setCart] = useState([]);
  //Որպեսզի պահպանենք ընդհանուր գումարը total-ը սեղծենք վիճակի նոր մաս a new piece of state։ Նշանակենք արժեքը 0 և արժեքը վերագրենք total և setTotal ֆունկցիաներին։
 const [total, setTotal] = useState(0);
 //Ստեղծենք getTotal անունով ֆունկցիան  որը կօգտագործի in-scope total փոփոխականը և կվերադարձնի  տող total-ի  արժեքը երևալու համար
//Օգտագործենք undefined որպես toLocaleString առաջին արգումենտ` լեզվի ստանդարտը պահելու համար
function getTotal() { return total.toLocaleString(undefined, currencyOptions) } 

  return(
    <div className="wrapper">
      <div>
        Shopping Cart: {cart.length} total items.
      </div>
<div>Total: {getTotal()}</div>

      <div className="product"><span role="img" aria-label="ice cream">🍦</span></div>
      <button>Add</button> <button>Remove</button>
    </div>
  )
}
