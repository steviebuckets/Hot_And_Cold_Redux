const mongoose = require('mongoose');

//structure for a user lowest guess
const currentLowestScoreSchema = mongoose.Schema({
  "lowest_score": { type: String, required: true}
});

const newLowestScoreSchema = mongoose.Schema({
  "new_score": { type: String, required: true}
});

const CurrentLow = mongoose.model('CurrentLow', currentLowestScoreSchema);

const NewScore = mongoose.model('NewScore', newLowestScoreSchema);

module.exports = {
  CurrentLow: CurrentLow,
  NewScore: NewScore
}
