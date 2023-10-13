import React ,{useState}from 'react'
import vegburger from "./image/vegbugger.jpg";
import chickenburger from "./image/chickenbugger.jpg";
import spicybugger from "./image/spicypannerburger.jpg"
import '../Components/Bugger.css';
// const Bugger = () => {
//   return (
//     <div className='bugger'>
//         <div class="col boxx" >

// <img src={chickenburger} alt="cake" class="img-fluid" style={{height:300,width:600}}></img>
//     <h2>chickenbugger</h2>
// <a href="/pizza"> <button type="button" class="btn btn-warning btn-lg"  >AddtoCart</button></a>
// </div>

// <div class="col boxx" >

// <img src={spicybugger} alt="cake" class="img-fluid" style={{height:300,width:600}}></img>
//     <h2>Spicypannerbugger</h2>
// <a href="/pizza"> <button type="button" class="btn btn-warning btn-lg"  >AddtoCart</button></a>
// </div>
//   <div class="col boxx" >

// <img src={vegburger} alt="cake" class="img-fluid" style={{height:300,width:600}}></img>
//     <h2>vegbugger</h2>
// <a href="/pizza"> <button type="button" class="btn btn-warning btn-lg" >AddtoCart</button></a>
// </div>
//     </div>
//   )
// }

// export default Bugger











const Bugger = () => {
  const [items, setItems] = useState([
    { id: 1, name: "chickenbugger", isAdded: false , image:chickenburger},
    { id: 2, name: "Spicypannerbugger", isAdded: false ,image:spicybugger},
    { id: 3, name: "vegburgger", isAdded: false,image:vegburger }
  ]);

  const addToCart = (itemId) => {
    const updatedItems = items.map(item => {
      if (item.id === itemId) {
        return { ...item, isAdded: true };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const removeFromCart = (itemId) => {
    const updatedItems = items.map(item => {
      if (item.id === itemId) {
        return { ...item, isAdded: false };
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <div className='roti'>
      {items.map(item => (
        <div key={item.id} className="col boxx">
          <h1>Rs.100</h1>
          <img src={item.image} alt="cake" className="img-fluid" style={{ height: 300, width: 600 }}></img>
          <h2>{item.name}</h2>
          {item.isAdded ? (
            <div>
              <button type="button" className="btn btn-warning btn-lg">
                Added &#x1F44D;
              </button>
              <button type="button" className="btn btn-danger btn-lg" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ) : (
            <button type="button" className="btn btn-warning btn-lg" onClick={() => addToCart(item.id)}>
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Bugger;