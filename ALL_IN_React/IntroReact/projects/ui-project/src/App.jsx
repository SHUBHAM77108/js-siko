import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const users = [
  {
    img: "https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
    intro: "",
    color: "blue",
    tag: "Satisfied",
  },
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
    intro: "",
    color: "green",
    tag: "Underserved",
  },
  {
    img: "https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "",
    color: "orange",
    tag: "Underbanked",
  },
  {
    img: "https://images.unsplash.com/photo-1701794713505-fd5f8fcc3abf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
    intro: "",
    color: "red",
    tag: "unchange",
  },
];

const App = () => {
  return (
    <div className="">
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};
export default App;
