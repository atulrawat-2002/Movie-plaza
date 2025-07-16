import Header from './Header';
import MainContainer from './MainContainer';
import Shimmer from './Shimmer';


const PopUp = ({ popUpMovie }) => {


    return <div className=' h-lvh md:h-full bg-black' >
        <Header />
        <MainContainer props={popUpMovie} />
    </div>
}

export default PopUp;