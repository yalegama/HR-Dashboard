
import PropTypes from "prop-types";

import Card from "@mui/material/Card";

import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

import { TimelineProvider } from "examples/Timeline/context";

function TimelineList({ title, dark, children }) {
  return (
    <TimelineProvider value={dark}>
      <Card>
        <VuiBox bgColor={dark ? "dark" : "white"} variant="gradient">
          <VuiBox pt={3} px={3}>
            <VuiTypography variant="h6" fontWeight="medium" color={dark ? "white" : "dark"}>
              {title}
            </VuiTypography>
          </VuiBox>
          <VuiBox p={2}>{children}</VuiBox>
        </VuiBox>
      </Card>
    </TimelineProvider>
  );
}

TimelineList.defaultProps = {
  dark: false,
};

TimelineList.propTypes = {
  title: PropTypes.string.isRequired,
  dark: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default TimelineList;
