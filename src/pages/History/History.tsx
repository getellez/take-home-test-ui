import './History.css'
import { CommitsList } from '../../components/CommitsList/CommitsList';

export const History = () => {
  return (
    <div className='History'>
      <div className="History__container">
        <div className='History__title'>
          <h1>Take-home-test</h1>
          <p className='History__description'>The purpose of this app is to list the commits of the project</p>
        </div>

        <CommitsList />


      </div>

      

    </div>
  )
}
