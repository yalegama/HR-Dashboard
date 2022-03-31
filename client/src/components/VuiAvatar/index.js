
import { forwardRef } from "react";

import PropTypes from "prop-types";

import VuiAvatarRoot from "components/VuiAvatar/VuiAvatarRoot";

const VuiAvatar = forwardRef(({ bgColor, size, shadow, ...rest }, ref) => (
  <VuiAvatarRoot ref={ref} ownerState={{ shadow, bgColor, size }} {...rest} />
));

VuiAvatar.defaultProps = {
  bgColor: "transparent",
  size: "md",
  shadow: "none",
};

VuiAvatar.propTypes = {
  bgColor: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
  shadow: PropTypes.oneOf(["none", "xs", "sm", "md", "lg", "xl", "xxl", "inset"]),
};

export default VuiAvatar;
