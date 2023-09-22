import { AppBar, Avatar, Box, Button, Container, Grid, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import logo from "../logo.jpg"
import MenuIcone from "@mui/icons-material/Menu";
function Header() {


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
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container sx={{ textAlign: "center" }}>

            <Grid item xs={2} md={6} sx={{ display: { lg: "none", xs: "block", md: "block" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit">

                <MenuIcone/>
              </IconButton>
              <Menu
            
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}

                >
                <MenuItem>
                  <Button sx={{color: "Black"}} href="/dashboard">Dashboard</Button>
                </MenuItem>
                <MenuItem>
                  <Button sx={{color: "Black"}} href="/dashboard/produtos">Produtos</Button>
                </MenuItem>
              </Menu>

            </Grid>

            <Grid item lg={2} xs={6} md={2}>
              <img src={logo} alt="" height='90px' />
            </Grid>
            <Grid item lg={8} xs={8} md={2} sx={{ display: { lg: "block", xs: "none" } }}>
              <Box>
                <Button sx={{ color: 'white' }} href="/dashboard">Dashboard</Button>
                <Button sx={{ color: 'white' }} href="/dashboard/produtos">Produtos</Button>
              </Box>


            </Grid>
            <Grid item lg={2} xs={4} md={4} sx={{ textAlign: "right" }}>  *

            </Grid>
          </Grid>
          <Tooltip title="perfil">
            <IconButton onClick={handleOpenUserMenu}>
              <Avatar alt="Gabriel" src="" ></Avatar>
            </IconButton>
          </Tooltip>

          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Perfil</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Configuracoes</Typography>
            </MenuItem>
          </Menu>

        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;