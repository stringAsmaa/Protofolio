import React from "react"
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Grid,
  useTheme,
} from "@mui/material"

import StorageIcon from "@mui/icons-material/Storage"
import ArchitectureIcon from "@mui/icons-material/AccountTree"
import BugReportIcon from "@mui/icons-material/BugReport"
import CodeIcon from "@mui/icons-material/Code"
import CloudIcon from "@mui/icons-material/Cloud"
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined"
import WebIcon from "@mui/icons-material/Web"
import BuildIcon from "@mui/icons-material/Build"

const skills = [
  {
    title: "Backend",
    icon: <StorageIcon />,
    items: ["PHP", "Laravel", "REST APIs", "JWT", "OAuth", "Sanctum"],
  },
  {
    title: "Architecture",
    icon: <ArchitectureIcon />,
    items: [
      "Multi-Tenancy",
      "Modular Architecture",
      "SOLID Principles",
      "Design Patterns",
    ],
  },
  {
    title: "Testing",
    icon: <BugReportIcon />,
    items: ["PHPUnit", "Pest", "Mutation Testing", "Architecture Testing"],
  },
  {
    title: "Code Quality",
    icon: <CodeIcon />,
    items: ["Larastan", "Rector", "Laravel Pint"],
  },
  {
    title: "DevOps",
    icon: <CloudIcon />,
    items: [
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "GitLab CI",
      "SSH",
      "Server Management",
    ],
  },
  {
    title: "Databases",
    icon: <StorageOutlinedIcon />,
    items: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Frontend",
    icon: <WebIcon />,
    items: ["HTML", "Tailwind CSS", "Alpine.js", "Filament"],
  },
  {
    title: "Tools",
    icon: <BuildIcon />,
    items: ["Firebase", "Stripe", "SMTP", "Scramble"],
  },
]

export default function RedoAt() {
  const theme = useTheme()

  return (
    <Box sx={{ py: 6, px: 2, maxWidth: 1200, mx: "auto" }}>
      {/* HEADER */}
      <Typography
        variant="h4"
        sx={{
          mb: 5,
          fontWeight: 800,
          textAlign: "center",
          letterSpacing: 0.5,
        }}
      >
        Technical Skills
      </Typography>

      <Grid container spacing={3}>
        {skills.map((section, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 4,
                background: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                transition: "0.2s",
                "&:hover": {
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                  borderColor: theme.palette.primary.light,
                },
              }}
            >
              <CardContent>
                {/* HEADER INSIDE CARD */}
                <Stack direction="row" alignItems="center" spacing={1.5} mb={2}>
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        theme.palette.mode === "light"
                          ? "rgba(123,44,191,0.08)"
                          : "rgba(199,125,255,0.12)",
                      color: theme.palette.primary.main,
                    }}
                  >
                    {section.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    {section.title}
                  </Typography>
                </Stack>

                {/* CHIPS */}
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {section.items.map((item, i) => (
                    <Chip
                      key={i}
                      label={item}
                      size="small"
                      sx={{
                        borderRadius: "8px",
                        fontSize: "0.75rem",
                        backgroundColor:
                          theme.palette.mode === "light"
                            ? "rgba(123,44,191,0.06)"
                            : "rgba(199,125,255,0.08)",
                        color: theme.palette.text.primary,
                        border: "1px solid transparent",
                        "&:hover": {
                          backgroundColor:
                            theme.palette.mode === "light"
                              ? "rgba(123,44,191,0.12)"
                              : "rgba(199,125,255,0.15)",
                        },
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}