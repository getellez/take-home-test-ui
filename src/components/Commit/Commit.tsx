import { Grid } from '@mui/material';
import { Commit as ICommit } from '../../interfaces/commit.interfaces';
import { Card } from '../Card/Card';
import './Commit.css'

export const Commit = ({ sha, author, date, message }: ICommit) => {
  
  const customDate = new Date(date).toLocaleString()

  return (
    <Grid item xs={10} lg={8}>
      <Card
      author={author}
      date={customDate}
      message={message}
      sha={sha}/>
    </Grid>
  )
}
