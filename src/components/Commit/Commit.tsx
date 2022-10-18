import React from 'react'
import { Card, CardContent, Grid } from '@mui/material';

import './Commit.css'

export const Commit = () => {
  return (
    <Grid item xs={10} lg={8}>
      <div className="Commit">
        
        <Card variant="outlined">
          <CardContent>
            <p>This is a commit message</p>
            <small>
              <code>SHA: aslñdknaslñkdnaslkdmnaldfnaslfn</code>
            </small>
          </CardContent>
        </Card>
        
      </div>
    </Grid>
  )
}
