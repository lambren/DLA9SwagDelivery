
import './App.css';
import AmazonLogo from './assets/AmazonLogo.jpg'

import { routeState } from './recoil/atoms'
import { useRecoilValue } from 'recoil'
import ScanPage from './components/ScanPage/ScanPage';
import ConfirmPage from './components/ConfirmPage/ConfirmPage';

function App() {

  const route = useRecoilValue(routeState);

  const chooseRoute = () => {
    switch(route) {
      case 'CONFIRM_PAGE':
        return(<ConfirmPage/>);
      default:
        return(<ScanPage/>);
    }
  }

  return (
    <div className="App">
      {chooseRoute()}
      <img src={AmazonLogo} alt=''/>
    </div>
  );
}

export default App;
