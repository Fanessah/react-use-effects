import { useState ,useEffect} from 'react';
import './App.css';
import SingleCoffee from './SingleCoffee';

function App() { 
  const[ data,setData]=useState([{name: 'Colada',price: '40 cents '}])

  useEffect(() => {
    getCoffee()
  },[])
  

  const getCoffee = () => {
    fetch('https://api.sampleapis.com/coffee/hot')
    .then(response => response.json())
    .then((data) => {setData(data)})
    .catch( (x) => console.error(x) )

  }
  console.log('mydata',data)

  return (
    <div className="App">
      <main>
        <h1> Coffees by sample API </h1>
        <button onClick={() => getCoffee()}> I need my coffee ASAP </button>
        <div className='menu-items'>
          {data.map(item => {
            console.log('each item', item)
          return <SingleCoffee entireObject={item} />
          })}

          {/* <SingleCoffee name='hey there' price='$$$' description="yummy coffee,on a Monday"/>
          <SingleCoffee name='Happy Halloween ' price='lotsofmonies' description="yummy coffee,on a Monday"/>
          <SingleCoffee/>
          <SingleCoffee/>
          <SingleCoffee/>
          <SingleCoffee/> */}



          {/* <div className="menu-items__item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG" 
            alt=""/>
            <div>
              <h3>1. Black American Coffee</h3>
              <p> Black coffee is as simple as it gets with ground c… call black coffee by its proper name: cafe noir</p>
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
}

export default App;
