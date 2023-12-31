import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CssBaseline, Container, Typography } from "@mui/material";

const queryClient = new QueryClient({});

function App() {
  const [results, setResults] = useState([]);

  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Container>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          sx={{ marginTop: 5 }}
          gutterBottom
        >
          Simple search using React, React Query & MaterialUI
        </Typography>
        <SearchBar setResults={setResults} />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
