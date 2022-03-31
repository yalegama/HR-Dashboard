

import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

function ProfileInfoCard({ title, description, info, social }) {
  const labels = [];
  const values = [];
  const { size } = typography;

  Object.keys(info).forEach((el) => {
    if (el.match(/[A-Z\s]+/)) {
      const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
      const newElement = el.replace(uppercaseLetter, ` ${uppercaseLetter.toLowerCase()}`);

      labels.push(newElement);
    } else {
      labels.push(el);
    }
  });

  Object.values(info).forEach((el) => values.push(el));

  const renderItems = labels.map((label, key) => (
    <VuiBox key={label} display="flex" py={1} pr={2}>
      <VuiTypography variant="button" color="text" fontWeight="regular" textTransform="capitalize">
        {label}: &nbsp;
      </VuiTypography>
      <VuiTypography variant="button" fontWeight="regular" color="white">
        &nbsp;{values[key]}
      </VuiTypography>
    </VuiBox>
  ));

  const renderSocial = social.map(({ link, icon, color }) => (
    <VuiBox
      key={color}
      component="a"
      href={link}
      target="_blank"
      rel="noreferrer"
      fontSize={size.lg}
      color="white"
      pr={1}
      pl={0.5}
      lineHeight={1}
    >
      {icon}
    </VuiBox>
  ));

  return (
    <Card
      sx={{
        height: "100%",
      }}
    >
      <VuiBox display="flex" mb="14px" justifyContent="space-between" alignItems="center">
        <VuiTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
          {title}
        </VuiTypography>
      </VuiBox>
      <VuiBox>
        <VuiBox mb={2} lineHeight={1}>
          <VuiTypography variant="button" color="text" fontWeight="regular">
            {description}
          </VuiTypography>
        </VuiBox>
        <VuiBox opacity={0.3}>
          <Divider />
        </VuiBox>
        <VuiBox>
          {renderItems}
          <VuiBox display="flex" py={1} pr={2} color="white">
            <VuiTypography
              variant="button"
              fontWeight="regular"
              color="text"
              textTransform="capitalize"
            >
              social: &nbsp;
            </VuiTypography>
            {renderSocial}
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  social: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProfileInfoCard;
