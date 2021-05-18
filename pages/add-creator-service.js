import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { getUser } from "../src/graphql/queries";
import { createUser, updateUser } from "../src/graphql/mutations";
import { withSSRContext } from "aws-amplify";
import { API } from "@aws-amplify/api";
import { Auth } from "@aws-amplify/auth";
import Navbar from "../components/Navbar";
import { Storage } from "@aws-amplify/storage";
import { AmplifyS3Image } from "@aws-amplify/ui-react";
import { v4 as uuid } from "uuid";
import ImageUploader from "../components/ImageUploader";

export async function getServerSideProps({ req, res }) {
  const { Auth, API } = withSSRContext({ req });
  try {
    const user = await Auth.currentAuthenticatedUser();
    const response = await API.graphql({
      query: getUser,
      variables: { id: user.attributes.sub },
    });
    if (response.data.getUser) {
      return {
        props: {
          mode: "EDIT",
          user: response.data.getUser,
          error: false,
        },
      };
    } else {
      return {
        props: {
          mode: "ADD",
          error: false,
        },
      };
    }
  } catch (err) {
    console.log(err);
    return {
      props: {
        error: true,
      },
    };
  }
}

const AddCreatorService = ({ user, error, mode }) => {
  const [firstName, setFirstName] = useState(
    mode === "EDIT" ? user.firstName : ""
  );
  const [secondName, setSecondName] = useState(
    mode === "EDIT" ? user.lastName : ""
  );
  const [description, setDescription] = useState(
    mode === "EDIT" ? user.description : ""
  );
  const [editImage, setEditImage] = useState(!user.image);
  const [userImage, setUserImage] = useState(null);

  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [contactPhoneNumber, setContactPhoneNumber] = useState("");
  const [contactEmail, setContactEmail] = useState("");


  const imageUploadHandler = (event) => {
    setUserImage(event.target.files[0]);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    const currentUser = await Auth.currentAuthenticatedUser();
    try {
     
      const result = await API.graphql({
        query: mode === "EDIT" ? updateUser : createUser,
        variables: {
          input: {
            id: currentUser.attributes.sub,
            image: userImage ? key : user.image,
            firstName: firstName,
            lastName: secondName,
            description: description,
          },
        },
      });
      console.log(result);
      window.location.href = "/";
    } catch (err) {
      console.log(err);
    }
  };

  if (error) {
    return (
      <div>
        <Navbar />
        <h1>Something Went Wrong! Please Try Again Later.</h1>
      </div>
    );
  }
  return (
    <div className="d-flex flex-column justify-content-center w-100 h-100">
      <Navbar />
      <h1 className="align-self-center">Add Creator Service</h1>
      <Form className="w-50 align-self-center">
        
        <Form.Group className="mt-2" controlId="serviceName">
          <Form.Label>Service Name</Form.Label>
          <Form.Control
            type="text"
            value={serviceName}
            placeholder="Enter the name of your service"
            onChange={(event) => {
              setServiceName(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mt-2" controlId="contactPhoneNumber">
          <Form.Label>Contact Phone Number</Form.Label>
          <Form.Control
            type="email"
            value={contactPhoneNumber}
            placeholder="Enter Your Contact Phone Number"
            onChange={(event) => {
              setContactPhoneNumber(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mt-2" controlId="contactEmail">
          <Form.Label>Contact Email Address</Form.Label>
          <Form.Control
            type="email"
            value={contactEmail}
            placeholder="Enter Your Contact Email Address"
            onChange={(event) => {
              setContactEmail(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mt-2" controlId="serviceDescription">
          <Form.Label>Service Description</Form.Label>
          <Form.Control
            as="textarea"
            value={serviceDescription}
            rows={5}
            placeholder="Enter Your Description"
            onChange={(event) => {
              setServiceDescription(event.target.value);
            }}
          />
        </Form.Group>
        <button
          type="submit"
          onClick={submitHandler}
          className="btn btn-primary"
        >
          Submit
        </button>
      </Form>
    </div>
  );
};
export default AddCreatorService;
