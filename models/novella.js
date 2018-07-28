const mongoose = require("mongoose");

const { Schema } = mongoose;

// auto increment를 위한 스키마 작성
const postCounterSchema = new Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 }
});

const postCounter = mongoose.model("postCounter", postCounterSchema);

const postSchema = new Schema({
  doc_number: String,
  title: {
    type: String,
    default: ""
  },
  author: Object,
  bucket: {
    type: Array,
    default: ["묘목 구입", "땅 준비", "나무 심고 거름 주기", "매달 물주기"]
  },
  content: {
    type: String,
    default: ""
  },
  isReport: {
    type: Boolean,
    default: false
  },
  tags: {
    type: Array,
    default: []
  },
  like: {
    type: Number,
    default: 0
  },
  comments: {
    type: Array,
    default: []
  }
});

// novellaShema의 ID를 저장한다. 나중에 불러올 때는 이걸로 접근해서 불러오도록 한다.
postSchema.pre("save", function(next) {
  postCounter
    .findByIdAndUpdate(
      { _id: "entityId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    )
    .then(count => {
      console.log(`...count: ${JSON.stringify(count)}`);
      this.doc_number = count.seq;
      next();
    })
    .catch(err => {
      console.error(`counter error -> ${err}`);
      throw err;
    });
});

module.exports = mongoose.model("post", postSchema);
