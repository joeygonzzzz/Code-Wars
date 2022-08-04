//Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. 
//This is calculated by subtracting the number of downvotes from upvotes.

//Example getVoteCount ({ upvotes: 13, downvotes: 0}) => 13
//You can expect only positive integers for vote counts

function getVoteCount(votes) {
    const { upvotes, downvotes } = votes;
    return upvotes - downvotes
}