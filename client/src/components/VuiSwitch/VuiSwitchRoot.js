
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

export default styled(Switch)(({ theme, ownerState }) => {
  const { palette } = theme;
  const { color } = ownerState;
  const { white, secondary } = palette;

  const containedStyles = () => {
  
    const backgroundValue = palette[color] ? palette[color].main : white.main;

  
    return {
      "&.MuiSwitch-root": {
        "& .MuiSwitch-thumb": {
          backgroundColor: white.main,
        },
        "& .MuiSwitch-track": {
          backgroundColor: `${secondary.main} !important`,
          borderColor: "transparent",
        },
        "& .Mui-checked+.MuiSwitch-track": {
          backgroundColor: `${backgroundValue} !important`,
        },
      },
    };
  };

  return {
    ...containedStyles(),
  };
});
