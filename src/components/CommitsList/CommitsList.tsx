import { Grid } from '@mui/material'
import { Commit } from '../Commit/Commit';
import { Commit as ICommit } from '../../interfaces/commit.interfaces';
import './CommitsList.css'
interface Props {
  commits: ICommit[]
}
export const CommitsList = ({ commits }: Props) => {
  return (
    <main className="Commits">
      <Grid container justifyContent="center" spacing={2}>
        {
          commits && commits.map(commit => (
            <Commit key={commit.sha} {...commit} />
          ))
        }
      </Grid>
    </main>
  )
}
