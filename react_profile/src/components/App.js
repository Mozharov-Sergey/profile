import Header from './Header';
import AboutMe from './AboutMe';
import MyStack from './MyStack';
import Works from './Works';

import mestoScreen from '../images/siteScreens/mestoScreen.png'

const projectsList = [
  {name: 'Место', url: mestoScreen}
]

function App() {
  return (
    <div className="root">
      <div className="page">
        <Header></Header>
        <AboutMe></AboutMe>
        <MyStack></MyStack>
        <Works projects={projectsList}></Works>
   
      </div>
    </div>
  );
}

export default App;
