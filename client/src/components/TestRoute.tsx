
const TestRoute = () => {
  //this is what happens when you dont want to deal with setting up cloud backend
  const masterList = [
    {
        "course": "BIO110 Environmental Science",
        "areaofstudy": "Biology",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "2:00- 2:50PM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 016",
            "instructor": "Woods, J"
        }
    },
    {
        "course": "",
        "areaofstudy": "Biology",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "8:00-10:50AM",
            "days": "----R--",
            "building": "KSC",
            "room": "KSC 302",
            "instructor": "Woods, J"
        }
    },
    {
        "course": "",
        "areaofstudy": "Biology",
        "rooms": {
            "section": "02",
            "hours": "4.0",
            "schedule": "2:00- 2:50PM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 016",
            "instructor": "Woods, J"
        }
    },
    {
        "course": "",
        "areaofstudy": "Biology",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "1:00- 3:50PM",
            "days": "----R--",
            "building": "KSC",
            "room": "KSC 302",
            "instructor": "Woods, J"
        }
    },
    {
        "course": "BIO115 Animal Behavior",
        "areaofstudy": "Biology",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "8:00- 8:50AM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 016",
            "instructor": "Woods, J"
        }
    },
    {
        "course": "BIO140 Cell Biology & Microbes",
        "areaofstudy": "Biology",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "9:00- 9:50AM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 016",
            "instructor": "STAFF"
        }
    },
    {
        "course": "",
        "areaofstudy": "Biology",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "8:00-10:50AM",
            "days": "--T----",
            "building": "KSC",
            "room": "KSC 313",
            "instructor": "STAFF"
        }
    },
    {
        "course": "",
        "areaofstudy": "Biology",
        "rooms": {
            "section": "02",
            "hours": "4.0",
            "schedule": "9:00- 9:50AM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 016",
            "instructor": "STAFF"
        }
    },
    {
        "course": "",
        "areaofstudy": "Biology",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "1:00- 3:50PM",
            "days": "--T----",
            "building": "KSC",
            "room": "KSC 313",
            "instructor": "STAFF"
        }
    },
    {
        "course": "",
        "areaofstudy": "Biology",
        "rooms": {
            "section": "03",
            "hours": "4.0",
            "schedule": "1:00- 1:50PM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 016",
            "instructor": "STAFF"
        }
    },
    {
        "course": "",
        "areaofstudy": "Biology",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "8:00-10:50AM",
            "days": "----R--",
            "building": "KSC",
            "room": "KSC 313",
            "instructor": "STAFF"
        }
    },
    {
        "course": "",
        "areaofstudy": "Biology",
        "rooms": {
            "section": "04",
            "hours": "4.0",
            "schedule": "1:00- 1:50PM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 016",
            "instructor": "STAFF"
        }
    },
    {
        "course": "",
        "areaofstudy": "Biology",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "1:00- 3:50PM",
            "days": "----R--",
            "building": "KSC",
            "room": "KSC 313",
            "instructor": "STAFF"
        }
    },
    {
        "course": "BIO305 Pathophysiology",
        "areaofstudy": "Biology",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "10:00-10:50AM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 121",
            "instructor": "Woods, J"
        }
    },
    {
        "course": "",
        "areaofstudy": "Biology",
        "rooms": {
            "section": "02",
            "hours": "4.0",
            "schedule": "10:00-10:50AM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 121",
            "instructor": "Woods, J"
        }
    },
    {
        "course": "",
        "areaofstudy": "Biology",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "8:00-10:50AM",
            "days": "--T----",
            "building": "KSC",
            "room": "KSC 309",
            "instructor": "Woods, J"
        }
    },
    {
        "course": "BIO481 Natural Science Seminar I",
        "areaofstudy": "Biology",
        "rooms": {
            "section": "01",
            "hours": "0.5",
            "schedule": "11:00-11:50AM",
            "days": "----R--",
            "building": "KSC",
            "room": "KSC 302",
            "instructor": "Woods, J"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Biology",
        "rooms": {
            "section": "Junior year requirement. Enroll in both fall and spring. A full year's attendance is required.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Biology",
        "rooms": {
            "section": "Junior year requirement. Enroll in both fall and spring. A full year's attendance is required.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "BIO482 Natural Science Seminar II",
        "areaofstudy": "Biology",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "11:00-11:50AM",
            "days": "----R--",
            "building": "KSC",
            "room": "KSC 302",
            "instructor": "Woods, J"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Biology",
        "rooms": {
            "section": "Senior year requirement. Enroll in both fall and spring. A full year's attendance is required.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Biology",
        "rooms": {
            "section": "Senior year requirement. Enroll in both fall and spring. A full year's attendance is required.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "BRL202 Intro to Biblical Studies",
        "areaofstudy": "Bible and Religion",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "9:00- 9:50AM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 208",
            "instructor": "Goerzen P"
        }
    },
    {
        "course": "BRL224 New Testament Studies (LL)",
        "areaofstudy": "Bible and Religion",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Life and Literature of Paul",
        "areaofstudy": "Bible and Religion",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "9:30-10:45AM",
            "days": "--T-R--",
            "building": "WAC",
            "room": "WAC 216",
            "instructor": "Voth, T."
        }
    },
    {
        "course": "BRL303 Faith Formation Seminar",
        "areaofstudy": "Bible and Religion",
        "rooms": {
            "section": "01",
            "hours": "0.5",
            "schedule": "TBD",
            "days": "-------",
            "building": "SC",
            "room": "SC",
            "instructor": "Goerzen P"
        }
    },
    {
        "course": "BRL324 New Testament Studies (UL)",
        "areaofstudy": "Bible and Religion",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Life and Literature of Paul",
        "areaofstudy": "Bible and Religion",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "9:30-10:45AM",
            "days": "--T-R--",
            "building": "WAC",
            "room": "WAC 216",
            "instructor": "Voth, T."
        }
    },
    {
        "course": "BRL457 Basic Issues of Faith & Life",
        "areaofstudy": "Bible and Religion",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "2:00- 3:50PM",
            "days": "-M-W---",
            "building": "WAC",
            "room": "WAC 213",
            "instructor": "Goerzen P"
        }
    },
    {
        "course": "",
        "areaofstudy": "Bible and Religion",
        "rooms": {
            "section": "02",
            "hours": "4.0",
            "schedule": "2:00- 3:50PM",
            "days": "-M-W---",
            "building": "WAC",
            "room": "WAC 214",
            "instructor": "Jantzen M"
        }
    },
    {
        "course": "",
        "areaofstudy": "Bible and Religion",
        "rooms": {
            "section": "03",
            "hours": "4.0",
            "schedule": "1:00- 2:50PM",
            "days": "--T-R--",
            "building": "WAC",
            "room": "WAC 210",
            "instructor": "Voth, T."
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Bible and Religion",
        "rooms": {
            "section": "Open only to students graduating within current academic year. If you have questions, please contact BIFL coordinator.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Bible and Religion",
        "rooms": {
            "section": "Open only to students graduating within current academic year. If you have questions, please contact BIFL coordinator.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "BRL480 Bible & Religion Seminar",
        "areaofstudy": "Bible and Religion",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "Goerzen P"
        }
    },
    {
        "course": "ACC252 Principles of Accounting",
        "areaofstudy": "Business and Economics",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "1:00- 1:50PM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 208",
            "instructor": "STAFF"
        }
    },
    {
        "course": "ACC263 Interm Financial Accntg I",
        "areaofstudy": "Business and Economics",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "2:30- 3:45PM",
            "days": "--T-R--",
            "building": "WAC",
            "room": "WAC 119",
            "instructor": "STAFF"
        }
    },
    {
        "course": "BUS114 Introduction to Business",
        "areaofstudy": "Business and Economics",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "8:00- 8:50AM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 203",
            "instructor": "McFarlandA"
        }
    },
    {
        "course": "BUS251 Principles of Marketing",
        "areaofstudy": "Business and Economics",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "8:00- 9:15AM",
            "days": "--T-R--",
            "building": "WAC",
            "room": "WAC 203",
            "instructor": "McFarlandA"
        }
    },
    {
        "course": "BUS328 Leadership",
        "areaofstudy": "Business and Economics",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "9:30-10:45AM",
            "days": "--T-R--",
            "building": "WAC",
            "room": "WAC 203",
            "instructor": "Dobbs, N"
        }
    },
    {
        "course": "BUS340 Principles of Finance",
        "areaofstudy": "Business and Economics",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "9:00- 9:50AM",
            "days": "-M-W-F-",
            "building": "FA ",
            "room": "FA 172",
            "instructor": "STAFF"
        }
    },
    {
        "course": "BUS364 Organizational Behavior",
        "areaofstudy": "Business and Economics",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "10:00-10:50AM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 203",
            "instructor": "Dobbs, N"
        }
    },
    {
        "course": "BUS391 Junior-year Internship",
        "areaofstudy": "Business and Economics",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "McFarlandA"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Business and Economics",
        "rooms": {
            "section": "Departmental major and junior standing. Application and approval required.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Business and Economics",
        "rooms": {
            "section": "Departmental major and junior standing. Application and approval required.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "BUS453 Business Law",
        "areaofstudy": "Business and Economics",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "1:00- 1:50PM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 203",
            "instructor": "McFarlandA"
        }
    },
    {
        "course": "BUS455 Business Ethics",
        "areaofstudy": "Business and Economics",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "1:00- 2:15PM",
            "days": "--T-R--",
            "building": "WAC",
            "room": "WAC 203",
            "instructor": "Dobbs, N"
        }
    },
    {
        "course": "BUS481 Research Seminar",
        "areaofstudy": "Business and Economics",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "11:00-11:50AM",
            "days": "----R--",
            "building": "WAC",
            "room": "WAC 119",
            "instructor": "Dobbs, N"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Business and Economics",
        "rooms": {
            "section": "Departmental major, senior standing and consent of department chair.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Business and Economics",
        "rooms": {
            "section": "Departmental major, senior standing and consent of department chair.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "BUS491 Senior-year Internship",
        "areaofstudy": "Business and Economics",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "McFarlandA"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Business and Economics",
        "rooms": {
            "section": "Departmental major and senior standing. Application and approval required.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Business and Economics",
        "rooms": {
            "section": "Departmental major and senior standing. Application and approval required.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "ECN212 Principles of Microeconomics",
        "areaofstudy": "Business and Economics",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "1:00- 2:15PM",
            "days": "--T-R--",
            "building": "WAC",
            "room": "WAC 208",
            "instructor": "STAFF"
        }
    },
    {
        "course": "CHE111 Chemistry I",
        "areaofstudy": "Chemistry",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "3:00- 3:50PM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 016",
            "instructor": "Wiebe-Fris"
        }
    },
    {
        "course": "",
        "areaofstudy": "Chemistry",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "8:00-10:50AM",
            "days": "----R--",
            "building": "KSC",
            "room": "KSC 216",
            "instructor": "Wiebe-Fris"
        }
    },
    {
        "course": "",
        "areaofstudy": "Chemistry",
        "rooms": {
            "section": "02",
            "hours": "4.0",
            "schedule": "3:00- 3:50PM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 016",
            "instructor": "Wiebe-Fris"
        }
    },
    {
        "course": "",
        "areaofstudy": "Chemistry",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "1:00- 3:50PM",
            "days": "----R--",
            "building": "KSC",
            "room": "KSC 216",
            "instructor": "Wiebe-Fris"
        }
    },
    {
        "course": "CHE211 Organic Chemistry",
        "areaofstudy": "Chemistry",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "2:00- 2:50PM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 018",
            "instructor": "Wiebe-Fris"
        }
    },
    {
        "course": "",
        "areaofstudy": "Chemistry",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "1:00- 3:50PM",
            "days": "--T----",
            "building": "KSC",
            "room": "KSC 203",
            "instructor": "Wiebe-Fris"
        }
    },
    {
        "course": "",
        "areaofstudy": "Chemistry",
        "rooms": {
            "section": "02",
            "hours": "4.0",
            "schedule": "2:00- 2:50PM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 018",
            "instructor": "Wiebe-Fris"
        }
    },
    {
        "course": "",
        "areaofstudy": "Chemistry",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "8:00-10:50AM",
            "days": "--T----",
            "building": "KSC",
            "room": "KSC 203",
            "instructor": "Wiebe-Fris"
        }
    },
    {
        "course": "CHE336 Biophysical Chemistry",
        "areaofstudy": "Chemistry",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "10:00-10:50AM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 008",
            "instructor": "Layman K"
        }
    },
    {
        "course": "",
        "areaofstudy": "Chemistry",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "8:00-10:50AM",
            "days": "--T----",
            "building": "KSC",
            "room": "KSC 207",
            "instructor": "Layman K"
        }
    },
    {
        "course": "CHE481 Natural Science Seminar I",
        "areaofstudy": "Chemistry",
        "rooms": {
            "section": "01",
            "hours": "0.5",
            "schedule": "11:00-11:50AM",
            "days": "----R--",
            "building": "KSC",
            "room": "KSC 207",
            "instructor": "Layman K\nWiebe-Fris"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Chemistry",
        "rooms": {
            "section": "Junior year requirement. Enroll in both fall and spring. A full year's attendance is required.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Chemistry",
        "rooms": {
            "section": "Junior year requirement. Enroll in both fall and spring. A full year's attendance is required.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "CHE482 Natural Science Seminar II",
        "areaofstudy": "Chemistry",
        "rooms": {
            "section": "01",
            "hours": "1-3",
            "schedule": "11:00-11:50AM",
            "days": "----R--",
            "building": "KSC",
            "room": "KSC 207",
            "instructor": "Layman K\nWiebe-Fris"
        }
    },
    {
        "course": "PHY141 Introductory Physics I",
        "areaofstudy": "Chemistry",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "3:00- 3:50PM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 121",
            "instructor": "Layman K"
        }
    },
    {
        "course": "",
        "areaofstudy": "Chemistry",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "8:00-10:50AM",
            "days": "----R--",
            "building": "KSC",
            "room": "KSC 006",
            "instructor": "Layman K"
        }
    },
    {
        "course": "",
        "areaofstudy": "Chemistry",
        "rooms": {
            "section": "02",
            "hours": "4.0",
            "schedule": "3:00- 3:50PM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 121",
            "instructor": "Layman K"
        }
    },
    {
        "course": "",
        "areaofstudy": "Chemistry",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "1:00- 3:50PM",
            "days": "----R--",
            "building": "KSC",
            "room": "KSC 006",
            "instructor": "Layman K"
        }
    },
    {
        "course": "PHY221 General Physics I",
        "areaofstudy": "Chemistry",
        "rooms": {
            "section": "01",
            "hours": "5.0",
            "schedule": "8:00-10:50AM",
            "days": "----R--",
            "building": "KSC",
            "room": "KSC 006",
            "instructor": "Layman K"
        }
    },
    {
        "course": "",
        "areaofstudy": "Chemistry",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "3:00- 3:50PM",
            "days": "-MTW-F-",
            "building": "KSC",
            "room": "KSC 121",
            "instructor": "Layman K"
        }
    },
    {
        "course": "",
        "areaofstudy": "Chemistry",
        "rooms": {
            "section": "02",
            "hours": "5.0",
            "schedule": "3:00- 3:50PM",
            "days": "-MTW-F-",
            "building": "KSC",
            "room": "KSC 121",
            "instructor": "Layman K"
        }
    },
    {
        "course": "",
        "areaofstudy": "Chemistry",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "1:00- 3:50PM",
            "days": "----R--",
            "building": "KSC",
            "room": "KSC 006",
            "instructor": "Layman K"
        }
    },
    {
        "course": "COA101 Public Speaking",
        "areaofstudy": "Communication Arts",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "8:00- 9:15AM",
            "days": "--T-R--",
            "building": "FA ",
            "room": "FA 172",
            "instructor": "DoughertyC"
        }
    },
    {
        "course": "",
        "areaofstudy": "Communication Arts",
        "rooms": {
            "section": "02",
            "hours": "3.0",
            "schedule": "1:00- 2:15PM",
            "days": "--T-R--",
            "building": "FA ",
            "room": "FA 172",
            "instructor": "DoughertyC"
        }
    },
    {
        "course": "COA104 Theater Practicum",
        "areaofstudy": "Communication Arts",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "2:30- 3:45PM",
            "days": "--T-R--",
            "building": "FA ",
            "room": "FA KA",
            "instructor": "WilkinsonJ"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Communication Arts",
        "rooms": {
            "section": "Active participation in some or all of the following: set design, construction, set dressing and painting, lighting design and implementation, sound design and implementation, costuming, prop procurement and maintenance, etc. for the given semester's theatrical production. Cast members and stage managers (as cast by the stage director) may also earn credit. Some weekend hours will be required in addition to all class meetings (30 hours of production work required).",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Communication Arts",
        "rooms": {
            "section": "Active participation in some or all of the following: set design, construction, set dressing and painting, lighting design and implementation, sound design and implementation, costuming, prop procurement and maintenance, etc. for the given semester's theatrical production. Cast members and stage managers (as cast by the stage director) may also earn credit. Some weekend hours will be required in addition to all class meetings (30 hours of production work required).",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "COA105 Radio Practicum",
        "areaofstudy": "Communication Arts",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "12:00-12:50PM",
            "days": "-M-----",
            "building": "FA ",
            "room": "FA 172",
            "instructor": "Klassen D"
        }
    },
    {
        "course": "COA106 Journalism Production",
        "areaofstudy": "Communication Arts",
        "rooms": {
            "section": "01",
            "hours": "1-2",
            "schedule": "8:00-10:00PM",
            "days": "U------",
            "building": "FA ",
            "room": "FA 176",
            "instructor": "Cr-Dick C"
        }
    },
    {
        "course": "COA108 Forensics",
        "areaofstudy": "Communication Arts",
        "rooms": {
            "section": "01",
            "hours": "1-2",
            "schedule": "6:30- 8:00PM",
            "days": "--T----",
            "building": "FA ",
            "room": "FA 172",
            "instructor": "DoughertyC"
        }
    },
    {
        "course": "COA201 Living in Performance",
        "areaofstudy": "Communication Arts",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "9:30-10:45AM",
            "days": "--T-R--",
            "building": "FA ",
            "room": "FA 172",
            "instructor": "Klassen D"
        }
    },
    {
        "course": "COA202 Intro to Communication",
        "areaofstudy": "Communication Arts",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "9:00- 9:50AM",
            "days": "-M-W-F-",
            "building": "FA ",
            "room": "FA 176",
            "instructor": "Cr-Dick C"
        }
    },
    {
        "course": "",
        "areaofstudy": "Communication Arts",
        "rooms": {
            "section": "02",
            "hours": "3.0",
            "schedule": "1:00- 1:50PM",
            "days": "-M-W-F-",
            "building": "FA ",
            "room": "FA 176",
            "instructor": "Cr-Dick C"
        }
    },
    {
        "course": "COA304 Theater Practicum",
        "areaofstudy": "Communication Arts",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "2:30- 3:45PM",
            "days": "--T-R--",
            "building": "FA ",
            "room": "FA KA",
            "instructor": "WilkinsonJ"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Communication Arts",
        "rooms": {
            "section": "Active participation in the given semester's theatrical production as a member of the \"running crew.\" Potential roles include, but are not limited to: backstage hands (responsible for set changes, prop procurement and maintenance, costume changes, etc.), light board operator, sound board operator, camera/livestream operator, house manager or stage manager. Participants must attend all production-week rehearsals and performances in order to earn credit. (6PM to 10PM Sunday through Friday, plus Saturday and Sunday performances, and the final set strike). Enrollment requires instructor approval.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Communication Arts",
        "rooms": {
            "section": "Active participation in the given semester's theatrical production as a member of the \"running crew.\" Potential roles include, but are not limited to: backstage hands (responsible for set changes, prop procurement and maintenance, costume changes, etc.), light board operator, sound board operator, camera/livestream operator, house manager or stage manager. Participants must attend all production-week rehearsals and performances in order to earn credit. (6PM to 10PM Sunday through Friday, plus Saturday and Sunday performances, and the final set strike). Enrollment requires instructor approval.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "COA305 Radio Practicum",
        "areaofstudy": "Communication Arts",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "12:00-12:50PM",
            "days": "-M-----",
            "building": "FA ",
            "room": "FA 172",
            "instructor": "Klassen D"
        }
    },
    {
        "course": "COA306 Journalism Production",
        "areaofstudy": "Communication Arts",
        "rooms": {
            "section": "01",
            "hours": "1-2",
            "schedule": "8:00-10:00PM",
            "days": "U------",
            "building": "FA ",
            "room": "FA 176",
            "instructor": "Cr-Dick C"
        }
    },
    {
        "course": "COA308 Forensics",
        "areaofstudy": "Communication Arts",
        "rooms": {
            "section": "01",
            "hours": "1-2",
            "schedule": "6:30- 8:00PM",
            "days": "--T----",
            "building": "FA ",
            "room": "FA 172",
            "instructor": "DoughertyC"
        }
    },
    {
        "course": "COA315 Media Analysis",
        "areaofstudy": "Communication Arts",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "10:00-10:50AM",
            "days": "-M-W-F-",
            "building": "FA ",
            "room": "FA 176",
            "instructor": "Cr-Dick C"
        }
    },
    {
        "course": "COA409 Field Exper Communicatn Arts",
        "areaofstudy": "Communication Arts",
        "rooms": {
            "section": "01",
            "hours": "2-12",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "Cr-Dick C"
        }
    },
    {
        "course": "COA430 Communication Arts Seminar",
        "areaofstudy": "Communication Arts",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "11:00-11:50AM",
            "days": "----R--",
            "building": "FA ",
            "room": "FA 176",
            "instructor": "Klassen D\nCr-Dick C\nDoughertyC"
        }
    },
    {
        "course": "DYS331 KICA--Foundations of Literacy & Diverse Reading Profiles",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "2.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "KICA"
        }
    },
    {
        "course": "DYS351 KICA--Assessment",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "2.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "KICA"
        }
    },
    {
        "course": "DYS371 KICA--Literacy Instruction in Phonological and Phonemic",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "2.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "KICA"
        }
    },
    {
        "course": "DYS391 KICA--Literacy Instruction in Phonics, Fluency, Vocabulary",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "2.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "KICA"
        }
    },
    {
        "course": "EDU101 Early Field Exper-Elementary",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "Siemens D"
        }
    },
    {
        "course": "Course Description:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "Early field experience with emphasis on observation, participation and role model relationships. Observation at different grade levels and in several schools is required. 40 hours of field observation required, transportation will be needed. CR/NC grading. Fall, Spring.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Course Description:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "Early field experience with emphasis on observation, participation and role model relationships. Observation at different grade levels and in several schools is required. 40 hours of field observation required, transportation will be needed. CR/NC grading. Fall, Spring.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "EDU210 Intro Infants/Children/Youth W/Special Needs",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "8:00- 8:50AM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 214",
            "instructor": "Siemens D"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "Professional attire required. Independent lab required.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "Professional attire required. Independent lab required.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "EDU255 Introduction to Education",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "9:00- 9:50AM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 216",
            "instructor": "Jantz A"
        }
    },
    {
        "course": "EDU301 Early Field Exper-Secondary",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "Jantz A"
        }
    },
    {
        "course": "Course Description:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "Early field experience with emphasis on observation, participation and role model relationships. Observation at different grade levels and in several schools is required. 40 hours of field observation required, transportation will be needed. Prerequisite: Prior or concurrent enrollment with EDU 255, Intro to Education. Admission to Teacher Education not required. CR/NC grading. Fall, Spring.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Course Description:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "Early field experience with emphasis on observation, participation and role model relationships. Observation at different grade levels and in several schools is required. 40 hours of field observation required, transportation will be needed. Prerequisite: Prior or concurrent enrollment with EDU 255, Intro to Education. Admission to Teacher Education not required. CR/NC grading. Fall, Spring.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "EDU310 School and Community",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "9:00- 9:50AM",
            "days": "-M---F-",
            "building": "WAC",
            "room": "WAC 214",
            "instructor": "Scott L"
        }
    },
    {
        "course": "",
        "areaofstudy": "Education",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "7:00- 9:50AM",
            "days": "---W---",
            "building": "",
            "room": "",
            "instructor": "Scott L"
        }
    },
    {
        "course": "EDU321 Reading & the Language Arts",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "10:00-10:50AM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 216",
            "instructor": "Siemens D"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "Acceptance teacher education program. Independent lab required.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "Acceptance teacher education program. Independent lab required.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "EDU325 Methods of Teaching",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "8:00- 8:50AM",
            "days": "-M---F-",
            "building": "WAC",
            "room": "WAC 216",
            "instructor": "Jantz A"
        }
    },
    {
        "course": "",
        "areaofstudy": "Education",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "7:00- 9:50AM",
            "days": "---W---",
            "building": "WAC",
            "room": "WAC 112",
            "instructor": "Jantz A"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "Acceptance teacher education program. Independent lab required.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "Acceptance teacher education program. Independent lab required.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "EDU326 Elem School Social Science",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "1:00- 1:50PM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 210",
            "instructor": "Siemens D"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "Acceptance teacher education program. Independent lab required.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "Acceptance teacher education program. Independent lab required.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "EDU460A Elementary Schl Pract/Seminr",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "2.0",
            "schedule": "3:00- 4:30PM",
            "days": "---W---",
            "building": "WAC",
            "room": "WAC 216",
            "instructor": "Siemens D"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "Acceptance teacher education and student teaching programs.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "Acceptance teacher education and student teaching programs.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "EDU460B Studnt Tchng Elementary Schl",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "2-10",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "Siemens D"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "Acceptance teacher education and student teaching programs. EDU 460B requires successful completion of EDU 460A. $25 per hour student teaching fee.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "Acceptance teacher education and student teaching programs. EDU 460B requires successful completion of EDU 460A. $25 per hour student teaching fee.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "EDU470 Stdt Tchng Mid/Jr High Schl",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "2-10",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "Jantz A"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "Acceptance teacher education and student teaching programs. EDU 470 requires successful completion of EDU 460A. $25 per hour student teaching fee.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "Acceptance teacher education and student teaching programs. EDU 470 requires successful completion of EDU 460A. $25 per hour student teaching fee.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "EDU475A Secondary Schl Pract/Seminar",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "2.0",
            "schedule": "3:00- 4:30PM",
            "days": "---W---",
            "building": "WAC",
            "room": "WAC 216",
            "instructor": "Jantz A"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "Acceptance in teacher education and student teaching programs.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "Acceptance in teacher education and student teaching programs.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "EDU475B Studnt Tchng Secondary Schl",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "2-10",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "Jantz A"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "Acceptance teacher education and student teaching programs. EDU 475B requires successful completion of EDU 475A. $25 per hour student teaching fee.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "Acceptance teacher education and student teaching programs. EDU 475B requires successful completion of EDU 475A. $25 per hour student teaching fee.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "SPE310 KICA--Found Spec Ed Services",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "5:30- 8:15PM",
            "days": "-M-----",
            "building": "KIC",
            "room": "KICA",
            "instructor": "KICA"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "Mix of online and two in-class sessions at KICA. Online.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "Mix of online and two in-class sessions at KICA. Online.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "SPE315 KICA--Gen Mthds Spec Ed Srvs",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "4:45- 7:45PM",
            "days": "-M-----",
            "building": "KIC",
            "room": "KICA",
            "instructor": "KICA"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "Mix of online (including weekly chat sessions) and 2 in-class sessions at KICA. Online.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "Mix of online (including weekly chat sessions) and 2 in-class sessions at KICA. Online.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "SPE320 KICA--Beg Amer Sign Language",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "2.0",
            "schedule": "5:30- 7:15PM",
            "days": "--T----",
            "building": "KIC",
            "room": "KICA",
            "instructor": "KICA"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "This course is intended as an elective education course. Students may enroll for full credit only.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Education",
        "rooms": {
            "section": "This course is intended as an elective education course. Students may enroll for full credit only.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "SPE321 KICA--K-6 Meth Special Needs",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "5.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "KIC",
            "room": "KICA",
            "instructor": "KICA"
        }
    },
    {
        "course": "SPE341 KICA--PreK-3 Meth Spec Needs",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "5.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "KIC",
            "room": "KICA",
            "instructor": "KICA"
        }
    },
    {
        "course": "SPE345 KICA--Behavior Management",
        "areaofstudy": "Education",
        "rooms": {
            "section": "A",
            "hours": "2.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "KIC",
            "room": "KICA",
            "instructor": "KICA"
        }
    },
    {
        "course": "SPE361 KICA--6-12 Meth Special Needs",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "5.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "KIC",
            "room": "KICA",
            "instructor": "KICA"
        }
    },
    {
        "course": "SPE431 KICA--K-6 Clinical Experience",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "5.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "KIC",
            "room": "KICA",
            "instructor": "KICA"
        }
    },
    {
        "course": "SPE433 KICA--K-6 Internship",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "5.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "KICA"
        }
    },
    {
        "course": "SPE451 KICA--PreK-12 Clinical Exp",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "5.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "KIC",
            "room": "KICA",
            "instructor": "KICA"
        }
    },
    {
        "course": "SPE453 KICA--PreK-12 Internship",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "5.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "KIC",
            "room": "KICA",
            "instructor": "KICA"
        }
    },
    {
        "course": "SPE471 KICA--6-12 Clinical Exp",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "5.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "KIC",
            "room": "KICA",
            "instructor": "KICA"
        }
    },
    {
        "course": "SPE473 KICA--6-12 Internship",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "5.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "KICA"
        }
    },
    {
        "course": "SPE499 KICA--Capstone Issues",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "KICA"
        }
    },
    {
        "course": "SPE678 KICA--Topics in Special Ed Current Issues in Special Ed",
        "areaofstudy": "Education",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "KICA"
        }
    },
    {
        "course": "ENG101 Intro to College Writing",
        "areaofstudy": "English",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "9:30-10:45AM",
            "days": "--T-R--",
            "building": "WAC",
            "room": "WAC 213",
            "instructor": "Graber, E"
        }
    },
    {
        "course": "",
        "areaofstudy": "English",
        "rooms": {
            "section": "02",
            "hours": "3.0",
            "schedule": "1:00- 2:15PM",
            "days": "--T-R--",
            "building": "WAC",
            "room": "WAC 119",
            "instructor": "Graber, E"
        }
    },
    {
        "course": "ENG103 Critical Writing",
        "areaofstudy": "English",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "STAFF"
        }
    },
    {
        "course": "ENG123 Intro to Literature",
        "areaofstudy": "English",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "9:30-10:45AM",
            "days": "--T-R--",
            "building": "WAC",
            "room": "WAC 208",
            "instructor": "Scarry S"
        }
    },
    {
        "course": "ENG241 Studies in Fiction",
        "areaofstudy": "English",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Literature of Sport",
        "areaofstudy": "English",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "2:00- 2:50PM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 203",
            "instructor": "Born B"
        }
    },
    {
        "course": "ENG312 Fiction Writing Workshop",
        "areaofstudy": "English",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "2:30- 3:45PM",
            "days": "--T-R--",
            "building": "WAC",
            "room": "WAC 213",
            "instructor": "Scarry S"
        }
    },
    {
        "course": "ENG324 Major British Authors",
        "areaofstudy": "English",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "9:30-10:45AM",
            "days": "--T-R--",
            "building": "WAC",
            "room": "WAC 119",
            "instructor": "Born B"
        }
    },
    {
        "course": "ENG413 Struct/Develop English Lang",
        "areaofstudy": "English",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "1:00- 1:50PM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 119",
            "instructor": "Quinlin D"
        }
    },
    {
        "course": "ENG481 Senior Thesis",
        "areaofstudy": "English",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "11:00-11:50AM",
            "days": "----R--",
            "building": "WAC",
            "room": "WAC 208",
            "instructor": "Born B\nScarry S"
        }
    },
    {
        "course": "HIS111 History of Civilization I",
        "areaofstudy": "History/Conflict Studies",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "9:00- 9:50AM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 203",
            "instructor": "Jantzen M"
        }
    },
    {
        "course": "HIS221 US History I",
        "areaofstudy": "History/Conflict Studies",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "8:00- 8:50AM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 208",
            "instructor": "Wedel K"
        }
    },
    {
        "course": "HIS332 Witches & Heretics in Europe",
        "areaofstudy": "History/Conflict Studies",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "10:00-10:50AM",
            "days": "-M-WRF-",
            "building": "WAC",
            "room": "WAC 210",
            "instructor": "Jantzen M"
        }
    },
    {
        "course": "HIS348 History of American Capitalism",
        "areaofstudy": "History/Conflict Studies",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "1:00- 1:50PM",
            "days": "-M-WRF-",
            "building": "WAC",
            "room": "WAC 214",
            "instructor": "Wedel K"
        }
    },
    {
        "course": "HIS481 History Seminar",
        "areaofstudy": "History/Conflict Studies",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "11:00-11:50AM",
            "days": "----R--",
            "building": "WAC",
            "room": "WAC 210",
            "instructor": "Jantzen M"
        }
    },
    {
        "course": "HIS483 Peace Studies Research",
        "areaofstudy": "History/Conflict Studies",
        "rooms": {
            "section": "01",
            "hours": "2-3",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "Wedel K"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "History/Conflict Studies",
        "rooms": {
            "section": "Instructor consent required",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "History/Conflict Studies",
        "rooms": {
            "section": "Instructor consent required",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "SSC201 Principles Political Science",
        "areaofstudy": "History/Conflict Studies",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "8:00- 9:15AM",
            "days": "--T-R--",
            "building": "WAC",
            "room": "WAC 208",
            "instructor": "Wedel K"
        }
    },
    {
        "course": "SSC205 Social & Physical Geography",
        "areaofstudy": "History/Conflict Studies",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "7:00- 9:50PM",
            "days": "-M-----",
            "building": "WAC",
            "room": "WAC 213",
            "instructor": "Muhwezi, D"
        }
    },
    {
        "course": "SSC222 Principles of Sociology",
        "areaofstudy": "History/Conflict Studies",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "8:00- 8:50AM",
            "days": "-M-W-F-",
            "building": "ML ",
            "room": "ML 141",
            "instructor": "Muhwezi, D"
        }
    },
    {
        "course": "SSC345 Political Violence",
        "areaofstudy": "History/Conflict Studies",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "2:30- 3:45PM",
            "days": "--T-R--",
            "building": "WAC",
            "room": "WAC 214",
            "instructor": "Wedel K"
        }
    },
    {
        "course": "HHP110 First Aid & CPR",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "9:00- 9:50AM",
            "days": "-M-W-F-",
            "building": "MH ",
            "room": "MH 025",
            "instructor": "STAFF"
        }
    },
    {
        "course": "HHP150 Introduction to Health and Human Performance",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "01",
            "hours": "2.0",
            "schedule": "9:00- 9:50AM",
            "days": "-M-W---",
            "building": "ML ",
            "room": "ML 141",
            "instructor": "Siemens, M\nDorton, M"
        }
    },
    {
        "course": "HHP201 Functional Anatomy",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "10:00-10:50AM",
            "days": "-M-W-F-",
            "building": "MH ",
            "room": "MH 025",
            "instructor": "Dorton, M"
        }
    },
    {
        "course": "HHP235 Foundations of Physical Ed: Individual/Dual Sports",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "01",
            "hours": "2.0",
            "schedule": "1:00- 1:50PM",
            "days": "-M-W---",
            "building": "MH ",
            "room": "MH GYM",
            "instructor": "Siemens, M"
        }
    },
    {
        "course": "HHP245 Techniques in Officiating",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "9:00- 9:50AM",
            "days": "-M-W-F-",
            "building": "TG ",
            "room": "TG GYM",
            "instructor": "STAFF"
        }
    },
    {
        "course": "",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "9:00- 9:50AM",
            "days": "-M-W-F-",
            "building": "ML ",
            "room": "ML 103",
            "instructor": "STAFF"
        }
    },
    {
        "course": "HHP270 Intro Sport Management",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "01",
            "hours": "2.0",
            "schedule": "1:00- 1:50PM",
            "days": "--T-R--",
            "building": "MH ",
            "room": "MH 025",
            "instructor": "STAFF"
        }
    },
    {
        "course": "HHP281 Prevention/Care of Injuries",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "1:00- 1:50PM",
            "days": "-M-W-F-",
            "building": "MH ",
            "room": "MH 025",
            "instructor": "STAFF"
        }
    },
    {
        "course": "HHP301 Principles of Coaching",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "8:00- 8:50AM",
            "days": "-M-W-F-",
            "building": "MH ",
            "room": "MH 025",
            "instructor": "Artaz J"
        }
    },
    {
        "course": "HHP310 Administration in Health and Fit",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "9:30-10:45AM",
            "days": "--T-R--",
            "building": "KSC",
            "room": "KSC 016",
            "instructor": "STAFF"
        }
    },
    {
        "course": "HHP323 Principles of Nutrition",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "1:00- 2:15PM",
            "days": "--T-R--",
            "building": "KSC",
            "room": "KSC 016",
            "instructor": "Dorton, M"
        }
    },
    {
        "course": "HHP325 Motor Behavior",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "9:30-10:45AM",
            "days": "--T-R--",
            "building": "MH ",
            "room": "MH 025",
            "instructor": "Siemens, M"
        }
    },
    {
        "course": "HHP345 Curriculum and Teaching Methods in Secondary Physical Education",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "10:00-10:50AM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 006",
            "instructor": "Siemens, M"
        }
    },
    {
        "course": "",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "10:00-10:50AM",
            "days": "-M-W-F-",
            "building": "MH ",
            "room": "MH GYM",
            "instructor": "Siemens, M"
        }
    },
    {
        "course": "HHP360 Exercise Physiology",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "8:00- 8:50AM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 021",
            "instructor": "Dorton, M"
        }
    },
    {
        "course": "",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "8:00-10:50AM",
            "days": "--T----",
            "building": "KSC",
            "room": "KSC 006",
            "instructor": "Dorton, M"
        }
    },
    {
        "course": "",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "02",
            "hours": "3.0",
            "schedule": "8:00- 8:50AM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 021",
            "instructor": "Dorton, M"
        }
    },
    {
        "course": "HHP360L Exercise Physiology Lab",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "8:00-10:50AM",
            "days": "--T----",
            "building": "KSC",
            "room": "KSC 006",
            "instructor": "Dorton, M"
        }
    },
    {
        "course": "HHP379 Curriculum and Teaching Methods in Health Education",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "1:00- 2:15PM",
            "days": "--T-R--",
            "building": "KSC",
            "room": "KSC 121",
            "instructor": "Siemens, M"
        }
    },
    {
        "course": "HHP470 Internship",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "01",
            "hours": "2-4",
            "schedule": "11:00-11:50AM",
            "days": "----R--",
            "building": "MH ",
            "room": "MH 025",
            "instructor": "Siemens, M"
        }
    },
    {
        "course": "HHP481 HHP Seminar 1",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "11:00-11:50AM",
            "days": "----R--",
            "building": "KSC",
            "room": "KSC 016",
            "instructor": "Dorton, M"
        }
    },
    {
        "course": "HLS113 Fitness Activities",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "01",
            "hours": "0.5",
            "schedule": "10:00-10:50AM",
            "days": "-M-W---",
            "building": "TG ",
            "room": "TG GYM",
            "instructor": "STAFF"
        }
    },
    {
        "course": "HLS115 Strength Training/Conditioning",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "01",
            "hours": "0.5",
            "schedule": "10:00-10:50AM",
            "days": "-M-W---",
            "building": "MH ",
            "room": "MH WGHT",
            "instructor": "MiddletonD"
        }
    },
    {
        "course": "",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "10:00-10:50AM",
            "days": "-M-W---",
            "building": "TG ",
            "room": "TG GYM",
            "instructor": "MiddletonD"
        }
    },
    {
        "course": "HLS116 Yoga",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "9:30-10:20AM",
            "days": "--T-R--",
            "building": "AD ",
            "room": "AD 212",
            "instructor": "Thiesen B"
        }
    },
    {
        "course": "HLS130 Badminton",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "01",
            "hours": "0.5",
            "schedule": "12:00-12:50PM",
            "days": "--T-R--",
            "building": "TG ",
            "room": "TG GYM",
            "instructor": "Johnson, G"
        }
    },
    {
        "course": "HLS131 Basketball",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "01",
            "hours": "0.5",
            "schedule": "12:00-12:50PM",
            "days": "--T-R--",
            "building": "TG ",
            "room": "TG GYM",
            "instructor": "Artaz J"
        }
    },
    {
        "course": "HLS132 Golf",
        "areaofstudy": "Health&Human Performance",
        "rooms": {
            "section": "01",
            "hours": "0.5",
            "schedule": "12:00-12:50PM",
            "days": "---W-F-",
            "building": "TG ",
            "room": "TG GYM",
            "instructor": "Bertholf D"
        }
    },
    {
        "course": "IDS100 Fund of Reading/Study Skills",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "9:00- 9:50AM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 119",
            "instructor": "Siemens D"
        }
    },
    {
        "course": "IDS102 First-Year Seminar",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "10:00-10:50AM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 214",
            "instructor": "Born B"
        }
    },
    {
        "course": "",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "02",
            "hours": "3.0",
            "schedule": "10:00-10:50AM",
            "days": "-M-W-F-",
            "building": "ML ",
            "room": "ML 103",
            "instructor": "Voth, T."
        }
    },
    {
        "course": "",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "03",
            "hours": "3.0",
            "schedule": "10:00-10:50AM",
            "days": "-M-W-F-",
            "building": "FA ",
            "room": "FA 172",
            "instructor": "Peacock, N"
        }
    },
    {
        "course": "",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "04",
            "hours": "3.0",
            "schedule": "10:00-10:50AM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 213",
            "instructor": "Scarry S"
        }
    },
    {
        "course": "",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "05",
            "hours": "3.0",
            "schedule": "10:00-10:50AM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 018",
            "instructor": "Peters, R"
        }
    },
    {
        "course": "",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "06",
            "hours": "3.0",
            "schedule": "10:00-10:50AM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 119",
            "instructor": "Quinlin D"
        }
    },
    {
        "course": "",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "07",
            "hours": "3.0",
            "schedule": "10:00-10:50AM",
            "days": "-M-W-F-",
            "building": "ML ",
            "room": "ML 141",
            "instructor": "Dr. MeMe"
        }
    },
    {
        "course": "",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "08",
            "hours": "3.0",
            "schedule": "10:00-10:50AM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 021",
            "instructor": "Wiebe-Fris"
        }
    },
    {
        "course": "",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "09",
            "hours": "3.0",
            "schedule": "10:00-10:50AM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 208",
            "instructor": "Goerzen P"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "First-Year Seminar is required of all first-time freshmen at Bethel College.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "First-Year Seminar is required of all first-time freshmen at Bethel College.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "IDS230 Thresher Transition",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "10:00-10:50AM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 119",
            "instructor": "STAFF"
        }
    },
    {
        "course": "IDS250 Vocation Seminar",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "01",
            "hours": "2.0",
            "schedule": "3:00- 3:50PM",
            "days": "-M-W---",
            "building": "WAC",
            "room": "WAC 208",
            "instructor": "Voth, T."
        }
    },
    {
        "course": "",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "02",
            "hours": "2.0",
            "schedule": "11:00-11:50AM",
            "days": "----RF-",
            "building": "WAC",
            "room": "WAC 214",
            "instructor": "Voth, T."
        }
    },
    {
        "course": "",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "03",
            "hours": "2.0",
            "schedule": "10:00-10:50AM",
            "days": "-M-W---",
            "building": "",
            "room": "",
            "instructor": "Kershner M"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "Required of all sophomores in Fall or Spring",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "Required of all sophomores in Fall or Spring",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "IDS281 STEM Learning Community",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "01",
            "hours": "0.5",
            "schedule": "11:00-11:50AM",
            "days": "----R--",
            "building": "ML ",
            "room": "ML 141",
            "instructor": "Layman K"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "Required of all freshman and sophomore recipients of a science or mathematics scholarship.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "Required of all freshman and sophomore recipients of a science or mathematics scholarship.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "IDS300 Convocation",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "01",
            "hours": "0-1",
            "schedule": "11:00-11:50AM",
            "days": "-M-----",
            "building": "FA ",
            "room": "FA KA",
            "instructor": "Goerzen P\nVoth, T."
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "Convocation is required for all full-time students. Must attend 18 convocations to receive credit.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "Convocation is required for all full-time students. Must attend 18 convocations to receive credit.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "IDS300N Convocation - Nursing Majors",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "01",
            "hours": "0.3",
            "schedule": "11:00-11:50AM",
            "days": "-M-----",
            "building": "FA ",
            "room": "FA KA",
            "instructor": "Goerzen P"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "Convocation is required for all full-time students. Must attend 9 convocations to receive credit.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "Convocation is required for all full-time students. Must attend 9 convocations to receive credit.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "IDS350 Study Abroad",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "01",
            "hours": "15.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "Quinlin D"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "*Note: Charges for Study Abroad and other Off-Campus Programs are on a case by case basis. Please contact student accounts for specific charges.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Interdisciplinary Study",
        "rooms": {
            "section": "*Note: Charges for Study Abroad and other Off-Campus Programs are on a case by case basis. Please contact student accounts for specific charges.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "LAN111 Elementary German I",
        "areaofstudy": "Languages",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "3:00- 3:50PM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 119",
            "instructor": "Quinlin D"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Languages",
        "rooms": {
            "section": "Additional required weekly study group to be arranged by students and instructor",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Languages",
        "rooms": {
            "section": "Additional required weekly study group to be arranged by students and instructor",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "LAN131 Elementary Spanish I",
        "areaofstudy": "Languages",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "7:00- 8:45PM",
            "days": "-M-W---",
            "building": "ML ",
            "room": "ML 141",
            "instructor": "Sanchez, R"
        }
    },
    {
        "course": "LAN350 Foreign Language/Culture in A Study Abroad Environment",
        "areaofstudy": "Languages",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "Quinlin D"
        }
    },
    {
        "course": "CSC230 Intermediate Programming: Graphical User Interfaces",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "9:00- 9:50AM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 212",
            "instructor": "STAFF"
        }
    },
    {
        "course": "CSC441 Web Application Development",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "10:00-10:50AM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 101",
            "instructor": "STAFF"
        }
    },
    {
        "course": "Course Description:",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "This course emphasizes practical aspects of web application development. Students will learn to create static web pages using HTML and then move on to creating dynamic content with JavaScript (or a similar language). High-level concepts in computer networking including the domain name system (DNS), and the use of cryptographic certificates for encryption and authentication purposes will be covered. Prerequisite: CSC 230. Fall, even-numbered years.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Course Description:",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "This course emphasizes practical aspects of web application development. Students will learn to create static web pages using HTML and then move on to creating dynamic content with JavaScript (or a similar language). High-level concepts in computer networking including the domain name system (DNS), and the use of cryptographic certificates for encryption and authentication purposes will be covered. Prerequisite: CSC 230. Fall, even-numbered years.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "CSC485 Internship",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "01",
            "hours": "2.0",
            "schedule": "11:00-11:50AM",
            "days": "----R--",
            "building": "",
            "room": "",
            "instructor": "STAFF"
        }
    },
    {
        "course": "Course Description:",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "A capstone experience allowing students to apply their knowledge and training in an environment where they are called upon to solve practical problems posed by other people. A minimum of 80 work hours are required. Students will be required to provide awritten report of their work and a public presentation of their work at the conclusion of the experience. Usually satisfied with a summer internship, but \\other arrangements are possible. Prerequisite: senior standing as a software development major. Offered in May term of the junior year or by agreement during the senior year.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Course Description:",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "A capstone experience allowing students to apply their knowledge and training in an environment where they are called upon to solve practical problems posed by other people. A minimum of 80 work hours are required. Students will be required to provide awritten report of their work and a public presentation of their work at the conclusion of the experience. Usually satisfied with a summer internship, but \\other arrangements are possible. Prerequisite: senior standing as a software development major. Offered in May term of the junior year or by agreement during the senior year.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "MAT102 Basic Algebra",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "1:00- 2:15PM",
            "days": "--T-R--",
            "building": "WAC",
            "room": "WAC 216",
            "instructor": "Scott L"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "Required for students with a Math ACT score of 17 or below or a Math SAT score of 420 or below. Prepares students to take MAT104.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "Required for students with a Math ACT score of 17 or below or a Math SAT score of 420 or below. Prepares students to take MAT104.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "MAT104 Intermediate Algebra",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "2:00- 2:50PM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 216",
            "instructor": "Scott L"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "Required for students who have not met math competency (see Catalog). C or better in course meets GE--Math Competency and prepares students to take MAT201 or MAT221.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "Required for students who have not met math competency (see Catalog). C or better in course meets GE--Math Competency and prepares students to take MAT201 or MAT221.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "MAT111 Calculus I",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "1:00- 1:50PM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 212",
            "instructor": "STAFF"
        }
    },
    {
        "course": "",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "9:30-10:45AM",
            "days": "--T----",
            "building": "WAC",
            "room": "WAC 212",
            "instructor": "STAFF"
        }
    },
    {
        "course": "MAT201 The Nature of Mathematics",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "1:00- 1:50PM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 216",
            "instructor": "Scott L"
        }
    },
    {
        "course": "",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "8:00- 9:15AM",
            "days": "----R--",
            "building": "WAC",
            "room": "WAC 212",
            "instructor": "Scott L"
        }
    },
    {
        "course": "",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "02",
            "hours": "4.0",
            "schedule": "1:00- 1:50PM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 216",
            "instructor": "Scott L"
        }
    },
    {
        "course": "",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "2:30- 3:45PM",
            "days": "----R--",
            "building": "WAC",
            "room": "WAC 212",
            "instructor": "Scott L"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "Prerequisite: Satisfaction of mathematics competency.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "Prerequisite: Satisfaction of mathematics competency.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "MAT221 Applied Statistics",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "10:00-10:50AM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 016",
            "instructor": "Peacock, N"
        }
    },
    {
        "course": "",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "02",
            "hours": "4.0",
            "schedule": "10:00-10:50AM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 016",
            "instructor": "Peacock, N"
        }
    },
    {
        "course": "",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "9:30-10:45AM",
            "days": "----R--",
            "building": "WAC",
            "room": "WAC 101",
            "instructor": "Peacock, N"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "Prerequisite: Satisfaction of mathematics competency.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "Prerequisite: Satisfaction of mathematics competency.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "MAT301 Multivariable Mathematics (Calculus III)",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "10:00-10:50AM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 212",
            "instructor": "STAFF"
        }
    },
    {
        "course": "",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "1:00- 2:15PM",
            "days": "--T----",
            "building": "WAC",
            "room": "WAC 212",
            "instructor": "STAFF"
        }
    },
    {
        "course": "MAT411 Modern Algebra",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "2:00- 2:50PM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 212",
            "instructor": "STAFF"
        }
    },
    {
        "course": "MAT481 Mathematical Sciences Sem I",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "01",
            "hours": "0.5",
            "schedule": "11:00-11:50AM",
            "days": "----R--",
            "building": "WAC",
            "room": "WAC 212",
            "instructor": "STAFF"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "Junior year requirement. Enroll in both fall and spring. A Full year's attendance is required.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "Junior year requirement. Enroll in both fall and spring. A Full year's attendance is required.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "MAT482 Mathematical Sciences Sem II",
        "areaofstudy": "Mathematics/Computer Sci",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "11:00-11:50AM",
            "days": "----R--",
            "building": "WAC",
            "room": "WAC 212",
            "instructor": "STAFF"
        }
    },
    {
        "course": "MUS113 Music Theory I",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "9:00- 9:50AM",
            "days": "-M-W-F-",
            "building": "FA ",
            "room": "FA 141",
            "instructor": "Liu, C"
        }
    },
    {
        "course": "MUS115 Aural Skills I",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "9:30-10:20AM",
            "days": "----R--",
            "building": "FA ",
            "room": "FA 141",
            "instructor": "Miertschin"
        }
    },
    {
        "course": "MUS118 Chapel Choir",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "3:00- 3:50PM",
            "days": "-M-W-F-",
            "building": "FA ",
            "room": "FA 143",
            "instructor": "Waters, H"
        }
    },
    {
        "course": "MUS121 Applied Music-Piano",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "FA ",
            "room": "FA 165",
            "instructor": "Liu, C"
        }
    },
    {
        "course": "MUS122 Applied Music-Voice",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "FA ",
            "room": "FA 162",
            "instructor": "Chun S"
        }
    },
    {
        "course": "MUS123 Applied Music-Organ",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "AD ",
            "room": "AD CH",
            "instructor": "Hetrick D"
        }
    },
    {
        "course": "MUS124 Applied Music-Strings",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "Johnson N\nGirton S"
        }
    },
    {
        "course": "MUS125 Applied Music-Woodwinds",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "FA ",
            "room": "FA 142",
            "instructor": "Thompson C\nBoettger J\nHague Z"
        }
    },
    {
        "course": "MUS126 Applied Music-Brass",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "Miertschin"
        }
    },
    {
        "course": "MUS127 Applied Music-Percussion",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "Miertschin"
        }
    },
    {
        "course": "MUS128 Applied Music-Guitar",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "Glanton H"
        }
    },
    {
        "course": "MUS129 Applied Music-Jazz Improv",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "FA ",
            "room": "FA 142",
            "instructor": "Boettger J"
        }
    },
    {
        "course": "MUS140 Class Piano",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "1:00- 1:50PM",
            "days": "--T-R--",
            "building": "FA ",
            "room": "FA 141",
            "instructor": "Liu, C"
        }
    },
    {
        "course": "",
        "areaofstudy": "Music",
        "rooms": {
            "section": "02",
            "hours": "1.0",
            "schedule": "2:30- 3:20PM",
            "days": "--T-R--",
            "building": "FA ",
            "room": "FA 141",
            "instructor": "Liu, C"
        }
    },
    {
        "course": "MUS171 Jazz Combo",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "FA ",
            "room": "FA 142",
            "instructor": "Boettger J"
        }
    },
    {
        "course": "MUS172 Camerata Musica",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "Boettger J"
        }
    },
    {
        "course": "MUS213 Music Theory III",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "10:00-10:50AM",
            "days": "-M-W-F-",
            "building": "FA ",
            "room": "FA 141",
            "instructor": "Boettger J"
        }
    },
    {
        "course": "MUS215 Aural Skills II",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "9:30-10:20AM",
            "days": "--T----",
            "building": "FA ",
            "room": "FA 141",
            "instructor": "Miertschin"
        }
    },
    {
        "course": "MUS257 Piano Pedagogy I",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "2.0",
            "schedule": "3:00- 4:00PM",
            "days": "-M-W---",
            "building": "FA ",
            "room": "FA 141",
            "instructor": "Liu, C"
        }
    },
    {
        "course": "MUS314 Conducting",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "1:00- 1:50PM",
            "days": "-M-W-F-",
            "building": "FA ",
            "room": "FA 143",
            "instructor": "Hilding, K\nWaters, H"
        }
    },
    {
        "course": "MUS318 Chapel Choir",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "3:00- 4:30PM",
            "days": "--T-R--",
            "building": "FA ",
            "room": "FA 143",
            "instructor": "Waters, H"
        }
    },
    {
        "course": "MUS321 Applied Music-Piano",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "FA ",
            "room": "FA 165",
            "instructor": "Liu, C"
        }
    },
    {
        "course": "MUS322 Applied Music-Voice",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "FA ",
            "room": "FA 162",
            "instructor": "Chun S"
        }
    },
    {
        "course": "MUS323 Applied Music-Organ",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "AD ",
            "room": "AD CH",
            "instructor": "Hetrick D"
        }
    },
    {
        "course": "MUS324 Applied Music-Strings",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "Johnson N\nGirton S"
        }
    },
    {
        "course": "MUS325 Applied Music-Woodwinds",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "FA ",
            "room": "FA 142",
            "instructor": "Boettger J"
        }
    },
    {
        "course": "MUS326 Applied Music-Brass",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "Miertschin"
        }
    },
    {
        "course": "MUS327 Applied Music-Percussion",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "STAFF"
        }
    },
    {
        "course": "MUS328 Applied Music-Guitar",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "Glanton H"
        }
    },
    {
        "course": "MUS329 Applied Music-Jazz Improv",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "FA ",
            "room": "FA 142",
            "instructor": "Boettger J"
        }
    },
    {
        "course": "MUS330 Composition",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "Boettger J"
        }
    },
    {
        "course": "MUS332 Jazz Composition and Arranging",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "Boettger J"
        }
    },
    {
        "course": "MUS351 Concert Choir",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "12:00-12:50PM",
            "days": "-MTW-F-",
            "building": "FA ",
            "room": "FA 143",
            "instructor": "Waters, H"
        }
    },
    {
        "course": "MUS353 Bethel College Jazz Ens I",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "4:00- 6:00PM",
            "days": "--T-R--",
            "building": "FA ",
            "room": "FA KA",
            "instructor": "Boettger J"
        }
    },
    {
        "course": "MUS354 Chamber Orchestra",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "4:00- 5:00PM",
            "days": "--T-R--",
            "building": "FA ",
            "room": "FA 142",
            "instructor": "Hilding, K"
        }
    },
    {
        "course": "",
        "areaofstudy": "Music",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "7:00- 9:00PM",
            "days": "-M-----",
            "building": "MH ",
            "room": "MH GYM",
            "instructor": "Hilding, K"
        }
    },
    {
        "course": "MUS356 Wind Ensemble",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "4:00- 6:00PM",
            "days": "-M-W-F-",
            "building": "FA ",
            "room": "FA KA",
            "instructor": "Miertschin"
        }
    },
    {
        "course": "MUS371 Jazz Combo",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "FA ",
            "room": "FA 142",
            "instructor": "Boettger J"
        }
    },
    {
        "course": "MUS372 Camerata Musica",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "Boettger J"
        }
    },
    {
        "course": "MUS373 Chamber Singers",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "12:00-12:50PM",
            "days": "----R--",
            "building": "FA ",
            "room": "FA 143",
            "instructor": "Waters, H"
        }
    },
    {
        "course": "MUS420 Senior Recital",
        "areaofstudy": "Music",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "Boettger J"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Music",
        "rooms": {
            "section": "Prerequisite: Three hours credit in upper level applied music lessons in the major performance medium and consent of the chair of the department.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Music",
        "rooms": {
            "section": "Prerequisite: Three hours credit in upper level applied music lessons in the major performance medium and consent of the chair of the department.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "NSG300 Foundations of Nursing",
        "areaofstudy": "Nursing",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "9:00-10:50AM",
            "days": "-M-----",
            "building": "WAC",
            "room": "WAC 308",
            "instructor": "Bartell, R"
        }
    },
    {
        "course": "NSG310 Nursing Dosage Calculations",
        "areaofstudy": "Nursing",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "3:00- 3:50PM",
            "days": "--T----",
            "building": "WAC",
            "room": "WAC 308",
            "instructor": "Bartell, R\nHerbel, E"
        }
    },
    {
        "course": "NSG311 Health Assessment",
        "areaofstudy": "Nursing",
        "rooms": {
            "section": "01",
            "hours": "2.0",
            "schedule": "1:00- 2:50PM",
            "days": "-M-----",
            "building": "KPE",
            "room": "KPEC B",
            "instructor": "Bartell, R\nHerbel, E"
        }
    },
    {
        "course": "NSG312 Nursing Care of Adult I",
        "areaofstudy": "Nursing",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "9:00-10:50AM",
            "days": "--T----",
            "building": "WAC",
            "room": "WAC 308",
            "instructor": "Bartell, R"
        }
    },
    {
        "course": "",
        "areaofstudy": "Nursing",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "1:00- 2:50PM",
            "days": "--T----",
            "building": "WAC",
            "room": "WAC 308",
            "instructor": "Bartell, R\nMasem S"
        }
    },
    {
        "course": "NSG320 Clinical Practicum I",
        "areaofstudy": "Nursing",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "TBD",
            "days": "----RF-",
            "building": "WAC",
            "room": "WAC 308",
            "instructor": "Herbel, E"
        }
    },
    {
        "course": "NSG401 Maternal Newborn",
        "areaofstudy": "Nursing",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "8:00-10:50AM",
            "days": "-M-----",
            "building": "WAC",
            "room": "WAC 108",
            "instructor": "Bartell, R\nMelin J"
        }
    },
    {
        "course": "NSG402 Child and Family",
        "areaofstudy": "Nursing",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "8:00-10:50AM",
            "days": "--T----",
            "building": "WAC",
            "room": "WAC 108",
            "instructor": "Bartell, R\nHosford,H"
        }
    },
    {
        "course": "NSG403 Community Health",
        "areaofstudy": "Nursing",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "1:00- 3:50PM",
            "days": "-M-----",
            "building": "WAC",
            "room": "WAC 108",
            "instructor": "Bartell, R"
        }
    },
    {
        "course": "NSG409 Complex Nursing Pharmacology",
        "areaofstudy": "Nursing",
        "rooms": {
            "section": "01",
            "hours": "2.0",
            "schedule": "1:00- 2:50PM",
            "days": "--T----",
            "building": "WAC",
            "room": "WAC 108",
            "instructor": "Bartell, R\nHerbel, E"
        }
    },
    {
        "course": "NSG410 Clinical Practicum III",
        "areaofstudy": "Nursing",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "TBD",
            "days": "----RF-",
            "building": "WAC",
            "room": "WAC 108",
            "instructor": "Hosford,H\nMelin J"
        }
    },
    {
        "course": "PHI200 General Philosophy",
        "areaofstudy": "Philosophy",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "2:30- 3:45PM",
            "days": "--T-R--",
            "building": "KSC",
            "room": "KSC 021",
            "instructor": "Sager, A"
        }
    },
    {
        "course": "PSY211 General Psychology",
        "areaofstudy": "Psychology",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "2:00- 2:50PM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 121",
            "instructor": "Peacock, N"
        }
    },
    {
        "course": "PSY275 Emotion and Motivation",
        "areaofstudy": "Psychology",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "3:00- 3:50PM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 021",
            "instructor": "Peacock, N"
        }
    },
    {
        "course": "PSY342 Abnormal Psychology",
        "areaofstudy": "Psychology",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "1:00- 1:50PM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 121",
            "instructor": "STAFF"
        }
    },
    {
        "course": "",
        "areaofstudy": "Psychology",
        "rooms": {
            "section": "02",
            "hours": "4.0",
            "schedule": "1:00- 1:50PM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 121",
            "instructor": "STAFF"
        }
    },
    {
        "course": "",
        "areaofstudy": "Psychology",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "8:00-10:50AM",
            "days": "--T----",
            "building": "KSC",
            "room": "KSC 102",
            "instructor": "STAFF"
        }
    },
    {
        "course": "PSY360 Social Psychology",
        "areaofstudy": "Psychology",
        "rooms": {
            "section": "01",
            "hours": "3-4",
            "schedule": "9:00- 9:50AM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 121",
            "instructor": "Peacock, N"
        }
    },
    {
        "course": "",
        "areaofstudy": "Psychology",
        "rooms": {
            "section": "02",
            "hours": "3-4",
            "schedule": "9:00- 9:50AM",
            "days": "-M-W-F-",
            "building": "KSC",
            "room": "KSC 121",
            "instructor": "Peacock, N"
        }
    },
    {
        "course": "",
        "areaofstudy": "Psychology",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "8:00- 9:15AM",
            "days": "----R--",
            "building": "KSC",
            "room": "KSC 102",
            "instructor": "Peacock, N"
        }
    },
    {
        "course": "PSY481 Psychology Seminar",
        "areaofstudy": "Psychology",
        "rooms": {
            "section": "01",
            "hours": "0.5",
            "schedule": "11:00-11:50AM",
            "days": "----R--",
            "building": "KSC",
            "room": "KSC 102",
            "instructor": "Peacock, N"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Psychology",
        "rooms": {
            "section": "Junior year requirement. Enroll in both fall and spring. A full year's attendance is required.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Psychology",
        "rooms": {
            "section": "Junior year requirement. Enroll in both fall and spring. A full year's attendance is required.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "PSY482 Psychology Seminar",
        "areaofstudy": "Psychology",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "11:00-11:50AM",
            "days": "----R--",
            "building": "KSC",
            "room": "KSC 102",
            "instructor": "Peacock, N"
        }
    },
    {
        "course": "CRJ200 Intro to Criminal Justice",
        "areaofstudy": "Social Work",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "TBD",
            "days": "",
            "building": "",
            "room": "",
            "instructor": "STAFF"
        }
    },
    {
        "course": "CRJ481 Criminal and Restorative Justice Capstone",
        "areaofstudy": "Social Work",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "Wilson, S"
        }
    },
    {
        "course": "SWK220 Intro Social Work/Social Welfare Institutions",
        "areaofstudy": "Social Work",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "2:00- 2:50PM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 119",
            "instructor": "Williams S"
        }
    },
    {
        "course": "SWK260 Intro to Addictions",
        "areaofstudy": "Social Work",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "7:00- 9:50PM",
            "days": "----R--",
            "building": "WAC",
            "room": "WAC 213",
            "instructor": "Greever, J"
        }
    },
    {
        "course": "SWK310 Skills for Human Serv Work",
        "areaofstudy": "Social Work",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "1:00- 2:15PM",
            "days": "--T-R--",
            "building": "WAC",
            "room": "WAC 213",
            "instructor": "ChapDeck"
        }
    },
    {
        "course": "",
        "areaofstudy": "Social Work",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "2:30- 3:45PM",
            "days": "----R--",
            "building": "WAC",
            "room": "WAC 216",
            "instructor": "ChapDeck"
        }
    },
    {
        "course": "SWK355 Human Behavior-Social Envir",
        "areaofstudy": "Social Work",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "7:00- 9:50PM",
            "days": "--T----",
            "building": "WAC",
            "room": "WAC 216",
            "instructor": "Sch-SebesC"
        }
    },
    {
        "course": "SWK364 Social Justice & Social Change",
        "areaofstudy": "Social Work",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "9:30-10:45AM",
            "days": "--T-R--",
            "building": "WAC",
            "room": "WAC 214",
            "instructor": "Williams S"
        }
    },
    {
        "course": "SWK372 Field Experience",
        "areaofstudy": "Social Work",
        "rooms": {
            "section": "01",
            "hours": "2-4",
            "schedule": "3:00- 3:50PM",
            "days": "---W---",
            "building": "WAC",
            "room": "WAC 210",
            "instructor": "Williams S"
        }
    },
    {
        "course": "SWK460 Intervention in Human Systems",
        "areaofstudy": "Social Work",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "9:00- 9:50AM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 213",
            "instructor": "ChapDeck"
        }
    },
    {
        "course": "SWK472 Field Instruction",
        "areaofstudy": "Social Work",
        "rooms": {
            "section": "01",
            "hours": "4-9",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "Williams S"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Social Work",
        "rooms": {
            "section": "Prerequisite: Social Work major with a minimum of 2.5 GPA in major.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Social Work",
        "rooms": {
            "section": "Prerequisite: Social Work major with a minimum of 2.5 GPA in major.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "SWK481 Prepractice Seminar I",
        "areaofstudy": "Social Work",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "11:00-11:50AM",
            "days": "----R--",
            "building": "WAC",
            "room": "WAC 213",
            "instructor": "ChapDeck\nWilliams S"
        }
    },
    {
        "course": "SWK482 Prepractice Seminar II",
        "areaofstudy": "Social Work",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "11:00-11:50AM",
            "days": "----R--",
            "building": "WAC",
            "room": "WAC 213",
            "instructor": "ChapDeck\nWilliams S"
        }
    },
    {
        "course": "",
        "areaofstudy": "Social Work",
        "rooms": {
            "section": "",
            "hours": "",
            "schedule": "1:00- 1:50PM",
            "days": "----R--",
            "building": "WAC",
            "room": "WAC",
            "instructor": "ChapDeck\nWilliams S"
        }
    },
    {
        "course": "ART108 2-D Design",
        "areaofstudy": "Visual Arts and Design",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "9:00- 9:50AM",
            "days": "-M-W-F-",
            "building": "FC ",
            "room": "FC 13",
            "instructor": "Buller R"
        }
    },
    {
        "course": "ART113 Drawing",
        "areaofstudy": "Visual Arts and Design",
        "rooms": {
            "section": "01",
            "hours": "2-4",
            "schedule": "1:00- 3:50PM",
            "days": "--T-R--",
            "building": "FC ",
            "room": "FC 13",
            "instructor": "Schroed, K"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Visual Arts and Design",
        "rooms": {
            "section": "Art majors enroll in 4.0 credit hours.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Visual Arts and Design",
        "rooms": {
            "section": "Art majors enroll in 4.0 credit hours.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "ART131 Art History I",
        "areaofstudy": "Visual Arts and Design",
        "rooms": {
            "section": "01",
            "hours": "3.0",
            "schedule": "2:00- 2:50PM",
            "days": "-M-W-F-",
            "building": "WAC",
            "room": "WAC 208",
            "instructor": "Buller R"
        }
    },
    {
        "course": "ART216 Sculpture",
        "areaofstudy": "Visual Arts and Design",
        "rooms": {
            "section": "01",
            "hours": "2-4",
            "schedule": "1:00- 3:50PM",
            "days": "--T-R--",
            "building": "FC ",
            "room": "FC 7",
            "instructor": "Long D"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Visual Arts and Design",
        "rooms": {
            "section": "Art majors enroll in 4.0 credit hrs.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Visual Arts and Design",
        "rooms": {
            "section": "Art majors enroll in 4.0 credit hrs.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "ART217 Small Metals and Jewelry",
        "areaofstudy": "Visual Arts and Design",
        "rooms": {
            "section": "01",
            "hours": "2-4",
            "schedule": "7:00- 9:50PM",
            "days": "--T-R--",
            "building": "FC ",
            "room": "FC 13",
            "instructor": "Long D"
        }
    },
    {
        "course": "ART270 Graphic Design",
        "areaofstudy": "Visual Arts and Design",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "7:00- 9:50PM",
            "days": "-M-W---",
            "building": "WAC",
            "room": "WAC 103",
            "instructor": "Gonzalez O"
        }
    },
    {
        "course": "ART317 Interm Small Metals/Jewelry",
        "areaofstudy": "Visual Arts and Design",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "7:00- 9:50PM",
            "days": "--T-R--",
            "building": "FC ",
            "room": "FC 13",
            "instructor": "Long D"
        }
    },
    {
        "course": "ART321 Digital Photography",
        "areaofstudy": "Visual Arts and Design",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "2:00- 3:50PM",
            "days": "-M-W---",
            "building": "FC ",
            "room": "FC 6",
            "instructor": "Long D"
        }
    },
    {
        "course": "ART370 Intermediate Graphic Design",
        "areaofstudy": "Visual Arts and Design",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "7:00- 9:50PM",
            "days": "-M-W---",
            "building": "WAC",
            "room": "WAC 103",
            "instructor": "Gonzalez O"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Visual Arts and Design",
        "rooms": {
            "section": "Students enrolled in this course are required to purchase individual named licensing for accessing Adobe programs.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Visual Arts and Design",
        "rooms": {
            "section": "Students enrolled in this course are required to purchase individual named licensing for accessing Adobe programs.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "ART400 Advanced Studio",
        "areaofstudy": "Visual Arts and Design",
        "rooms": {
            "section": "01",
            "hours": "1-4",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "Buller R"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Visual Arts and Design",
        "rooms": {
            "section": "20 hours of studio work including ART 113 and a beginning course in the media the student intends to use.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Visual Arts and Design",
        "rooms": {
            "section": "20 hours of studio work including ART 113 and a beginning course in the media the student intends to use.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "ART417 Adv Small Metals/Jewelry",
        "areaofstudy": "Visual Arts and Design",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "7:00- 9:50PM",
            "days": "--T-R--",
            "building": "FC ",
            "room": "FC 13",
            "instructor": "Long D"
        }
    },
    {
        "course": "ART421 Advanced Photography",
        "areaofstudy": "Visual Arts and Design",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "2:00- 3:50PM",
            "days": "-M-W---",
            "building": "FC ",
            "room": "FC 6",
            "instructor": "Long D"
        }
    },
    {
        "course": "ART470 Advanced Graphic Design",
        "areaofstudy": "Visual Arts and Design",
        "rooms": {
            "section": "01",
            "hours": "4.0",
            "schedule": "7:00- 9:50PM",
            "days": "-M-W---",
            "building": "WAC",
            "room": "WAC 103",
            "instructor": "Gonzalez O"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Visual Arts and Design",
        "rooms": {
            "section": "Students enrolled in this course are required to purchase individual named licensing for accessing Adobe programs.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Visual Arts and Design",
        "rooms": {
            "section": "Students enrolled in this course are required to purchase individual named licensing for accessing Adobe programs.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "ART481 Art Seminar",
        "areaofstudy": "Visual Arts and Design",
        "rooms": {
            "section": "01",
            "hours": "0.5",
            "schedule": "11:00-11:50AM",
            "days": "----R--",
            "building": "FC ",
            "room": "FC 6",
            "instructor": "Long D"
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Visual Arts and Design",
        "rooms": {
            "section": "Open only to upper level majors or by consent of the instructor.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "Requirements:",
        "areaofstudy": "Visual Arts and Design",
        "rooms": {
            "section": "Open only to upper level majors or by consent of the instructor.",
            "hours": "",
            "schedule": "",
            "days": "",
            "building": "",
            "room": "",
            "instructor": ""
        }
    },
    {
        "course": "ART487 Senior Portfolio/Exhibit",
        "areaofstudy": "Visual Arts and Design",
        "rooms": {
            "section": "01",
            "hours": "0.5",
            "schedule": "TBD",
            "days": "-------",
            "building": "",
            "room": "",
            "instructor": "Buller R"
        }
    },
    {
        "course": "HHP112 Varsity Sport-Soccer",
        "areaofstudy": "Varsity Sports",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "4:00- 6:30PM",
            "days": "-MTWRF-",
            "building": "TS ",
            "room": "TS STAD",
            "instructor": "Milicevic\nMilla, I"
        }
    },
    {
        "course": "HHP113 Varsity Sport-Football",
        "areaofstudy": "Varsity Sports",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "4:00- 6:30PM",
            "days": "-MTWRF-",
            "building": "TS ",
            "room": "TS STAD",
            "instructor": "Stokes, A"
        }
    },
    {
        "course": "HHP114 Varsity Sport-Volleyball",
        "areaofstudy": "Varsity Sports",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "4:00- 6:30PM",
            "days": "-MTWRF-",
            "building": "TG ",
            "room": "TG GYM",
            "instructor": "Leake, A"
        }
    },
    {
        "course": "HHP115 Varsity Sport-Cross Country",
        "areaofstudy": "Varsity Sports",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "4:00- 6:30PM",
            "days": "-MTWRF-",
            "building": "TS ",
            "room": "TS STAD",
            "instructor": "Martinez J\nStallworth"
        }
    },
    {
        "course": "HHP121 Varsity Sport-Cheer & Dance",
        "areaofstudy": "Varsity Sports",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "4:00- 6:30PM",
            "days": "-MTWRF-",
            "building": "MH ",
            "room": "MH GYM",
            "instructor": "McCord\nGogus J"
        }
    },
    {
        "course": "HHP312 Varsity Sport-Soccer",
        "areaofstudy": "Varsity Sports",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "4:00- 6:30PM",
            "days": "-MTWRF-",
            "building": "TS ",
            "room": "TS STAD",
            "instructor": "Milicevic\nMilla, I"
        }
    },
    {
        "course": "HHP313 Varsity Sport-Football",
        "areaofstudy": "Varsity Sports",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "4:00- 6:30PM",
            "days": "-MTWRF-",
            "building": "TS ",
            "room": "TS STAD",
            "instructor": "Stokes, A"
        }
    },
    {
        "course": "HHP314 Varsity Sport-Volleyball",
        "areaofstudy": "Varsity Sports",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "4:00- 6:30PM",
            "days": "-MTWRF-",
            "building": "TG ",
            "room": "TG GYM",
            "instructor": "Leake, A"
        }
    },
    {
        "course": "HHP315 Varsity Sport-Cross Country",
        "areaofstudy": "Varsity Sports",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "4:00- 6:30PM",
            "days": "-MTWRF-",
            "building": "TS ",
            "room": "TS STAD",
            "instructor": "Martinez J\nStallworth"
        }
    },
    {
        "course": "HHP321 Varsity Sport-Cheer & Dance",
        "areaofstudy": "Varsity Sports",
        "rooms": {
            "section": "01",
            "hours": "1.0",
            "schedule": "4:00- 6:30PM",
            "days": "-MTWRF-",
            "building": "MH ",
            "room": "MH GYM",
            "instructor": "McCord\nGogus J"
        }
    }
]

const getCourse = (course: string) => {
  const foundCourse = masterList.find(c => c.course === course)
  console.log(foundCourse)
  console.log(foundCourse?.rooms)
  console.log(foundCourse?.rooms?.section)
  console.log(foundCourse?.rooms?.hours)
  return foundCourse
}
  return (
    <div>TestRoute
      <div>
        <button onClick={() => console.log(getCourse('BIO110 Environmental Science'))}>Get Course</button>
      </div>
    </div>
  )
}

export default TestRoute