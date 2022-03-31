
import { forwardRef } from "react";

import PropTypes from "prop-types";

import VuiButtonRoot from "components/VuiButton/VuiButtonRoot";

const VuiButton = forwardRef(
  ({ color, variant, size, circular, iconOnly, children, ...rest }, ref) => (
    <VuiButtonRoot
      {...rest}
      ref={ref}
      color="white"
      variant={variant === "gradient" ? "contained" : variant}
      size={size}
      ownerState={{ color, variant, size, circular, iconOnly }}
    >
      {children}
    </VuiButtonRoot>
  )
);

VuiButton.defaultProps = {
  size: "medium",
  variant: "contained",
  color: "white",
  circular: false,
  iconOnly: false,
};

// Typechecking props for the VuiButton
VuiButton.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["text", "contained", "outlined", "gradient"]),
  color: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  circular: PropTypes.bool,
  iconOnly: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default VuiButton;
