import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { voteMale, voteFemale } from "../../store/voteReducer";
import "./voteCategory.css";

const VoteCategory = ({ categoryName, image, name, candidateId, selected }) => {
  const dispatch = useDispatch();
  const maleCandidates = useSelector((state) => state.vote.maleCandidates);
  const femaleCandidates = useSelector((state) => state.vote.femaleCandidates);

  const handleVote = (category) => {
    if (category === "male") {
      dispatch(voteMale({ candidateId }));
      console.log("candidateId", candidateId);
    } else if (category === "female") {
      dispatch(voteFemale({ candidateId }));
      console.log("candidateId", candidateId);
    }
  };

  const isMaleCategory = categoryName.toLowerCase() === "male";
  const isFemaleCategory = categoryName.toLowerCase() === "female";

  const isMaleVoted =
    isMaleCategory &&
    maleCandidates &&
    maleCandidates.find((candidate) => candidate.voted);
  const isFemaleVoted =
    isFemaleCategory &&
    femaleCandidates &&
    femaleCandidates.find((candidate) => candidate.voted);

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
