
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Icon from "@mui/material/Icon";
import Link from "@mui/material/Link";

import VuiButton from "components/VuiButton";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

import { card, cardContent, cardIconBox, cardIcon } from "examples/Sidenav/styles/sidenavCard";

import { useVisionUIController } from "context";

function SidenavCard({ color, ...rest }) {
  const [controller] = useVisionUIController();
  const { miniSidenav, sidenavColor } = controller;

  return (
    <Card sx={(theme) => card(theme, { miniSidenav })}>
      <CardContent sx={(theme) => cardContent(theme, { sidenavColor })}>
        <VuiBox
          bgColor="white"
          width="2rem"
          height="2rem"
          borderRadius="md"
          shadow="md"
          mb={2}
          sx={cardIconBox}
        >
          <Icon fontSize="medium" sx={(theme) => cardIcon(theme, { color })}>
            star
          </Icon>
        </VuiBox>
        <VuiBox lineHeight={1}>
          <VuiTypography variant="h6" color="white">
            MAS Kreeda Synergy
          </VuiTypography>
          <VuiBox mb={1.825} mt={-1}>
            <VuiTypography variant="caption" color="white" fontWeight="regular">
              Awissawella / Sri Lanka
            </VuiTypography>
          </VuiBox>
          <VuiButton
            component={Link}
            href="https://www.creative-tim.com/learning-lab/react/quick-start/vision-ui-dashboard/"
            target="_blank"
            rel="noreferrer"
            size="small"
            sx={({ palette: { gradients, white }, functions: { linearGradient } }) => ({
              color: `${white.main} !important`,
              background: linearGradient(
                gradients.cardDark.main,
                gradients.cardDark.state,
                gradients.cardDark.deg
              ),
              "&:hover": {
                background: linearGradient(
                  gradients.cardDark.main,
                  gradients.cardDark.state,
                  gradients.cardDark.deg
                ),
              },
            })}
            fullWidth
          >
            MAS Holdings
          </VuiButton>
        </VuiBox>
      </CardContent>
    </Card>
  );
}

export default SidenavCard;
