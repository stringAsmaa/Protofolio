import React from "react";
import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { projectsData } from "../../projectsData";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useInViewAnimation } from "../../useInViewAnimation";

// كارد بسيط
const Card = ({ feature }) => {
  const [ref, inView] = useInViewAnimation({ threshold: 0.2 });
  const theme = useTheme();

  return (
    <Box
      ref={ref}
      sx={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(40px)",
        transition: "all 0.6s ease-out",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          p: 3,
          borderRadius: 3,
          textAlign: "center",
          transition: "0.3s",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: 10,
          },
        }}
      >
        {/* اسم المشروع */}
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{ color: theme.palette.text.primary }}
        >
          {feature.title}
        </Typography>

        {/* زر التفاصيل */}
        <Button
          component={Link}
          to={`/projects/${feature.id}`}
          variant="contained"
          sx={{
            textTransform: "none",
            width: "80%",
            backgroundColor: theme.palette.primary.main,
            "&:hover": {
              width: "100%",
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          Details
        </Button>

        {/* زر GitHub */}
        <Button
          href={feature.github}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<GitHubIcon />}
          variant="outlined"
          sx={{
            textTransform: "none",
            width: "80%",
            borderColor: theme.palette.text.secondary,
            color: theme.palette.text.primary,
            "&:hover": {
              width: "100%",
              borderColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
            },
          }}
        >
          GitHub
        </Button>
      </Paper>
    </Box>
  );
};

// الصفحة الرئيسية
const CardPage = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 6, px: 3, backgroundColor: theme.palette.background.paper }}>
      <Grid container spacing={3}>
        {projectsData.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <Card feature={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardPage;