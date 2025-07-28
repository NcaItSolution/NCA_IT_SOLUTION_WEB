import React from 'react'

const AI = () => {
  const whatsappNumber = '918287584509';
  const sampleMessage = encodeURIComponent("Hi, I'm interested in the Artificial Intelligence course. Please share the details!");

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-10 px-4">
      <div className="bg-gray-900 rounded-lg shadow-xl max-w-3xl w-full overflow-hidden">
        {/* Image Banner */}
        <img
          src="data:image/jpeg;base64,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" // 👈 Add this image to your `public/images` folder
          alt="Artificial Intelligence"
          className="w-full h-64 object-cover bg-gray-800"
        />

        {/* Content */}
        <div className="p-6 text-white">
          <h2 className="text-3xl font-bold mb-4">Artificial Intelligence Course</h2>
          <p className="mb-2"><span className="font-semibold">Duration:</span> 2 Months</p>
          <p className="mb-4"><span className="font-semibold">Cost:</span> ₹70,000</p>

          <h3 className="text-xl font-semibold mb-3">Syllabus</h3>

          <div className="max-h-[400px] overflow-y-scroll pr-2 text-sm leading-relaxed space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">1. Introduction to AI</h4>
              <ul className="list-disc list-inside">
                <li>What is AI? History and Applications</li>
                <li>Types of AI – Narrow, General, Super AI</li>
                <li>Ethical and Social Issues</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">2. Problem Solving & Search</h4>
              <ul className="list-disc list-inside">
                <li>State Space Representation</li>
                <li>Uninformed Search: BFS, DFS</li>
                <li>Informed Search: A*, Greedy Search</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">3. Knowledge Representation</h4>
              <ul className="list-disc list-inside">
                <li>Propositional & Predicate Logic</li>
                <li>Semantic Networks, Ontologies</li>
                <li>Frames, Scripts</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">4. Machine Learning</h4>
              <ul className="list-disc list-inside">
                <li>Supervised, Unsupervised, Reinforcement Learning</li>
                <li>Regression, Classification Algorithms</li>
                <li>K-Means, Decision Trees, SVMs</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">5. Deep Learning</h4>
              <ul className="list-disc list-inside">
                <li>Neural Networks, Perceptron</li>
                <li>Backpropagation & Activation Functions</li>
                <li>Convolutional & Recurrent Neural Networks</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">6. Natural Language Processing (NLP)</h4>
              <ul className="list-disc list-inside">
                <li>Tokenization, POS Tagging</li>
                <li>Text Classification & Sentiment Analysis</li>
                <li>Chatbots and Language Models</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">7. Computer Vision</h4>
              <ul className="list-disc list-inside">
                <li>Image Processing Techniques</li>
                <li>Face Recognition & Object Detection</li>
                <li>OpenCV & Deep Learning Models</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">8. Robotics & Expert Systems</h4>
              <ul className="list-disc list-inside">
                <li>Robotic Perception and Movement</li>
                <li>Knowledge-Based Agents</li>
                <li>Inference Engines & Rule-Based Systems</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">9. AI Tools & Frameworks</h4>
              <ul className="list-disc list-inside">
                <li>Python, TensorFlow, Keras, PyTorch</li>
                <li>Scikit-Learn, Pandas, Numpy</li>
                <li>Google Colab, Jupyter Notebooks</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">10. Capstone Project</h4>
              <ul className="list-disc list-inside">
                <li>AI-Powered Web or Mobile App</li>
                <li>Model Training, Evaluation & Deployment</li>
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
  )
}

export default AI
