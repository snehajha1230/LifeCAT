import React from 'react';
import { TabsContent } from '../ui/tabs';
import { InputForm } from '../InputForm';
import { ResultsVisualization } from '../ResultsVisualization';
import { Recommendations } from '../Recommendations';
import { Dashboard } from '../Dashboard';
import { DataUpload } from '../DataUpload';

export const AppContent = ({
  assessmentData,
  onCalculateResults
}) => {
  return (
    <div className="mt-8">
      <TabsContent value="assessment" className="flex justify-center">
        <InputForm onCalculate={onCalculateResults} />
      </TabsContent>

      <TabsContent value="results" className="flex justify-center">
        {assessmentData && (
          <ResultsVisualization inputData={assessmentData} />
        )}
      </TabsContent>

      <TabsContent value="recommendations" className="flex justify-center">
        {assessmentData && (
          <Recommendations inputData={assessmentData} />
        )}
      </TabsContent>

      <TabsContent value="dashboard" className="flex justify-center">
        <Dashboard />
      </TabsContent>

      <TabsContent value="upload" className="flex justify-center">
        <DataUpload />
      </TabsContent>
    </div>
  );
};