const Campaign = require("../model/Campaign");
const { notifUsers } = require("./smsController");

//Function to create a new campaign
exports.createCampaign = async (data) => {
  try {
    //as soon as the campaign is about to be posted, we can make the
    const status = "ongoing";
    data.status = status;
    const campaign = new Campaign(data);
    let saveData = await campaign.save();
    await notifUsers(data.desc);
    return {
      status: 201,
      message: "Campaign created successfully",
      data: saveData,
    };
  } catch (error) {
    console.log(error);
  }
};

// function to get all the campaign details
exports.getAllCampaign = async () => {
  //getting all the campaigns from the mongodb
  const campaigns = await Campaign.find();
  if (_.isEmpty(campaigns)) {
    return {
      status: 204,
      message: "Campaigns not found",
      data: {},
    };
  }

  return {
    status: 200,
    message: "Campaigns Found",
    data: campaigns,
  };
};

exports.updateCampaign = async (id, amount) => {
  try {
    let update = await Campaign.findOne({ _id: id });
    update.amount += amount;
    let save = await update.save();
    return {
      status: 200,
      message: "Amount Updated successfully",
      data: save,
    };
  } catch (e) {
    throw new Error(e);
  }
};
