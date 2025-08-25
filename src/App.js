import React from 'react';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import DecryptedText from './components/DecryptedText';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        {/* Simplified Header - Only Logo */}
        <header style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          backgroundColor: '#fff',
          borderBottom: '1px solid #eee',
          display: 'flex',
          alignItems: 'center',
          padding: '0 60px',
          zIndex: 1000
        }}>
          <img 
            src="/arcadeus-logo-black-on-white-simple.svg" 
            alt="Arcadeus" 
            style={{ height: '60px' }} 
          />
        </header>
        
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#ffffff',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          paddingTop: '80px'
        }}>
          {/* Main content area */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px 20px'
          }}>
            {/* Center content */}
            <div style={{
              textAlign: 'center',
              maxWidth: '600px'
            }}>
              <h1 style={{
                fontSize: '32px',
                fontWeight: '300',
                color: '#9ca3af',
                marginBottom: '30px',
                letterSpacing: '1px',
                lineHeight: '1.3',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>
                <DecryptedText
                  text="Your financial co-pilot in Excel"
                  animateOn="view"
                  sequential={true}
                  revealDirection="start"
                  speed={80}
                  maxIterations={15}
                />
              </h1>
              
              <button 
                style={{
                  padding: '16px 40px',
                  fontSize: '18px',
                  fontWeight: '400',
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  border: '3px solid #d1d5db',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.5px',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  outline: 'none',
                  boxShadow: '0 0 0 0 rgba(0,0,0,0)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-1px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 0 0 0 rgba(0,0,0,0)';
                }}
                onClick={() => window.location.href = 'mailto:info@arcadeus.ai?subject=Get in touch'}
              >
                Get in touch
              </button>
            </div>
          </div>

          {/* Footer with hiring text only */}
          <div style={{
            padding: '40px 60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderTop: '1px solid #e0e0e0'
          }}>
            <div style={{
              fontSize: '14px',
              color: '#999',
              letterSpacing: '0.3px'
            }}>
              We're hiring: <a 
                href="mailto:info@arcadeus.ai" 
                style={{
                  color: '#666',
                  textDecoration: 'none',
                  borderBottom: '1px solid #666'
                }}
              >
                info@arcadeus.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;