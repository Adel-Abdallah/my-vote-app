import useVoteStore from "../../store/useVoteStore";
import PropTypes from "prop-types";
import "./voteCategory.css";

const VoteCategory = ({ categoryName, image, name, candidateId, selected }) => {
  const { voteMale, voteFemale, maleCandidates, femaleCandidates } =
    useVoteStore();

  const handleVote = (category) => {
    if (category === "male") {
      voteMale(candidateId);
      console.log("candidateId", candidateId);
    } else if (category === "female") {
      voteFemale(candidateId);
      console.log("candidateId", candidateId);
    }
  };

  const isMaleCategory = categoryName.toLowerCase() === "male";
  const isFemaleCategory = categoryName.toLowerCase() === "female";

  const isMaleVoted =
    isMaleCategory && maleCandidates.find((candidate) => candidate.voted);
  const isFemaleVoted =
    isFemaleCategory && femaleCandidates.find((candidate) => candidate.voted);

  const isVoteDisabled = isMaleVoted || isFemaleVoted;

  return (
    <div className='vote-category'>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      {!isVoteDisabled && (
        <button
          className={`vote-button ${selected ? "selected" : ""}`}
          onClick={() => handleVote(categoryName.toLowerCase())}
        >
          Vote
        </button>
      )}
    </div>
  );
};

VoteCategory.propTypes = {
  categoryName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  candidateId: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default VoteCategory;
