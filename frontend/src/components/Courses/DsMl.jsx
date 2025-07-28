import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const DSML = () => {
  const whatsappNumber = '918287584509';
  const sampleMessage = encodeURIComponent("Hi, I'm interested in the Data Science & Machine Learning course. Please share the details!");

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-10 px-4">
      <div className="bg-gray-900 rounded-lg shadow-xl max-w-3xl w-full overflow-hidden">
        {/* Image Banner */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/4140/4140043.png"
          alt="Data Science & Machine Learning"
          className="w-full h-64 object-contain bg-gray-800 p-6"
        />

        {/* Content */}
        <div className="p-6 text-white">
          <h2 className="text-3xl font-bold mb-4">Data Science & Machine Learning Course</h2>
          <p className="mb-2"><span className="font-semibold">Duration:</span> 5–6 Months</p>
          <p className="mb-4"><span className="font-semibold">Cost:</span> ₹25,000</p>

          <h3 className="text-xl font-semibold mb-3">Syllabus</h3>

          <div className="max-h-[400px] overflow-y-scroll pr-2 text-sm leading-relaxed space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">1. Python Programming</h4>
              <ul className="list-disc list-inside">
                <li>Python Basics, Data Types, Loops</li>
                <li>Functions, File Handling, Modules</li>
                <li>OOPs Concepts</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">2. Data Analysis with Pandas & NumPy</h4>
              <ul className="list-disc list-inside">
                <li>DataFrames, Series, Indexing</li>
                <li>Cleaning & Preprocessing</li>
                <li>Groupby, Merge, Aggregation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">3. Data Visualization</h4>
              <ul className="list-disc list-inside">
                <li>Matplotlib, Seaborn, Plotly</li>
                <li>Dashboards and Reports</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">4. Statistics & Probability</h4>
              <ul className="list-disc list-inside">
                <li>Descriptive Stats, Probability Distributions</li>
                <li>Hypothesis Testing, Correlation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">5. Machine Learning</h4>
              <ul className="list-disc list-inside">
                <li>Supervised & Unsupervised Learning</li>
                <li>Scikit-learn, Model Selection</li>
                <li>Regression, Classification, Clustering</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">6. Deep Learning with TensorFlow & Keras</h4>
              <ul className="list-disc list-inside">
                <li>Neural Networks, CNN, RNN</li>
                <li>Model Evaluation, Hyperparameter Tuning</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">7. Natural Language Processing (NLP)</h4>
              <ul className="list-disc list-inside">
                <li>Text Preprocessing</li>
                <li>Word Embeddings, Transformers</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">8. SQL & Databases</h4>
              <ul className="list-disc list-inside">
                <li>SQL Queries, Joins</li>
                <li>Database Design, Normalization</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">9. Cloud & MLOps</h4>
              <ul className="list-disc list-inside">
                <li>Google Colab, AWS, Azure Basics</li>
                <li>Model Deployment with Streamlit, Flask</li>
                <li>Docker, CI/CD for ML</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">10. Capstone Project</h4>
              <ul className="list-disc list-inside">
                <li>End-to-End Real-World Project</li>
                <li>Model Deployment & Reporting</li>
              </ul>
            </div>
          </div>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${sampleMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded transition"
          >
            <FaWhatsapp size={20} /> Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default DSML;
