import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import {  Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { MdTravelExplore } from "react-icons/md";





function Header() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
 const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
 

  // Modal controls
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Mobile menu controls
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Validation
  const validate = () => {
    let newerrors = {};

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      newerrors.email = "Invalid email format";
    }

    if (form.password.length < 6) {
      newerrors.password = "Password must be at least 6 characters";
    }

    return newerrors;
  };

  // Submit
  const handleSubmit = () => {
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      navigate("/login", { state: form });
      handleClose();
    }
  };

  return (
    <>
      
      <AppBar position="sticky" sx={{ backgroundColor: "white", boxShadow: 2 ,padding:"0px 40px" }}>
        <Toolbar>

          {/* logo */}
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, color: "rgb(47,106,127)", fontWeight: "bold" }}
          >
          <MdTravelExplore className="fs-3"/>  TRAVEL
          </Typography>

          {/* desktop Links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              color: "rgb(47,106,127)",
            }}
          >
            <Link to="/" color="inherit" className="text-decoration-none" style={{color:"rgb(47,106,127)"}}>Home</Link>
            <Link to="destinations" color="inherit" className="text-decoration-none" style={{color:"rgb(47,106,127)"}}>Destinations</Link>
            <Link to="services" color="inherit" style={{color:"rgb(47,106,127)"}} className="text-decoration-none">Services</Link>
            <Link to="reviews" style={{color:"rgb(47,106,127)"}} color="inherit" className="text-decoration-none">Reviews</Link>
           
          </Box>

          {/* Mobile  Icon */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "#006994" }}
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>

          {/*  Dropdown */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem onClick={handleMenuClose}>Destinations</MenuItem>
            <MenuItem onClick={handleMenuClose}>Services</MenuItem>
            <MenuItem onClick={handleMenuClose}>Reviews</MenuItem>
           
            <MenuItem onClick={() => { handleMenuClose(); handleOpen(); }}>
              Login
            </MenuItem>
          </Menu>

          {/* Login Button (Desktop) */}
          <Button
            variant="contained"
            sx={{
              ml: 2,
              background: "linear-gradient(to right, #3ac5fc , #0882b3)",
              display: { xs: "none", md: "block" },
            }}
            onClick={handleOpen}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>

      {/* MODAL */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            width: 350,
            bgcolor: "white",
            p: 3,
            borderRadius: 2,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h6" sx={{ color: "#006994" }}>
            Login
          </Typography>

          <TextField
            label="Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            error={!!errors.name}
            helperText={errors.name}
            fullWidth
          />

          <TextField
            label="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
          />

          <TextField
            label="Password"
            type="password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            error={!!errors.password}
            helperText={errors.password}
            fullWidth
          />

          <Button
            variant="contained"
            sx={{
              background:
                "linear-gradient(to right, #8bd8f7 , #0e82af)",
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>

          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default Header;

