const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    accessLevel: {
      type: String,
      enum: ["admin", "user"],
    },
    citizen: {
      type: Boolean,
      default: false,
    },
    volunteer: {
      type: Boolean,
      default: false,
    },
    donor: {
      type: Boolean,
      default: false,
    },
    amountDonated: {
      type: Number,
      default: 0,
    },
    points: {
      type: Number,
      default: 0,
    },
    interests: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

module.exports = mongoose.model("User", schema);
