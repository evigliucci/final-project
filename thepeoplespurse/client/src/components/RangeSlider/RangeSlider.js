import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import "./style.css";

const useStyles = makeStyles({
  root: {
    width: 550,
  },
  input: {
    width: 420,
  },
});

export default function InputSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

   const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSliderChange1 = (event, newValue1) => {
    setValue(newValue1);
  };
  const handleSliderChange2 = (event, newValue2) => {
    setValue(newValue2);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <>
    <div className={classes.root} id="DoS">
      <Typography id="input-slider" gutterBottom>
        Department of State
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange1}
            aria-labelledby="input-slider"
            valueLabelDisplay="on"
          />
        </Grid>
    </Grid>
    </div>
    <div className={classes.root} id="DoA">
      <Typography id="input-slider" gutterBottom>
        Department of Agriculture
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange2}
            aria-labelledby="input-slider"
            valueLabelDisplay="on"
          />
        </Grid>
    </Grid>
    </div>
    <div className={classes.root} id="DoE">
      <Typography id="input-slider" gutterBottom>
        Department of Energy
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            valueLabelDisplay="on"
          />
        </Grid>
    </Grid>
    </div>
    <div className={classes.root} id="DoC">
      <Typography id="input-slider" gutterBottom>
        Department of Commerce
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            valueLabelDisplay="on"
          />
        </Grid>
    </Grid>
    </div>
    <div className={classes.root} id="DoD">
      <Typography id="input-slider" gutterBottom>
        Department of Defense
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            valueLabelDisplay="on"
          />
        </Grid>
    </Grid>
    </div>
    <div className={classes.root} id="DoEd">
      <Typography id="input-slider" gutterBottom>
        Department of Education
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            valueLabelDisplay="on"
          />
        </Grid>
    </Grid>
    </div>
    <div className={classes.root} id="DoH">
      <Typography id="input-slider" gutterBottom>
        Department of Health & Human Services
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            valueLabelDisplay="on"
          />
        </Grid>
    </Grid>
    </div>
    <div className={classes.root} id="DoHs">
      <Typography id="input-slider" gutterBottom>
        Department of Homeland Security
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            valueLabelDisplay="on"
          />
        </Grid>
    </Grid>
    </div>
    <div className={classes.root} id="Hud">
      <Typography id="input-slider" gutterBottom>
        Department of Housing & Urban Development
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            valueLabelDisplay="on"
          />
        </Grid>
    </Grid>
    </div>
    <div className={classes.root} id="DoJ">
      <Typography id="input-slider" gutterBottom>
        Department of Justice
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            valueLabelDisplay="on"
          />
        </Grid>
    </Grid>
    </div>
    <div className={classes.root} id="DoL">
      <Typography id="input-slider" gutterBottom>
        Department of Labor
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            valueLabelDisplay="on"
          />
        </Grid>
    </Grid>
    </div>
    <div className={classes.root} id="DoT">
      <Typography id="input-slider" gutterBottom>
        Department of Transportation
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            valueLabelDisplay="on"
          />
        </Grid>
    </Grid>
    </div>
    <div className={classes.root} id="VA">
      <Typography id="input-slider" gutterBottom>
        Department of Veterans Affairs
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            valueLabelDisplay="on"
          />
        </Grid>
    </Grid>
    </div>
    <div className={classes.root} id="DoI">
      <Typography id="input-slider" gutterBottom>
        Department of the Interior
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            valueLabelDisplay="on"
          />
        </Grid>
    </Grid>
    </div>
    <div className={classes.root} id="DoTr">
      <Typography id="input-slider" gutterBottom>
        Department of Treasury
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            valueLabelDisplay="on"
          />
        </Grid>
    </Grid>
    </div>
    <div className={classes.root} id="EPA">
      <Typography id="input-slider" gutterBottom>
        Environmental Protection Agency
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            valueLabelDisplay="on"
          />
        </Grid>
    </Grid>
    </div>
    <div className={classes.root} id="FCC">
      <Typography id="input-slider" gutterBottom>
        Federal Communication Commission
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            valueLabelDisplay="on"
          />
        </Grid>
    </Grid>
    </div>
    <div className={classes.root} id="FEC">
      <Typography id="input-slider" gutterBottom>
        Federal Election Commission
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            valueLabelDisplay="on"
          />
        </Grid>
    </Grid>
    </div>
    <div className={classes.root} id="FTC">
      <Typography id="input-slider" gutterBottom>
        Federal Trade Commission
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            valueLabelDisplay="on"
          />
        </Grid>
    </Grid>
    </div>
    <div className={classes.root} id="EEoC">
      <Typography id="input-slider" gutterBottom>
        Equal Employment Opportunity Comission
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            valueLabelDisplay="on"
          />
        </Grid>
    </Grid>
    </div>
    </>
  );
}