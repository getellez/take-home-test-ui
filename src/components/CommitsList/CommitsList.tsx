import React from 'react'
import { Grid } from '@mui/material'
import { Commit } from '../Commit/Commit';

import './CommitsList.css'

export const CommitsList = () => {
  return (
    <div className="Commits">
      <Grid container justifyContent="center" spacing={2}>
        
        <Commit />
        <Commit />
        <Commit />
        
      </Grid>
    </div>
  )
}
