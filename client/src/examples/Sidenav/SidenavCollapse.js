
import PropTypes from "prop-types";

import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";

import VuiBox from "components/VuiBox";

import {
  collapseItem,
  collapseIconBox,
  collapseIcon,
  collapseText,
} from "examples/Sidenav/styles/sidenavCollapse";

import { useVisionUIController } from "context";

function SidenavCollapse({ color, icon, name, children, active, noCollapse, open, ...rest }) {
  const [controller] = useVisionUIController();
  const { miniSidenav, transparentSidenav } = controller;

  return (
    <>
      <ListItem component="li">
        <VuiBox {...rest} sx={(theme) => collapseItem(theme, { active, transparentSidenav })}>
          <ListItemIcon
            sx={(theme) => collapseIconBox(theme, { active, transparentSidenav, color })}
          >
            {typeof icon === "string" ? (
              <Icon sx={(theme) => collapseIcon(theme, { active })}>{icon}</Icon>
            ) : (
              icon
            )}
          </ListItemIcon>

          <ListItemText
            primary={name}
            sx={(theme) => collapseText(theme, { miniSidenav, transparentSidenav, active })}
          />
        </VuiBox>
      </ListItem>
      {children && (
        <Collapse in={open} unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
}

SidenavCollapse.defaultProps = {
  color: "info",
  active: false,
  noCollapse: false,
  children: false,
  open: false,
};

SidenavCollapse.propTypes = {
  color: PropTypes.oneOf(["info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  active: PropTypes.bool,
  noCollapse: PropTypes.bool,
  open: PropTypes.bool,
};

export default SidenavCollapse;
