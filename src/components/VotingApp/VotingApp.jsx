import VoteCategory from "../VoteCategory/VoteCategory";
import useVoteStore from "../../store/useVoteStore";
import "./votingApp.css";

const VotingApp = () => {
  const {
    votedMale,
    votedFemale,
    voteMale,
    voteFemale,
    showModal,
    setShowModal,
    resetVotes,
    maleCandidates,
    femaleCandidates,
    maleVotes,
    femaleVotes,
  } = useVoteStore();

  const handleSubmit = () => {
    console.log("true");
    setShowModal(true);
  };

  const handleVoteMale = (candidateId) => {
    console.log("Voted for Male Candidate:", candidateId);
    voteMale(candidateId);
  };

  const handleVoteFemale = (candidateId) => {
    console.log("Voted for Female Candidate:", candidateId);
    voteFemale(candidateId);
  };

  const handleCloseModal = () => {
    console.log("close");
    setShowModal(false);
    resetVotes();
  };

  const isVotingCompleted = votedMale && votedFemale;

  return (
    <div className='voting-app'>
      <div className='category-container'>
        <div className='male-category'>
          <h3>Category Gentelman of the Year</h3>
          <div className='Vote-Category-wrapper'>
            {maleCandidates.map((candidate) => (
              <VoteCategory
                key={candidate.id}
                categoryName='male' // Update categoryName to lowercase "male"
                image={candidate.image}
                name={candidate.name}
                candidateId={candidate.id}
                handleVote={handleVoteMale}
                selected={votedMale === candidate.id}
              />
            ))}
          </div>
        </div>
        <div className='female-category'>
          <h3>Category ladies of the year</h3>
          <div className='Vote-Category-wrapper'>
            {femaleCandidates.map((candidate) => (
              <VoteCategory
                key={candidate.id}
                categoryName='female' // Update categoryName to lowercase "female"
                image={candidate.image}
                name={candidate.name}
                candidateId={candidate.id}
                handleVote={handleVoteFemale}
                selected={votedFemale === candidate.id}
              />
            ))}
          </div>
        </div>
      </div>
      {showModal && (
        <div>
          <div className='modal'>
            <div className='modal-content'>
              <h2>Results</h2>
              {isVotingCompleted ? (
                <div>
                  <p>Best Male: Candidate Male {maleVotes}</p>
                  <p>Best Female: Candidate Female {femaleVotes}</p>
                </div>
              ) : (
                <p>No votes recorded yet.</p>
              )}
              <button onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        </div>
      )}
      <button className='submit-btn' onClick={handleSubmit}>
        Submit Your Votes
      </button>
    </div>
  );
};

export default VotingApp;
