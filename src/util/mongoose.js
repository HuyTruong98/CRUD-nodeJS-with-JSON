module.exports = {

  // tác dụng: nhận đối số vào thì map qua xong toObject qua từng phần tử bên trong
  mutipleMongooseToObject: function (mongooses) {
    return mongooses.map(mongoose => mongoose.toObject());
  },

  // dùng ở trang chi tiết
  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  }
};