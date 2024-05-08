import React, { useState, useRef, useEffect } from 'react';
import Fishbone from '@hophiphip/react-fishbone';

const FishboneChart = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const fishboneRef = useRef(null);

  useEffect(() => {
    const fishboneItems = fishboneRef.current?.querySelectorAll('.fishbone-item');
    
    const handleClick = (event) => {
      const text = event.target.innerText;
      setSelectedItem(text);
      setPopupVisible(true);
    };

    if (fishboneItems) {
      fishboneItems.forEach(item => {
        item.addEventListener('click', handleClick);
      });
    }

    return () => {
      if (fishboneItems) {
        fishboneItems.forEach(item => {
          item.removeEventListener('click', handleClick);
        });
      }
    };
  }, []);

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedItem(null);
  };

  return (
    <div style={{ position: "relative", left: "30%", width: "50%" }}>
      <Fishbone
        ref={fishboneRef}
        items={{
          name: "Flaws",
          children: [
            {
              name: "Machines",
              children: [
                { name: "Speed" },
                { name: "Bits" },
                { name: "Sockets" }
              ]
            },
            {
              name: "Personnel",
              children: [
                { name: "Shifts" },
                { name: "Training" },
                { name: "Operators" }
              ]
            },
            {
              name: "Methods",
              children: [
                { name: "Brake" },
                { name: "Angle" },
              ]
            },
            {
              name: "Material",
              children: [
                {
                  name: "Quality",
                  children: [
                    { name: "Delivery" },
                  ]
                },
              ]
            }
          ]
        }}
        wrapperStyle={{
          width: '100%',
          height: 500,
        }}
      />

      {popupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h3>Selected Item: {selectedItem}</h3>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default FishboneChart;
