const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class CourseController {

  // [GET] /courses/:slug
  show(req, res) {
    res.send('Courses detail');
  }
}

module.exports = new CourseController;