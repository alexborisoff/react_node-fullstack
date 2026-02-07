import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router'

export const ShoeItem = () => {
  const [shoeItem, setShoeItem] = useState({});
  let {id} = useParams();

  useEffect(()=>{
    axios.get(`http://localhost:3001/shoes/byId/${id}`).then((response)=>{
        setShoeItem(response.data)
    })
  })

  return (
    <main className='shoe_item'>
      <img className='shoe_item_photo' src={shoeItem.photo} alt="Shoe item "/>
      <div className='shoe_item_info'>
        <p className='shoe_item_info_type'>{shoeItem.type}</p>
        <p>{shoeItem.title}</p>
        <p className='shoe_item_info_price'>{shoeItem.price}</p>
      </div>
    </main>
  )
}
