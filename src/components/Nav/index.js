import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import "./style.css";

const styles = {
  root: {
    flexGrow: 1
  }
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className="navbar">
      <div className={classes.root}>
        <AppBar position="static" color="default" className="AppBarMUI" style={{backgroundColor:"#e8232d"}}>
              <Grid container spacing={40}>
                <Grid item s={15}>
                  <img
                    alt="bob's burgers"
                    src="https://assets.foxdcg.com/dpp-uploaded/images/bobs-burgers/bobs-burgers_09/logo-tab.png"
                    id="logo"
                  />
                </Grid>
                <Grid item s={25} id="tag">
                  Memory Jumble
                </Grid>
              </Grid>
        </AppBar>
      </div>
      <div className="scoreboard">
      {props.children}
      <Grid container spacing={40}>
        <Grid item md={4}>
          <div className="score">Score Board: {props.score}</div>
        </Grid>
        <Grid item md={4}>
          <div className="high-score">High Score: {props.high}</div>
        </Grid>
        <Grid item md={4}>
          <div className="message">{props.msg}</div>
        </Grid>
      </Grid>
    </div>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleAppBar);
