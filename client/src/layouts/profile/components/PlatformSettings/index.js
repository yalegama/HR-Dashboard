

import { useState } from "react";

import Card from "@mui/material/Card";

import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiSwitch from "components/VuiSwitch";

function PlatformSettings() {
  const [followsMe, setFollowsMe] = useState(true);
  const [answersPost, setAnswersPost] = useState(false);
  const [mentionsMe, setMentionsMe] = useState(true);
  const [newLaunches, setNewLaunches] = useState(false);
  const [productUpdate, setProductUpdate] = useState(true);
  const [newsletter, setNewsletter] = useState(true);
  const [mails, setMails] = useState(false);

  return (
    <Card sx={{ minHeight: "490px", height: "100%" }}>
      <VuiBox mb="26px">
        <VuiTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
          platform settings
        </VuiTypography>
      </VuiBox>
      <VuiBox lineHeight={1.25}>
        <VuiTypography
          variant="xxs"
          fontWeight="medium"
          mb="20px"
          color="text"
          textTransform="uppercase"
        >
          account
        </VuiTypography>
        <VuiBox display="flex" mb="14px">
          <VuiBox mt={0.25}>
            <VuiSwitch color="info" checked={followsMe} onChange={() => setFollowsMe(!followsMe)} />
          </VuiBox>
          <VuiBox width="80%" ml={2}>
            <VuiTypography variant="button" fontWeight="regular" color="text">
              Email me when someone follows me
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        <VuiBox display="flex" mb="14px">
          <VuiBox mt={0.25}>
            <VuiSwitch
              color="info"
              checked={answersPost}
              onChange={() => setAnswersPost(!answersPost)}
            />
          </VuiBox>
          <VuiBox width="80%" ml={2}>
            <VuiTypography variant="button" fontWeight="regular" color="text">
              Email me when someone answers on my post
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        <VuiBox display="flex" mb="14px">
          <VuiBox mt={0.25}>
            <VuiSwitch
              sx={{ background: "#1B1F3D", color: "#fff" }}
              color="info"
              checked={mentionsMe}
              onChange={() => setMentionsMe(!mentionsMe)}
            />
          </VuiBox>
          <VuiBox width="80%" ml={2}>
            <VuiTypography variant="button" fontWeight="regular" color="text">
              Email me when someone mentions me
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        <VuiBox mb="6px">
          <VuiTypography variant="xxs" fontWeight="medium" color="text" textTransform="uppercase">
            application
          </VuiTypography>
        </VuiBox>
        <VuiBox display="flex" mb="14px">
          <VuiBox mt={0.25}>
            <VuiSwitch
              color="info"
              checked={newLaunches}
              onChange={() => setNewLaunches(!newLaunches)}
            />
          </VuiBox>
          <VuiBox width="80%" ml={2}>
            <VuiTypography variant="button" fontWeight="regular" color="text">
              New launches and projects
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        <VuiBox display="flex" mb="14px">
          <VuiBox mt={0.25}>
            <VuiSwitch
              color="info"
              checked={productUpdate}
              onChange={() => setProductUpdate(!productUpdate)}
            />
          </VuiBox>
          <VuiBox width="80%" ml={2}>
            <VuiTypography variant="button" fontWeight="regular" color="text">
              Monthly product updates
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        <VuiBox display="flex" mb="14px">
          <VuiBox mt={0.25}>
            <VuiSwitch
              color="info"
              checked={newsletter}
              onChange={() => setNewsletter(!newsletter)}
            />
          </VuiBox>
          <VuiBox width="80%" ml={2}>
            <VuiTypography variant="button" fontWeight="regular" color="text">
              Subscribe to newsletter
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        <VuiBox display="flex">
          <VuiBox mt={0.25}>
            <VuiSwitch color="info" checked={mails} onChange={() => setMails(!mails)} />
          </VuiBox>
          <VuiBox width="80%" ml={2}>
            <VuiTypography variant="button" fontWeight="regular" color="text">
              Receive mails weekly
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default PlatformSettings;
