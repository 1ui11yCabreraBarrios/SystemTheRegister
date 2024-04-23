import styled from "@emotion/styled";
import { Button, Tooltip } from "@mui/material";

const ToBeStyledTooltip = ({ className, ...props }) => (
    <Tooltip {...props} classes={{ tooltip: className }} />
  );

export const TooltipContainer = styled(ToBeStyledTooltip)(({ theme }) => ({
    fontSize: "1rem",
    color: "white",
    backgroundColor: "#205690",
    borderRadius: 10,
    padding: '1rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center'
  }));

export const IconButtonCustom = styled(Button)({
    color: '#205690',
})