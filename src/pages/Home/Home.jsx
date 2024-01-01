import Banner from "../../components/Home/Banner/Banner";
import Category from "../../components/Home/Category/Category";
import Navbar from "../../components/shared/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Category></Category>
        </div>
    );
};

export default Home;