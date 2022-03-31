
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import Icon from "@mui/material/Icon";

import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function DefaultNavbarLink({ icon, name, route }) {
  return (
    <>
      <VuiBox
        component={Link}
        to={route}
        mx={1}
        p={1}
        display="flex"
        alignItems="center"
        sx={{ cursor: "pointer", userSelect: "none" }}
      >
        <Icon
          sx={{
            color: ({ palette: { white } }) => white.main,
            verticalAlign: "middle",
          }}
        >
          {icon}
        </Icon>
        <VuiTypography
          variant="button"
          fontWeight="regular"
          color="white"
          textTransform="capitalize"
          sx={{ width: "100%", lineHeight: 0 }}
        >
          &nbsp;{name}
        </VuiTypography>
      </VuiBox>
    </>
  );
}

DefaultNavbarLink.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  light: PropTypes.bool.isRequired,
};

export default DefaultNavbarLink;
