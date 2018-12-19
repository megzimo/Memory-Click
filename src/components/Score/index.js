import React from "react";
import Grid from "@material-ui/core/Grid";

function Score(props) {
  return (
    <div className="scoreboard">
      {props.children}
      <Grid container spacing={40}>
        <Grid item md={6}>
          <div className="score">Score Board:</div>
        </Grid>
        <Grid item md={6}>
          <div className="high-score">High Score:</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Score;
