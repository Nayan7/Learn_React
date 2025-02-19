/*
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const dispatch = useDispatch();

const handleAddItem = () => {
    dispatch(addItem('pizza'));
}


const ItemList = ({items}) => {
    return (<div>
        {items.map((item) => (
            <div key={item?.card?.info?.id} className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between'>
                <div className='w-3/12 p-4'> 
                <div className='absolute'>
                <button className='p-2 rounded-lg bg-black text-white shadow-lg'
                onClick = {handleAddItem}>Add +</button>
                </div>
                <img src={CDN_URL + item.card.info.imageId}></img>
                </div>
                <div className='w-9/12'>
                <div className='py-2'>
                    <span>{item.card.info.name}</span>
                    <span> - ₹ {item.card.info.defaultPrice? item.card.info.defaultPrice/100 : item.card.info.price/100}</span>
                </div>
                <p className='text-xs'>{item.card.info.description}</p>
                </div>
            </div>
        ))}
    </div>
    )
}

export default ItemList;
*/

import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 rounded-lg bg-black text-white shadow-lg cursor-pointer"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;