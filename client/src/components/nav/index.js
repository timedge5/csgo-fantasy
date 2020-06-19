import React from "react";
import styles from "./nav.module.scss";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useDispatch } from "react-redux";
import {TOGGLE_NAV_DRAWER} from '../../redux/types';

export const Nav = () => {
  // global state
  const dispatch = useDispatch();

  return (
    <div>
      <AppBar position="fixed" className={styles.appbar}>
        <Toolbar>
          <Grid container justify="space-between" direction="row">
            <Grid item xs={12} md={4} className={styles.grid}>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon
                  onClick={() => dispatch({ type: TOGGLE_NAV_DRAWER })}
                />
              </IconButton>
            </Grid>
            <Grid item xs={12} md={4} className={styles.grid}>
              <Typography variant="h5">CSGO Fantasy</Typography>
            </Grid>
            <Grid item xs={12} md={4} className={styles.grid}>
              <Typography variant="button">Login</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
