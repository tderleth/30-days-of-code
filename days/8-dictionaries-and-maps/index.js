function phoneBook(input) {
  let contacts = new Map();
  let inputArray = input.split(/\r?\n/);
  let n = inputArray[0];
  inputArray.shift();

  for (let index = 0; index < n; index++) {
    contact = inputArray[index].split(' ');
    contacts.set(contact[0], contact[1]);
  }

  for (let index = n; index < inputArray.length; index++) {
    const element = inputArray[index];
    contacts.get(element)
      ? console.log(`${element}=${contacts.get(element)}`)
      : console.log('Not found');
  }
}

module.exports = phoneBook;
