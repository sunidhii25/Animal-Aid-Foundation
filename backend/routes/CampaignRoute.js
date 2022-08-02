const {
  createCampaign,
  getAllCampaign,
} = require("../controller/CampaignController");

//route for posting a new campaign by the admin
router.post(
  "/createCampaign",
  ValidateRequest({
    body: {
      type: "object",
      properties: {
        title: {
          type: "string",
          minLength: 1,
          maxLength: 255,
        },
        desc: {
          type: "string",
        },
        startDate: {
          type: "string",
        },
        endDate: {
          type: "string",
        },
        type: {
          type: "string",
        },
        totalSignatures: {
          type: "string",
        },
      },
    },
  }),
  async (req, res) => {
    try {
      let campaign = await createCampaign(req.body);
      res.status(campaign.status).json(campaign);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
);

//get all the campaigns data
router.get("/getCampaigns", async (req, res) => {
  try {
    let campaigns = await getAllCampaign();
    console.log(campaigns);
    res.status(campaigns.status).json(campaigns);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
