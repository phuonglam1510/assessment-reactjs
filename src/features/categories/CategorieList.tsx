import { Box, Card, CardContent, Skeleton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchCategories } from "../../stores/categories.store";
import { RootState, store } from "../../stores/root.store";
import { useNavigate } from "react-router-dom";

interface Props {}

const CategorieList: React.FC<Props> = () => {
  const navigate = useNavigate();

  const { categories, fetching } = useSelector(
    (state: RootState) => state.categories
  );
  useEffect(() => {
    store.dispatch(fetchCategories());
  }, []);

  return (
    <Box>
      <Typography variant="h4" sx={{ mt: 2 }}>
        Categories
      </Typography>
      {fetching ? (
        <Box sx={{ display: "flex" }}>
          <Skeleton variant="rounded" width={200} sx={{ mr: 1 }} height={60} />
          <Skeleton variant="rounded" width={200} sx={{ mr: 1 }} height={60} />
          <Skeleton variant="rounded" width={200} height={60} />
        </Box>
      ) : (
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {categories.map((category) => (
            <Card
              onClick={() => navigate(`/categories/${category}`)}
              key={category}
              sx={{
                mr: 1,
                minWidth: { xs: 80, sm: 200 },
                mb: 1,
                cursor: "pointer",
              }}
            >
              <CardContent>
                <Typography fontWeight="bold">{category}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CategorieList;
