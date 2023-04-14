import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Theme, useTheme } from "@mui/material/styles";
import { RootState, store } from "../../stores/root.store";
import { fetchTags } from "../../stores/tags.store";
import { fetchAllProducts } from "../../stores/products.store";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const TagFilter = () => {
  const theme = useTheme();
  const { tags } = useSelector((state: RootState) => state.tags);

  const [selectedTags, setTags] = useState<string[]>([]);

  const getStyles = (name: string, theme: Theme) => {
    return {
      fontWeight:
        selectedTags.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  };

  const handleChange = (event: SelectChangeEvent<typeof selectedTags>) => {
    const {
      target: { value },
    } = event;
    const values = typeof value === "string" ? value.split(",") : value;
    setTags(typeof value === "string" ? value.split(",") : value);
    store.dispatch(fetchAllProducts({ tag: values[0] }));
  };

  useEffect(() => {
    store.dispatch(fetchTags());
  }, []);

  return (
    <Box>
      <Typography variant="h5" sx={{ mt: 1 }}>
        Filter
      </Typography>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="tag-filter-label">Filter by Tags</InputLabel>
        <Select
          labelId="tag-filter-label"
          multiple
          value={selectedTags}
          onChange={handleChange}
          input={
            <OutlinedInput id="select-multiple-chip" label="Filter by Tags" />
          }
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {tags.map((tag) => (
            <MenuItem key={tag} value={tag} style={getStyles(tag, theme)}>
              {tag}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
export default TagFilter;
