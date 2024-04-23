import React from "react";
import { Button, Dialog, Toolbar, IconButton, Slide } from "@mui/material";
import { Close } from "@mui/icons-material";
import PropTypes from "prop-types";
/********** STYLES **********/
import * as Styled from "./styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DialogFullScreen({
  openFullScreenDialog,
  handleClose,
  title,
  children,
  fullscreen,
  maxWidth,
  disableEscapeKeyDown,
  showIconButton,
  showButtonClose,
}) {
  return (
    <div>
      <Dialog
        fullScreen={fullscreen}
        open={openFullScreenDialog}
        onClose={handleClose}
        TransitionComponent={Transition}
        maxWidth={maxWidth}
        aria-labelledby="confirmation-dialog-title"
        disableEscapeKeyDown={disableEscapeKeyDown}
      >
        <Styled.CustomAppBar>
          <Toolbar>
            {showIconButton && (
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                style={{ background: "red", color: "white" }}
                aria-label="close"
              >
                <Close />
              </IconButton>
            )}
            <Styled.CustomTitle variant="h6">{title}</Styled.CustomTitle>
            {showButtonClose && (
              <Button
                autoFocus
                color="inherit"
                onClick={handleClose}
                style={{ background: "red", color: "white" }}
              >
                <Close /> Cerrar
              </Button>
            )}
          </Toolbar>
        </Styled.CustomAppBar>
        <Styled.CustomDialogContent>{children}</Styled.CustomDialogContent>
      </Dialog>
    </div>
  );
}

export { DialogFullScreen };

DialogFullScreen.propTypes = {
  openFullScreenDialog: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

DialogFullScreen.defaultProps = {
  fullscreen: false,
  maxWidth: "xl",
  disableBackdropClick: true,
  disableEscapeKeyDown: true,
  showIconButton: false,
  showButtonClose: true,
};
