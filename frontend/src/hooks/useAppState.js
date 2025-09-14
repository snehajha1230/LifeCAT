import { useState } from 'react';

export const useAppState = () => {
  const [activeTab, setActiveTab] = useState('assessment');
  const [assessmentData, setAssessmentData] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleCalculateResults = (formData) => {
    setAssessmentData(formData);
    setShowResults(true);
    setActiveTab('results');
  };

  const handleNewAssessment = () => {
    setAssessmentData(null);
    setShowResults(false);
    setActiveTab('assessment');
  };

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  return {
    activeTab,
    assessmentData,
    showResults,
    handleCalculateResults,
    handleNewAssessment,
    handleTabChange,
  };
};