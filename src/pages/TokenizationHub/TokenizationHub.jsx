import React, { useState, useMemo } from 'react';
import { createTheme, ThemeProvider as BWThemeProvider } from '@mui/material/styles';
import CreateAssetModal from "./tokenizationDemo.jsx";

// Step 1: Import the new section components from the 'sections' subfolder
import Hero from "./sections/Hero.jsx";
import TokenizationProcess from "./sections/TokenizationProcess.jsx";
import MinimalTokenizationDashboard from "./sections/IssuerSection.jsx";
import TokenDistribution from "./sections/TokenDistribution.jsx";
import InvestorManagement from "./sections/InvestorManagement.jsx";
import FAQSection from "./sections/FAQSection.jsx";
import FinalCTA from "./sections/FinalCTA.jsx";

export default function TokenizationHub() {
  // State management remains in the parent component
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const openCreateModal = () => setIsCreateModalOpen(true);
  const closeCreateModal = () => setIsCreateModalOpen(false);

  const bwTheme = useMemo(() => createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#ffffff' },
      background: { default: '#000000', paper: '#000000' },
      text: { primary: '#ffffff', secondary: '#aaaaaa' },
    },
  }), []);

  return (
    <div className="min-h-screen bg-blue-100">
      {/* Step 2: Render the section components in order */}
      <Hero />
      <TokenizationProcess onLaunchCreator={openCreateModal} />
      <MinimalTokenizationDashboard />
      <TokenDistribution />
      <InvestorManagement />
      <FAQSection />
      <FinalCTA />

      {/* The Modal remains in the parent component */}
      <BWThemeProvider theme={bwTheme}>
        <CreateAssetModal open={isCreateModalOpen} onClose={closeCreateModal} />
      </BWThemeProvider>
    </div>
  );
}
