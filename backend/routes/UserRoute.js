const {
  createUser,
  login,
  resetPassword,
  getAllUsers,
  getUser,
  signUpForCampaign,
} = require("../controller/UserController");

router.post(
  "/signup",
  ValidateRequest({
    body: {
      type: "object",
      properties: {
        name: {
          type: "string",
        },
        mobile: {
          type: "string",
        },
        email: {
          type: "string",
        },
        password: {
          type: "string",
        },
      },
    },
  }),
  async (req, res) => {
    try {
      let user = await createUser(req.body);
      res.status(user.status).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
);

router.post(
  "/login",
  ValidateRequest({
    body: {
      type: "object",
      properties: {
        email: {
          type: "string",
          format: "email",
        },
        password: {
          type: "string",
        },
      },
    },
  }),
  async (req, res) => {
    try {
      let user = await login(req.body);
      res.status(user.status).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
);

router.post(
  "/resetPassword",
  ValidateRequest({
    body: {
      type: "object",
      properties: {
        password: {
          type: "string",
        },
        newPassword: {
          type: "string",
        },
      },
    },
  }),
  async (req, res) => {
    try {
      let user = await resetPassword(req.body);
      res.status(user.status).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
);

router.get("/getAllUsers", async (req, res) => {
  try {
    let users = await getAllUsers();
    return res.status(users.status).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post("/getUser", async (req, res) => {
  try {
    let user = await getUser(req.user._id);
    res.status(user.status).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post("/signUpForCampaign", async (req, res) => {
  try {
    let data = await signUpForCampaign(req.body);
    res.status(data.status).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
