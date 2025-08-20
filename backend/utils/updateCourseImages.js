// Script to update all courses in MongoDB with image URLs
// Run: node backend/utils/updateCourseImages.js

const mongoose = require('mongoose');
const Course = require('../models/CourseModel');

const courseImages = {
  '.NET Full Stack': 'https://cdn-icons-png.flaticon.com/512/6132/6132221.png',
  'Java Full Stack': 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
  'MEAN Full Stack': 'https://cdn-icons-png.flaticon.com/512/919/919825.png',
  'MERN Full Stack': 'https://cdn-icons-png.flaticon.com/512/919/919851.png',
  'Python Full Stack': 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
  'PHP Full Stack': 'https://cdn-icons-png.flaticon.com/512/919/919830.png',
  'Data Science & ML': 'https://cdn-icons-png.flaticon.com/512/4140/4140043.png',
  'Cyber Security & Ethical Hacking': 'https://cdn-icons-png.flaticon.com/512/633/633600.png',
  'Web Designing': 'https://cdn-icons-png.flaticon.com/512/1006/1006771.png',
  'MongoDB': 'https://cdn.iconscout.com/icon/free/png-256/mongodb-4-1175139.png',
  'React JS': 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  'Artificial Intelligence': 'https://cdn-icons-png.flaticon.com/512/4397/4397313.png',
  'C#': 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png',
  'Computer Hardware': 'https://cdn-icons-png.flaticon.com/512/222/222474.png',
  'JavaScript': 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
  'Node JS': 'https://nodejs.org/static/images/logo.svg',
  'Python': 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
  'Angular JS': 'https://angular.io/assets/images/logos/angular/angular.svg',
  'C': 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png',
  'C++': 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
  'Data Science': 'https://cdn-icons-png.flaticon.com/512/4140/4140043.png',
  'Ethical Hacking': 'https://cdn-icons-png.flaticon.com/512/633/633600.png',
  'SQL': 'https://cdn-icons-png.flaticon.com/512/2772/2772128.png',
};

async function updateImages() {
  await mongoose.connect('mongodb://localhost:27017/ncaitsolution', { useNewUrlParser: true, useUnifiedTopology: true });
  for (const [title, image] of Object.entries(courseImages)) {
    const result = await Course.updateMany({ title }, { $set: { image } });
    console.log(`Updated ${result.nModified || result.modifiedCount} course(s) for: ${title}`);
  }
  await mongoose.disconnect();
  console.log('Done updating course images.');
}

updateImages().catch(console.error);
