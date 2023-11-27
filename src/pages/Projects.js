import ListItem from "../components/ListItem";
function Projects(){
  return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',}}>
        <h1 style={{fontSize: "50px" }}>Projects</h1>
      </div>
      <ListItem 
        title = "SkillSyncAI"
        description = "SkillSync AI is a platform designed to make learning and hiring more efficient. "
        link = "https://github.com/ishan494a/skillsyncAI"
        />
        <ListItem 
        title = "HTML Validator"
        description = "The HTML Validator is a simple Java Swing application that allows users to input a text and validate if the parentheses"
        link = "https://github.com/ishan494a/HTMLValidator"
        />
        <ListItem 
        title = "TravelTrove"
        description = "Plan your trip with this AI"
        link = "https://github.com/ishan494a/TravelTrove"
        />
        <ListItem
        title = "Grade Point Average Calculator"
        description = "Calculate your weighted average"
        link = "https://github.com/ishan494a/gradecalulator"/>

    </div>
  );
}

export default Projects;