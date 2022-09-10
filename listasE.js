function ListNode() {
  this.head = null;
}

function LinkedList(value) {
  this.value = value;
  this.next = null;
}

ListNode.prototype.add = function (value) {
  if (this.head == null) this.head = new LinkedList(value);
  else {
    let refe = this.head;
    while (refe.next != null) {
      refe = refe.next;
    }
    refe.next = new LinkedList(value);
  }
};

ListNode.prototype.search = function (value) {
  if (this.head.value == value) return true;
  else {
    let refe = this.head;
    while (refe.next != null) {
      if (refe.next.value == value) return true;
      refe = refe.next;
    }
  }
  return false;
};

ListNode.prototype.combinatin = function (lista1, lista2) {
  let arr = [lista1.head.value, lista2.head.value];

  let refe = lista1.head;
  let refe2 = lista2.head;
  while (refe.next != null) {
    arr.push(refe.next.value);
    arr.push(refe2.next.value);
    refe2 = refe2.next;
    refe = refe.next;
  }

  let listaCombi = new ListNode();

  for (let i = 0; i < arr.length; i++) {
    listaCombi.add(arr[i]);
  }
  return listaCombi;
};

ListNode.prototype.sustitucion = function (value, newValue) {
  if (this.head.value == value) {
    return (this.head.value = newValue);
  } else {
    let refe = this.head;
    while (refe.next != null) {
      if (refe.next.value == value) {
        return (refe.next.value = newValue);
      } else {
        refe = refe.next;
      }
    }
  }
  return "El dato no esixte";
};

ListNode.prototype.sustNodos = function (value, newNodo) {
  if (this.head.value == value) {
    let refe = this.head.next;
    this.head = newNodo;
    this.head.next = refe;
  } else {
    let refe = this.head;
    while (refe.next != null) {
      if (refe.next.value == value) {
        let refe2 = refe.next.next;
        refe.next = newNodo;
        refe.next.next = refe2;
      } else {
        refe = refe.next;
      }
    }
  }
};

let nodo = new LinkedList("Norefra");

let list = new ListNode();

list.add("John");
list.add("Mary");
list.add("Betty");
list.add("Smith");
list.add("Paul");
//list.sustitucion("lobpo", [3, 4, 5, 6, 7]);
list.sustNodos("lobo", nodo);


console.log(list);
console.log(ListNode);
console.log(nodo);


