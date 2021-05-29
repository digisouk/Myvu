import DenseAppBar from './NavBar'
import FullWidthTabs from './Prile'
import AvatarGrid from'./Avatar'
import '../App.css';


function Profile() {
  return (
    <div className="App">
  <DenseAppBar/>
   <AvatarGrid/>
  <FullWidthTabs/>
    </div>
  );
}

export default Profile;
