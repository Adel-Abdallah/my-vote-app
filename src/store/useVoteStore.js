import { create } from "zustand";
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

const useVoteStore = create((set) => {
  const maleCandidates = [
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
  ];

  const femaleCandidates = [
    {
      id: 1,
      name: "Scarlett Johansson",
      image: scarlettJohanssonImage,
      votes: 0,
    },
    {
      id: 3,
      name: "Jennifer Lawrence",
      image: jenniferLawrenceImage,
      votes: 0,
    },
    { id: 4, name: "Meryl Streep", image: merylStreepImage, votes: 0 },
    { id: 5, name: "Natalie Portman", image: nataliePortmanImage, votes: 0 },
    { id: 6, name: "Emma Stone", image: emmaStoneImage, votes: 0 },
    { id: 7, name: "Charlize Theron", image: charlizeTheronImage, votes: 0 },
    { id: 8, name: "Gal Gadot", image: galGadotImage, votes: 0 },
    { id: 9, name: "Anne Hathaway", image: anneHathawayImage, votes: 0 },
    { id: 10, name: "Cate Blanchett", image: cateBlanchettImage, votes: 0 },
  ];

  return {
    maleCandidates,
    femaleCandidates,
    maleVotes: 0, // Initialize maleVotes
    femaleVotes: 0, // Initialize femaleVotes
    votedMale: false,
    votedFemale: false,
    showModal: false,
    setShowModal: (show) => {
      console.log("Setting showModal:", show);
      set({ showModal: show });
    },
    voteMale: (candidateId) =>
      set((state) => {
        console.log("Voting for Male Candidate:", candidateId);
        const updatedMaleCandidates = state.maleCandidates.map((candidate) =>
          candidate.id === candidateId
            ? { ...candidate, votes: candidate.votes + 1 }
            : candidate
        );
        const updatedMaleVotes = state.maleVotes + 1;
        console.log("Updated maleCandidates:", updatedMaleCandidates);
        console.log("Updated maleVotes:", updatedMaleVotes);
        return {
          maleCandidates: updatedMaleCandidates,
          votedMale: true,
          maleVotes: updatedMaleVotes,
        };
      }),
    voteFemale: (candidateId) =>
      set((state) => {
        console.log("Voting for Female Candidate:", candidateId);
        const updatedFemaleCandidates = state.femaleCandidates.map(
          (candidate) =>
            candidate.id === candidateId
              ? { ...candidate, votes: candidate.votes + 1 }
              : candidate
        );
        const updatedFemaleVotes = state.femaleVotes + 1;
        console.log("Updated femaleCandidates:", updatedFemaleCandidates);
        console.log("Updated femaleVotes:", updatedFemaleVotes);
        return {
          femaleCandidates: updatedFemaleCandidates,
          votedFemale: true,
          femaleVotes: updatedFemaleVotes,
        };
      }),
    resetVotes: () =>
      set(() => {
        console.log("Resetting votes");
        const resetMaleCandidates = maleCandidates.map((candidate) => ({
          ...candidate,
          votes: 0,
        }));
        const resetFemaleCandidates = femaleCandidates.map((candidate) => ({
          ...candidate,
          votes: 0,
        }));
        console.log("Reset maleCandidates:", resetMaleCandidates);
        console.log("Reset femaleCandidates:", resetFemaleCandidates);
        return {
          maleCandidates: resetMaleCandidates,
          femaleCandidates: resetFemaleCandidates,
          maleVotes: 0, // Reset maleVotes
          femaleVotes: 0, // Reset femaleVotes
          votedMale: false,
          votedFemale: false,
          showModal: false,
        };
      }),
  };
});

export default useVoteStore;
