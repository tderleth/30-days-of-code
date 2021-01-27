function Node(data) {
  this.data = data;
  this.next = null;
}

function Solution() {
  this.insert = function (head, data) {
    let node = new Node(data);

    if (head == null) head = node;
    else {
      let current = head;
      while (current.next) current = current.next;
      current.next = node;
    }
    return head;
  };

  this.display = function (head) {
    var start = head;
    while (start) {
      console.log(`${start.data} `);
      start = start.next;
    }
  };
}

module.exports = Solution;
