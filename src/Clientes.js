import { useState } from "react";
import "./App.css";
import { CreateNote, MarketingPricingLess2000, NavBar } from "./ui-components";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";

function App({ signOut }) {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateNote, setUpdateNote] = useState();

  return (
    <>
      <NavBar
        marginBottom="20px"
        width="100%"
        overrides={{
          Button34472029: { onClick: () => setShowCreateModal(true) },
          Button34472030: {
            onClick: async () => {
              await DataStore.clear();
              signOut();
            },
          },
        }}
      />
      <MarketingPricingLess2000
        width="85%"
        margin="20px"
        overrides={{
          Button34551917: {
            onClick: () =>
              (window.location.href =
                "https://buy.stripe.com/test_eVa7vf3rcaZf9tC9AA"),
          },
          Button34551934: {
            onClick: () =>
              (window.location.href =
                "https://buy.stripe.com/test_3cs7vfe5Qd7nbBKaEF"),
          },
        }}
      />
      <div
        className="modal"
        style={{ display: showCreateModal === false && "none" }}
      >
        <CreateNote />
      </div>
    </>
  );
}

export default withAuthenticator(App);
