// Skapa objektet contactBook
const contactBook = {
  owner: "Anna López",
  contacts: [
    {
      name: "Ahmed Ali",
      phone: "070-1234567",
      group: "arbete",
    },
    {
      name: "Chen Li",
      phone: "070-7654321",
      group: "vänner",
    },
    {
      name: "Isak Gran",
      phone: "070-1112223",
      group: "arbete",
    },
    {
      name: "Juan López",
      phone: "070-5556667",
      group: "familj",
    },
  ],
};
  
  // Ange en grupp
  let groupToShow; "familj";
  



function showContacts(contactBook, groupToShow) {
    for (const contact of contactBook.contacts) {
        if (contact.group === groupToShow) {
            return `Namn: ${contact.name}, Telefon: ${contact.phone}`;
        }
    }

    return "";
}

// Rör ej denna kod
showContacts(contactBook, groupToShow);
module.exports = { showContacts };
