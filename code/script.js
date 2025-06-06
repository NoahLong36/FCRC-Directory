const staff = [
  {
    name: "Dan Taylor",
    position: ["Manager"],
    years: 4,
    fact: "I'm a history teacher at Franklin Regional.",
    img: "../images/dan.PNG"

  },
  {
    name: "Aidan Ochoa",
    school: "Clarion University",
    position: ["Manager", "Coach"],
    years: 6,
    fact: "I've run a marathon.",
    img: "../images/aidan.jpeg"
  },
    {
      name: "Noah Long",
      school: "University of Pittsburgh",
      position: ["Assistant Manager", "Head Coach"],
      years: 6,
      fact: "I went skydiving last summer..",
      img: "../images/noahLong.jpg"
    },
    {
    name: "Anna Dering",
    school: "Duquesne University",
    position: ["Coach", "Lifegaurd"], 
    years: 5, 
    fact: "I enjoy making homemade pasta and baking.",
    img: "../images/anna.jpg"
  },
  {
    name: "Philipp Drappatz",
    school: "The College of Wooster", 
    position: ["Lifeguard"], 
    years: 5,
    fact: "I like fishing.",
    img: "../images/philipp.jpeg"
  },
    {
      name: "Margaret Rusche",
      school: "Kenyon College",
      position: ["Lifeguard", "Coach"],
      years: 4,
      fact: "I've watched all 36 seasons of the simpsons",
      img: "../images/margaret.jpg"
    },
    {
      name: "Logan Dressman",
      school: "The George Washington University", 
      position: ["Lifeguard"],
      years: 4,
      fact: "I swim and play water polo in college.",
      img: "../images/logan.jpeg"
    },
    {
      name: "Madison Moretti",
      school: "Graduated Pennsylvania Western Univeristy",
      position: ["Lifeguard"],
      years: 3,
      fact: "I chase tornados every May in the midwest.",
      img: "../images/madison.jpeg"
    }, 
    {
      name: "Noah Lang",
      school: "Cleveland State University", 
      position: ["Lifeguard", "Coach"],
      years: 3, 
      fact: "My high game in bowling is 299.",
      img: "../images/noahLang.jpeg"
    }, 
    {
      name: "Isabella Marcos", 
      school: "Providence College", 
      position: ["Lifeguard"], 
      years: 3, 
      fact: "I love sharks.",
      img: "../images/isabella.jpg"
    }, 
    {
      name: "Beckham Ochoa", 
      school: "Highlands High School", 
      position: ["Lifeguard"], 
      years: 2, 
      fact: "I play baseball and football.",
      img: "../images/beckham.jpeg"
    }, 
    {
      name: "Jack Bitsoff", 
      school: "Shady Side Academy",
      position: ["Lifeguard"],
      years: 2, 
      fact: "I am a certified SCUBA diver.",
      img: "../images/jackson.jpeg"
    },
    {
      name: "Thea Siegel",
      school: "Winchester Thurston", 
      position: ["Lifeguard"],
      years: 2, 
      fact: "I have a pet snake.",
      img: "../images/thea.jpg"
    },
    {
      name: "Emma Donovan",
      school: "Indiana University", 
      position: ["Lifeguard"], 
      years: 2,
      fact: "I can speak german.",
      img: "../images/emma.jpeg"
    },
    {
      name: "Charlotte Rusche",
      school: "Fox Chapel Area High School",
      position: ["Lifeguard"], 
      years: 1, 
      fact: "I've played the trombone for seven years.",
      img: "../images/charlotte.jpeg"
    }, 
    {
      name: "Libby Datt",
      school: "Fox Chapel Area High School", 
      position: ["Lifeguard"], 
      years: 1, 
      fact: "I love to make bracelets with my friends.", 
      img: "../images/libby.jpeg"
    }, 
    {
      name: "Lauren Donovan",
      school: "Fox Chapel Area High School",
      position: ["Lifeguard"],
      years: 1, 
      fact: "I'm on the crew team.",
      img: "../images/lauren.jpeg"
    }, 
    {
      name: "Mason Hager",
      school: "Fox Chapel Area High School",
      position: ["Lifeguard"],
      years: 1, 
      fact: "I like to ski.",
      img: "../images/mason.jpg"
    }


  ];

  const directory = document.getElementById("staff-directory");
  const searchInput = document.getElementById("search");
  const positionFilter = document.getElementById("positionFilter");
  
  function displayStaff(filteredStaff) {
    directory.innerHTML = "";
    filteredStaff.forEach(emp => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="card-content">
          <div class="info">
            <h2>${emp.name}</h2>
            ${emp.school ? `<p><strong>School:</strong> ${emp.school}</p>` : ""}
            <p><strong>Position:</strong> ${emp.position.join(" | ")}</p>
            <p><strong>Years Worked:</strong> ${emp.years}</p>
          </div>
          <img src="${emp.img}" alt="${emp.name}" class="profile-pic" />
        </div>
        <p class="fun-fact"><em>${emp.fact}</em></p>
      `;
      directory.appendChild(card);
    });
  }
  
  function filterStaff() {
    const search = searchInput.value.toLowerCase();
    const role = positionFilter.value.toLowerCase();
  
    const filtered = staff.filter(emp => {
      const matchesText =
        emp.name.toLowerCase().includes(search) ||
        emp.school.toLowerCase().includes(search) ||
        emp.position.some(pos => pos.toLowerCase().includes(search));
  
      const matchesRole = !role || emp.position.some(pos => pos.toLowerCase().includes(role));
  
      return matchesText && matchesRole;
    });
  
    displayStaff(filtered);
  }
  
  searchInput.addEventListener("input", filterStaff);
  positionFilter.addEventListener("change", filterStaff);
  
  displayStaff(staff); // initial load