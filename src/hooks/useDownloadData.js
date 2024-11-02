import React from 'react';
import { useAppContext } from '../context/AppContext.jsx';

export const useDownloadData = () => {
  const { graphData } = useAppContext();

  const fileName = 'asylum_data.csv';

  function downloadJson() {
    const dataStr = JSON.stringify(graphData, null, 2); // Convert to string, formatted
    const blob = new Blob([dataStr], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();

    // Clean up the URL object
    URL.revokeObjectURL(url);
  }

  return { downloadJson };
};
