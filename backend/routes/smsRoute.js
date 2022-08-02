const { notifUsers } = require("../controller/smsController");

router.get(
  "/sms",

  async (req, res) => {
    try {
      await notifUsers();
      res.status(200).send("Text Send");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
);

module.exports = router;
