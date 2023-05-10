import { useSelector, useDispatch } from "react-redux";
import {
  voteMale,
  voteFemale,
  resetVotes,
  setShowModal,
} from "../../store/voteReducer";
import VoteCategory from "../VoteCategory/VoteCategory";
import "./votingApp.css";

const VotingApp = () => {
  const dispatch = useDispatch();
  const {
    votedMale,
    votedFemale,
    showModal,
    maleCandidates,
    femaleCandidates,
    maleVotes,
    femaleVotes,
  } = useSelector((state) => state.vote);

  const handleSubmit = () => {
    dispatch(setShowModal(true));
  };

  const handleVoteMale = (candidateId) => {
    dispatch(voteMale({ candidateId }));
  };

  const handleVoteFemale = (candidateId) => {
    dispatch(voteFemale({ candidateId }));
  };

  const handleCloseModal = () => {
    dispatch(resetVotes());
    dispatch(setShowModal(false));
  };

  const isVotingCompleted = votedMale && votedFemale;

  const bestMaleCandidate = maleCandidates.find(
    (candidate) => candidate.id === maleVotes
  );

  const bestFemaleCandidate = femaleCandidates.find(
    (candidate) => candidate.id === femaleVotes
  );

  return (
    <div className='voting-app'>
      <div className='category-container'>
        <div className='male-category'>
          <h3>Category Gentlemen of the Year</h3>
          <div className='Vote-Category-wrapper'>
            {maleCandidates.map((candidate) => (
              <VoteCategory
                key={candidate.id}
                categoryName='male'
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
          <h3>Category Ladies of the Year</h3>
          <div className='Vote-Category-wrapper'>
            {femaleCandidates.map((candidate) => (
              <VoteCategory
                key={candidate.id}
                categoryName='female'
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
                  <p>Best Male: {bestMaleCandidate.name}</p>
                  <p>Best Female: {bestFemaleCandidate.name}</p>
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
