class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// list = [3, 5, 6, 9, 10, 20]
function threeToTwenty() {
  let five = new Node(5);
  let nine = new Node(9);
  let twenty = new Node(20);

  let three = new Node(3, null, five);
  let ten = new Node(10, nine, twenty);

  let six = new Node(6, three, ten);

  return six;

}

// list = [10, 11, 30, 100, 200]
function tenToTwoHundred() {
  let ten = new Node(10);
  let thirty = new Node(30);

  let eleven = new Node(11, ten, thirty);
  let twoHundred = new Node(200);

  let oneHundred = new Node(100, eleven, twoHundred);

  return oneHundred;

}

if (require.main === module) {
  // add tests in here if you need them
}

module.exports = {
  Node,
  threeToTwenty,
  tenToTwoHundred
};

// Please add your pseudocode to this file
// And a written explanation of your solution
