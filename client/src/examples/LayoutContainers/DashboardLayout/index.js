

import { useEffect } from "react";

import { useLocation } from "react-router-dom";

import PropTypes from "prop-types";

import VuiBox from "components/VuiBox";

import { useVisionUIController, setLayout } from "context";

function DashboardLayout({ children }) {
  const [controller, dispatch] = useVisionUIController();
  const { miniSidenav } = controller;
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "dashboard");
  }, [pathname]);

  return (
    <VuiBox
      sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
        p: 3,
        position: "relative",

        [breakpoints.up("xl")]: {
          marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
          transition: transitions.create(["margin-left", "margin-right"], {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
          }),
        },
      })}
    >
      {children}
    </VuiBox>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
