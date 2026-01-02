import Footer from "./Footer";
import LeagueStandings from "./LeagueStandings";
import Navbar from "./Navbar"
import clearanceData from "./clearanceData";
import winterData from "./winterData";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
//     const [table, setTable] = useState([]);

//   useEffect(() => {
//     const fetchStandings = async () => {
//       const response = await fetch(
//   "https://corsproxy.io/?https://api.football-data.org/v4/competitions/PL/standings",
//   {
//     headers: {
//       "X-Auth-Token": "0cae21ff73ab43c9b5c06f5065192bd8"
//     }
//   }
// );

//       const data = await response.json();
//       setTable(data.standings[0].table.slice(0, 5)); // top 5 teams
//     };

//     fetchStandings();
//   }, []);


    return(
        <>
        <Navbar/>
           <div className="hero">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="hero-video"
  >
    <source src="/football2.mp4" type="video/mp4" />
  </video>

  <div className="hero-overlay">
    <h1 className="title">Your Home for Football Gear.</h1>
  </div>
</div> <h1 className="title"> Your Home for Football Gear.</h1>
            
            <div className="clearsale" > 
                <h1 className="clearance" >Clearance Sale</h1>
            </div>

            <div className="clearproducts">
                {clearanceData.map((item) => (
            <div key={item.id}>
            <img className="imageproducts" src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p>
              <strong>₹{item.price}</strong>{"  "}
              <span style={{ textDecoration: "line-through" }}>
                ₹{item.originalPrice}
              </span>
            </p>
            <Link to={`/product/${item.id}`}>
              <button>Buy Now</button>
            </Link>
            </div>
        ))}
      </div>

      <div className="winter">
        <div className="wintertitle">
            <h1>Winter Collection</h1>
        </div>
        <div className="clearproducts">
                {winterData.map((item) => (
            <div key={item.id}>
            <img className="imageproducts" src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p>
              <strong>₹{item.price}</strong>{"  "}
              <span style={{ textDecoration: "line-through" }}>
                ₹{item.originalPrice}
              </span>
            </p>
            <Link to={`/product/${item.id}`}>
              <button>Buy Now</button>
            </Link>
            
            </div>
        ))}
      </div>


      </div>
      {/* <div>
      <section>
      <h2>🏆 Premier League Standings</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Pos</th>
            <th>Team</th>
            <th>Played</th>
            <th>Points</th>
          </tr>
        </thead>

        <tbody>
          {table.map((team) => (
            <tr key={team.team.id}>
              <td>{team.position}</td>
              <td>{team.team.name}</td>
              <td>{team.playedGames}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
          </div>
 */}

        <LeagueStandings/>


        <Footer/>

        </>
    )


}
export default Home;