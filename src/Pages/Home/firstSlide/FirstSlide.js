import {  Grid, Typography } from '@mui/material'  
const FirstSlide = () => { 
  return (
    <div className='section-one'>
         <Grid  container>
        <Grid className='back' item xs={12} md={12}>
          <div className='content'>
          <Typography variant='h5' component='h4'>Great products with best details</Typography>
          <Typography variant='subtitle2' component='p'>e-commerce, in full electronic commerce, maintaining relationships <br></br>and conducting business 
          transactions that include selling information, services .</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default FirstSlide