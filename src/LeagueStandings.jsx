import { useEffect, useState } from "react";

const LiveScores = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.scorebat.com/video-api/v3/")
      .then((res) => res.json())
      .then((data) => {
        setMatches(data.response.slice(0, 10)); // first 10 matches
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "30px" , marginTop: "100px"}}>
      <h2>⚽ Live / Recent Matches</h2>

      {loading && <p>Loading matches...</p>}

      {!loading && matches.length === 0 && <p>No matches available</p>}

      {!loading &&
        matches.map((match, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <h4>{match.title}</h4>
            <p>{match.competition}</p>
            <a href={match.matchviewUrl} target="_blank">
              View Details
            </a>
          </div>
        ))}
    </div>
  );
};

export default LiveScores;
