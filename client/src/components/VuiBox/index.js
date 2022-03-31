
import { forwardRef } from "react";

import PropTypes from "prop-types";

import VuiBoxRoot from "components/VuiBox/VuiBoxRoot";

const VuiBox = forwardRef(
  ({ variant, bgColor, color, opacity, borderRadius, shadow, ...rest }, ref) => (
    <VuiBoxRoot
      {...rest}
      ref={ref}
      ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow }}
    />
  )
);

VuiBox.defaultProps = {
  variant: "contained",
  bgColor: "transparent",
  color: "dark",
  opacity: 1,
  borderRadius: "none",
  shadow: "none",
};

VuiBox.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  bgColor: PropTypes.string,
  color: PropTypes.string,
  opacity: PropTypes.number,
  borderRadius: PropTypes.string,
  shadow: PropTypes.string,
};

export default VuiBox;
