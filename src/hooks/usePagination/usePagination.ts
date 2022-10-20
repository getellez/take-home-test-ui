import { useState } from 'react';

export const usePagination = () => {
  
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [perPage, setPerPage] = useState<number>(5)

  const handlePerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(+e.target.value)
  }

  const handleNextPage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setCurrentPage(currentPage+1)
  }

  const handlePreviousPage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
