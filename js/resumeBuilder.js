// bio information
var bio = {
	"name": "Tony Stark",
	"role": "Iron Man",
	"welcomeMessage": "I just finally know what I have to do.",
	"skills": [
		"Business Management",
		"Weapons Specialist",
		"Armor Specialist",
		"AI Specialist",
		"Saving the Universe"
	],
	"biopic": "images/biopic.jpeg"
};

bio.contacts = 	{
	"mobile": "650-555-5555",
	"email": "tony@stark.com",
	"github": "tonystark",
	"twitter": "@tonystark",
	"location": "New York"
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
}

// education information
var education = {
	"schools": [
		{
			"name": "Massachusetts Institute of Technology",
			"location": "Cambridge, MA",
			"degree": "Masters",
			"majors": ["EE", "CS"],
			"dates": 1992,
			"url": "http://web.mit.edu/"
		},
		{
			"name": "Massachusetts Institute of Technology",
			"location": "Cambridge, MA",
			"degree": "BA",
			"majors": ["EE", "CS"],
			"dates": 1990,
			"url": "http://web.mit.edu/"
		}
	],
	"onlineCourses": [
		{
			"title": "Artificial Intelligence Course",
			"school": "MIT",
			"date": 2014,
			"url": "https://www.csail.mit.edu/"
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
}

// work information
var work = {
	"jobs": [
		{
			"employer": "Stark Industries",
			"title": "Chairman and CEO",
			"location": "Long Island, NY",
			"dates": "1994 - 2013",
			"description": "Tony’s parents die in a car crash on December 17th, 1991. His father’s good friend Obadiah Stane takes control of Stark Industries until Tony turns 21 and inherits the company. As the CEO and brilliant mind behind Stark Industries, billionaire Tony Stark quickly becomes famous for his smarter weapons and improved satellite technology, going beyond his father’s work. He also becomes infamous for his tendencies to party, drink, and charm women into his bed."
		},
		{
			"employer": "Stark Industries",
			"title": "Founder and former CEO",
			"location": "Manhattan, NY",
			"dates": "2014 - Future",
			"description": "After the fall of S.H.I.E.L.D. Stark Industries turned its attention to privatizing global security. To this goal, Tony spent some time acting as the official financial backer of the Avengers in the absence of S.H.I.E.L.D.."
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
}

// projects information
var projects = {
	"projects": [
		{
			"title": "Iron Man Mark I",
			"dates": "2008",
			"description": "The Mark I (1), was the first Iron Man suit built and created by Tony Stark. It was built in the initial events of the live-action film, Iron Man. The suit was later used as a model for Obadiah Stane's Iron Monger.",
			"images": ["images/mark1_1.jpg", "images/mark1_2.jpg"]
		},
		{
			"title": "Iron Man Mark III",
			"dates": "2013",
			"description": "The Mark III (3), was the third suit created by Tony Stark and was the main suit Tony used in the movie and in the game. After initial flight tests were completed on the Mark II, Tony built the Mark III.",
			"images": ["images/mark3_1.jpg", "images/mark3_2.jpg", "images/mark3_3.jpg"]
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

// google map div
var map = new Object();
map.display = function() {
	$("#mapDiv").append(googleMap);
};

// build the resume page
bio.display();
work.display();
projects.display();
education.display();
map.display();