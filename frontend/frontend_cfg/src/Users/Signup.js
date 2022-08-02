import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Container } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { useState } from "react";
import UserHeader from "../Header/UserHeader";
import axios from "axios";
const API = axios.create({ baseURL: 'http://localhost:3000' })

const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();

  const [data,setData] = useState({});
  const [name, setName] = useState();
  const [mobile,setMobile] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(password.length);
    data.email = email;
    data.name = name;
    data.password = password;
    data.mobile = mobile;
    console.log(data);
    if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      return;
    } else if (password.length < 8) {
      toast({
        title: "Password should be more than 8 characters",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      return;
    }

    const response = await API.post("/user/signup",data);
    // console.log(response.data);
    alert(response.data.message);
    if(response.data.message === "User created successfully"){
      window.location.replace("/login");
    }
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
    <VStack spacing="5px">
      <UserHeader/>
      <div style={{width: "50vw"}}>
      <FormControl id="first-name" isRequired>
        <FormLabel color="#36B286" mt="5">Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
          color="white"
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel color="#36B286" mt="2">Email Address</FormLabel>
        <Input
          type="email"
          placeholder="Enter Your Email Address"
          onChange={(e) => setEmail(e.target.value)}
          color="white"

        />
      </FormControl>
      <FormControl id="mobile" isRequired>
        <FormLabel color="#36B286" mt="2">Mobile Number</FormLabel>
        <Input
          type="number"
          placeholder="Enter your mobile number"
          onChange={(e) => setMobile(e.target.value)}
          color="white"

        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel color="#36B286" mt="2">Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          color="white"

          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="confirmpassword" isRequired>
        <FormLabel color="#36B286" mt="2">Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Confirm password"
            onChange={(e) => setConfirmpassword(e.target.value)}
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
        colorScheme="green"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Sign Up
      </Button>
      </div>
    </VStack>
    </div>
  );
};

export default Signup;
