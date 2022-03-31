
import PropTypes from "prop-types";

import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { IoDocumentText } from "react-icons/io5";

function Invoice({ date, id, price }) {
  return (
    <VuiBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb="32px"
    >
      <VuiBox lineHeight={1}>
        <VuiTypography display="block" variant="button" fontWeight="medium" color="white">
          {date}
        </VuiTypography>
        <VuiTypography variant="caption" fontWeight="regular" color="text">
          {id}
        </VuiTypography>
      </VuiBox>
      <VuiBox display="flex" alignItems="center">
        <VuiTypography variant="button" fontWeight="regular" color="text">
          {price}
        </VuiTypography>
        <VuiBox display="flex" alignItems="center" lineHeight={0} ml={3} sx={{ cursor: "poiner" }}>
          <IoDocumentText color="#fff" size="15px" />
          <VuiTypography variant="button" fontWeight="medium" color="text">
            &nbsp;PDF
          </VuiTypography>
        </VuiBox>
      </VuiBox>
    </VuiBox>
  );
}

Invoice.defaultProps = {
  noGutter: false,
};

Invoice.propTypes = {
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default Invoice;
