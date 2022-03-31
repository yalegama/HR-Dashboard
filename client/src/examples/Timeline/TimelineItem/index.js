
import PropTypes from "prop-types";

import Icon from "@mui/material/Icon";

import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiBadge from "components/VuiBadge";

import { useTimeline } from "examples/Timeline/context";

import { timelineItem } from "examples/Timeline/TimelineItem/styles";

function TimelineItem({ color, icon, title, dateTime, description, badges, lastItem }) {
  const isDark = useTimeline();

  const renderBadges =
    badges.length > 0
      ? badges.map((badge, key) => {
          const badgeKey = `badge-${key}`;

          return (
            <VuiBox key={badgeKey} mr={key === badges.length - 1 ? 0 : 0.5}>
              <VuiBadge color={color} size="xs" badgeContent={badge} container />
            </VuiBox>
          );
        })
      : null;

  return (
    <VuiBox position="relative" mb="24px" sx={(theme) => timelineItem(theme, { color })}>
      <VuiBox
        width="1.625rem"
        height="1.625rem"
        borderRadius="50%"
        position="absolute"
        top="3.25%"
        left="-8px"
        zIndex={2}
      >
        {icon}
      </VuiBox>
      <VuiBox ml="30px" pt={description ? 0.7 : 0.5} lineHeight={0} maxWidth="30rem">
        <VuiTypography variant="button" fontWeight="medium" color="white">
          {title}
        </VuiTypography>
        <VuiBox mt={0.5}>
          <VuiTypography variant="caption" fontWeight="medium" color="text">
            {dateTime}
          </VuiTypography>
        </VuiBox>
        <VuiBox mt={2} mb={1.5}>
          {description ? (
            <VuiTypography variant="button" fontWeight="regular" color="text">
              {description}
            </VuiTypography>
          ) : null}
        </VuiBox>
        {badges.length > 0 ? (
          <VuiBox display="flex" pb={lastItem ? 1 : 2}>
            {renderBadges}
          </VuiBox>
        ) : null}
      </VuiBox>
    </VuiBox>
  );
}

TimelineItem.defaultProps = {
  color: "info",
  badges: [],
  lastItem: false,
  description: "",
};

TimelineItem.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  description: PropTypes.string,
  badges: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  lastItem: PropTypes.bool,
};

export default TimelineItem;
