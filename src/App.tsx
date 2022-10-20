import { Route, Routes } from 'react-router-dom';
import { Error } from './pages/Error/Error';
import { History } from './pages/History/History';

function App() {
  return (
    <Routes>
      <Route path='' element={<History />} />
      <Route path='/*' element={<Error />} />
    </Routes>
  );
}

export default App;
