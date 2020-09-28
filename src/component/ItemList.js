import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
const axios = require('axios').default;

const WeaponList = (props) => {
  const [results, setResults] = useState(30);
  const [icons, setIcons] = useState();

  const getIcons = () => {
    let promises = [];
    console.log(results)
    props.items.slice(results-30, results).map(item => {
      promises.push(axios.get(`https://api.osrsbox.com/icons_items?where={ "id": ${item.id} }`))
    })
    Promise.all(promises).then(res => {
      setIcons(res)
    })
  }

  const resultsLeft = () => {
    setResults(results - 30)
  }

  const resultsRight = () => {
    setResults(results + 30)
  }

  useEffect(() => {
    setIcons(undefined)
    getIcons()
  }, [results])

  
  console.log(results-30, results)

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <div>
          <button onClick={resultsLeft}>{'<'}</button><button onClick={resultsRight}>{'>'}</button>
        </div>
        <div>
          {props.items.slice(results-30, results).map((item, i) => {
            //if (item.type !== 'noted'){
              return (
                <Link to={`/item/${item.id}`} key={item.id}>
                  <img src={icons === undefined ? '126.gif' : `data:image/png;base64,${icons[i].data._items[0].icon}`} alt={item.name} />
                </Link>
              );
            //}
          })}
        </div>
        </div>
    );
}
 
export default WeaponList;