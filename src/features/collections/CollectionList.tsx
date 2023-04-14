import { Box, Card, CardContent, Skeleton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, store } from "../../stores/root.store";
import {
  CollectionListState,
  fetchCollections,
} from "../../stores/collections.store";
import { useNavigate } from "react-router-dom";

interface Props {}

const CollectionList: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { collections, fetching } = useSelector<RootState, CollectionListState>(
    (state) => state.collections
  );
  useEffect(() => {
    store.dispatch(fetchCollections());
  }, []);

  return (
    <Box>
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
    </Box>
  );
};

export default CollectionList;
