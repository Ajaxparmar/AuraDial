// "use client";

// import React from 'react';
// import { Button } from "@/components/ui/button";

// interface KnowledgeBasePanelProps {
//   onClose: () => void;
// }

// const KnowledgeBasePanel: React.FC<KnowledgeBasePanelProps> = ({ onClose }) => {
//   const knowledgeItems = [
//     { id: 1, title: "Getting Started with AI Agents", date: "Aug 25, 2025" },
//     { id: 2, title: "Integrating NLU with Grok", date: "Aug 20, 2025" },
//     { id: 3, title: "Troubleshooting Common Issues", date: "Aug 15, 2025" },
//   ];

//   return (
//     <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex">
//       <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-800 p-4 overflow-auto h-full shadow-lg">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">Knowledge Base</h2>
//           <Button variant="ghost" onClick={onClose} className="text-red-500">
//             ✖
//           </Button>
//         </div>
//         <ul className="space-y-2">
//           {knowledgeItems.map((item) => (
//             <li key={item.id} className="p-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors">
//               <a href="#" className="text-teal-400 hover:underline">
//                 {item.title}
//               </a>
//               <p className="text-gray-500 text-sm">{item.date}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default KnowledgeBasePanel;

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function UploadSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upload PDFs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <svg
                  className="w-10 h-10 text-gray-400 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <p className="text-sm text-gray-500 mt-2">Drag and drop a file here, or click to select</p>
                <p className="text-xs text-gray-400">Supported formats: PDF (max 10MB)</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Website Knowledge Base</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                type="url"
                placeholder="https://example.com/"
                className="w-full"
              />
              <Button className="w-full">Add to Knowledge Base</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardContent className="flex flex-col items-center justify-center h-32">
          <svg
            className="w-6 h-6 text-gray-400 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <p className="text-sm text-gray-500 mt-2">No files uploaded yet</p>
          <p className="text-xs text-gray-400">Upload files to get started</p>
        </CardContent>
      </Card>
    </div>
  )
}