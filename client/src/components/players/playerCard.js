import React from "react";
import styles from "./players.module.scss";
import { useSelector } from "react-redux";
import {
  Card,
  Typography,
  Grid,
  CardMedia,
} from "@material-ui/core";

export const PlayerCards = () => {
  // global state
  const players = useSelector((state) => state.data.players);
  const price = useSelector((state) => state.ui.price);
  const role = useSelector((state) => state.ui.role);

  // role and price render handlers
  let playersArr;
  if (role === "all") {
    playersArr = players.sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
  } else {
    playersArr = players
      .sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
      .filter((item) => item.role === role);
  }
  playersArr.reverse();

  return (
    <Grid container className={styles.playerCardGrid}>
      {players ? (
        playersArr
          .filter((item) => item.price >= price)
          .map((player, i) => {
            return (
              <Grid item xs={6} md={3} key={i}>
                <Card className={styles.playerCard} raised={true}>
                  <CardMedia>
                    <img
                      src={`https://firebasestorage.googleapis.com/v0/b/csgo-fantasy-751b7.appspot.com/o/${player.shortTeam}%2F${player.name}.webp?alt=media`}
                      alt={player.name}
                      className={styles.playerCardImg}
                    />
                  </CardMedia>
                  <Typography variant="subtitle1" className={styles.text}>
                    {player.name}
                  </Typography>
                </Card>
              </Grid>
            );
          })
      ) : null}
    </Grid>
  );
};
