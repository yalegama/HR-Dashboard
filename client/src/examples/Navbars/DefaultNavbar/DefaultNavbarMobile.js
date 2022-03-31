
import PropTypes from "prop-types";

import Menu from "@mui/material/Menu";

import VuiBox from "components/VuiBox";

import DefaultNavbarLink from "examples/Navbars/DefaultNavbar/DefaultNavbarLink";
import palette from "assets/theme/base/colors";
import tripleLinearGradient from "assets/theme/functions/tripleLinearGradient";

function DefaultNavbarMobile({ open, close }) {
  const { width } = open && open.getBoundingClientRect();

  return (
    <Menu
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      anchorEl={open}
      open={Boolean(open)}
      onClose={close}
      sx={{
        marginTop: "8px",
      }}
      MenuListProps={{
        style: {
          width: `calc(${width}px - 4rem)`,
          backgroundImage: tripleLinearGradient(
            palette.gradients.cover.main,
            palette.gradients.cover.state,
            palette.gradients.cover.stateSecondary,
            palette.gradients.cover.deg
          ),
          backgroundColor: "unset !important",
          padding: "8px",
        },
      }}
    >
      <VuiBox px={0.5}>
        <DefaultNavbarLink icon="donut_large" name="dashboard" route="/dashboard" />
        <DefaultNavbarLink icon="person" name="profile" route="/profile" />
        <DefaultNavbarLink icon="account_circle" name="sign up" route="/authentication/sign-up" />
        <DefaultNavbarLink icon="key" name="sign in" route="/authentication/sign-in" />
      </VuiBox>
    </Menu>
  );
}

DefaultNavbarMobile.propTypes = {
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  close: PropTypes.oneOfType([PropTypes.func, PropTypes.bool, PropTypes.object]).isRequired,
};

export default DefaultNavbarMobile;
