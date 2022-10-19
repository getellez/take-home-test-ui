import { useEffect, useState } from 'react';
import { CommitsList } from '../../components/CommitsList/CommitsList';
import { Footer } from '../../components/Footer/Footer';
import axios from 'axios';
import './History.css'

export const History = () => {
  
  const [commits, setCommits] = useState([])
  const getCommitsFromApi = async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/api/v1/commits')
      setCommits(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCommitsFromApi()
  })
  
  return (
    <div className='History'>
      <div className="History__container">
        <div className='History__title'>
          <h1>Take-home-test</h1>
          <p className='History__description'>The purpose of this app is to list the commits of the project</p>
        </div>

        <CommitsList commits={commits} />
        <Footer />

      </div>

      

    </div>
  )
}
