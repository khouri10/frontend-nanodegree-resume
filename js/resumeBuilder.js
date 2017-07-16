var bio = {
    "name": "Marcel El Khouri",
    "role": "Entrepreneur",
    "contacts": {
        "mobile": "993399999",
        "email": "khouri10@gmail.com",
        "github": "khouri10",
        "twitter": "@marcel_khouri",
        "location": "Jd Luzitania, São Paulo"
    },
    "welcomeMsg": "Hello",
    "skills": ["Intelligence", "Discipline", "Consciousness"],
    "biopic": "images/bio_photo.jpg"
};

var education = {
    "schools": [
        {
            "name": "FEA-USP",
            "location": "Usp, São Paulo",
            "degree": "bachelor",
            "majors":[
                "administração"
                ],
            "dates": "2006-2009",
            "url": "https://www.fea.usp.br/"
        },
        {
            "name": "Bandeirantes",
            "location": "R. Estela, 268 - Vila Mariana",
            "degree": "high school",
            "dates": "2003-2005",
            "url": "http://colband.net.br/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Management of Fashion and Luxury Companies",
            "school": "Coursera",
            "dates": "2015",
            "url": "https://www.coursera.org/"
        },
        {
            "title": "Introduction to Operations Management",
            "school": "Coursera",
            "dates": "2015",
            "url": "https://www.coursera.org/"
        }
    ]
};

var work = {
    "jobs": [
        {
        "employer": "M10",
        "title": "Owner",
        "location": "M10 brás, São Paulo",
        "dates": "2009 - in progress",
        "description": "Small company, responsible for all areas"
        },
        {
        "employer": "Banco Real",
        "title": "estagiário",
        "location": "Av Paulista, São Paulo",
        "dates": "jan/2008 até nov/2008",
        "description": "Debt renegotiation sector"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "M10 ecommerce development",
            "dates": "2017",
            "description": "Direct sales to the consumer through the site and specialized marketplaces",
            "images": [
                "images/main_website.jpg",
                "images/kanui.jpg",
                "images/dafiti.jpg"
            ]
        }
    ]
};



bio.display = function(){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);
    $("#header").append(formattedBiopic);
    $("#header").append(formattedWelcomeMsg);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedLocation);

    if(bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
    }
};

bio.display();

work.display = function() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);


        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

projects.display = function(){
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0){
            for (var image in projects.projects[project].images){
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

projects.display();

education.display = function(){
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedSchool);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);
    }

    if (education.onlineCourses.length > 0){
        $("#education").append(HTMLonlineClasses);
        for (var onlineCourse in education.onlineCourses) {
            $("#education").append(HTMLonlineStart);

            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
            $(".online-entry:last").append(formattedTitle);

            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
            $(".online-entry:last").append(formattedOnlineSchool);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
            $(".online-entry:last").append(formattedOnlineDates);

            var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
            $(".online-entry:last").append(formattedURL);
        }
    }
};

education.display();

$("#mapDiv").append(googleMap);

