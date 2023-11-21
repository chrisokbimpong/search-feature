import React from "react";
import { Paper, Typography } from "@mui/material";

export const SearchResults = ({ result }) => {
  return (
    <Paper
      elevation={3}
      className="search-result"
      onClick={() => alert(`You selected ${result.name}`)}
      sx={{
        padding: 2,
        marginBottom: 2,
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "orange", // Adjust the background color on hover
        },
      }}
    >
      <Typography variant="body1">{result.name}</Typography>
    </Paper>
  );
};
