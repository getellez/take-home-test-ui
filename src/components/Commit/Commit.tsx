import React from 'react'
import { Card, CardContent, Grid } from '@mui/material';

import './Commit.css'
import { Commit as ICommit } from '../../interfaces/commit.interfaces';



export const Commit = ({ sha, author, date, message }: ICommit) => {
  
  const customDate = new Date(date).toLocaleString()

  return (
    <Grid item xs={10} lg={8}>
      <div className="Commit">
        
        <Card variant="outlined">
          <CardContent>
            <p className='Commit__message'>{message}</p>
            <small>
              <p>Author: {author}</p>
              <p>Pushed at: {customDate}</p>
              <code>SHA: {sha}</code>
            </small>
          </CardContent>
        </Card>
        
      </div>
    </Grid>
  )
}
