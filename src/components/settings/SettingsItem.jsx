import React from 'react';
import { theme } from '../../styles/theme';

const SettingsItem = ({ label, value, onClick, toggle, defaultChecked, icon }) => {
  return (
    <div className="settings-item glass-card" onClick={!toggle ? onClick : undefined}>
      <div className="item-left">
        <span className="item-icon">{icon}</span>
        <span className="item-label">{label}</span>
      </div>
      
      <div className="item-right">
        {toggle ? (
          <label className="switch">
            <input type="checkbox" defaultChecked={defaultChecked} />
            <span className="slider round"></span>
          </label>
        ) : (
          <>
            {value && <span className="item-value">{value}</span>}
            <span className="arrow-icon">›</span>
          </>
        )}
      </div>

      <style>{`
        .settings-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 16px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .settings-item:active { background: rgba(255, 255, 255, 0.06); }
        .item-left { display: flex; align-items: center; gap: 12px; }
        .item-icon { font-size: 1.2rem; }
        .item-label { font-family: 'Inter', sans-serif; font-size: 1rem; color: white; }
        .item-right { display: flex; align-items: center; gap: 10px; }
        .item-value { font-size: 0.9rem; color: rgba(255, 255, 255, 0.5); }
        .arrow-icon { color: rgba(255, 255, 255, 0.3); font-size: 1.5rem; line-height: 1; }
        
        /* Toggle Switch */
        .switch { position: relative; display: inline-block; width: 44px; height: 24px; }
        .switch input { opacity: 0; width: 0; height: 0; }
        .slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(255, 255, 255, 0.2); transition: .4s; border-radius: 34px; }
        .slider:before { position: absolute; content: ""; height: 20px; width: 20px; left: 2px; bottom: 2px; background-color: white; transition: .4s; border-radius: 50%; }
        input:checked + .slider { background-color: ${theme.colors.accent.secondary}; }
        input:checked + .slider:before { transform: translateX(20px); }
      `}</style>
    </div>
  );
};

export default SettingsItem;
