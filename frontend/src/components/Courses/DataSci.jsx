import React from 'react';

const DataSci = () => {
  const whatsappNumber = '918287584509';
  const sampleMessage = encodeURIComponent(
    "Hi, I'm interested in the Data Science course. Please share the details!"
  );

  return (
  <div className="min-h-screen bg-white flex items-center justify-center py-10 px-4">
  <div className="bg-white border border-gray-200 rounded-lg shadow-xl max-w-7xl w-full overflow-hidden">
        {/* Image Banner */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/4140/4140043.png"
          alt="Data Science"
          className="w-full h-64 object-contain bg-gray-100 p-6"
        />

        {/* Content */}
  <div className="p-6 text-gray-900">
          <h2 className="text-3xl font-bold mb-4">Data Science Course</h2>
          <p className="mb-2">
            <span className="font-semibold">Duration:</span> 2 Months
          </p>
          <p className="mb-4">
            <span className="font-semibold">Cost:</span> ₹20,000
          </p>

          <h3 className="text-xl font-semibold mb-3">Syllabus</h3>

          <div className="max-h-[400px] overflow-y-scroll pr-2 text-sm leading-relaxed space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">1. Introduction to Data Science</h4>
              <ul className="list-disc list-inside">
                <li>What is Data Science?</li>
                <li>Data Science Lifecycle and Applications</li>
                <li>Tools and Technologies Overview</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">2. Python for Data Science</h4>
              <ul className="list-disc list-inside">
                <li>Python Basics and Syntax</li>
                <li>Data Structures and Libraries (NumPy, Pandas)</li>
                <li>Data Cleaning and Preprocessing</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">3. Data Visualization</h4>
              <ul className="list-disc list-inside">
                <li>Matplotlib and Seaborn</li>
                <li>Plotly and Interactive Visualizations</li>
                <li>Storytelling with Data</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">4. Statistics and Probability</h4>
              <ul className="list-disc list-inside">
                <li>Descriptive and Inferential Statistics</li>
                <li>Probability Theory</li>
                <li>Hypothesis Testing and Confidence Intervals</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">5. Machine Learning Fundamentals</h4>
              <ul className="list-disc list-inside">
                <li>Supervised vs Unsupervised Learning</li>
                <li>Regression, Classification, Clustering</li>
                <li>Model Evaluation and Validation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">6. Advanced Machine Learning</h4>
              <ul className="list-disc list-inside">
                <li>Decision Trees and Random Forests</li>
                <li>Support Vector Machines</li>
                <li>Ensemble Methods</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">7. Deep Learning Basics</h4>
              <ul className="list-disc list-inside">
                <li>Introduction to Neural Networks</li>
                <li>Deep Learning Frameworks (TensorFlow, Keras)</li>
                <li>Building and Training Neural Networks</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">8. Natural Language Processing (NLP)</h4>
              <ul className="list-disc list-inside">
                <li>Text Preprocessing</li>
                <li>Sentiment Analysis</li>
                <li>Topic Modeling and NLP Applications</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">9. Big Data and Cloud Computing</h4>
              <ul className="list-disc list-inside">
                <li>Introduction to Big Data Concepts</li>
                <li>Hadoop and Spark Overview</li>
                <li>Cloud Platforms for Data Science (AWS, Azure)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">10. Data Engineering Basics</h4>
              <ul className="list-disc list-inside">
                <li>Data Warehousing and ETL Processes</li>
                <li>Working with Databases (SQL, NoSQL)</li>
                <li>Data Pipelines and Automation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">11. Model Deployment and Monitoring</h4>
              <ul className="list-disc list-inside">
                <li>API Creation for Models</li>
                <li>Docker and Containerization</li>
                <li>Monitoring and Maintenance of Models</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">12. Capstone Project</h4>
              <ul className="list-disc list-inside">
                <li>End-to-End Data Science Project</li>
                <li>Data Collection, Cleaning, Modeling, and Deployment</li>
                <li>Presentation and Documentation</li>
              </ul>
            </div>
          </div>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${sampleMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block text-center bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded transition"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default DataSci;
