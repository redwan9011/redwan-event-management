import { useLoaderData } from "react-router-dom";
import Banner from "../../HomeComponents/Banner/Banner";
import Cards from "../../HomeComponents/Cards/Cards";

import Planning from "../../HomeComponents/Planning/Planning";
import Clients from "../../HomeComponents/Clients/Clients";



const Home = () => {
    const cards = useLoaderData()
   
    return (
        <div className="my-8">
            
            <Banner></Banner>
            <Planning></Planning>
            <Cards cards={cards}></Cards>
          <Clients></Clients>
           

        </div>
    );
};

export default Home;