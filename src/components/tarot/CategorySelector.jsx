import React from 'react';
import { theme } from '../../styles/theme';
import { TAROT_CATEGORIES } from '../../utils/constants';

const CategorySelector = ({ onSelect }) => {
  return (
    <div className="categories-grid">
      {TAROT_CATEGORIES.map((cat, idx) => (
        <button 
          key={cat.id} 
          className="category-card glass-card animate-fade-in"
          style={{ animationDelay: `${idx * 0.1}s` }}
          onClick={() => onSelect(cat)}
        >
          <span className="cat-icon">{cat.icon}</span>
          <div className="cat-info">
            <h3 className="cat-label">{cat.label}</h3>
            <p className="cat-desc">Draw cards for {cat.id} guidance</p>
          </div>
          <div className="cat-arrow">→</div>
        </button>
      ))}

      <style>{`
        .categories-grid { display: flex; flex-direction: column; gap: 16px; }
        .category-card {
          display: flex;
          align-items: center;
          padding: 20px;
          gap: 20px;
          text-align: left;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .category-card:active { transform: scale(0.97); background: rgba(118, 75, 162, 0.1); border-color: rgba(118, 75, 162, 0.4); }
        .cat-icon { font-size: 1.8rem; }
        .cat-info { flex: 1; }
        .cat-label { font-family: 'Outfit', sans-serif; font-size: 1.1rem; color: white; margin: 0 0 4px 0; }
        .cat-desc { font-size: 0.8rem; color: rgba(255,255,255,0.4); margin: 0; }
        .cat-arrow { color: rgba(255,255,255,0.2); font-size: 1.2rem; }
      `}</style>
    </div>
  );
};

export default CategorySelector;
