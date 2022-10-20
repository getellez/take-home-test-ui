import { useState } from 'react';

export const usePagination = () => {
  
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [perPage, setPerPage] = useState<number>(5)

  const handlePerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(+e.target.value)
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage+1)
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage-1)
    } else {
      setCurrentPage(1)
    }
  }

  return {
    currentPage,
    perPage,
    goToNextPage: handleNextPage,
    goToPreviousPage: handlePreviousPage,
    setElementsPerPage: handlePerPage
  }
}
