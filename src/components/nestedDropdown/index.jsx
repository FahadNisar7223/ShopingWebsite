import React, { useState, useRef } from "react";
import {
  Button,
  Menu,
  MenuItem,
  Popper,
  Grow,
  Paper,
  MenuList,
  ClickAwayListener,
  Box,
  ListItemIcon,
} from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import DiamondIcon from "@mui/icons-material/Diamond";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";

const NestedDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const menuRef = useRef(null);
  const subMenuRef = useRef(null);

  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => {
    setAnchorEl(null);
    setOpenSubMenu(null);
    setSubMenuAnchorEl(null);
  };

  const handleSubMenuOpen = (event, menu) => {
    setSubMenuAnchorEl(event.currentTarget);
    setOpenSubMenu(menu);
  };

  const handleClickAway = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      subMenuRef.current &&
      !subMenuRef.current.contains(event.target)
    ) {
      handleClose();
    }
  };

  return (
    <Box width="300px" sx={{ background: "#F6F9FC" }}>
      <Button
        sx={{ color: "#2B3445", width: "300px" }}
        aria-controls="main-menu"
        aria-haspopup="true"
        onClick={handleClick}
        startIcon={<CategoryIcon sx={{ marginRight: "70px" }} />}
      >
        Categories
      </Button>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box
          ref={menuRef}
          onMouseLeave={() => {
            setTimeout(() => {
              if (
                menuRef.current &&
                !menuRef.current.contains(document.activeElement) &&
                subMenuRef.current &&
                !subMenuRef.current.contains(document.activeElement)
              ) {
                handleClose();
              }
            }, 200);
          }}
        >
          <Menu
            id="main-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              style: {
                width: "300px", // Apply width directly to the Paper component
              },
            }}
          >
            <MenuItem
              onMouseEnter={(event) => handleSubMenuOpen(event, "item1")}
            >
              <ListItemIcon>
                <LocalOfferIcon />
              </ListItemIcon>
              Fashion
            </MenuItem>
            <MenuItem
              onMouseEnter={(event) => handleSubMenuOpen(event, "item2")}
            >
              <ListItemIcon>
                <ElectricCarIcon />
              </ListItemIcon>
              Electronics
            </MenuItem>
            <MenuItem
              onMouseEnter={(event) => handleSubMenuOpen(event, "item3")}
            >
              <ListItemIcon>
                <DiamondIcon />
              </ListItemIcon>
              Jewelry
            </MenuItem>
          </Menu>

          <Popper
            sx={{ width: "300px" }}
            open={Boolean(openSubMenu)}
            anchorEl={subMenuAnchorEl}
            placement="right-start"
            disablePortal
            transition
            ref={subMenuRef}
          >
            {({ TransitionProps }) => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: "left top" }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClickAway}>
                    <MenuList>
                      {openSubMenu === "item1" && (
                        <>
                          <MenuItem onClick={handleClose}>
                            Men's Clothing
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            Women's Clothing
                          </MenuItem>
                        </>
                      )}
                      {openSubMenu === "item2" && (
                        <>
                          <MenuItem onClick={handleClose}>EV Cars</MenuItem>
                          <MenuItem onClick={handleClose}>Sport Cars</MenuItem>
                        </>
                      )}
                      {openSubMenu === "item3" && (
                        <>
                          <MenuItem onClick={handleClose}>Necklace</MenuItem>
                          <MenuItem onClick={handleClose}>Earrings</MenuItem>
                        </>
                      )}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Box>
      </ClickAwayListener>
    </Box>
  );
};

export default NestedDropdown;
