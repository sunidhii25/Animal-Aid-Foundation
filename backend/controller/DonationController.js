const Donation = require("../model/Donation");

async function createOrder(data) {
  try {
    const order = new Promise((resolve, reject) => {
      instance.orders.create(data, function (err, order) {
        if (err) reject(err);
        resolve(order);
      });
    });
    let response = await order;
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

async function saveDonation(data) {
  try {
    const donation = new Donation(data);
    let saveData = await donation.save();
    return {
      status: 201,
      message: "Donation created successfully",
      data: saveData,
    };
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { createOrder, saveDonation };
