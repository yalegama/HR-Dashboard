

import { useState } from "react";

import PropTypes from "prop-types";

import Fade from "@mui/material/Fade";

import VuiBox from "components/VuiBox";

import VuiAlertRoot from "components/VuiAlert/VuiAlertRoot";
import VuiAlertCloseIcon from "components/VuiAlert/VuiAlertCloseIcon";

function VuiAlert({ color, dismissible, children, ...rest }) {
  const [alertStatus, setAlertStatus] = useState("mount");

  const handleAlertStatus = () => setAlertStatus("fadeOut");

  const alertTemplate = (mount = true) => (
    <Fade in={mount} timeout={300}>
      <VuiAlertRoot ownerState={{ color }} {...rest}>
        <VuiBox display="flex" alignItems="center" color="white">
          {children}
        </VuiBox>
        {dismissible ? (
          <VuiAlertCloseIcon onClick={mount ? handleAlertStatus : null}>&times;</VuiAlertCloseIcon>
        ) : null}
      </VuiAlertRoot>
    </Fade>
  );

  switch (true) {
    case alertStatus === "mount":
      return alertTemplate();
    case alertStatus === "fadeOut":
      setTimeout(() => setAlertStatus("unmount"), 400);
      return alertTemplate(false);
    default:
      alertTemplate();
      break;
  }

  return null;
}

VuiAlert.defaultProps = {
  color: "info",
  dismissible: false,
};

VuiAlert.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  dismissible: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default VuiAlert;
