import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import DualLinear from "../pages/DualLinear";
import InputData from "../pages/InputData";
import SimplexMethod from "../pages/SimplexMethod";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import InputIcon from "@mui/icons-material/Input";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SyncAltIcon from "@mui/icons-material/SyncAlt";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function LeftSideDrawer() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: 224,
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          sx={{
            position: "relative",
            height: "100vh",
            borderRight: 1,
            borderColor: "divider",
          }}
        >
          <Typography sx={{ margin: 3 }} variant="h6">
            Линейное программирование
          </Typography>
          <Tab
            icon={<InputIcon />}
            iconPosition="start"
            label="Ввод данных"
            {...a11yProps(1)}
          />
          <Tab
            icon={<AddCircleOutlineIcon />}
            iconPosition="start"
            label="Симплекс-метод"
            {...a11yProps(2)}
          />
          <Tab
            icon={<SyncAltIcon />}
            iconPosition="start"
            label="Двойственная задача"
            {...a11yProps(3)}
          />
        </Tabs>
        <TabPanel value={value} index={1}>
          <InputData></InputData>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SimplexMethod></SimplexMethod>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <DualLinear></DualLinear>
        </TabPanel>
      </Box>
    </>
  );
}
