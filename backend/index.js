require("./config/global");
const port = process.env.PORT || 3000;

const connect = require("./config/db");
connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/user", require("./routes/UserRoute"));
app.use("/donation", require("./routes/DonationRoute"));
app.use("/campaign", require("./routes/CampaignRoute"));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
