import {Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import {ListView, WeekView} from '../pages';

const Page404 = () => {
	return (
      <>
         <h1 style={{ textAlign: "center", marginTop: 100 }}>404</h1>
         <h1 style={{ textAlign: "center" }}>Page not found</h1>
      </>
   );
}

function App() {
	return (
      <div>
         <Navbar />

         <Routes>
            <Route path="/" element={<ListView />} />

            <Route path="/weekview" element={<WeekView />} />

				<Route path='*' element={<Page404 />} />
         </Routes>
      </div>
   );
}

export default App;
