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

var education = {
	"schools": [
		{
			"name": "Nova Southeastern University",
			"location": "Fort Lauderdale, FL",
			"degree": "Masters",
			"majors": ["CS"],
			"dates": 2013,
			"url": "http://www.nova.edu/index.html"
		},
		{
			"name": "Eckerd College",
			"location": "Saint Petersburg, FL",
			"degree": "BA",
			"majors": ["CS"],
			"dates": 2003,
			"url": "http://www.eckerd.edu/"
		}
	],
	"onlineCourses": [
		{
			"title": "Javascript Crash Course",
			"school": "Udacity",
			"date": 2014,
			"url": "http://www.udacity.com/course/ud804"
		}
	]
};

education.display = function() {
	// schools
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		formattedSchoolName = formattedSchoolName.replace("#", education.schools[school].url);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolNameAndDegress = formattedSchoolName + formattedSchoolDegree
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location)
		$(".education-entry:last").append(formattedSchoolNameAndDegress);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolDates);

		for (major in education.schools[school].majors) {
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
	}

	// online courses
	$(".education-entry:last").append(HTMLonlineClasses);
	for (onlineCourse in education.onlineCourses) {
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var formattedOnlineTitleAndSchool = formattedOnlineTitle + formattedOnlineSchool;
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);

		$(".education-entry:last").append(formattedOnlineTitleAndSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
	}
};


bio.display();
education.display();