import { useNavigate, useRouteError } from "react-router-dom";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

const ErrorPage = () => {
  const error: any = useRouteError();
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button onClick={() => navigate("/")} variant="contained">
        Go Back
      </Button>
    </Container>
  );
};

export default ErrorPage;
