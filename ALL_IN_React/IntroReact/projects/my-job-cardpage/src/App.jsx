import Card from "./components/Card";

const freelancers = [
  {
    available: true,
    rate: "$45/hr",
    profileImg: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Ankit Sharma",
    profession: "UI/UX Designer",
    company: "Freelancer",
    skills: ["UI Design", "UX Research", "Photoshop", "+4"],
    description:
      "Ankit is a 32 year old UI/UX designer, with an impressive portfolio behind him.",
  },
  {
    available: false,
    rate: "$60/hr",
    profileImg: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Priya Verma",
    profession: "Frontend Developer",
    company: "Freelancer",
    skills: ["React", "JavaScript", "CSS", "+7"],
    description:
      "Priya is a frontend developer specializing in modern React applications.",
  },
  {
    available: true,
    rate: "$80/hr",
    profileImg: "https://randomuser.me/api/portraits/men/13.jpg",
    name: "Rahul Mehta",
    profession: "Backend Engineer",
    company: "Google",
    skills: ["Node.js", "APIs", "System Design", "+8"],
    description:
      "Rahul is a backend engineer working on scalable systems at Google.",
  },
  {
    available: true,
    rate: "$50/hr",
    profileImg: "https://randomuser.me/api/portraits/women/14.jpg",
    name: "Sneha Kapoor",
    profession: "Graphic Designer",
    company: "Freelancer",
    skills: ["Branding", "Illustrator", "Creatives", "+5"],
    description:
      "Sneha is a creative graphic designer with strong branding experience.",
  },
  {
    available: false,
    rate: "$70/hr",
    profileImg: "https://randomuser.me/api/portraits/men/15.jpg",
    name: "Aman Singh",
    profession: "DevOps Engineer",
    company: "Amazon",
    skills: ["AWS", "Docker", "CI/CD", "+6"],
    description:
      "Aman is a DevOps engineer focused on cloud automation and scaling.",
  },
  {
    available: true,
    rate: "$40/hr",
    profileImg: "https://randomuser.me/api/portraits/women/16.jpg",
    name: "Neha Joshi",
    profession: "Content Writer",
    company: "Freelancer",
    skills: ["SEO", "Copywriting", "Blogging", "+4"],
    description:
      "Neha is a content strategist creating high-converting content.",
  },
  {
    available: true,
    rate: "$90/hr",
    profileImg: "https://randomuser.me/api/portraits/men/17.jpg",
    name: "Kunal Arora",
    profession: "Software Architect",
    company: "Microsoft",
    skills: ["System Design", "TypeScript", "Scalability", "+9"],
    description:
      "Kunal is a software architect building enterprise-grade solutions.",
  },
  {
    available: false,
    rate: "$55/hr",
    profileImg: "https://randomuser.me/api/portraits/women/18.jpg",
    name: "Ritu Malhotra",
    profession: "UX Writer",
    company: "Freelancer",
    skills: ["UX Writing", "Figma", "Wireframes", "+5"],
    description: "Ritu crafts meaningful user experiences through content.",
  },
  {
    available: true,
    rate: "$65/hr",
    profileImg: "https://randomuser.me/api/portraits/men/19.jpg",
    name: "Vikas Yadav",
    profession: "Visual Designer",
    company: "Adobe",
    skills: ["Photoshop", "Illustrator", "UI Design", "+6"],
    description:
      "Vikas is a visual designer with strong Adobe Creative Suite skills.",
  },
  {
    available: true,
    rate: "$35/hr",
    profileImg: "https://randomuser.me/api/portraits/women/20.jpg",
    name: "Pooja Mishra",
    profession: "Data Analyst",
    company: "Freelancer",
    skills: ["Excel", "Reports", "Dashboards", "+4"],
    description:
      "Pooja is a detail-oriented analyst specializing in data insights.",
  },
  {
    available: false,
    rate: "$75/hr",
    profileImg: "https://randomuser.me/api/portraits/men/21.jpg",
    name: "Saurabh Jain",
    profession: "Frontend Engineer",
    company: "Netflix",
    skills: ["Performance", "Accessibility", "React", "+7"],
    description:
      "Saurabh builds high-performance and accessible web applications.",
  },
  {
    available: true,
    rate: "$85/hr",
    profileImg: "https://randomuser.me/api/portraits/women/22.jpg",
    name: "Isha Gupta",
    profession: "Product Designer",
    company: "Freelancer",
    skills: ["UX Strategy", "Figma", "Prototyping", "+8"],
    description:
      "Isha is a product designer focused on user-centric solutions.",
  },
  {
    available: true,
    rate: "$95/hr",
    profileImg: "https://randomuser.me/api/portraits/men/23.jpg",
    name: "Nitin Bansal",
    profession: "UI Engineer",
    company: "Meta",
    skills: ["Design Systems", "React", "GraphQL", "+10"],
    description:
      "Nitin is a senior UI engineer working on scalable design systems.",
  },
  {
    available: false,
    rate: "$58/hr",
    profileImg: "https://randomuser.me/api/portraits/women/24.jpg",
    name: "Kavya Nair",
    profession: "Digital Marketer",
    company: "Freelancer",
    skills: ["SEO", "Ads", "Analytics", "+5"],
    description:
      "Kavya drives online growth through data-driven marketing strategies.",
  },
  {
    available: true,
    rate: "$100/hr",
    profileImg: "https://randomuser.me/api/portraits/men/25.jpg",
    name: "Rohit Kulkarni",
    profession: "Full Stack Developer",
    company: "Tesla",
    skills: ["React", "Node.js", "APIs", "+12"],
    description:
      "Rohit is a full-stack engineer building modern web platforms.",
  },
];

const App = () => {
  return (
    <div className="parent">
      {freelancers.map(function (elem) {
        return (
          <Card
            available={elem.available}
            rate={elem.rate}
            profileImg={elem.profileImg}
            name={elem.name}
            profession={elem.profession}
            company={elem.company}
            skills={elem.skills}
            description={elem.description}
          />
        );
      })}
    </div>
  );
};
export default App;
