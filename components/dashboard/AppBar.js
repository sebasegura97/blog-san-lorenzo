import * as React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useAuthContext from "../../hooks/useAuthContext";
import { Menu, MenuItem } from "@mui/material";

export default function AppBar() {
  const { toggleAuthDialog, user, logout } = useAuthContext();
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(menuAnchorEl);

  const handleClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuAnchorEl(null);
  };

  const handleSignIn = () => {
    toggleAuthDialog();
  };

  const handleLogoutButton = () => {
    logout();
    handleCloseMenu()
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static">
        <Toolbar>
          {user && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              aria-controls={isMenuOpen ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={isMenuOpen ? "true" : undefined}
              style={{ position: "relative" }}
              onClick={handleClick}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Menu
            id="basic-menu"
            anchorEl={menuAnchorEl}
            open={isMenuOpen}
            onClose={handleCloseMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleLogoutButton}>Logout</MenuItem>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          {!user && (
            <Button color="inherit" onClick={handleSignIn}>
              Ingresar
            </Button>
          )}
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}
