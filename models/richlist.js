var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RichlistSchema = new Schema({
  coin: { type: String },
  received: { type: Array, default: [] },
  balance: { type: Array, default: [] },
  burned: { type: Array, default: [] },
  claimedbalance: { type: Array, default: [] }
});

module.exports = mongoose.model('Richlist', RichlistSchema);