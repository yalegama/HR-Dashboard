

import { forwardRef } from "react";

import PropTypes from "prop-types";

import VuiBadgeRoot from "components/VuiBadge/VuiBadgeRoot";

const VuiBadge = forwardRef(
  ({ color, variant, size, circular, indicator, border, container, children, ...rest }, ref) => (
    <VuiBadgeRoot
      {...rest}
      ownerState={{ color, variant, size, circular, indicator, border, container, children }}
      ref={ref}
      color="default"
    >
      {children}
    </VuiBadgeRoot>
  )
);

VuiBadge.defaultProps = {
  color: "info",
  variant: "gradient",
  size: "sm",
  circular: false,
  indicator: false,
  border: false,
  children: false,
  container: false,
};

// Typechecking props of the VuiBadge
VuiBadge.propTypes = {
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
  variant: PropTypes.oneOf(["gradient", "contained"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  circular: PropTypes.bool,
  indicator: PropTypes.bool,
  border: PropTypes.bool,
  children: PropTypes.node,
  container: PropTypes.bool,
};

export default VuiBadge;
