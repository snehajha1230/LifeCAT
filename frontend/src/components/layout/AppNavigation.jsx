import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import { Calculator, BarChart3, Lightbulb, History, Upload } from 'lucide-react';

export const AppNavigation = ({
  activeTab,
  onTabChange,
  showResults
}) => {
  return (
    <TabsList className="grid w-full grid-cols-5 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
      <TabsTrigger value="assessment" className="flex items-center gap-2">
        <Calculator className="w-4 h-4" />
        Assessment
      </TabsTrigger>
      <TabsTrigger 
        value="results" 
        disabled={!showResults} 
        className="flex items-center gap-2"
      >
        <BarChart3 className="w-4 h-4" />
        Results
      </TabsTrigger>
      <TabsTrigger 
        value="recommendations" 
        disabled={!showResults} 
        className="flex items-center gap-2"
      >
        <Lightbulb className="w-4 h-4" />
        Recommendations
      </TabsTrigger>
      <TabsTrigger value="dashboard" className="flex items-center gap-2">
        <History className="w-4 h-4" />
        Dashboard
      </TabsTrigger>
      <TabsTrigger value="upload" className="flex items-center gap-2">
        <Upload className="w-4 h-4" />
        Data Upload
      </TabsTrigger>
    </TabsList>
  );
};