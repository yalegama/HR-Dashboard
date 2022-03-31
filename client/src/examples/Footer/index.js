

import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function Footer() {
  return (
    <VuiBox
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      direction="row"
      component="footer"
      py={2}
      pb={0}
    >
      <VuiBox item xs={12} sx={{ textAlign: "center" }}>
        <VuiTypography
          variant="button"
          sx={{ textAlign: "center", fontWeight: "400 !important" }}
          color="white"
        >
          @ 2022 &nbsp; Made By  &nbsp;&nbsp;{" "}
          <VuiTypography
            component="a"
            variant="button"
            href="https://simmmple.com/"
            sx={{ textAlign: "center", fontWeight: "500 !important" }}
            color="white"
            mr="2px"
          >
          </VuiTypography>
          <VuiTypography
            ml="2px"
            mr="2px"
            component="a"
            variant="button"
            href="#"
            sx={{ textAlign: "center", fontWeight: "500 !important" }}
            color="white"
          >
            Nadun Yalegama 
          </VuiTypography>
        </VuiTypography>
      </VuiBox>
      <VuiBox item xs={10}>
        <VuiBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
          <VuiBox mr={{ xs: "20px", lg: "46px" }}>
            <VuiTypography
              component="a"
              href="https://www.creative-tim.com/templates"
              variant="body2"
              color="white"
            >
              
            </VuiTypography>
          </VuiBox>
          <VuiBox mr={{ xs: "20px", lg: "46px" }}>
            <VuiTypography
              component="a"
              href="https://www.creative-tim.com/blog/"
              variant="body2"
              color="white"
            >
              
            </VuiTypography>
          </VuiBox>
          <VuiBox>
            <VuiTypography
              component="a"
              href="https://www.creative-tim.com/license"
              variant="body2"
              color="white"
            >
              
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </VuiBox>
  );
}

export default Footer;
