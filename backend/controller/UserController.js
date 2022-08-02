const User = require("../model/User");
const Campaign = require("../model/Campaign");

async function createUser(data) {
  try {
    data.password = crypto
      .createHmac("sha256", process.env.SHA_SALT)
      .update(data.password)
      .digest("hex");
    const user = new User(data);
    let saveData = await user.save();
    return {
      status: 201,
      message: "User created successfully",
      data: saveData,
    };
  } catch (error) {
    console.log("coldnt make user")
    throw new Error(error);
  }
}

async function login(data) {
  try {
    let user = await User.findOne({ email: data.email });
    if (!user) {
      return {
        status: 404,
        message: "User not found",
        data: {},
      };
    }
    let password = crypto
      .createHmac("sha256", process.env.SHA_SALT)
      .update(data.password)
      .digest("hex");
    let match = await User.findOne({ password: password });
    if (!match) {
      return {
        status: 401,
        message: "Invalid password",
        data: {},
      };
    }
    return {
      status: 200,
      message: "Login successful",
      data: user,
    };
  } catch (error) {
    throw new Error(error);
  }
}

async function resetPassword(data) {
  try {
    let user = await User.findOne({ _id: data.id });
    if (!user) {
      return {
        status: 404,
        message: "User not found",
        data: {},
      };
    }
    let password = crypto
      .createHmac("sha256", process.env.SHA_SALT)
      .update(data.password)
      .digest("hex");
    if (password !== user.password) {
      return {
        status: 401,
        message: "Invalid password",
        data: {},
      };
    }
    user.password = crypto
      .createHmac("sha256", process.env.SHA_SALT)
      .update(data.newPassword)
      .digest("hex");
    let saveData = await user.save();
    return {
      status: 200,
      message: "Password reset successful",
      data: saveData,
    };
  } catch (error) {
    throw new Error(error);
  }
}

async function updateUserDonation(name, data) {
  try {
    let user = await User.findOne({ name: name });
    if (!user) {
      return {
        status: 404,
        message: "User not found",
        data: {},
      };
    }
    user.amountDonated += data.amount;
    let points = data.amount / 20;
    user.points += points;
    if (user.donor == false) {
      user.donor = true;
    }
    let saveData = await user.save();
    return {
      status: 200,
      message: "User updated successfully",
      data: user,
    };
  } catch (error) {
    throw new Error(error);
  }
}

async function getAllUsers() {
  try {
    let users = await User.find({});
    if (_.isEmpty(users)) {
      return {
        status: 204,
        message: "No users found",
        data: {},
      };
    }
    return {
      status: 200,
      message: "Users found",
      data: users,
    };
  } catch (error) {
    throw new Error(error);
  }
}

async function getUser(id) {
  try {
    let user = await User.findOne({ _id: id });
    if (!user) {
      return {
        status: 404,
        message: "User not found",
        data: {},
      };
    }
    return {
      status: 200,
      message: "User found",
      data: user,
    };
  } catch (error) {
    throw new Error(error);
  }
}

async function signUpForCampaign(data) {
  try {
    let campaign = await Campaign.findOne({ _id: data.campaignId });
    if (!campaign) {
      return {
        status: 404,
        message: "Campaign not found",
        data: {},
      };
    }
    let user = await User.findOne({mobile:data.mobile});
    let userId = user._id;
    campaign.users.push(userId);
    campaign.numberOfVolunteers += 1;
    await User.updateOne({ _id: userId }, { citizen: true });
    let saveData = await campaign.save();
    return {
      status: 200,
      message: "User signed up for campaign successfully",
      data: saveData,
    };
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  createUser,
  login,
  resetPassword,
  updateUserDonation,
  getAllUsers,
  getUser,
  signUpForCampaign,
};
