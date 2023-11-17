import notfound from '../../assets/error.png'
import {Divider , Typography} from '@mui/material'
import './notFound.css'
function NotFound() {

    return (
      <div className='not-found'>
        <Divider>
            <img src={notfound}  className='not-found-img' alt='Not Found Page' />
            <Typography variant="h4" mt={3} component="h5">
                Error 404
  </Typography>
  
        </Divider>
      </div>
    )
  }
  export default NotFound;