import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function ProjectDetails({ project }) {
  const theme = useTheme();
  const [scrollPosition, setScrollPosition] = useState(0);

  // سرعة الحركة
  const speed = 1; // pixels per frame

  
  return (
    <Card sx={{ mt: 2, p: 2 }}>
      <Grid container spacing={2}>
        {/* TEXT SIDE */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Typography variant="h4" fontWeight="700" mb={3}                   sx={{ color: theme.palette.primary.text3 }}
>
            {project.title}
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {project.features.map((item, index) => (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
              >
                <CheckCircleIcon
                  sx={{ color: theme.palette.primary.text4, fontSize: 22 }}
                />
                <Typography sx={{ color: theme.palette.text.secondary }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

       
      </Grid>

     
    </Card>
  );
}
