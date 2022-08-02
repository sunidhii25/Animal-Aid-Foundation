const {
  createOrder,
  saveDonation,
} = require("../controller/DonationController");
const { updateUserDonation } = require("../controller/UserController");
const { updateCampaign } = require("../controller/CampaignController");

// api call for creayting razorpay order
// router.post(
//   "/createOrder",
//   ValidateRequest({
//     body: {
//       type: "object",
//       properties: {
//         amount: { type: "number" },
//       },
//       required: ["amount"],
//     },
//   }),
//   async (req, res) => {
//     try {
//       req.body.currency = "INR";
//       let payment = await createOrder(req.body);
//       if (payment) {
//         let dataToSave = {
//           razorpayId: payment.id,
//           amount: payment.amount,
//           anonymous: true,
//         };
//       } else {
//         res.status(500).json({
//           status: 500,
//           message: "Something went wrong",
//           data: {},
//         });
//       }
//     } catch (error) {
//       res.status(500).json({
//         error: error + "",
//       });
//     }
//   }
// );

router.post("/updateUserDonation", async (req, res) => {
  try {
    let dataToSave = {
      paymentId: req.body.paymentId,
      amount: req.body.amount,
      anonymous: true,
    };
    if (req.user) {
      let reqUser = await updateUserDonation(req.user._id, payment);
      dataToSave.userId = reqUser.data._id;
      dataToSave.anonymous = false;
    }
    if (req.body.campaignLinked) {
      dataToSave.campaignLinked = req.body.campaignLinked;
      let updateCampaign = await updateCampaign(
        req.body.campaignLinked,
        req.body.amount
      );
    }
    let donation = await saveDonation(dataToSave);
    res.status(donation.status).json(donation);
  } catch (error) {
    res.status(500).json({
      error: error + "",
    });
  }
});

module.exports = router;
