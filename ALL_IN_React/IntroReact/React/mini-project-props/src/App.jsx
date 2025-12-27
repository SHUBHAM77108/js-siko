import Card from "./components/card";

const jobOpenings = [
  {
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$120/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$180k–220k",
    location: "Bengaluru, India",
  },
  {
    brandLogo:
      "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/meta.svg",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$250–350k",
    location: "Remote, India",
  },
  {
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$150k–180k",
    location: "Hyderabad, India",
  },
  {
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "UI/UX Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "Remote, India",
  },
  {
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$160k–200k",
    location: "Noida, India",
  },
  {
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    companyName: "Tesla",
    datePosted: "6 weeks ago",
    post: "Web Application Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$190k–240k",
    location: "Pune, India",
  },
  {
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    companyName: "NVIDIA",
    datePosted: "2 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$110/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo:
      "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/adobe.svg",
    companyName: "Adobe",
    datePosted: "10 weeks ago",
    post: "JavaScript Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$130/hr",
    location: "Noida, India",
  },
  {
    brandLogo:
      "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/intel.svg",
    companyName: "Intel",
    datePosted: "1 month ago",
    post: "Frontend UI Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$170k–210k",
    location: "Bengaluru, India",
  },
];

const App = () => {
  return (
    <div className="grandParent">
      <div className="parent">
        {jobOpenings.map(function (elem) {
          return (
            <Card
              companyName={elem.companyName}
              brandLogo={elem.brandLogo}
              datePosted={elem.datePosted}
              post={elem.datePosted}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              location={elem.location}
            />
          );
        })}
      </div>
    </div>
  );
};
export default App;
