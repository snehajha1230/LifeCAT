import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { History, Download, Trash2, Eye, TrendingDown, Calendar } from 'lucide-react';

export function Dashboard() {
  // Mock saved assessments data
  const savedAssessments = [
    {
      id: '1',
      name: 'Automotive Aluminium Parts',
      metal: 'Aluminium',
      productType: 'Automotive',
      date: '2024-01-15',
      carbonFootprint: 4800,
      circularityScore: 85,
      status: 'Optimized'
    },
    {
      id: '2',
      name: 'Copper Wiring Project',
      metal: 'Copper',
      productType: 'Wiring',
      date: '2024-01-12',
      carbonFootprint: 5500,
      circularityScore: 65,
      status: 'Needs Optimization'
    },
    {
      id: '3',
      name: 'Steel Construction Beams',
      metal: 'Steel',
      productType: 'Construction',
      date: '2024-01-10',
      carbonFootprint: 2100,
      circularityScore: 70,
      status: 'Good'
    },
    {
      id: '4',
      name: 'Lithium Battery Housing',
      metal: 'Lithium',
      productType: 'Electronics',
      date: '2024-01-08',
      carbonFootprint: 8500,
      circularityScore: 55,
      status: 'Needs Optimization'
    }
  ];

  // Mock trend data
  const trendData = [
    { month: 'Sep', avgCarbon: 6500, avgCircularity: 62 },
    { month: 'Oct', avgCarbon: 6200, avgCircularity: 65 },
    { month: 'Nov', avgCarbon: 5800, avgCircularity: 68 },
    { month: 'Dec', avgCarbon: 5400, avgCircularity: 72 },
    { month: 'Jan', avgCarbon: 5200, avgCircularity: 75 }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Optimized': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Good': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Needs Optimization': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const totalAssessments = savedAssessments.length;
  const avgCarbonReduction = 24; // percentage
  const avgCircularityScore = Math.round(savedAssessments.reduce((sum, assessment) => sum + assessment.circularityScore, 0) / totalAssessments);

  return (
    <div className="w-full max-w-7xl space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">{totalAssessments}</p>
                <p className="text-sm text-muted-foreground">Total Assessments</p>
              </div>
              <History className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-green-600">{avgCarbonReduction}%</p>
                <p className="text-sm text-muted-foreground">Avg. Carbon Reduction</p>
              </div>
              <TrendingDown className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-blue-600">{avgCircularityScore}/100</p>
                <p className="text-sm text-muted-foreground">Avg. Circularity Score</p>
              </div>
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">C</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-purple-600">12</p>
                <p className="text-sm text-muted-foreground">Projects This Month</p>
              </div>
              <Calendar className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Trend Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Trends</CardTitle>
          <CardDescription>
            Carbon footprint and circularity score trends over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="carbon" orientation="left" />
              <YAxis yAxisId="circularity" orientation="right" />
              <Tooltip />
              <Line 
                yAxisId="carbon"
                type="monotone" 
                dataKey="avgCarbon" 
                stroke="#ef4444" 
                strokeWidth={2}
                name="Avg Carbon (kg CO₂-eq)"
              />
              <Line 
                yAxisId="circularity"
                type="monotone" 
                dataKey="avgCircularity" 
                stroke="#22c55e" 
                strokeWidth={2}
                name="Avg Circularity Score"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Saved Assessments Table */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Saved Assessments</CardTitle>
              <CardDescription>
                Your previous LCA calculations and results
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Project Name</TableHead>
                <TableHead>Metal</TableHead>
                <TableHead>Application</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Carbon Footprint</TableHead>
                <TableHead>Circularity Score</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {savedAssessments.map((assessment) => (
                <TableRow key={assessment.id}>
                  <TableCell className="font-medium">{assessment.name}</TableCell>
                  <TableCell>{assessment.metal}</TableCell>
                  <TableCell>{assessment.productType}</TableCell>
                  <TableCell>{new Date(assessment.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <span className="font-mono">
                      {assessment.carbonFootprint.toLocaleString()} kg CO₂-eq
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span className="font-mono">{assessment.circularityScore}/100</span>
                      <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                        <div 
                          className="h-2 bg-green-500 rounded-full" 
                          style={{ width: `${assessment.circularityScore}%` }}
                        />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(assessment.status)}>
                      {assessment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}