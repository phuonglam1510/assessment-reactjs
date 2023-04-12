import { Box, Card, CardContent, Skeleton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CategoryListState,
  fetchCategories,
} from "../../stores/categories.store";
import { RootState } from "../../stores/root.store";
import { useNavigate } from "react-router-dom";

interface Props {}

const CategorieList: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { categories, fetching } = useSelector<RootState, CategoryListState>(
    (state) => state.categories
  );
  useEffect(() => {
    dispatch(fetchCategories() as any);
  }, []);

  return (
    <div>
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
              sx={{ mr: 1, minWidth: 200, mb: 1, cursor: "pointer" }}
            >
              <CardContent>
                <Typography fontWeight="bold">{category}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </div>
  );
};

export default CategorieList;
