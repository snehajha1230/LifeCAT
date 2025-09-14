import React from 'react';
import { Leaf } from 'lucide-react';

export const AppFooter = () => {
  return (
    <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-green-600 rounded-lg">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold">MetalCycle LCA</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering sustainable decision-making through comprehensive Life Cycle Assessment 
              of metals with a focus on circular economy principles.
            </p>
          </div>
          
          {/* Features Section */}
          <div>
            <h4 className="font-medium mb-3">Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Environmental Impact Analysis</li>
              <li>Circularity Assessment</li>
              <li>AI-Powered Recommendations</li>
              <li>Batch Data Processing</li>
            </ul>
          </div>
          
          {/* Supported Metals Section */}
          <div>
            <h4 className="font-medium mb-3">Supported Metals</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Aluminium & Alloys</li>
              <li>Copper & Brass</li>
              <li>Steel & Iron</li>
              <li>Specialty Metals</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 MetalCycle LCA. Built for sustainable engineering and circular economy advancement.
          </p>
        </div>
      </div>
    </footer>
  );
};