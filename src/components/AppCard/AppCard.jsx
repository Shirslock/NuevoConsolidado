import React from 'react';
import { Heart, Info } from 'lucide-react';
import './AppCard.css';

const AppCard = ({ icon, title, onClick, isFavorite, onToggleFavorite }) => {
  return (
    <div className="app-card" onClick={onClick}>
      <div className="card-icons">
        <div className="icon-circle">
          <Info size={14} color="#666" />
        </div>
        <div
          className="icon-circle"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
        >
          <Heart
            size={14}
            color={isFavorite ? '#e74c3c' : '#666'}
            fill={isFavorite ? '#e74c3c' : 'none'}
          />
        </div>
      </div>

      <div className="card-icon">{icon}</div>

      <div className="card-title">{title}</div>
    </div>
  );
};

export default AppCard;