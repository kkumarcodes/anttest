import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { cloneDeep } from "lodash";
import { CssBaseline, Toolbar, Typography,Button, Grid, Container, AppBar } from "@material-ui/core";
import useStyles from "./style";
import { GET_ANT } from "../../helper/graphql";
import LinearProgress from "../../components/LinearProgress"

const DashboardPage = () => {
  const classes = useStyles();
  const [getAnt, { data: antData = null }] = useLazyQuery(GET_ANT);
  const [newData, setNewData] = React.useState()
  const [antDummyData, setAntDummyData] = React.useState(
    [
      {
        "name": "Marie 'Ant'oinette",
        "length": 12,
        "color": "BLACK",
        "weight": 2,
        "init": 0.1,
        "progress": 0,
        "calculated": 0,
      },
      {
        "name": "Flamin' Pincers",
        "length": 11,
        "color": "RED",
        "weight": 2,
        "init": 0.5,
        "progress": 0,
        "calculated": 0,
      },
      {
        "name": "Big Susan",
        "length": 20,
        "color": "BLACK",
        "weight": 5,
        "init": 0.6,
        "progress": 0,
        "calculated": 0,
      },
      {
        "name": "The Unbeareable Lightness of Being",
        "length": 5,
        "color": "SILVER",
        "weight": 1,
        "init": 0.9,
        "progress": 0,
        "calculated": 0,
      },
      {
        "name": "'The Duke'",
        "length": 17,
        "color": "RED",
        "weight": 3,
        "init": 0.4,
        "progress": 0,
        "calculated": 0,
      }
    ]
  )

  useEffect(() => {
    getAnt();
  }, [])

  function generateAntWinLikelihoodCalculator(index) {
    const delay = 7000 + Math.random() * 7000;
    const likelihoodOfAntWinning = Math.random();

    return (callback) => {
      setTimeout(() => {
        callback(likelihoodOfAntWinning, index);
      }, delay);
    };
  }
  const setAntData = (data, index) => {

    setNewData({
      index,
      data
    })
  }

  useEffect(() => {
    if (newData && newData.data >= 0) {
      let ant = cloneDeep(antDummyData)
      ant[newData.index].progress = ant[newData.index].calculated
      ant[newData.index].calculated = newData.data
  
      setAntDummyData(ant)
    }
  }, [newData])

  const runAnt = () => {
    antDummyData.forEach((element, index) => {

      const newData = generateAntWinLikelihoodCalculator(index)
      console.log(newData, '===generateAntWinLikelihoodCalculator===')
      newData(setAntData)

    });
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" color="#fff" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography id="studentName" component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Wu test
          </Typography>
        </Toolbar>
      </AppBar>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          Red: not yet run; <br/>
          Greeen: in progress;<br/>
          Blue: calculated;<br/>
          <hr/>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            {antDummyData && antDummyData.sort((a, b) => b.calculated - a.calculated).map(ant => {
              return <>
              <Typography >
                {ant.name} - {ant.color}
              </Typography>
              <Grid item xs={12}>
                <LinearProgress data={ant} />
              </Grid>
              </>
            })}
          </Grid>
          <Button variant="contained" color="primary" onClick={runAnt}>
  Run
</Button>
        </Container>
      </main>
    </div>
  );
};

export default DashboardPage;
