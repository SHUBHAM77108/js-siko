import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="shubham Sharma"
        age={25}
        img="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        p="Passionate about learning new skills and exploring creative ideas. Enjoys working on meaningful projects and improving a little every day."
      />
      <Card
        user="Aditya Mishra"
        age={23}
        img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8fDA%3D"
        p="Calm by nature, strong by mindset. Enjoys challenges that push limits and help build better skills."
      />
      <Card
        user="Aman Vishwa"
        age={22}
        img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnN8ZW58MHx8MHx8fDA%3D"
        p="Creative thinker with a practical approach. Interested in design, technology, and solving real-world problems."
      />
      <Card
        user="Ankit Yadav"
        age={20}
        img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJzfGVufDB8fDB8fHww"
        p="Always eager to learn something new and turn ideas into reality. Values honesty, effort, and progress."
      />
      <Card
        user="Sagar Verma"
        age={24}
        img="https://images.unsplash.com/photo-1672863601285-253fc82db868?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJzfGVufDB8fDB8fHww"
        p="Simple living, focused thinking. Loves technology, self-improvement, and connecting with people who share good energy"
      />
      <Card
        user="Prem Mahto"
        age={26}
        img="https://images.unsplash.com/photo-1599110364868-364162848518?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJzfGVufDB8fDB8fHww"
        p="A curious mind with a positive attitude. Believes in consistency, hard work, and growing through experience"
      />
    </div>
  );
};
export default App;
