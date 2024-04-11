import { Link } from "react-router-dom";
import { useGithubUser } from "./useGithubUser";

export const GithubUser = () => {
  const { data, error, reloading, isLoading } = useGithubUser("SergioGagliano");

  function handleGetUserData() {
    reloading();
  }

  return (
    <div>
      <button onClick={handleGetUserData}>Ricarica API</button>
      {isLoading && <h1>Loading...</h1>}
      {error === null ? <h1>404 Error</h1> : ""}
      {data &&
        (
          <div className="card-profile">
            <h1>{data.login}</h1>
            <h3>{data.name}</h3>
            <div className="img-container">
              <img src={data.avatar_url} alt="img_profile" />
            </div>
            <p>{data.bio}</p>
          </div>
        )}
        <Link to="/">Torna indietro</Link>
    </div>
  );
};
