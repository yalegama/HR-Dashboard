
import PropTypes from "prop-types";

import colors from "assets/theme/base/colors";

function Cart({ color, size }) {
  return (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.984 19.937a1.406 1.406 0 100-2.812 1.406 1.406 0 000 2.812zM17.828 19.937a1.406 1.406 0 100-2.812 1.406 1.406 0 000 2.812zM20.324 5.558a1.051 1.051 0 00-.815-.386H6.134l-.27-1.528a.703.703 0 00-.692-.581H2.359a.703.703 0 000 1.406h2.223L6.59 15.841a.703.703 0 00.692.581h11.25a.703.703 0 100-1.406H7.871l-.248-1.406h10.62a1.057 1.057 0 001.035-.848l1.266-6.328a1.055 1.055 0 00-.22-.876z"
        fill={colors[color] ? colors[color].main : colors.dark.main}
      />
    </svg>
  );
}

Cart.defaultProps = {
  color: "dark",
  size: "16px",
};

Cart.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
    "white",
  ]),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Cart;
