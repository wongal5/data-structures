describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.head.value).to.equal(5);
    expect(binarySearchTree.head.left.value).to.equal(3);
    expect(binarySearchTree.head.left.left.value).to.equal(2);
    expect(binarySearchTree.head.right.value).to.equal(7);
    expect(binarySearchTree.head.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([3, 2, 5, 7]);
  });

  // add rebalacing tests here
  it('should automatically rebalance if total depth is greater than the log of the total population', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(4);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([4, 3, 5]);
    array = [];
    binarySearchTree.insert(1);
    binarySearchTree.insert(2);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([3, 2, 1, 5, 4]);
  });
});
