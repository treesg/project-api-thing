import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import itemsSearch from './items-search.json';
import ItemList from './component/ItemList.js';
import ItemDetail from './component/ItemDetail.js';


function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('rune');
  // let today = new Date()
  // let yesterday = new Date()
  // let lastUpdated = new Date()
  // yesterday.setDate(today.getUTCDate() - 1)
  // lastUpdated.setDate(today.getUTCDate() - 5)
  // console.log(today.getUTCDate())
  // console.log(yesterday.getUTCDate())
  // console.log(lastUpdated.getUTCDate())
  // console.log(lastUpdated.getTime() <= yesterday.getTime()) // Has 24 or more hours passed since the last database update?

  //"name": { "$regex": "run", "$options": "i"} doesn't work
  //`https://api.osrsbox.com/weapons?where={ "name": "Rune scimitar", "duplicate": false }` works
  //`https://api.osrsbox.com/weapons?where={ "equipment.prayer": { "$lt": 0 }, "duplicate": false }` works
  //`https://api.osrsbox.com/weapons?sort=name` works



  useEffect(() => {
    // axios
    // .get(`https://api.osrsbox.com/weapons`, {
    //   params: {
    //     where: {
    //       duplicate: false
    //     }
    //   }
    // })
    // .then(res => {
    //   console.log(res)
    //   console.log(res.data._items)
    //   setItems(res.data._items)
    // })
    //axios.get('https://www.osrsbox.com/osrsbox-db/items-search.json').then(res => console.log(res))
  }, [])

  return (
    <div>
      <Switch>
        <Route exact path="/item/:id" render={(props) => <ItemDetail {...props} item={items} />} />
        <Route exact path="/" render={(props) => <ItemList {...props} items={itemsSearch} search={search} />} />
      </Switch>
    </div>
  );
}

export default App;
