const schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    numOfDays: {
      type: Number,
    },
    type: {
      type: String,
      enum: ["social", "political", "natural", "economical", "cultural"],
    },
    status: {
      type: String,
      enum: ["ongoing", "completed", "achieved"],
      default: "ongoing",
    },
    users: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
    },
    noOfSignatures: {
      type: Number,
      default: 0,
    },
    totalSignatures: {
      type: Number,
      required: true,
    },
    actionTaken: {
      type: String,
    },
    totalDonations: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

module.exports = mongoose.model("Campaign", schema);
