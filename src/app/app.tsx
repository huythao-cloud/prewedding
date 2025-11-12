// Uncomment this line to use CSS modules
import './app.scss';
import WeddingSite from './components/WeddingSite/WeddingSite';

// Import global styles for WeddingSite
import './components/WeddingSite/WeddingSite.scss';

// Import Font Awesome 5
import '@fortawesome/fontawesome-free/css/all.min.css';

export function App() {
  return (
    <div className='main'>
      <WeddingSite />
    </div>
  );
}

export default App;
