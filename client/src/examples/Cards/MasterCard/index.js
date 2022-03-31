
import Card from "@mui/material/Card";
import billingCard from "assets/images/billing-background-card.png";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import PropTypes from "prop-types";
import { RiMastercardFill } from "react-icons/ri";

function MasterCard({ number, valid, cvv }) {
  const numbers = [...`${number}`];

  if (numbers.length < 16 || numbers.length > 16) {
    throw new Error(
      "Invalid value for the prop number, the value for the number prop shouldn't be greater than or less than 16 digits"
    );
  }

  const num1 = numbers.slice(0, 4).join("");
  const num2 = numbers.slice(4, 8).join("");
  const num3 = numbers.slice(8, 12).join("");
  const num4 = numbers.slice(12, 16).join("");

  return (
    <Card sx={{ background: `url('${billingCard}')`, backdropfilter: "blur(31px)" }}>
      <VuiBox p={2} pt={0}>
        <VuiBox
          color="white"
          lineHeight={0}
          display="flex"
          justifyContent="space-beetween"
          alignItems="center"
          width="100%"
          sx={{ width: "100%" }}
        >
          <VuiTypography color="white" variant="lg" fontWeight="bold" mr="auto">
            Vision UI
          </VuiTypography>
          <RiMastercardFill size="48px" color="white" />
        </VuiBox>
        <VuiTypography
          variant="h4"
          color="white"
          mt="auto"
          fontWeight="medium"
          sx={({ breakpoints }) => ({
            mt: 8,
            pb: 1,
            [breakpoints.only("sm")]: {
              fontSize: "22px",
            },
          })}
        >
          {num1}&nbsp;&nbsp;&nbsp;{num2}&nbsp;&nbsp;&nbsp;{num3}&nbsp;&nbsp;&nbsp;{num4}
        </VuiTypography>
        <VuiBox display="flex" justifyContent="space-between" alignItems="center">
          <VuiBox display="flex" alignItems="center">
            <VuiBox mr={3} lineHeight={1}>
              <VuiTypography variant="xxs" color="white" fontWeight="medium" opacity={0.8}>
                VALID THRU
              </VuiTypography>
              <VuiTypography
                variant="h6"
                color="white"
                fontWeight="medium"
                textTransform="capitalize"
              >
                {valid}
              </VuiTypography>
            </VuiBox>
            <VuiBox lineHeight={1}>
              <VuiTypography variant="xxs" color="white" fontWeight="medium" opacity={0.8}>
                CVV
              </VuiTypography>
              <VuiTypography variant="h6" color="white" fontWeight="medium">
                {cvv}
              </VuiTypography>
            </VuiBox>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

MasterCard.defaultProps = {
  color: "dark",
};

MasterCard.propTypes = {
  color: PropTypes.oneOf(["white", "secondary", "info", "success", "warning", "error", "dark"]),
  number: PropTypes.number.isRequired,
  holder: PropTypes.string.isRequired,
  expires: PropTypes.string.isRequired,
};

export default MasterCard;
