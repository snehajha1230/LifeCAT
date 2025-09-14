import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { Lightbulb, ArrowRight, Target, Recycle, Leaf, AlertTriangle } from 'lucide-react';

export function Recommendations({ inputData }) {
  const generateRecommendations = () => {
    const recommendations = [];
    const circularPathways = [];
    
    // Generate recommendations based on input data
    if (inputData.productionRoute === 'primary') {
      recommendations.push({
        type: 'high-impact',
        icon: <Recycle className="w-5 h-5" />,
        title: 'Switch to Recycled Material',
        description: `Switch to recycled ${inputData.metal} to reduce emissions by 60-95%`,
        impact: 'High',
        savings: 'Up to 8,000 kg CO₂-eq per ton'
      });
    }

    if (inputData.energySource === 'fossil' || inputData.energySource === 'grid') {
      recommendations.push({
        type: 'medium-impact',
        icon: <Leaf className="w-5 h-5" />,
        title: 'Use Renewable Energy',
        description: 'Switch to renewable energy sources for production processes',
        impact: 'Medium',
        savings: 'Up to 30% energy-related emissions'
      });
    }

    if (inputData.transportDistance && parseInt(inputData.transportDistance) > 1000) {
      recommendations.push({
        type: 'medium-impact',
        icon: <Target className="w-5 h-5" />,
        title: 'Optimize Transport',
        description: 'Consider local suppliers or rail/ship transport for long distances',
        impact: 'Medium',
        savings: 'Up to 500 kg CO₂-eq per ton'
      });
    }

    if (inputData.endOfLife === 'landfill') {
      recommendations.push({
        type: 'high-impact',
        icon: <AlertTriangle className="w-5 h-5" />,
        title: 'Avoid Landfill Disposal',
        description: 'Implement recycling or reuse programs for end-of-life products',
        impact: 'High',
        savings: 'Preserve material value and reduce waste'
      });
    }

    // Design-specific recommendations
    if (inputData.productType === 'packaging') {
      recommendations.push({
        type: 'design',
        icon: <Lightbulb className="w-5 h-5" />,
        title: 'Design for Disassembly',
        description: 'Use single-material components and avoid composite structures',
        impact: 'Medium',
        savings: 'Improve recyclability by 40%'
      });
    }

    // Circular pathways based on metal type
    if (inputData.metal === 'aluminium') {
      circularPathways.push(
        { priority: 1, action: 'Reuse in similar applications', benefit: 'No reprocessing needed' },
        { priority: 2, action: 'Recycle into new products', benefit: '95% energy savings vs primary' },
        { priority: 3, action: 'Downcycle to lower-grade applications', benefit: '60% energy savings' }
      );
    } else if (inputData.metal === 'steel') {
      circularPathways.push(
        { priority: 1, action: 'Reuse structural components', benefit: 'Maintain structural integrity' },
        { priority: 2, action: 'Recycle in electric arc furnace', benefit: '75% energy savings' },
        { priority: 3, action: 'Use as aggregate in construction', benefit: 'Avoid landfill disposal' }
      );
    } else {
      circularPathways.push(
        { priority: 1, action: 'Direct reuse where possible', benefit: 'Maximum value retention' },
        { priority: 2, action: 'Mechanical recycling', benefit: 'High material recovery' },
        { priority: 3, action: 'Hydrometallurgical recovery', benefit: 'Element recovery' }
      );
    }

    return { recommendations, circularPathways };
  };

  const { recommendations, circularPathways } = generateRecommendations();

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'High': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="w-full max-w-7xl space-y-6">
      {/* AI-Generated Recommendations */}
      <Card>
        <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
          <CardTitle className="text-purple-700 dark:text-purple-300 flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            AI-Generated Recommendations
          </CardTitle>
          <CardDescription>
            Personalized suggestions to reduce environmental impact
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <Alert key={index} className="border-l-4 border-l-blue-500">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    {rec.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{rec.title}</h4>
                      <Badge className={getImpactColor(rec.impact)}>
                        {rec.impact} Impact
                      </Badge>
                    </div>
                    <AlertDescription className="text-sm text-muted-foreground mb-2">
                      {rec.description}
                    </AlertDescription>
                    <div className="flex items-center text-sm text-green-600 dark:text-green-400">
                      <ArrowRight className="w-4 h-4 mr-1" />
                      <span className="font-medium">Potential savings: {rec.savings}</span>
                    </div>
                  </div>
                </div>
              </Alert>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Circular Pathways */}
      <Card>
        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
          <CardTitle className="text-green-700 dark:text-green-300 flex items-center gap-2">
            <Recycle className="w-5 h-5" />
            Best Circular Pathway
          </CardTitle>
          <CardDescription>
            Recommended circular economy strategies (prioritized)
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {circularPathways.map((pathway, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-medium">
                    {pathway.priority}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{pathway.action}</h4>
                  <p className="text-sm text-muted-foreground">{pathway.benefit}</p>
                </div>
                <div className="flex-shrink-0">
                  <ArrowRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Immediate steps you can take to improve circularity
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border border-green-200 dark:border-green-800 rounded-lg">
              <h4 className="font-medium text-green-700 dark:text-green-300 mb-2">Material Selection</h4>
              <p className="text-sm text-muted-foreground">
                Choose materials with high recycled content and established recycling infrastructure
              </p>
            </div>
            
            <div className="p-4 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Design Strategy</h4>
              <p className="text-sm text-muted-foreground">
                Design for disassembly and material separation to enable effective recycling
              </p>
            </div>
            
            <div className="p-4 border border-purple-200 dark:border-purple-800 rounded-lg">
              <h4 className="font-medium text-purple-700 dark:text-purple-300 mb-2">Supply Chain</h4>
              <p className="text-sm text-muted-foreground">
                Partner with suppliers who prioritize circular economy principles and transparency
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}