var bio = {
	"name": "Shabnam Rasoulian",
	"role": "Chemical Engineer",
	"contacts": {
		"mobile": "(646)525-2920",
		"email": "shabnam.rasoulian@gmail.com",
		"twitter": "@manbahs1",
		"github": "shabnam-rasoulian",
		"blog": "",
		"location": "NYC"
	},
	"bioPic": "images/fry.jpg",
	"welcomeMsg": "Hello! Welcome to my resume.",
	"skills": ["Mathematical modeling", "Programming in MATLAB, C++ and Python", "Advanced process modeling"],
	"display": function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		if (bio.contacts.mobile) {
			var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
			$("#topContacts").append(formattedMobile);
		}
		if (bio.contacts.email) {
			var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
			$("#topContacts").append(formattedEmail);
		}
		if (bio.contacts.twitter) {
			var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
			$("#topContacts").append(formattedTwitter);
		}
		if (bio.contacts.github) {
			var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
			$("#topContacts").append(formattedGithub);
		}
		if (bio.contacts.blog) {
			var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
			$("#topContacts").append(formattedBlog);
		}
		if (bio.contacts.location) {
			var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
			$("#topContacts").append(formattedLocation);
		}
		if (bio.bioPic) {
			var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
			$("#header").append(formattedBioPic);
		}
		if (bio.welcomeMsg) {
			var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
			$("#header").append(formattedWelcomeMsg);
		}
		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (var i = 0; i < bio.skills.length; i++) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$("#header").append(formattedSkill);
			}
		}
	},
};
var work = {
	"jobs": [{
		"employer": "University of Waterloo",
		"title": "Teaching Assistant",
		"dates": "2011-2015",
		"location": "Waterloo, ON, Canada",
		"description": "Mentoring students for TA position and tutorials for computer-aided courses"
	}, {
		"employer": "Angstrom Engineering",
		"title": "Staff Engineer",
		"dates": "2014-2015",
		"location": "Kitchener, ON, Canada",
		"description": "Designing experimetents and data analysis for vapor deposition chambers"
	}],
	"display": function() {
		for (var i = 0; i < work.jobs.length; i++) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			$(".work-entry:last").append(formattedEmployer + formattedTitle);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			$(".work-entry:last").append(formattedLocation);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};
var project = {
	"projects": [{
		"title": "Uncertainty analysis and control of multiscale process systems",
		"dates": "2011-2015",
		"description": "Developed a multiscale model to describe the thin film deposition process and designed computationally tractable robust control frameworks",
		"image": ""
	}, {
		"title": "Control of a chaotic process",
		"dates": "2007-2008",
		"description": "Simulated a chaotic reactor in MATLAB and developed linear and nonlinear control frameworks",
		"image": ""
	}],
	"display": function() {
		for (var i = 0; i < project.projects.length; i++) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[i].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", project.projects[i].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[i].description);
			$(".project-entry:last").append(formattedDescription);
			var formattedImage = HTMLprojectImage.replace("%data%", project.projects[i].image);
			$(".project.entry:last").append(formattedImage);
		}
	}
};
var education = {
	"schools": [{
		"name": "University of Waterloo",
		"degree": "PhD",
		"dates": "2011-2015",
		"location": "Waterloo, ON, Canada",
		"major": ["Chemical Engineering"],
		"url": "https://uwaterloo.ca/chemical-engineering/"
	}, {
		"name": "Sharif University of Technology",
		"degree": "MSc",
		"dates": "2006-2008",
		"location": "Tehran, Tehran, Iran",
		"major": ["Chemical Engineering"],
		"url": "http://che.sharif.ir/index.html/index.php?Lang=en"
	}, {
		"name": "Sharif University of Technology",
		"degree": "BSc",
		"dates": "2001-2006",
		"location": "Tehran, Tehran, Iran",
		"major": ["Chemical Engineering"],
		"url": "http://che.sharif.ir/index.html/index.php?Lang=en"
	}],
	"onlineCourses": [{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"dates": "2017",
		"url": "https://classroom.udacity.com/courses/ud804"
	}, {
		"title": "HTML and CSS Syntax",
		"school": "Udacity",
		"dates": "2017",
		"url": "https://classroom.udacity.com/courses/ud001"
	}],
	"display": function() {
		for (var i = 0; i < education.schools.length; i++) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			$(".education-entry:last").append(formattedName + formattedDegree);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			$(".education-entry:last").append(formattedLocation);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			$(".education-entry:last").append(formattedMajor);
		}	
		if (education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for (var i = 0; i < education.onlineCourses.length; i++) {
				$("#education").append(HTMLschoolStart);
				var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				$(".education-entry:last").append(formattedTitle + formattedSchool);
				var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
				$(".education-entry:last").append(formattedDates);
				var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);
				$(".education-entry:last").append(formattedURL);
			}
		} 
	}
};

var footer = {
	"display": function() {
		if (bio.contacts.mobile) {
			var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
			$("#footerContacts").append(formattedMobile);
		}
		if (bio.contacts.email) {
			var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
			$("#footerContacts").append(formattedEmail);
		}
		if (bio.contacts.twitter) {
			var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
			$("#footerContacts").append(formattedTwitter);
		}
		if (bio.contacts.github) {
			var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
			$("#footerContacts").append(formattedGithub);
		}
		if (bio.contacts.blog) {
			var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
			$("#footerContacts").append(formattedBlog);
		}
		if (bio.contacts.location) {
			var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
			$("#footerContacts").append(formattedLocation);
		}
	}
};

bio.display();
work.display();
project.display();
education.display();
$("#mapDiv").append(googleMap);
footer.display();
