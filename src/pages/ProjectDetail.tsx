// Add this section to your existing ProjectDetail component where appropriate

// For the Smart Parking project specifically:
{project.id === "smart-parking-system" && (
  <div className="project-specific-content">
    <h3>System Architecture</h3>
    <p>
      This parking management system uses computer vision techniques to identify available parking spaces
      and track vehicles entering and leaving the parking facility. The application is built with a modular
      architecture consisting of:
    </p>
    <ul>
      <li><strong>Detection Engine:</strong> Processes video feeds to detect vehicles and parking spaces</li>
      <li><strong>Allocation Engine:</strong> Manages the parking space assignments</li>
      <li><strong>Visualization Component:</strong> Renders the current state of the parking facility</li>
      <li><strong>Monitoring Dashboard:</strong> Provides real-time statistics and controls</li>
    </ul>

    <h3>Key Technical Challenges</h3>
    <p>
      Building this system required solving several technical challenges, including:
    </p>
    <ul>
      <li>Implementing reliable vehicle detection in varying lighting and weather conditions</li>
      <li>Creating an efficient algorithm for parking space allocation that minimizes wait time</li>
      <li>Developing a responsive UI that displays real-time information without performance degradation</li>
      <li>Managing concurrent processing of video feeds and user interactions</li>
    </ul>
  </div>
)}