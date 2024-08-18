import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import './landingPage.css'
import 'leaflet/dist/leaflet.css';
import { MapContainer, useMap, TileLayer, Marker, Popup } from 'react-leaflet'
import L, { LatLngTuple } from 'leaflet'; // Add this line to import the 'L' object from the 'leaflet' library
import Header from '../Header';

interface Course {
  course: string;
  areaofstudy: string;
  rooms: Room;
}

interface Room {
  section: string;
  hours: string;
  schedule: string;
  days: string;
  building: string;
  room: string;
  instructor: string;
  coordinates: LatLngTuple;
}
const CourseList: React.FC = () => {
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
            "instructor": "Woods, J",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Woods, J",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Woods, J",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Woods, J",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Woods, J",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "STAFF",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "STAFF",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "STAFF",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "STAFF",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "STAFF",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "STAFF",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "STAFF",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "STAFF",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Woods, J",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Woods, J",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Woods, J",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Woods, J",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Woods, J",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Goerzen P",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Voth, T.",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Goerzen P",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Voth, T.",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Goerzen P",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Jantzen M",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Voth, T.",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Goerzen P",
            "coordinates": "not found"
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
            "instructor": "STAFF",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "STAFF",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "McFarlandA",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "McFarlandA",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Dobbs, N",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "STAFF",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Dobbs, N",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "McFarlandA",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "McFarlandA",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Dobbs, N",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Dobbs, N",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "McFarlandA",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "STAFF",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Wiebe-Fris",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Wiebe-Fris",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Wiebe-Fris",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Wiebe-Fris",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Wiebe-Fris",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Wiebe-Fris",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Wiebe-Fris",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Wiebe-Fris",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Layman K",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Layman K",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Layman K\nWiebe-Fris",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Layman K\nWiebe-Fris",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Layman K",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Layman K",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Layman K",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Layman K",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Layman K",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Layman K",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Layman K",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Layman K",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "DoughertyC",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "DoughertyC",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "WilkinsonJ",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Klassen D",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Cr-Dick C",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "DoughertyC",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Klassen D",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Cr-Dick C",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Cr-Dick C",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "WilkinsonJ",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Klassen D",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Cr-Dick C",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "DoughertyC",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Cr-Dick C",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Cr-Dick C",
            "coordinates": "not found"
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
            "instructor": "Klassen D\nCr-Dick C\nDoughertyC",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "KICA",
            "coordinates": "not found"
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
            "instructor": "KICA",
            "coordinates": "not found"
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
            "instructor": "KICA",
            "coordinates": "not found"
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
            "instructor": "KICA",
            "coordinates": "not found"
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
            "instructor": "Siemens D",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Siemens D",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Jantz A",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Jantz A",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Scott L",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Scott L",
            "coordinates": "not found"
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
            "instructor": "Siemens D",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Jantz A",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Jantz A",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Siemens D",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Siemens D",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Siemens D",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Jantz A",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Jantz A",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Jantz A",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "KICA",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "KICA",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "KICA",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "KICA",
            "coordinates": "not found"
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
            "instructor": "KICA",
            "coordinates": "not found"
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
            "instructor": "KICA",
            "coordinates": "not found"
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
            "instructor": "KICA",
            "coordinates": "not found"
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
            "instructor": "KICA",
            "coordinates": "not found"
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
            "instructor": "KICA",
            "coordinates": "not found"
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
            "instructor": "KICA",
            "coordinates": "not found"
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
            "instructor": "KICA",
            "coordinates": "not found"
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
            "instructor": "KICA",
            "coordinates": "not found"
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
            "instructor": "KICA",
            "coordinates": "not found"
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
            "instructor": "KICA",
            "coordinates": "not found"
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
            "instructor": "KICA",
            "coordinates": "not found"
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
            "instructor": "Graber, E",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Graber, E",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "STAFF",
            "coordinates": "not found"
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
            "instructor": "Scarry S",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Born B",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Scarry S",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Born B",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Quinlin D",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Born B\nScarry S",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Jantzen M",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Wedel K",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Jantzen M",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Wedel K",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Jantzen M",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Wedel K",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Wedel K",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Muhwezi, D",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Muhwezi, D",
            "coordinates": [
                "38.075133",
                "-97.343343"
            ]
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
            "instructor": "Wedel K",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "STAFF",
            "coordinates": [
                "38.075112",
                "-97.344159"
            ]
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
            "instructor": "Siemens, M\nDorton, M",
            "coordinates": [
                "38.075133",
                "-97.343343"
            ]
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
            "instructor": "Dorton, M",
            "coordinates": [
                "38.075112",
                "-97.344159"
            ]
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
            "instructor": "Siemens, M",
            "coordinates": [
                "38.075112",
                "-97.344159"
            ]
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
            "instructor": "STAFF",
            "coordinates": [
                "38.075145",
                "-97.344587"
            ]
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
            "instructor": "STAFF",
            "coordinates": [
                "38.075133",
                "-97.343343"
            ]
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
            "instructor": "STAFF",
            "coordinates": [
                "38.075112",
                "-97.344159"
            ]
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
            "instructor": "STAFF",
            "coordinates": [
                "38.075112",
                "-97.344159"
            ]
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
            "instructor": "Artaz J",
            "coordinates": [
                "38.075112",
                "-97.344159"
            ]
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
            "instructor": "STAFF",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Dorton, M",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Siemens, M",
            "coordinates": [
                "38.075112",
                "-97.344159"
            ]
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
            "instructor": "Siemens, M",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Siemens, M",
            "coordinates": [
                "38.075112",
                "-97.344159"
            ]
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
            "instructor": "Dorton, M",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Dorton, M",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Dorton, M",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Dorton, M",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Siemens, M",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Siemens, M",
            "coordinates": [
                "38.075112",
                "-97.344159"
            ]
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
            "instructor": "Dorton, M",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "STAFF",
            "coordinates": [
                "38.075145",
                "-97.344587"
            ]
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
            "instructor": "MiddletonD",
            "coordinates": [
                "38.075112",
                "-97.344159"
            ]
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
            "instructor": "MiddletonD",
            "coordinates": [
                "38.075145",
                "-97.344587"
            ]
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
            "instructor": "Thiesen B",
            "coordinates": "not found"
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
            "instructor": "Johnson, G",
            "coordinates": [
                "38.075145",
                "-97.344587"
            ]
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
            "instructor": "Artaz J",
            "coordinates": [
                "38.075145",
                "-97.344587"
            ]
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
            "instructor": "Bertholf D",
            "coordinates": [
                "38.075145",
                "-97.344587"
            ]
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
            "instructor": "Siemens D",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Born B",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Voth, T.",
            "coordinates": [
                "38.075133",
                "-97.343343"
            ]
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
            "instructor": "Peacock, N",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Scarry S",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Peters, R",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Quinlin D",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Dr. MeMe",
            "coordinates": [
                "38.075133",
                "-97.343343"
            ]
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
            "instructor": "Wiebe-Fris",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Goerzen P",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "STAFF",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Voth, T.",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Voth, T.",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Kershner M",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Layman K",
            "coordinates": [
                "38.075133",
                "-97.343343"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Goerzen P\nVoth, T.",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Goerzen P",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Quinlin D",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Quinlin D",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Sanchez, R",
            "coordinates": [
                "38.075133",
                "-97.343343"
            ]
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
            "instructor": "Quinlin D",
            "coordinates": "not found"
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
            "instructor": "STAFF",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "STAFF",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "STAFF",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Scott L",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Scott L",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "STAFF",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "STAFF",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Scott L",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Scott L",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Scott L",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Scott L",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Peacock, N",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Peacock, N",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Peacock, N",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "STAFF",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "STAFF",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "STAFF",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "STAFF",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "STAFF",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Liu, C",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Miertschin",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Waters, H",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Liu, C",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Chun S",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Hetrick D",
            "coordinates": "not found"
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
            "instructor": "Johnson N\nGirton S",
            "coordinates": "not found"
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
            "instructor": "Thompson C\nBoettger J\nHague Z",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Miertschin",
            "coordinates": "not found"
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
            "instructor": "Miertschin",
            "coordinates": "not found"
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
            "instructor": "Glanton H",
            "coordinates": "not found"
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
            "instructor": "Boettger J",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Liu, C",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Liu, C",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Boettger J",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Boettger J",
            "coordinates": "not found"
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
            "instructor": "Boettger J",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Miertschin",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Liu, C",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Hilding, K\nWaters, H",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Waters, H",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Liu, C",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Chun S",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Hetrick D",
            "coordinates": "not found"
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
            "instructor": "Johnson N\nGirton S",
            "coordinates": "not found"
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
            "instructor": "Boettger J",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Miertschin",
            "coordinates": "not found"
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
            "instructor": "STAFF",
            "coordinates": "not found"
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
            "instructor": "Glanton H",
            "coordinates": "not found"
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
            "instructor": "Boettger J",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Boettger J",
            "coordinates": "not found"
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
            "instructor": "Boettger J",
            "coordinates": "not found"
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
            "instructor": "Waters, H",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Boettger J",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Hilding, K",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Hilding, K",
            "coordinates": [
                "38.075112",
                "-97.344159"
            ]
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
            "instructor": "Miertschin",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Boettger J",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Boettger J",
            "coordinates": "not found"
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
            "instructor": "Waters, H",
            "coordinates": [
                "38.073659",
                "-97.343316"
            ]
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
            "instructor": "Boettger J",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Bartell, R",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Bartell, R\nHerbel, E",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Bartell, R\nHerbel, E",
            "coordinates": "not found"
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
            "instructor": "Bartell, R",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Bartell, R\nMasem S",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Herbel, E",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Bartell, R\nMelin J",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Bartell, R\nHosford,H",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Bartell, R",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Bartell, R\nHerbel, E",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Hosford,H\nMelin J",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Sager, A",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Peacock, N",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Peacock, N",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "STAFF",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "STAFF",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "STAFF",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Peacock, N",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Peacock, N",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Peacock, N",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "Peacock, N",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Peacock, N",
            "coordinates": [
                "38.075133",
                "-97.342227"
            ]
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
            "instructor": "STAFF",
            "coordinates": "not found"
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
            "instructor": "Wilson, S",
            "coordinates": "not found"
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
            "instructor": "Williams S",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Greever, J",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "ChapDeck",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "ChapDeck",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Sch-SebesC",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Williams S",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Williams S",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "ChapDeck",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Williams S",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "ChapDeck\nWilliams S",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "ChapDeck\nWilliams S",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "ChapDeck\nWilliams S",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Buller R",
            "coordinates": [
                "38.074791",
                "-97.341324"
            ]
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
            "instructor": "Schroed, K",
            "coordinates": [
                "38.074791",
                "-97.341324"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Buller R",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Long D",
            "coordinates": [
                "38.074791",
                "-97.341324"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Long D",
            "coordinates": [
                "38.074791",
                "-97.341324"
            ]
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
            "instructor": "Gonzalez O",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "Long D",
            "coordinates": [
                "38.074791",
                "-97.341324"
            ]
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
            "instructor": "Long D",
            "coordinates": [
                "38.074791",
                "-97.341324"
            ]
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
            "instructor": "Gonzalez O",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Buller R",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Long D",
            "coordinates": [
                "38.074791",
                "-97.341324"
            ]
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
            "instructor": "Long D",
            "coordinates": [
                "38.074791",
                "-97.341324"
            ]
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
            "instructor": "Gonzalez O",
            "coordinates": [
                "38.074605",
                "-97.342049"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Long D",
            "coordinates": [
                "38.074791",
                "-97.341324"
            ]
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "",
            "coordinates": "not found"
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
            "instructor": "Buller R",
            "coordinates": "not found"
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
            "instructor": "Milicevic\nMilla, I",
            "coordinates": [
                "38.078038",
                "-97.344062"
            ]
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
            "instructor": "Stokes, A",
            "coordinates": [
                "38.078038",
                "-97.344062"
            ]
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
            "instructor": "Leake, A",
            "coordinates": [
                "38.075145",
                "-97.344587"
            ]
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
            "instructor": "Martinez J\nStallworth",
            "coordinates": [
                "38.078038",
                "-97.344062"
            ]
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
            "instructor": "McCord\nGogus J",
            "coordinates": [
                "38.075112",
                "-97.344159"
            ]
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
            "instructor": "Milicevic\nMilla, I",
            "coordinates": [
                "38.078038",
                "-97.344062"
            ]
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
            "instructor": "Stokes, A",
            "coordinates": [
                "38.078038",
                "-97.344062"
            ]
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
            "instructor": "Leake, A",
            "coordinates": [
                "38.075145",
                "-97.344587"
            ]
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
            "instructor": "Martinez J\nStallworth",
            "coordinates": [
                "38.078038",
                "-97.344062"
            ]
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
            "instructor": "McCord\nGogus J",
            "coordinates": [
                38.075112,
                -97.344159
            ]
        }
    }
]
//lol this is a mess, i ran out of time to setup a true backend so congratz if you made it this far
var mapbox_url = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam9ubnltY2N1bGxhZ2giLCJhIjoiY2xsYzdveWh4MGhwcjN0cXV5Z3BwMXA1dCJ9.QoEHzPNq9DtTRrdtXfOdrw';
  var mapbox_attribution = '© Mapbox © OpenStreetMap Contributors';
  var esri_url ='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
  var esri_attribution = '© Esri © OpenStreetMap Contributors';
  const lyr_sattelite = L.tileLayer(mapbox_url, { id: 'mapbox/satellite-v9', attribution: mapbox_attribution });
  const lyr_streets = L.tileLayer(esri_url, { attribution: esri_attribution });
  const marker = L.marker([38.074672, -97.342624]);
  const lg_markers = L.layerGroup([marker]);
  
  const baseMaps = {
    "Streets": lyr_streets,
    "Satellite": lyr_sattelite
  }
  const overlayMaps = {
    "Markers": lg_markers
  }

  const LayerControl = () => {
    const map = useMap();
   useEffect(() =>{ 
    L.control.layers(baseMaps, overlayMaps).addTo(map);}, [map]);
    return null;
  }


  const [userInput, setUserInput] = useState("");
  const [foundCourse, setFoundCourse] = useState<Course | null>(null);
  const getCourseData = (courseString: string) => {
      const foundCourse = masterList.find(course => course.course.toLowerCase().includes(courseString.toLowerCase()))
      if (foundCourse){

      setFoundCourse({
        ...foundCourse,
        rooms: {
          ...foundCourse.rooms,
          coordinates: [
            Number(foundCourse?.rooms?.coordinates[0]),
            Number(foundCourse?.rooms?.coordinates[1])
          ] as LatLngTuple
        }
      });
      const coords: LatLngTuple = [Number(foundCourse?.rooms?.coordinates[0]), Number(foundCourse?.rooms?.coordinates[1])]
      console.log(coords)
      }else{
        console.error('Course not found')
      }
      return foundCourse
    }
  


  return (
    <div>
        <Header>Course Search</Header>
      <Layout>
        <div className="first-area">
      <h2 className="subtitle">BETA TEST</h2>
      </div>
      <h3 className="subtitle">Search for a course to find its location on campus try: BIO110</h3>

      <p>by using this software you understand that this site is under construction and may not work at times, or change drastically between uses</p>
      <div className="centered-container">
        <div className="input-area">
          <input className="input-area-type" type="text" 
          value = {userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Search for courses" />
          <button onClick={() => getCourseData(userInput)}>Search</button>
        </div>
        <div className="course-info">
        <h2>{foundCourse?.course}</h2>
        <p>Area of Study: {foundCourse?.areaofstudy}</p>
        <p>Section: {foundCourse?.rooms?.section}</p>
        <p>Hours: {foundCourse?.rooms?.hours}</p>
        <p>Schedule: {foundCourse?.rooms?.schedule}</p>
        <p>Days: {foundCourse?.rooms?.days}</p>
        <p>Building: {foundCourse?.rooms?.building}</p>
        <p>Room: {foundCourse?.rooms?.room}</p>
        <p>Instructor: {foundCourse?.rooms?.instructor}</p>
      </div>
        <MapContainer className="map-container" center={[38.074672, -97.342624]} zoom={18} style={{ height: "50vh", width: "70vh" }} layers={[lyr_sattelite, lyr_streets, lg_markers]}>
      <TileLayer
        url={mapbox_url}
        id='mapbox/streets-v11'
        maxZoom={18}
        tileSize={1028}
        zoomOffset={-1}
        attribution={mapbox_attribution}
      />
      {foundCourse && (
      <Marker position={foundCourse.rooms.coordinates}>
        <Popup>
          Approximate location of {foundCourse.course}
        </Popup>
      </Marker>
      )}
      <LayerControl />
    </MapContainer>
      </div>
      </Layout>
    </div>
  );
};

export default CourseList;