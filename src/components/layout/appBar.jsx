import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CallMissedIcon from "@mui/icons-material/CallMissed";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";
import Face3Icon from "@mui/icons-material/Face3";

// icons
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import CottageIcon from "@mui/icons-material/Cottage";
import CallIcon from '@mui/icons-material/Call';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PublicIcon from '@mui/icons-material/Public';
const drawerWidth = 240;
const navItems = ["Public", "Skills", "Projects", "Connect"];

function DrawerAppBar(props) {
  const { window, toggleMode, mode } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const iconsMap = {
    Public: (
      <PublicIcon fontSize="small" sx={{ color: theme.navbar.border }} />
    ),
    Skills: (
      <PlaylistAddIcon
       
        sx={{ fontSize:'50', color: theme.navbar.border }}
      />
    ),
    Projects: (
      <BusinessCenterIcon fontSize="small" sx={{ color: theme.navbar.border }} />
    ),
    Conect: (
      <CallIcon fontSize="small" sx={{ color: theme.navbar.border }} />
    ),
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        bgcolor: theme.palette.background.default,
        height: "100%",
      }}
    >
     {/* <Typography
  variant="h6"
  sx={{
    my: 2,
    fontWeight: 800,
    background: "linear-gradient(45deg, #4facfe, #00f2fe)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: `
      0 0 5px rgba(79, 172, 254, 0.6),
      0 0 10px rgba(0, 242, 254, 0.6),
      0 0 20px rgba(0, 242, 254, 0.8)
    `,
  }}
>
  Portfolio
</Typography> */}

      <IconButton color="inherit" onClick={toggleMode} sx={{ mb: 2 }}>
        {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>

      <Divider />

      <List>
        {navItems.map((item) => {
          const href = `/${item.toLowerCase()}`;
          const isActive = location.pathname === href;

          return (
            <ListItem key={item} disablePadding>
              <ListItemButton
                component={Link}
                to={href}
                sx={{
                  gap: 2,
                  bgcolor: isActive
                    ? theme.palette.action.selected
                    : "transparent",
                  color: isActive
                    ? theme.palette.primary.contrastText
                    : theme.palette.text.primary,
                  "&:hover": {
                    bgcolor: theme.palette.action.hover,
                  },
                }}
              >
                {iconsMap[item]}
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.background.default,
          color: theme.palette.primary.text4,    backgroundImage: "none", // 🔥 هذا أهم سطر

        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* LEFT - LOGO */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 1,
                display: { sm: "none" },
                color: theme.navbar.border,
              }}
            >
              <MenuIcon />
            </IconButton>


            <Typography
  variant="h6"
  sx={{
    my: 2,
    fontWeight: 800,fontSize:30,
    
    
    background: "linear-gradient(45deg, #ffffff, #ffb6f0, #c084fc, #8b5cf6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",

    textShadow: `
      0 0 6px rgba(255, 182, 240, 0.5),
      0 0 12px rgba(192, 132, 252, 0.4),
      0 0 18px rgba(139, 92, 246, 0.3)
    `,
  }}
>
  Portfolio
</Typography>
          </Box>

          {/* CENTER - NAV ITEMS */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              gap: 2,
            }}
          >
            {navItems.map((item) => {
              const href = `/${item.toLowerCase()}`;
              const isActive = location.pathname === href;

              return (
               <Button
  component={Link}
  to={href}
  key={item}
  sx={{
    gap: 1,
    color: theme.navbar.border1,

    borderBottom: isActive
      ? `2px solid ${theme.palette.primary.main}`
      : "2px solid transparent",
    borderRadius: 0,

    "&:hover": {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      backgroundColor: "transparent",
    },
  }}
>
  {iconsMap[item]}
  {item}
</Button>
              );
            })}
          </Box>

          {/* RIGHT - MODE TOGGLE */}
          <Box>
            <IconButton
              onClick={toggleMode}
              sx={{ color: theme.navbar.border }}
            >
              {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* DRAWER */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Box component="main" sx={{ p: 3, flexGrow: 1 }} />
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
  toggleMode: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

export default DrawerAppBar;