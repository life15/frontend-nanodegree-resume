var bio = {
	"name": "John Doe",
	"role": "Web Developer",
	"welcomeMessage": "hello world!",
	"skills": [
		"awesomeness",
		"delivering things",
		"cryogenic sleep",
		"saving the universe"
	],
	"biopic": "http://placehold.it/350x350", //find a picture url
};

bio.contacts = 	{
	"mobile": "650-555-5555",
	"email": "john@example.com",
	"github": "johndoe",
	"twitter": "@johndoe",
	"location": "San Francisco"
};

bio.display = function() {
	// header name and role
	var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
	var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedHeaderRole);
	$("#header").prepend(formattedHeaderName);

	// header contacts
	for (contact in bio.contacts) {
		var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%", contact);
		formattedContactGeneric = formattedContactGeneric.replace("%data%", bio.contacts[contact]);
		$("#topContacts").append(formattedContactGeneric);
	};

	// bio picture
	var  formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedBioPic);

	// welcome message
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);

	// skills
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
};

bio.display();