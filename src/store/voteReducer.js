import { createSlice } from "@reduxjs/toolkit";
import tomHanksImage from "../assets/tom-hanks.jpg";
import bradPittImage from "../assets/brad-pitt.jpg";
import leonardoDicaprioImage from "../assets/leonardo-dicaprio.jpg";
import robertDowneyImage from "../assets/robert-downey-jr.jpg";
import chrisHemsworthImage from "../assets/chris-hemsworth.jpg";
import willSmithImage from "../assets/will-smith.jpg";
import mattDamonImage from "../assets/matt-damon.jpg";
import hughJackmanImage from "../assets/hugh-jackman.jpg";
import denzelWashingtonImage from "../assets/denzel-washington.jpg";

import emmaStoneImage from "../assets/emma-stone.jpg";
import charlizeTheronImage from "../assets/charlize-theron.jpg";
import jenniferLawrenceImage from "../assets/jennifer-lawrence.jpg";
import nataliePortmanImage from "../assets/natalie-portman.jpg";
import merylStreepImage from "../assets/meryl-streep.jpg";
import galGadotImage from "../assets/gal-gadot.jpg";
import anneHathawayImage from "../assets/anne-hathaway.jpg";
import cateBlanchettImage from "../assets/cate-blanchett.jpg";
import scarlettJohanssonImage from "../assets/scarlett-johansson.jpg";

const initialState = {
  maleCandidates: [
    { id: 1, name: "Tom Hanks", image: tomHanksImage, votes: 0 },
    { id: 2, name: "Brad Pitt", image: bradPittImage, votes: 0 },
    {
      id: 3,
      name: "Leonardo DiCaprio",
      image: leonardoDicaprioImage,
      votes: 0,
    },
    {
      id: 4,
      name: "Robert Downey Jr.",
      image: robertDowneyImage,
      votes: 0,
    },
    { id: 5, name: "Chris Hemsworth", image: chrisHemsworthImage, votes: 0 },
    { id: 6, name: "Ryan Reynolds", image: mattDamonImage, votes: 0 },
    { id: 7, name: "Hugh Jackman", image: hughJackmanImage, votes: 0 },
    {
      id: 8,
      name: "Denzel Washington",
      image: denzelWashingtonImage,
      votes: 0,
    },
    { id: 9, name: "Will Smith", image: willSmithImage, votes: 0 },
    { id: 10, name: "Matt Damon", image: mattDamonImage, votes: 0 },
  ], // Your initial maleCandidates array
  femaleCandidates: [
    {
      id: 1,
      name: "Scarlett Johansson",
      image: scarlettJohanssonImage,
      votes: 0,
    },
    {
      id: 2,
      name: "Jennifer Lawrence",
      image: jenniferLawrenceImage,
      votes: 0,
    },
    { id: 3, name: "Meryl Streep", image: merylStreepImage, votes: 0 },
    { id: 4, name: "Natalie Portman", image: nataliePortmanImage, votes: 0 },
    { id: 5, name: "Emma Stone", image: emmaStoneImage, votes: 0 },
    { id: 6, name: "Charlize Theron", image: charlizeTheronImage, votes: 0 },
    { id: 7, name: "Gal Gadot", image: galGadotImage, votes: 0 },
    { id: 8, name: "Anne Hathaway", image: anneHathawayImage, votes: 0 },
    { id: 9, name: "Cate Blanchett", image: cateBlanchettImage, votes: 0 },
  ], // Your initial femaleCandidates array
  maleVotes: 0,
  femaleVotes: 0,
  votedMale: false,
  votedFemale: false,
  showModal: false,
};

const voteSlice = createSlice({
  name: "vote",
  initialState,
  reducers: {
    voteMale: (state, action) => {
      const { candidateId } = action.payload;
      // Update the state to increment the votes for the male candidate with the given candidateId
      state.maleCandidates = state.maleCandidates.map((candidate) =>
        candidate.id === candidateId
          ? { ...candidate, votes: candidate.votes + 1 }
          : candidate
      );
      state.maleVotes = candidateId; // Set the selected candidateId as the maleVotes
      state.votedMale = true;
    },
    voteFemale: (state, action) => {
      const { candidateId } = action.payload;
      // Update the state to increment the votes for the female candidate with the given candidateId
      state.femaleCandidates = state.femaleCandidates.map((candidate) =>
        candidate.id === candidateId
          ? { ...candidate, votes: candidate.votes + 1 }
          : candidate
      );
      state.femaleVotes = candidateId; // Set the selected candidateId as the femaleVotes
      state.votedFemale = true;
    },
    resetVotes: (state) => {
      // Reset the votes and other related state properties
      state.maleCandidates = state.maleCandidates.map((candidate) => ({
        ...candidate,
        votes: 0,
      }));
      state.femaleCandidates = state.femaleCandidates.map((candidate) => ({
        ...candidate,
        votes: 0,
      }));
      state.maleVotes = 0;
      state.femaleVotes = 0;
      state.votedMale = false;
      state.votedFemale = false;
      state.showModal = false;
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
  },
});

export const { voteMale, voteFemale, resetVotes, setShowModal } =
  voteSlice.actions;

export default voteSlice.reducer;
