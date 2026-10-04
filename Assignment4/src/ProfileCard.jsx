import React from 'react';

// ProfileCard component receiving name, imageUrl, and description via props
function ProfileCard(props) {
  return (
    <div className="profile-card">
      <img 
        src={props.imageUrl} 
        alt={props.name} 
        className="profile-img"
      />
      <h3 className="profile-name">{props.name}</h3>
      <p className="profile-desc">{props.description}</p>
    </div>
  );
}

export default ProfileCard;
