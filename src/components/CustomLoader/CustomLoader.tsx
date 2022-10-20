import { Grid, Skeleton } from '@mui/material';
import './CustomLoader.css'


export const CustomLoader = () => {
  return (
    <div className='CustomLoader'>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={8}>
          <Skeleton height={50} sx={{ bgcolor: '#24385b' }} />
          <Skeleton height={50} sx={{ bgcolor: '#24385b' }} />
          <Skeleton height={50} sx={{ bgcolor: '#24385b' }} />
          <Skeleton height={50} sx={{ bgcolor: '#24385b' }} />
        </Grid>
      </Grid>
    </div>
  )
}
