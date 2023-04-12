import { Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores/root.store";
import { closeSnackbar } from "../../stores/app.store";

const SnackbarController = () => {
  const dispatch = useDispatch();
  const { snackbar, snackbarMessage } = useSelector(
    (state: RootState) => state.app
  );

  const handleClose = () => {
    dispatch((closeSnackbar as any)());
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={snackbar}
      onClose={handleClose}
      message={snackbarMessage}
      key="app_snackbar"
    />
  );
};
export default SnackbarController;
