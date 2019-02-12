//returns the name of the node passed through
function getName(node){
 return node['name']
}

//returns the head node of the linked list
function headNode(linkedList, collection){
  return collection[linkedList]
}

//returns the following node every time it's called
function next(node, collection){
  let nextNode = node['next']
  return collection[nextNode]
}

//returns the node at the provided index
function nodeAt(index, head, collection){
  let node = collection[head];
  let i;
  for(i = 0; i < index; i++){
    node = next(node, collection)
  }
  return node;
}

//returns the address of the node at the index
function addressAt(index, linkedList, collection){
  let node = collection[linkedList];
  if(index === 0){
    return linkedList
  } else {
    let i;
    for(i = 0; i < index - 1; i++){
      node = next(node, collection)
    }
    return node['next']
  }
}

//returns the index of the provided node
function indexAt(node, collection, linkedList){
  let addressOfNode = Object.keys(collection).find(key => collection[key] === node)
  //returns the address of the node

  let index = 0
  if (addressAt(index, linkedList, collection) === addressOfNode){
    return 0
  } else {
    do {
      let currentAddress = addressAt(index, linkedList, collection);
      index++;
    }
    while (addressAt(index, linkedList, collection) !== addressOfNode)
    return index;
  }
}

//sets the next property of the inserted node
function insertNodeAt(index, addressOfNewNode, linkedList, collection){
  let previousNode = nodeAt(index -1, linkedList, collection)
  let newNodeNext = previousNode['next']
  previousNode['next'] = addressOfNewNode
  let newNode = next(previousNode, collection)
  newNode['next'] = newNodeNext
}

//sets the nexts property of the node previous to the deleted node
function deleteNodeAt(index, linkedList, collection){
  let deleteNode = nodeAt(index, linkedList, collection)
  let newNext = deleteNode['next']
  let previousNode = nodeAt(index - 1, linkedList, collection)
  previousNode['next'] = newNext
}
