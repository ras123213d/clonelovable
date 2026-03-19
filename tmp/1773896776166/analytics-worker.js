// Web Worker for analytics and heavy computations
// This helps reduce main thread blocking (TBT optimization)

let analyticsQueue = [];
let isProcessing = false;

// Process analytics events in batches
async function processAnalytics() {
  if (isProcessing || analyticsQueue.length === 0) return;
  
  isProcessing = true;
  const batch = analyticsQueue.splice(0, 10); // Process in batches of 10
  
  try {
    // Simulate analytics processing
    await new Promise(resolve => setTimeout(resolve, 50));
    
    // Send analytics data (placeholder)
    const results = batch.map(event => ({
      id: event.id,
      processed: true,
      timestamp: Date.now()
    }));
    
    self.postMessage({
      type: 'ANALYTICS_PROCESSED',
      data: results
    });
  } catch (error) {
    self.postMessage({
      type: 'ANALYTICS_ERROR',
      error: error.message
    });
  } finally {
    isProcessing = false;
    
    // Process remaining queue
    if (analyticsQueue.length > 0) {
      setTimeout(processAnalytics, 100);
    }
  }
}

// Handle messages from main thread
self.addEventListener('message', (event) => {
  const { type, data } = event.data;
  
  switch (type) {
    case 'TRACK_EVENT':
      analyticsQueue.push({
        id: Math.random().toString(36).substr(2, 9),
        ...data,
        timestamp: Date.now()
      });
      processAnalytics();
      break;
      
    case 'PROCESS_DATA':
      // Heavy data processing that would block main thread
      try {
        const processedData = processHeavyData(data);
        self.postMessage({
          type: 'DATA_PROCESSED',
          data: processedData
        });
      } catch (error) {
        self.postMessage({
          type: 'PROCESSING_ERROR',
          error: error.message
        });
      }
      break;
      
    default:
      console.warn('Unknown message type:', type);
  }
});

function processHeavyData(data) {
  // Placeholder for heavy computations
  // This could include complex calculations, data transformations, etc.
  return {
    processed: true,
    result: data,
    computedAt: Date.now()
  };
}

// Send ready signal
self.postMessage({ type: 'WORKER_READY' });