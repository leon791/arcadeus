import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import './Install.css';

const Install = () => {
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);

  const downloadManifest = () => {
    // Create manifest.xml content
    const manifestContent = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<OfficeApp xmlns="http://schemas.microsoft.com/office/appforoffice/1.1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bt="http://schemas.microsoft.com/office/officeappbasictypes/1.0" xmlns:ov="http://schemas.microsoft.com/office/taskpaneappversionoverrides" xsi:type="TaskPaneApp">
  <Id>12345678-1234-1234-1234-123456789012</Id>
  <Version>1.0.0.0</Version>
  <ProviderName>Arcadeus</ProviderName>
  <DefaultLocale>en-US</DefaultLocale>
  <DisplayName DefaultValue="Arcadeus Financial AI"/>
  <Description DefaultValue="AI-powered financial modeling assistant"/>
  <IconUrl DefaultValue="https://arcadeus.ai/icons/icon-32.png"/>
  <HighResolutionIconUrl DefaultValue="https://arcadeus.ai/icons/icon-64.png"/>
  <SupportUrl DefaultValue="https://arcadeus.ai/support"/>
  <AppDomains>
    <AppDomain>https://arcadeus.ai</AppDomain>
  </AppDomains>
  <Hosts>
    <Host Name="Workbook"/>
  </Hosts>
  <Requirements>
    <Sets>
      <Set Name="ExcelApi" MinVersion="1.1"/>
    </Sets>
  </Requirements>
  <DefaultSettings>
    <SourceLocation DefaultValue="https://arcadeus.ai/addin"/>
    <RequestedWidth>320</RequestedWidth>
    <RequestedHeight>450</RequestedHeight>
  </DefaultSettings>
  <Permissions>ReadWriteDocument</Permissions>
  <VersionOverrides xmlns="http://schemas.microsoft.com/office/taskpaneappversionoverrides" xsi:type="VersionOverridesV1_0">
    <Hosts>
      <Host xsi:type="Workbook">
        <DesktopFormFactor>
          <GetStarted>
            <Title resid="Arcadeus.GetStarted.Title"/>
            <Description resid="Arcadeus.GetStarted.Description"/>
            <LearnMoreUrl resid="Arcadeus.GetStarted.LearnMoreUrl"/>
          </GetStarted>
          <ExtensionPoint xsi:type="PrimaryCommandSurface">
            <OfficeTab id="TabHome">
              <Group id="Arcadeus.Group1">
                <Label resid="Arcadeus.Group1Label"/>
                <Icon>
                  <bt:Image size="16" resid="Arcadeus.tpicon_16x16"/>
                  <bt:Image size="32" resid="Arcadeus.tpicon_32x32"/>
                  <bt:Image size="80" resid="Arcadeus.tpicon_80x80"/>
                </Icon>
                <Control xsi:type="Button" id="Arcadeus.TaskpaneButton">
                  <Label resid="Arcadeus.TaskpaneButton.Label"/>
                  <Supertip>
                    <Title resid="Arcadeus.TaskpaneButton.Label"/>
                    <Description resid="Arcadeus.TaskpaneButton.Tooltip"/>
                  </Supertip>
                  <Icon>
                    <bt:Image size="16" resid="Arcadeus.tpicon_16x16"/>
                    <bt:Image size="32" resid="Arcadeus.tpicon_32x32"/>
                    <bt:Image size="80" resid="Arcadeus.tpicon_80x80"/>
                  </Icon>
                  <Action xsi:type="ShowTaskpane">
                    <TaskpaneId>ButtonId1</TaskpaneId>
                    <SourceLocation resid="Arcadeus.Taskpane.Url"/>
                  </Action>
                </Control>
              </Group>
            </OfficeTab>
          </ExtensionPoint>
        </DesktopFormFactor>
      </Host>
    </Hosts>
    <Resources>
      <bt:Images>
        <bt:Image id="Arcadeus.tpicon_16x16" DefaultValue="https://arcadeus.ai/icons/icon-16.png"/>
        <bt:Image id="Arcadeus.tpicon_32x32" DefaultValue="https://arcadeus.ai/icons/icon-32.png"/>
        <bt:Image id="Arcadeus.tpicon_80x80" DefaultValue="https://arcadeus.ai/icons/icon-80.png"/>
      </bt:Images>
      <bt:Urls>
        <bt:Url id="Arcadeus.Taskpane.Url" DefaultValue="https://arcadeus.ai/addin"/>
        <bt:Url id="Arcadeus.GetStarted.LearnMoreUrl" DefaultValue="https://arcadeus.ai/help"/>
      </bt:Urls>
      <bt:ShortStrings>
        <bt:String id="Arcadeus.TaskpaneButton.Label" DefaultValue="Arcadeus AI"/>
        <bt:String id="Arcadeus.Group1Label" DefaultValue="Arcadeus"/>
        <bt:String id="Arcadeus.GetStarted.Title" DefaultValue="Get started with Arcadeus AI"/>
      </bt:ShortStrings>
      <bt:LongStrings>
        <bt:String id="Arcadeus.TaskpaneButton.Tooltip" DefaultValue="Open Arcadeus AI Assistant"/>
        <bt:String id="Arcadeus.GetStarted.Description" DefaultValue="Your AI-powered financial modeling assistant is ready to help"/>
      </bt:LongStrings>
    </Resources>
  </VersionOverrides>
</OfficeApp>`;

    // Create and download the file
    const element = document.createElement('a');
    const file = new Blob([manifestContent], { type: 'application/xml' });
    element.href = URL.createObjectURL(file);
    element.download = 'arcadeus-manifest.xml';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    setCurrentStep(1);
  };

  const steps = [
    {
      title: "Download Manifest File",
      description: "Download the Arcadeus manifest.xml file to your computer. This file contains the configuration needed to install the Excel add-in.",
      action: (
        <div className="step-actions">
          <button className="btn btn-primary btn-large" onClick={downloadManifest}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7,10 12,15 17,10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download manifest.xml
          </button>
        </div>
      ),
      image: "/api/placeholder/400/300"
    },
    {
      title: "Open Excel Online",
      description: "Navigate to Excel Online at office.com and sign in with your Microsoft account. Important: You must use Excel Online (web version), not the desktop Excel application.",
      action: (
        <div className="step-actions">
          <a 
            href="https://www.office.com/launch/excel" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary btn-large"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1-2-2h6"/>
              <polyline points="15,3 21,3 21,9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Open Excel Online
          </a>
        </div>
      ),
      image: "/api/placeholder/400/300"
    },
    {
      title: "Find Add-ins Button",
      description: "Look for the Add-ins icon in the Excel Online ribbon at the top of the page. The icon typically looks like puzzle pieces or building blocks and is located in the main toolbar.",
      action: (
        <div className="step-actions">
          <button 
            className="btn btn-outline btn-large" 
            onClick={() => setCurrentStep(3)}
          >
            Next Step
          </button>
        </div>
      ),
      image: "/api/placeholder/400/300"
    },
    {
      title: "Click More Add-ins",
      description: "Click on the Add-ins button you just found, then select 'More Add-ins' or 'Get Add-ins' from the dropdown menu that appears.",
      action: (
        <div className="step-actions">
          <button 
            className="btn btn-outline btn-large" 
            onClick={() => setCurrentStep(4)}
          >
            Next Step
          </button>
        </div>
      ),
      image: "/api/placeholder/400/300"
    },
    {
      title: "Access My Add-ins",
      description: "In the Office Add-ins store dialog that opens, look for and click on the 'My Add-ins' tab at the top of the window.",
      action: (
        <div className="step-actions">
          <button 
            className="btn btn-outline btn-large" 
            onClick={() => setCurrentStep(5)}
          >
            Next Step
          </button>
        </div>
      ),
      image: "/api/placeholder/400/300"
    },
    {
      title: "Upload Manifest File",
      description: "In the My Add-ins section, locate and click the 'Upload My Add-in' button in the top right corner. Then browse and select the manifest.xml file you downloaded in step 1.",
      action: (
        <div className="step-actions">
          <button 
            className="btn btn-outline btn-large" 
            onClick={() => setCurrentStep(6)}
          >
            Next Step
          </button>
        </div>
      ),
      image: "/api/placeholder/400/300"
    },
    {
      title: "Login to Arcadeus",
      description: `The add-in is now installed and will appear in your Excel ribbon. Click the Arcadeus button to open the panel and login using the same account you used for this website: ${user?.email}`,
      action: (
        <div className="step-actions">
          <p className="final-step-text">You can now use Arcadeus AI in your Excel spreadsheets!</p>
        </div>
      ),
      image: "/api/placeholder/400/300"
    }
  ];

  const goToStep = (stepIndex) => {
    if (stepIndex >= 0 && stepIndex < steps.length) {
      setCurrentStep(stepIndex);
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="install-page">
      <div className="container">
        <motion.div
          className="install-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Install Arcadeus Add-In</h1>
          <p>Follow these simple steps to install the Arcadeus Excel Add-In</p>
          
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            />
          </div>
        </motion.div>

        <div className="install-content">
          <div className="steps-sidebar">
            <div className="steps-list">
              {steps.map((step, index) => (
                <button
                  key={index}
                  className={`step-item ${index === currentStep ? 'current' : ''} ${index < currentStep ? 'completed' : ''}`}
                  onClick={() => goToStep(index)}
                >
                  <div className="step-number">
                    {index < currentStep ? '✓' : index + 1}
                  </div>
                  <div className="step-title">{step.title}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="step-content">
            <div className="step-navigation">
              <button 
                className={`nav-btn prev-btn ${currentStep === 0 ? 'disabled' : ''}`}
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
                Previous
              </button>
              
              <span className="step-counter">
                Step {currentStep + 1} of {steps.length}
              </span>
              
              <button 
                className={`nav-btn next-btn ${currentStep === steps.length - 1 ? 'disabled' : ''}`}
                onClick={nextStep}
                disabled={currentStep === steps.length - 1}
              >
                Next
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </button>
            </div>

            <motion.div
              key={currentStep}
              className="current-step"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="step-info">
                <h2>{steps[currentStep].title}</h2>
                <p>{steps[currentStep].description}</p>
                <div className="step-action">
                  {steps[currentStep].action}
                </div>
              </div>
              
              <div className="step-visual">
                <div className="step-image-placeholder">
                  <img 
                    src={steps[currentStep].image} 
                    alt={`Step ${currentStep + 1}: ${steps[currentStep].title}`}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTAwSDI0MFYxNDBIMjAwVjEwMFoiIGZpbGw9IiNEMUQ1REIiLz4KPHA+PHRzcGFuIGZpbGw9IiM2QjcyODAiPkltYWdlIFBsYWNlaG9sZGVyPC90c3Bhbj48L3A+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQiIGZvbnQtc2l6ZT0iMTRweCIgZmlsbD0iIzZCNzI4MCI+U3RlcCB7Y3VycmVudFN0ZXAgKyAxfSBJbWFnZTwvdGV4dD4KPC9zdmc+';
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Install;