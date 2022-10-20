import { useEffect, useState } from 'react';
import { CommitsList } from '../../components/CommitsList/CommitsList';
import { Footer } from '../../components/Footer/Footer';
import { http } from '../../utils/client';
import { Commit } from '../../interfaces/commit.interfaces';
import { CustomLoader } from '../../components/CustomLoader/CustomLoader';
import { EnvironmentConfig } from '../../config/config';
import { usePagination } from '../../hooks/usePagination/usePagination';
import { Pagination } from '../../components/Pagination/Pagination';

import './History.css'

export const History = () => {
  
  const [commits, setCommits] = useState<Commit[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { currentPage, goToNextPage, goToPreviousPage, perPage, setElementsPerPage } = usePagination()

  const getCommitsFromApi = async () => {
    try {
      setIsLoading(true)
      const data = await http.get<Commit[]>(EnvironmentConfig.API_URL+`?per_page=${perPage}&page=${currentPage}` as string)
      setCommits(data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    getCommitsFromApi()
  }, [currentPage, perPage])
  
  return (
    <div className='History'>
      <div className="History__container">
        <div className='History__title'>
          <h1>Take-home-test</h1>
          <p className='History__description'>An application to list the commits of this project</p>
        </div>
        {
          isLoading
          ? <CustomLoader />
          : <>
              <CommitsList commits={commits} />
              <Pagination 
              page={currentPage}
              perPage={perPage}
              setPerPage={setElementsPerPage}
              nextPage={goToNextPage}
              prevPage={goToPreviousPage}
              />
            </>
        }
        <Footer />
      </div>
    </div>
  )
}
