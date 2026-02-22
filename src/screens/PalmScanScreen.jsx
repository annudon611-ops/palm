import React, { useState } from 'react';
import { useNavigationContext } from '../context/NavigationContext';
import { useLanguage } from '../context/LanguageContext';
import { theme } from '../styles/theme';
import HandSelector from '../components/palm/HandSelector';
import ScanGuide from '../components/palm/ScanGuide';
import ImageUploader from '../components/palm/ImageUploader';
import BackIcon from '../components/icons/BackIcon';

const PalmScanScreen = () => {
  const { goBack, navigate } = useNavigationContext();
  const { t } = useLanguage();
  const [selectedHand, setSelectedHand] = useState(null); // 'left' or 'right'
  const [step, setStep] = useState(1); // 1: Select, 2: Guide, 3: Upload

  const handleHandSelect = (hand) => {
    setSelectedHand(hand);
    setStep(2);
  };

  const startUpload = () => setStep(3);

  return (
    <div className="palm-scan-container">
      <header className="screen-header">
        <button className="back-btn" onClick={goBack}><BackIcon size={24} color="white" /></button>
        <h1 className="header-title">{t.palm.title}</h1>
        <div style={{ width: 24 }}></div>
      </header>

      <div className="content-area">
        {step === 1 && (
          <HandSelector onSelect={handleHandSelect} />
        )}
        
        {step === 2 && (
          <ScanGuide hand={selectedHand} onNext={startUpload} />
        )}

        {step === 3 && (
          <ImageUploader 
            hand={selectedHand} 
            onSuccess={(data) => navigate('PalmResult', { result: data })} 
          />
        )}
      </div>

      <style>{`
        .palm-scan-container {
          height: 100%;
          display: flex;
          flex-direction: column;
          background: ${theme.colors.background.primary};
        }
        .screen-header {
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .header-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: white;
        }
        .back-btn { background: none; border: none; cursor: pointer; }
        .content-area { flex: 1; overflow-y: auto; padding: 24px; }
      `}</style>
    </div>
  );
};

export default PalmScanScreen;
