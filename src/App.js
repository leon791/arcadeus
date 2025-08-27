import React, { useState } from 'react';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import DecryptedText from './components/DecryptedText';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const CORRECT_CODE = '98052-6399';

  const handleLogin = () => {
    setShowLogin(true);
    setError('');
    setCode('');
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate verification delay for better UX
    setTimeout(() => {
      if (code === CORRECT_CODE) {
        setIsAuthenticated(true);
        setShowLogin(false);
        setError('');
      } else {
        setError('Invalid code. Please try again.');
        setCode('');
      }
      setIsLoading(false);
    }, 500);
  };

  const handleDownload = () => {
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = '/manifest.xml';
    link.download = 'manifest.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AuthProvider>
      <div className="App">
        {/* Simplified Header - Only Logo */}
        <header 
          className="header-responsive"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '80px',
            backgroundColor: '#fff',
            borderBottom: '1px solid #eee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '0 60px',
            zIndex: 1000
          }}
        >
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
              
              {!isAuthenticated ? (
                <button 
                  onClick={handleLogin}
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
                >
                  Login
                </button>
              ) : (
                <div className="download-button-wrapper">
                  <button 
                    className="download-button-glow"
                    onClick={handleDownload}
                    style={{
                      padding: '18px 48px',
                      fontSize: '18px',
                      fontWeight: '600',
                      backgroundColor: '#000000',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      letterSpacing: '0.5px',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      outline: 'none',
                      animation: 'fadeIn 0.5s ease-in',
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <span style={{ position: 'relative', zIndex: 2 }}>Download Arcadeus Alpha</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Login Modal */}
          {showLogin && (
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 2000,
              backdropFilter: 'blur(4px)',
              animation: 'fadeIn 0.2s ease-in'
            }}>
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                padding: '40px',
                width: '90%',
                maxWidth: '400px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                animation: 'slideUp 0.3s ease-out'
              }}>
                <h2 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  marginBottom: '8px',
                  color: '#000'
                }}>
                  Enter Access Code
                </h2>
                <p style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  marginBottom: '24px'
                }}>
                  Please enter your alpha access code to continue
                </p>

                <form onSubmit={handleCodeSubmit}>
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="XXXXX-XXXX"
                    maxLength="10"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      fontSize: '16px',
                      border: error ? '2px solid #ef4444' : '2px solid #e5e7eb',
                      borderRadius: '8px',
                      outline: 'none',
                      fontFamily: 'monospace',
                      letterSpacing: '2px',
                      textAlign: 'center',
                      transition: 'border-color 0.2s ease',
                      backgroundColor: '#f9fafb'
                    }}
                    onFocus={(e) => {
                      if (!error) e.target.style.borderColor = '#000';
                    }}
                    onBlur={(e) => {
                      if (!error) e.target.style.borderColor = '#e5e7eb';
                    }}
                    autoFocus
                    disabled={isLoading}
                  />

                  {error && (
                    <p style={{
                      color: '#ef4444',
                      fontSize: '14px',
                      marginTop: '8px',
                      marginBottom: 0
                    }}>
                      {error}
                    </p>
                  )}

                  <div style={{
                    display: 'flex',
                    gap: '12px',
                    marginTop: '24px'
                  }}>
                    <button
                      type="button"
                      onClick={() => {
                        setShowLogin(false);
                        setError('');
                        setCode('');
                      }}
                      style={{
                        flex: 1,
                        padding: '12px',
                        fontSize: '16px',
                        fontWeight: '500',
                        backgroundColor: '#fff',
                        color: '#000',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#f9fafb';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#fff';
                      }}
                      disabled={isLoading}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      style={{
                        flex: 1,
                        padding: '12px',
                        fontSize: '16px',
                        fontWeight: '500',
                        backgroundColor: isLoading ? '#6b7280' : '#000',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: isLoading ? 'not-allowed' : 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        if (!isLoading) e.target.style.backgroundColor = '#333';
                      }}
                      onMouseLeave={(e) => {
                        if (!isLoading) e.target.style.backgroundColor = '#000';
                      }}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Verifying...' : 'Submit'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

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