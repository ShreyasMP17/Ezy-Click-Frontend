import { useNavigate } from "react-router-dom";
import "../styles/home.css"

const Home = () => {

    let navigate = useNavigate()
let handleClick =()=>{
    navigate("/signup")
}

    return ( 
        <div className="bms">
            <div className="navbar">
                <div className="logo">
                <img src="bb logo.svg" alt=""/>
                <input type="text"    placeholder="🔎 Search for movie, events, sports, activities and plays "/>
                </div>
                <div className="links">
                <a href="">Begaluru</a>
                <button onClick={handleClick}>Sign in</button>
                </div>
            </div>
            <div className="carousel">
            <marquee behavior="scroll" direction="right" scrollamount="20">
                <img src="images/1scroll.avif" alt=""/>
                <img src="images/2scroll.avif" alt=""/>
                <img src="images/3scroll.avif" alt=""/>
                <img src="images/4scroll.avif" alt="" />
            </marquee>
            </div>
            <div className="movie_list">
                <div className="title">
                <h2>Recommended Movies</h2>
                <a href="">See More</a>
                </div>
                <div className="movies">
               <div className="img1"> 
               <img src="images/mov1.avif" alt="" />
            <h3>OPPENHEIMER</h3>
        <p>Crime,Mystery,Thriller</p>
    </div>
               <div className="img2"> 
               <img src="images/mov2.avif" alt="" />
                <h3>Hosel hudugaru..</h3>
                <p>Action,Adventure,Fantasy</p>
             </div>
                <div className="img3">
                    <img src="images/mov3.avif" alt="" />
                    <h3>BRO</h3>
                    <p>Comedy,Thriller</p>
                </div>
              <div className="img4">
                  <img src="images/mov4.avif" alt="" />
                <h3>Rocky and Rani</h3>
                <p>Action,comedy,Thriller</p>
            </div>
              <div className="img5">  
              <img src="images/mov5.avif" alt=""/>
                <h3>BARBIE</h3>
                <p>Action,Adventure,Drama</p>
            </div>
            </div>

        </div>
        </div>
    );
}

 
export default Home;