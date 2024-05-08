import React, { useState } from 'react';
import './FishboneDiagram.css'; 

const FishboneDiagram = () => {
  
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onItemClick = (item) => {
    debugger;
    if(item == 'Item 1'){
        setSelectedItem("strongly agree");
        setPopupVisible(true);
    } else if(item == 'Item 2'){
        setSelectedItem("agree");
        setPopupVisible(true);
    }
    else if(item == 'Item 3'){
        setSelectedItem("disagree");
        setPopupVisible(true);
    }
    else if(item == 'Item 4'){
        setSelectedItem("strongly disAgree");
        setPopupVisible(true);
    }
    else if(item == 'Item 5'){
        setSelectedItem("ok agree");
        setPopupVisible(true);
    }
    else {
        setSelectedItem(`${item} not sure`);
        setPopupVisible(true);
    }
    
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedItem(null);
  };

  return (
    <div className="fishbone-diagram">
      <h2>Fishbone Diagram</h2>
      <div className="categories">
        <Category  items={['Item 1', 'Item 2', 'Item 3']} onItemClick={onItemClick} />
        <hr className='category ' />
        <Category  items={['Item 4', 'Item 5', 'Item 6']} onItemClick={onItemClick} />
      </div>

      {popupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h3>Selected Item</h3>
            <p>{selectedItem}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const Category = ({ items, onItemClick }) => {
  return (
    <div className="category">
      <ul>
        {items.map((item, index) => (<>
          <li key={index} > {item} </li>
          <hr onClick={() => onItemClick(item)} />
          </>
        ))}
      </ul>
    </div>
  );
};

export default FishboneDiagram;
