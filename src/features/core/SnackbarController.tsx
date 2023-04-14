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
    dispatch(closeSnackbar());
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={snackbar}
      onClose={handleClose}
      message={snackbarMessage}
      key="app_snackbar"
      autoHideDuration={2000}
    />
  );
};
export default SnackbarController;
