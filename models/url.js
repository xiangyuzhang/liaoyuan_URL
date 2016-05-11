var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// 建立第一个collection用来计数
var CounterSchema = Schema({
    _id: {type: String, required: true},
    seq: { type: Number, default: 0 }
});

// 建立第二个collection用来存储id和long_url
var urlSchema = new Schema({
  _id: {type: Number, index: true},
  long_url: String,
  created_at: Date
});


// 定义一个call back function，执行的行为是：在存储长URL之前，增加counter，并且将这个counter的目前值当做ID放在_id
var counter = mongoose.model('counter', CounterSchema);

urlSchema.pre('save', function(next){
  var doc = this;
  counter.findByIdAndUpdate({_id: 'url_count'}, {$inc: {seq: 1} }, function(error, counter) {
      if (error)
          return next(error);
      doc.created_at = new Date();
      doc._id = counter.seq;
      next();
  });
});



var Url = mongoose.model('Url', urlSchema);

module.exports = Url;
