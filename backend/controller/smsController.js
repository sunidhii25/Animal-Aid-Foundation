require("../config/global");
const User = require("../model/User");

const numbers = [];

async function notifUsers(body) {
  try {
    const users = await User.find();
    console.log(users);
    // for (let user in users) {
    //   numbers.push(user.mobile);
    // }
    for (var i = 0; i < users.length; ++i) numbers.push(users[i].mobile);
    const newNumbers = numbers.map((no) => "+91" + no);

    Promise.all(
      newNumbers.map((number) => {
        return twilio.messages.create({
          to: number,
          from: process.env.TWILIO_MESSAGING_SERVICE_SID,
          body: body,
        });
      })
    )
      .then((messages) => {
        console.log("Messages sent!" + messages);
      })
      .catch((err) => console.error(err));
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = { notifUsers };
//console.log(numbers);
