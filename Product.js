
import React, { useReducer, useState } from 'react';
import './Product.css';
//Քանի որ total-ը այս օրինակում գինն է ապա այն միշտ կունենա երկու տասնորդական տեղ։ Օգտագործենք toLocaleString մեթոդը total-ը թվից տասնորդական թվերով երկու տողի փոխարկելու համար:(from number to a string)։Սահմանենք minimumFractionDigits-ի և  maximumFractionDigits-ի պարամետրերը, որպեսզի  տանք տասնորդական տեղերի հաջորդական քանակը։
const currencyOptions = {
  minimumFractionDigits: 2, 
  maximumFractionDigits: 2, 
  
}
 //Ստեղծենք getTotal անունով ֆունկցիան  որը կօգտագործի in-scope total փոփոխականը և կվերադարձնի  տող total-ի  արժեքը երևալու համար
//Օգտագործենք undefined որպես toLocaleString առաջին արգումենտ` լեզվի ստանդարտը պահելու համար
function getTotal(cart) { const total = cart.reduce((totalCost, item) => totalCost + item.price, 0); return total.toLocaleString(undefined, currencyOptions) } 

  //
  const products = [
    {
      emoji:'🍦',
      name: 'ice cream',
      price: '5'
    },
{
      emoji:'🍦',
      name: 'donuts',
      price: '2.5'
    },
    {
      emoji:'🍦',
      name: 'waterlemon',
      price: '4'
    },
    }
    ]
function cartReducer(state, action) { switch(action.type) { case 'add': return [...state, action.product]; case 'remove': const productIndex = state.findIndex(item => item.name === action.product.name); if(productIndex < 0) { return state; } const update = [...state]; update.splice(productIndex, 1) return update default: return state; } }
function totalReducer(state, action) { if(action.type === 'add') { return state + action.price; } return state - action.price }
export default function Product() {
//Ստեղծենք մեր առաջին hook-ը հղում անելով  դատարկ մասիվով useState hook-ին, 
  //Այստեղ Cart փոփոխականին վերագրում ենք առաջին արժեքը՝ (the state):Cart-ը կլինի մասիվ որը պարունակում է զամբյուղի մեջ պարունակող ապրանքները։ useState-ին փոխանցելով դատարկ մասիվ որպես արգումենտ մենք  Cart-ին  որպես առաջի արժեք մենք տալիս ենք դատարկ  մասիվ
  //empty state 
  // Cart փոփոխականին լրացնելով մենք նշանակել ենք 
//setCart անունով փոփոխականի update ֆունկցիա
 // setCart-ի օգնությամբ մենք կտեանենք զամբյուղի մեջ փոփոխությունները։
  //const [cart, setCart] = useReducer(cartReducer, []);
  //Որպեսզի պահպանենք ընդհանուր գումարը total-ը սեղծենք վիճակի նոր մաս a new piece of state։ Նշանակենք արժեքը 0 և արժեքը վերագրենք total և setTotal ֆունկցիաներին։
 //const [total, setTotal] = useReducer(totalReducer, 0);
const [cart, setCart] = useReducer(cartReducer, []);
 //Ստեղծենք ֆունկցիա,որպեսզի ավելացնենք ապրանքը զամբյուղի մեջ ևթարմացնենք ապրանքների ընդհանուր գումարը և ավելացնի այդ ֆունկցիան  Add button-ին
function add(product) { setCart({ product, type: 'add' }); } function remove(product) { setCart({ product, type: 'remove' }); }


  return(
    <div className="wrapper">
      <div>
        Shopping Cart: {cart.length} total items.
      </div>
<div>Total: {getTotal(cart)}</div>
<div>
{products.map(product=>(
<div key={product.name}>

      <div className="product"><span role="img" aria-label="ice cream">🍦</span></div>
      <button onClick={()=>add(product)}>Add</button> 
      //Ստեղծենք ֆունկցիա արժեքը ջնջելու համար     նշելով զամբյուղի արժեքը 0
      <button onClick={()=> remove(product)}>Remove</button>
    </div>
    ))}
    </div>
  )
}