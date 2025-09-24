import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';
import api from '../../services/api';
import styles from './styles.module.css';
const API_BASE_URL = process.env.REACT_APP_BACKEND_URL

function VMInstance() {
  const { sessionId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const { guacamole_url, created_at } = location.state || {};

  console.log('🖥️ VMInstance: Component loaded', {
    sessionId,
    hasGuacamoleUrl: !!guacamole_url,
    guacamoleUrl: guacamole_url,
    createdAt: created_at,
    locationState: location.state
  });

  const stopVM = async () => {
    try {
      console.log('🛑 VMInstance: Stopping VM...', { sessionId });
      await api.post(`${API_BASE_URL}/api/vm/stop-vm/${sessionId}/`);
      console.log('✅ VMInstance: VM stopped successfully');
      navigate('/projects');
    } catch (err) {
      console.error('❌ VMInstance: Failed to stop VM', err);
      alert('Failed to stop VM');
    }
  };

  if (!guacamole_url) {
    console.error('❌ VMInstance: No VM data provided');
    return <p>⚠️ No VM data provided. Please launch again.</p>;
  }

  return (
    <div className={styles.vmInstanceContainer}>
      <div className={styles.header}>
        <h1>🖥️ VM Session {sessionId}</h1>
        <p>Started at: {new Date(created_at).toLocaleString()}</p>
        <button onClick={stopVM} className={styles.actionBtn}>
          <FaPowerOff /> Stop VM
        </button>
      </div>

      <div className={styles.sessionFrame}>
        <iframe
          src={guacamole_url}
          width="100%"
          height="700px"
          frameBorder="0"
          title={`VM Session ${sessionId}`}
          allowFullScreen
          onLoad={() => console.log('✅ VMInstance: Iframe loaded successfully')}
          onError={(e) => console.error('❌ VMInstance: Iframe failed to load', e)}
        />
      </div>
    </div>
  );
}

export default VMInstance;
