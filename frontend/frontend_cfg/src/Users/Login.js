import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { Box, Container } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import UserHeader from "../Header/UserHeader";
import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:3000" });

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [data, setData] = useState({});

  const submitHandler = async () => {
    if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      return;
    }
    data.email = email;
    data.password = password;
    console.log(data);
    const response = await API.post("/user/login", data);
    console.log(response.data);
    if (response.data.status == 200) {
      localStorage.setItem("mobile", response.data.data.mobile);
      console.log(localStorage.mobile);
      alert("Login successfull, redirecting to home page");
      window.location.replace("/userhome");
    }
    // console.log(email, password);
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(./images/background.jpg)",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition:"center",
        backgroundSize: "cover"
      }}
    >
      <VStack spacing="10px">
        <UserHeader />
        <Container
          h="60vh"
          w="70%"
          centerContent
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Box
            h="80%"
            w="60%"
            p={4}
            centerContent
            style={{ backgroundColor: "transparent" }}
          >
            <div
              style={{ height: "300px", margin: "auto", backgroundImage: "url(https://library.kissclipart.com/20180905/arq/kissclipart-businessman-icon-png-clipart-computer-icons-user-p-f040ea1493575c42.jpg)", backgroundPosition: "center", backgroundSize: "cover" }}
            />
          </Box>
          <Box h="100%" w="100%" p={4} mt={12}>
            <FormControl id="email" isRequired>
              <FormLabel color="#86C232">Email Address</FormLabel>
              <Input
                value={email}
                type="email"
                placeholder="Enter Your Email Address"
                onChange={(e) => setEmail(e.target.value)}
                color="white"
              />
            </FormControl>
            <FormControl mt="5%" id="password" isRequired>
              <FormLabel color="#86C232">Password</FormLabel>
              <InputGroup size="md">
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  color="white"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
              width="100%"
              style={{
                marginTop: 15,
                backgroundColor: "#86C232",
                color: "white",
              }}
              onClick={submitHandler}
              mb="2"
            >
              Login
            </Button>
            <Button
              variant="solid"
              colorScheme="red"
              width="100%"
              onClick={() => {
                setEmail("guest@example.com");
                setPassword("12345678");
              }}
            >
              Get Guest User Credentials
            </Button>
          </Box>
        </Container>
        <div style={{position:"absolute", top: "65vh", left:"71vw", fontSize: 16, color: "#86C232", textDecoration: "underline"}}>
        <a href="/signup">Create an account</a>
        </div>
      </VStack>
    </div>
  );
};

export default Login;
