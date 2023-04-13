import { Box, Card, CardContent, Skeleton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores/root.store";
import {
  CollectionListState,
  fetchCollections,
} from "../../stores/collections.store";
import { useNavigate } from "react-router-dom";

interface Props {}

const CollectionList: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { collections, fetching } = useSelector<RootState, CollectionListState>(
    (state) => state.collections
  );
  useEffect(() => {
    dispatch(fetchCollections() as any);
  }, []);

  return (
    <div>
      <Typography variant="h4" sx={{ mt: 2 }}>
        Collections
      </Typography>
      {fetching ? (
        <Box sx={{ display: "flex" }}>
          <Skeleton variant="rounded" width={200} sx={{ mr: 1 }} height={60} />
          <Skeleton variant="rounded" width={200} sx={{ mr: 1 }} height={60} />
          <Skeleton variant="rounded" width={200} height={60} />
        </Box>
      ) : (
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {collections.map((collection) => (
            <Card
              onClick={() => navigate(`/collections/${collection}`)}
              key={collection}
              sx={{
                mr: 1,
                minWidth: { xs: 80, sm: 200 },
                mb: 1,
                cursor: "pointer",
              }}
            >
              <CardContent>
                <Typography fontWeight="bold">{collection}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </div>
  );
};

export default CollectionList;
