import { Grid, Button } from '@mui/material';
import React from 'react'
interface Props {
  page: number;
  perPage: number;
  nextPage: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  prevPage: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  setPerPage: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const Pagination = ({ page, nextPage, prevPage, perPage, setPerPage }: Props) => {
  return (
    <Grid container justifyContent={'center'}>
      <Grid item xs={8}>
        <div className="History__pagination">
          <p><small>Current page: {page}</small></p>

          <p>
            <small>Results per page
            </small>
          </p>
          <select className='History__pagination-select' name="per_page" onChange={setPerPage} defaultValue={perPage}>
            <option value="1">1</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>

          <div className="History__pagination-controls">
            <div className='History__pagination-btn'>
              <Button onClick={prevPage} variant="outlined">Previous</Button>
            </div>
            <div className='History__pagination-btn'>
              <Button onClick={nextPage} variant="outlined">Next</Button>
            </div>
          </div>

        </div>
      </Grid>
    </Grid>
  )
}
