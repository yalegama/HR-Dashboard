
import { useState } from "react";

import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BsCheckCircleFill } from "react-icons/bs";

import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

import Table from "examples/Tables/Table";

import data from "layouts/rtl/components/Projects/data";

function Projects() {
  const { columns, rows } = data();
  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>عمل</MenuItem>
      <MenuItem onClick={closeMenu}>عمل آخر</MenuItem>
      <MenuItem onClick={closeMenu}>شيء آخر</MenuItem>
    </Menu>
  );

  return (
    <Card>
      <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="32px">
        <VuiBox>
          <VuiTypography color="white" variant="lg" mb="6px" gutterBottom>
            المشاريع
          </VuiTypography>
          <VuiBox display="flex" alignItems="center" lineHeight={0}>
            <BsCheckCircleFill color="green" size="15px" />
            <VuiTypography variant="button" fontWeight="regular" color="text" ml="5px">
              &nbsp;<strong>30 انتهى</strong> هذا الشهر
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        <VuiBox color="text" px={2}>
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </VuiBox>
        {renderMenu}
      </VuiBox>
      <VuiBox
        sx={{
          "& th": {
            borderBottom: ({ borders: { borderWidth, borderColor } }) =>
              `${borderWidth[1]} solid ${borderColor.grey}`,
          },
          "& .MuiTableRow-root:not(:last-child)": {
            "& td": {
              borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                `${borderWidth[1]} solid ${borderColor.grey}`,
            },
          },
        }}
      >
        <Table columns={columns} rows={rows} />
      </VuiBox>
    </Card>
  );
}

export default Projects;
