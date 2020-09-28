import React, { useState, useEffect } from 'react';
const axios = require('axios').default;

const WeaponDetail = (props) => {
    const [item, setItem] = useState();
    useEffect(() => {
        axios
        .get(`https://api.osrsbox.com/items`, {
          params: {
            where: {
              id: props.match.params.id,
              duplicate: false
            }
          }
        })
        .then(res => {
          console.log(res.data._items[0])
          setItem(res.data._items[0])
        })
    }, [])
    console.log(props)
    return (
      <>
        <img src={ item === undefined ? '126.gif' : `data:image/png;base64,${item.icon}`} alt={item === undefined ? 'Loading' : item.name} />
        <p>{item === undefined ? 'Loading' : item.name}</p>
        <p>{item === undefined ? 'Loading' : item.examine}</p>
        <a href={item === undefined ? 'Loading' : item.wiki_url}>Wiki</a>
      </>
    );
}
 
export default WeaponDetail;