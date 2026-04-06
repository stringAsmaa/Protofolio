import React, { useEffect, useState } from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import r1 from "../../../assets/image/image.png";
import DownloadIcon from "@mui/icons-material/Download";import FacebookIcon from "@mui/icons-material/Facebook";
import cvFile from "../../../assets/Asmaa_Backend_Engineer_CV_final.pdf";/* ===== Typing Animation (Loop) ===== */
const TypingText = ({
  text,
  typingSpeed = 120,
  deletingSpeed = 80,
  delay = 1500,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (!isDeleting && index === text.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delay);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, typingSpeed, deletingSpeed, delay]);

  return <span>{displayedText}</span>;
};

export default function HelloPage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        px: { xs: 2, md: 8 },
        py: { xs: 4, md: 8 },
        minHeight: "70vh",mt:4
      }}
    >
      {/* النص */}
      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "1 1 45%" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.primary.text,
          
            fontWeight: 70,
          }}
        >
          Hello ,i'm
        </Typography>
<br/>
<Typography
          variant="h5"
          sx={{
           
            fontWeight: 600,
            color: theme.palette.text.primary,
            
          }}
        >
        
          Asmaa Al-Abd-Aljalil
          
        </Typography>
and Iam a 

<Typography
            component="span"
            sx={{
              color: theme.palette.primary.text,
              fontWeight: 700,
              borderRight: "2px solid",
              pr: "6px",
              animation: "blink 1s infinite",ml:2
            }}
          >
            <TypingText text="BackEnd Engineer" />
          </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: "1.1rem",
            color: theme.palette.text.secondary,
          }}
        >
          
         Proven ability to design and deliver complex platforms including multi-tenant
SaaS and role-based systems. Strong focus on code quality, automated testing, and CI/CD pipelines,
with hands-on experience managing production environments and resolving critical system issues.
          
        </Typography>

        

       <Box
  sx={{
    display: "flex",
    gap: 2,
    justifyContent: { xs: "center", md: "flex-start" },
    flexWrap: "wrap",
  }}
>
  {/* زر Connect */}
  <Link to="/connect" style={{ textDecoration: "none" }}>
    <Button
      variant="contained"
      color="primary"
      size="large"
      sx={{
        fontSize: "18px",
        borderRadius: 2,
        textTransform: "none",
        px: 4,
        py: 1.2,
        boxShadow: `0 10px 40px ${
          theme.palette.mode === "light"
            ? "rgba(219, 211, 219, 0.3)"
            : "rgba(175, 9, 180, 0.3)"
        }`,
      }}
    >
      Connect Me
    </Button>
  </Link>

  {/* زر Download CV */}
  <Button
    variant="outlined"
    color="primary"
    size="large"

    startIcon={<DownloadIcon />}
  href={cvFile}
    download
    sx={{
        backgroundColor: theme.palette.background.paper,

      fontSize: "18px",
      borderRadius: 2,
      textTransform: "none",
      px: 4,
      py: 1.2,
      borderWidth: "2px",
      "&:hover": {
        borderWidth: "2px",
        backgroundColor:
          theme.palette.mode === "light"
            ? "rgba(0,0,0,0.04)"
            : "rgba(255,255,255,0.08)",
      },
    }}
  >
    Download CV
  </Button>
</Box>
        
      </Box>

      {/* الصورة */}
      <Box
        style={{
  width: 360,
  height: 360,
  borderRadius: "50%",
  border: "4px solid transparent",
  background: "linear-gradient(#000,#000) padding-box, linear-gradient(45deg,#4facfe,#00f2fe) border-box",
boxShadow: `0 10px 40px ${
  theme.palette.mode === "light"
    ? "rgba(219, 211, 219, 0.3)"
    : "rgba(175, 9, 180, 0.3)"
}`,  transition: "0.4s",
}}
onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
onMouseOut={(e) => e.target.style.transform = "scale(1)"}
      >
     <img
   src={r1}
  alt="Asmaa"
  style={{
    width: "350px",height:'350px',
    animation: "float 8s ease-in-out infinite",borderRadius:'50%'
  }}
/>




      </Box>

      {/* Cursor animation */}
      <style>
       {`
            @keyframes float {
              0% { transform: translateY(0); }
              50% { transform: translateY(-12px); }
              100% { transform: translateY(0); }
            }

            @keyframes blink {
              0%,100% { opacity: 0 }
              50% { opacity: 1 }
            }
          `}
      </style>
    </Box>
  );
}
