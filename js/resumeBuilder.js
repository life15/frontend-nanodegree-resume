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
	"biopic": "http://placehold.it/350x350"
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

	// header and footer contacts
	for (contact in bio.contacts) {
		var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%", contact);
		formattedContactGeneric = formattedContactGeneric.replace("%data%", bio.contacts[contact]);
		$("#topContacts").append(formattedContactGeneric);
		$("#footerContacts").append(formattedContactGeneric);
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

	// internationalize names
	$("#main").append(internationalizeButton);
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
	$("#education").append(HTMLonlineClasses);
	for (onlineCourse in education.onlineCourses) {
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		formattedOnlineTitle = formattedOnlineTitle.replace("#", education.onlineCourses[onlineCourse].url)
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var formattedOnlineTitleAndSchool = formattedOnlineTitle + formattedOnlineSchool;
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedOnlineTitleAndSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
	}
};

var work = {
	"jobs": [
		{
			"employer": "Planet Express",
			"title": "Delivery Boy",
			"location": "Brooklyn, NY",
			"dates": "January 3000 - Future",
			"description": "Hard cheese parmesan stilton. Macaroni cheese when the cheese comes out everybody’s happy edam pecorino when the cheese comes out everybody’s happy cow caerphilly chalk and cheese."
		},
		{
			"employer": "Panuocis Pizza",
			"title": "Delivery Boy",
			"location": "Manhattan, NY",
			"dates": "1998 - December 31, 1999",
			"description": "Hard cheese parmesan stilton. Macaroni cheese when the cheese comes out everybody’s happy edam pecorino when the cheese comes out everybody’s happy cow caerphilly chalk and cheese."
		}
	]
};

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedWorkEmployerAndTitle = formattedWorkEmployer + formattedWorkTitle;
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedWorkEmployerAndTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}
};

var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "2014",
			"description": "Hard cheese parmesan stilton. Macaroni cheese when the cheese comes out everybody’s happy edam pecorino when the cheese comes out everybody’s happy cow caerphilly chalk and cheese.",
			"images": ["http://placehold.it/300x200", "http://placehold.it/300x200"]
		}
	]
};

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);

		for (image in projects.projects[project].images) {
			var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedProjectImage);
		}
	}
};

var map = new Object();
map.display = function() {
	$("#mapDiv").append(googleMap);
};

bio.display();
work.display();
projects.display();
education.display();
map.display();