import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  TextField,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";

import { Typography } from "@mui/material";
import { SearchResults } from "./SearchResults";

const fetchSearch = (word) => {
  return axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    const filteredData = res.data.filter((user) => {
      return (
        word &&
        user &&
        user.name &&
        user.name.toLowerCase().includes(word.toLowerCase())
      );
    });
    console.log(filteredData);
    return filteredData;
  });
};

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState();

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["searchkey", input],
    queryFn: () => fetchSearch(input),
    onSuccess: (data) => {
      setResults(data);
      console.log("setResultsData", data);
    },
  });

  const handleChange = (value) => {
    setInput(value);
    // fetchSearch(value);
  };

  console.log(data);

  return (
    <>
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        <TextField
          color="warning"
          fullWidth
          type="text"
          label="Type to search"
          value={input || ""}
          onChange={(e) => handleChange(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaSearch />
              </InputAdornment>
            ),
          }}
        />
      </Paper>

      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        <List>
          {data &&
            data.map((result, id) => (
              <ListItem key={id}>
                <ListItemText>
                  <SearchResults result={result} key={id} />
                </ListItemText>
              </ListItem>
            ))}
        </List>
      </Paper>
    </>
  );
};
