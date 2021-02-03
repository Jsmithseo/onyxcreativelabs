import React from "react";
import { Container } from "reactstrap";
import HubspotForm from "react-hubspot-form";

const Index = () => {
  return (
    <Container>
      <h1>Welcome to Onyx Creative labs</h1>
      <HubspotForm
        portalId="9349146"
        formId="9604d8c8-c7da-4b4d-b290-3adc1be24065"
        onSubmit={() => console.log("Submit!")}
        onReady={(form) => console.log("Form ready!")}
        loading={<div>Loading...</div>}
      />
    </Container>
  );
};

export default Index;