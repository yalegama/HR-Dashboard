

import { forwardRef, createContext, useContext } from "react";

import PropTypes from "prop-types";

import VuiBox from "components/VuiBox";

import VuiPaginationItemRoot from "components/VuiPagination/VuiPaginationItemRoot";

const Context = createContext();

const VuiPagination = forwardRef(
  ({ item, variant, color, size, active, children, ...rest }, ref) => {
    const context = item ? useContext(Context) : null;
    const paginationSize = context ? context.size : null;

    return (
      <Context.Provider value={{ variant, color, size }}>
        {item ? (
          <VuiPaginationItemRoot
            {...rest}
            ref={ref}
            variant={active ? context.variant : "outlined"}
            color={active ? context.color : "text"}
            iconOnly
            circular
            ownerState={{ variant, active, paginationSize }}
          >
            {children}
          </VuiPaginationItemRoot>
        ) : (
          <VuiBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            sx={{ listStyle: "none" }}
          >
            {children}
          </VuiBox>
        )}
      </Context.Provider>
    );
  }
);

VuiPagination.defaultProps = {
  item: false,
  variant: "gradient",
  color: "info",
  size: "medium",
  active: false,
};

VuiPagination.propTypes = {
  item: PropTypes.bool,
  variant: PropTypes.oneOf(["gradient", "contained"]),
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
  size: PropTypes.oneOf(["small", "medium", "large"]),
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default VuiPagination;
