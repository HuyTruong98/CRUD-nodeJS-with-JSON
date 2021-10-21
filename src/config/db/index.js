const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/education_dev');
    console.log("kết nối thành công!!");

  } catch (error) {
    console.log("kết nối thất bại");
  }
}

module.exports = { connect };