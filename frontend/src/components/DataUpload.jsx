import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Alert, AlertDescription } from './ui/alert';
import { Progress } from './ui/progress';
import { Upload, FileSpreadsheet, CheckCircle, AlertCircle, Download } from 'lucide-react';

export function DataUpload() {
  const [uploadStatus, setUploadStatus] = React.useState('idle');
  const [uploadProgress, setUploadProgress] = React.useState(0);
  const [fileName, setFileName] = React.useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setUploadStatus('uploading');
    setUploadProgress(0);

    // Simulate file upload with progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadStatus('success');
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const downloadTemplate = () => {
    // In a real app, this would download an actual template file
    console.log('Downloading template...');
  };

  return (
    <div className="w-full max-w-4xl space-y-6">
      {/* Upload Section */}
      <Card>
        <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950">
          <CardTitle className="text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
            <Upload className="w-5 h-5" />
            Upload Process Data
          </CardTitle>
          <CardDescription>
            Upload CSV or Excel files with your process data for batch LCA calculations
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            {/* File Upload Area */}
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
              <div className="space-y-4">
                <div className="flex justify-center">
                  <FileSpreadsheet className="w-12 h-12 text-gray-400" />
                </div>
                <div>
                  <Label htmlFor="file-upload" className="cursor-pointer">
                    <div className="space-y-2">
                      <p className="text-lg font-medium">Choose file to upload</p>
                      <p className="text-sm text-muted-foreground">
                        Supports CSV, XLSX, and XLS files up to 10MB
                      </p>
                    </div>
                  </Label>
                  <Input
                    id="file-upload"
                    type="file"
                    accept=".csv,.xlsx,.xls"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
                <Button variant="outline" className="mt-4">
                  <Upload className="w-4 h-4 mr-2" />
                  Select File
                </Button>
              </div>
            </div>

            {/* Upload Progress */}
            {uploadStatus === 'uploading' && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Uploading {fileName}...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="h-2" />
              </div>
            )}

            {/* Upload Success */}
            {uploadStatus === 'success' && (
              <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <AlertDescription className="text-green-700 dark:text-green-300">
                  File "{fileName}" uploaded successfully! Processing 15 entries for LCA calculations.
                </AlertDescription>
              </Alert>
            )}

            {/* Upload Error */}
            {uploadStatus === 'error' && (
              <Alert className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
                <AlertCircle className="w-4 h-4 text-red-600" />
                <AlertDescription className="text-red-700 dark:text-red-300">
                  Error uploading file. Please check the file format and try again.
                </AlertDescription>
              </Alert>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Template Download */}
      <Card>
        <CardHeader>
          <CardTitle>Download Template</CardTitle>
          <CardDescription>
            Use our templates to format your data correctly for upload
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Basic LCA Template</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Standard template with essential parameters for LCA calculations
              </p>
              <Button variant="outline" onClick={downloadTemplate}>
                <Download className="w-4 h-4 mr-2" />
                Download CSV
              </Button>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Advanced LCA Template</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Comprehensive template with detailed process parameters
              </p>
              <Button variant="outline" onClick={downloadTemplate}>
                <Download className="w-4 h-4 mr-2" />
                Download Excel
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Format Guide */}
      <Card>
        <CardHeader>
          <CardTitle>Data Format Guidelines</CardTitle>
          <CardDescription>
            Required and optional fields for your data upload
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-green-700 dark:text-green-300 mb-2">Required Fields</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <span className="p-2 bg-green-50 dark:bg-green-950 rounded">Metal Type</span>
                <span className="p-2 bg-green-50 dark:bg-green-950 rounded">Product Type</span>
                <span className="p-2 bg-green-50 dark:bg-green-950 rounded">Production Route</span>
                <span className="p-2 bg-green-50 dark:bg-green-950 rounded">Energy Source</span>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Optional Fields</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <span className="p-2 bg-blue-50 dark:bg-blue-950 rounded">Transport Distance</span>
                <span className="p-2 bg-blue-50 dark:bg-blue-950 rounded">Transport Mode</span>
                <span className="p-2 bg-blue-50 dark:bg-blue-950 rounded">Material Grade</span>
                <span className="p-2 bg-blue-50 dark:bg-blue-950 rounded">Recycled Content</span>
              </div>
            </div>

            <Alert>
              <AlertCircle className="w-4 h-4" />
              <AlertDescription>
                <strong>Note:</strong> Each row in your file will be processed as a separate LCA calculation. 
                Make sure your data is consistent and follows the template format.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Recent Uploads */}
      {uploadStatus === 'success' && (
        <Card>
          <CardHeader>
            <CardTitle>Processing Results</CardTitle>
            <CardDescription>
              Batch processing results from your uploaded data
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">15</p>
                  <p className="text-sm text-muted-foreground">Successfully Processed</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">5,240</p>
                  <p className="text-sm text-muted-foreground">Avg. Carbon Footprint (kg CO₂-eq)</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">73</p>
                  <p className="text-sm text-muted-foreground">Avg. Circularity Score</p>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button>
                  <Download className="w-4 h-4 mr-2" />
                  Download Results (PDF)
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Results (Excel)
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}