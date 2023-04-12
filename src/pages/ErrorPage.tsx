import { Link, useRouteError } from "react-router-dom";
import Button from "@mui/material/Button";
import { useLinkClickHandler } from "react-router-dom";

const ErrorPage = () => {
  const error: any = useRouteError();
  const goBack = useLinkClickHandler("/");

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button onClick={goBack as any} variant="contained">
        Go Back
      </Button>
    </div>
  );
};

export default ErrorPage;
