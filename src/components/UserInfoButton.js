import React, { useState } from 'react';
import './UserInfoButton.css';

const UserInfoButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState('Martin');
  const [email, setEmail] = useState('martin.martinovski@martinlandija.com');
  const [age, setAge] = useState(5);
  const [image, setImage] = useState('');

  const handleClick = () => {
    setShowPopup(!showPopup);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleImageChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="user-info-button-container">
      <button className="user-info-button" onClick={handleClick}>
        O uporabniku
      </button>
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <div className="popup-header">
              <h3>Uredi informacije o uporabniku</h3>
              <button className="popup-close" onClick={handleClick}>
                X
              </button>
            </div>
            <div className="popup-content">
              <div>
                <label>Ime:</label>
                <input type="text" value={name} onChange={handleNameChange} />
              </div>
              <div>
                <label>E-pošta:</label>
                <input type="email" value={email} onChange={handleEmailChange} />
              </div>
              <div>
                <label>Starost:</label>
                <input type="number" value={age} onChange={handleAgeChange} />
              </div>
              <div>
                <label>Slika:</label>
                <input type="file" onChange={handleImageChange} />
              </div>
              <div>
                {image && <img src={image} alt="User" width="400" />}
              </div>
              <div className="popup-actions">
                <button onClick={handleClick}>Prekliči</button>
                <button>Shrani</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfoButton;
