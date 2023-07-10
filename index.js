const contacts = require("./db/contacts");
const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
	switch (action) {
		case "list":
			const allContacts = await contacts.listContacts();
			console.log(allContacts);
			break;

		case "get":
			const contactById = await contacts.getContactById(id);
			console.log(contactById);
			break;

		case "add":
			const addContact = await contacts.addContacts({ name, email, phone });
			console.log(addContact);
			break;

		case "remove":
			const updateBook = await contacts.removeContact(id);
			console.log(updateBook);
			break;

		default:
			console.warn("\x1B[31m Unknown action type!");
	}
};

invokeAction(argv);
