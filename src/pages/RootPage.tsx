import React from "react";
import { Outlet } from "react-router-dom";
import NavigationHeader from "../components/NavigationHeader";
import { Container } from "@mui/material";

interface Props {}

const RootPage: React.FC<Props> = () => {
  return (
    <div className="shell">
      <NavigationHeader />
      <main>
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </main>
    </div>
  );
};

export default RootPage;
