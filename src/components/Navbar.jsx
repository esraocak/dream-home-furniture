import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { Badge, Link } from "@mui/material";
import { login, pages } from "../utils/constants";

const settings = ["Login", "Register", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        sx={{ backgroundColor: "#d7ccc8", color: "black" }}
      >
        <Toolbar disableGutters>
          <Typography /* büyük ekranda marka yazan kısım */
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Dream Home Furniture
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton /* küçük ekran menü ıconu */
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu /* küçük ekran menü listesi */
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => {
                const { id, text, url } = page;
                return (
                  <MenuItem key={id} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link href={url} underline="none" sx={{ color: "black" }}>
                        {text}
                      </Link>
                    </Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>

          <Typography /* büyük ekran marka */
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Dream Home Furniture
          </Typography>

          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 35 }}
          >
            {" "}
            {/* büyük ekran menü list*/}
            {pages.map((page) => {
              const { id, text, url } = page;
              return (
                <Button
                  key={id}
                  onClick={handleCloseNavMenu} //???
                  sx={{
                    my: 2,
                    color: "inherit",
                    display: "block",
                    px: "1.5rem",
                  }}
                  href={url}
                >
                  {text}
                </Button>
              );
            })}
          </Box>

          <Box sx={{ m: 0.1 }}>
            {" "}
            {/*favorite*/}
            <IconButton size="large" color="inherit">
              <Badge color="error">
                <FavoriteBorderIcon />
              </Badge>
            </IconButton>
          </Box>

          <Box sx={{ m: 1 }}>
            {" "}
            {/*cart*/}
            <IconButton size="large" color="inherit">
              <Badge badgeContent={3} color="error">
                <AddShoppingCartIcon />
              </Badge>
            </IconButton>
            {/* <p>card</p> */}
          </Box>

          <Box sx={{ m: 1 }}>
            {" "}
            {/* avatar login*/}
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Linda" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu /* login kısmındaki menü*/
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {login.map((login) => {
                const { id, url, text } = login;
                return (
                  <MenuItem key={id} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link href={url} underline="none" sx={{ color: "black" }}>
                        {text}
                      </Link>
                    </Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
