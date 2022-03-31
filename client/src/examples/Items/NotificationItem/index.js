

import { forwardRef } from "react";

import PropTypes from "prop-types";

import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";

import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

import { menuItem, menuImage } from "examples/Items/NotificationItem/styles";

const NotificationItem = forwardRef(({ color, image, title, date, ...rest }, ref) => (
  <MenuItem {...rest} ref={ref} sx={(theme) => menuItem(theme)}>
    <VuiBox
      width="2.25rem"
      height="2.25rem"
      mt={0.25}
      mr={2}
      mb={0.25}
      borderRadius="lg"
      sx={(theme) => menuImage(theme, { color })}
    >
      {image}
    </VuiBox>
    <VuiBox>
      <VuiTypography variant="button" textTransform="capitalize" fontWeight="regular">
        <strong>{title[0]}</strong> {title[1]}
      </VuiTypography>
      <VuiTypography
        variant="caption"
        color="text"
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 0.5,
        }}
      >
        <VuiTypography variant="button" color="text">
          <Icon
            sx={{
              lineHeight: 1.2,
              mr: 0.5,
            }}
          >
            watch_later
          </Icon>
        </VuiTypography>
        {date}
      </VuiTypography>
    </VuiBox>
  </MenuItem>
));

NotificationItem.defaultProps = {
  color: "dark",
};

NotificationItem.propTypes = {
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
  image: PropTypes.node.isRequired,
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.string.isRequired,
};

export default NotificationItem;
