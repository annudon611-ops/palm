import React, { useState } from 'react';
import { analyzePalmImage } from '../../services/aiService';
import { fileToBase64 } from '../../utils/helpers';
import { useLanguage } from '../../context/LanguageContext';
import { useUser } from '../../context/UserContext';
import { theme } from '../../styles/theme';
import useToast from '../../hooks/useToast';
import LoadingSpinner from '../ui/LoadingSpinner';
import CameraIcon from '../icons/CameraIcon';
import UploadIcon from '../icons/UploadIcon';

const ImageUploader = ({ hand, onSuccess }) => {
  const { language } = useLanguage();
  const { userProfile } = useUser();
  const { error } = useToast();
  const [loading, setLoading] = useState(false);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      error("Image is too large. Please use a smaller file.");
      return;
    }

    setLoading(true);
    try {
      const base64 = await fileToBase64(file);
      const analysis = await analyzePalmImage(base64, language, userProfile.name);
      onSuccess(analysis);
    } catch (err) {
      error("Cosmic interference detected. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="uploader-loading">
        <LoadingSpinner size="lg" message="Reading your destiny..." />
        <p className="loading-subtext">The AI is tracing your {hand} hand lines</p>
      </div>
    );
  }

  return (
    <div className="uploader-container animate-fade-in">
      <div className="upload-options">
        <label className="upload-box camera-box">
          <input type="file" accept="image/*" capture="environment" onChange={handleFile} />
          <CameraIcon size={40} color={theme.colors.accent.secondary} />
          <span>Open Camera</span>
        </label>

        <label className="upload-box gallery-box">
          <input type="file" accept="image/*" onChange={handleFile} />
          <UploadIcon size={40} color="white" />
          <span>Upload Gallery</span>
        </label>
      </div>

      <style>{`
        .uploader-container { display: flex; flex-direction: column; gap: 20px; margin-top: 20px; }
        .uploader-loading { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 300px; }
        .loading-subtext { color: rgba(255,255,255,0.5); font-size: 0.9rem; margin-top: 10px; }
        .upload-options { display: grid; grid-template-columns: 1fr; gap: 20px; }
        .upload-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          height: 160px;
          border-radius: 24px;
          background: rgba(255,255,255,0.03);
          border: 1.5px dashed rgba(255,255,255,0.1);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .upload-box input { display: none; }
        .camera-box { background: rgba(79, 172, 254, 0.05); border-color: rgba(79, 172, 254, 0.2); }
        .upload-box span { font-family: 'Outfit', sans-serif; font-weight: 500; font-size: 1rem; color: white; }
        .upload-box:active { transform: scale(0.98); background: rgba(255,255,255,0.08); }
      `}</style>
    </div>
  );
};

export default ImageUploader;
