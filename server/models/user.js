const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

// Define Model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
  name: String,
  regno: { type: String, unique: true },
  points: Number,
});

// on save hook,
userSchema.pre('save', function (next) {
  const user = this;

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, null, (error, hash) => {
      if (error) {
        return next(error);
      }
      user.password = hash;
      next();
    });
  });
});

// Create Model
const ModelClass = mongoose.model('user', userSchema);

// Export Model
module.exports = ModelClass;
