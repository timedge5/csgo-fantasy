import React, { useEffect } from "react";
import styles from "./players.module.scss";
import {
  Paper,
  Grid,
  Typography,
  Card,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Slider,
} from "@material-ui/core";
import { getPlayers } from "../../redux/actions/dataAction";
import { PlayerCards } from "./playerCard";
import { useDispatch, useSelector } from "react-redux";
import { SET_ROLE, SET_PRICE } from "../../redux/types";

export const Players = () => {
  // global state
  const dispatch = useDispatch();
  const role = useSelector((state) => state.ui.role);
  const price = useSelector((state) => state.ui.price);
  // api call
  useEffect(() => {
    dispatch(getPlayers());
  }, [dispatch]);

  // event handlers
  const handleChange = (e, value) => {
    dispatch({type: SET_PRICE, payload: value})
  }
  return (
    <Paper className={styles.container}>
      <Grid container className={styles.options}>
        <Grid item xs={6} md={4} className={styles.leftOver}>
          <Card className={styles.leftOverCard}>
            <Typography variant="h6">50m LEFT</Typography>
          </Card>
        </Grid>
        <Grid item xs={6} md={4} className={styles.role}>
          <FormControl>
            <InputLabel className={styles.inputLabel}>Role</InputLabel>
            <Select
              value={role}
              className={styles.select}
              onChange={(e) =>
                dispatch({ type: SET_ROLE, payload: e.target.value })
              }
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="rifler">Rifler</MenuItem>
              <MenuItem value="awper">AWPer</MenuItem>
              <MenuItem value="igl">IGL</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4} className={styles.price}>
          <Slider
            max={10}
            min={4}
            step={0.5}
            defaultValue={price}
            onChange={handleChange}
            valueLabelDisplay="on"
            className={styles.slider}
          />
          <Typography variant="button">Price</Typography>
        </Grid>
        <Grid item xs={12} className={styles.playerCardContainer}>
          <PlayerCards />
        </Grid>
      </Grid>
    </Paper>
  );
};
