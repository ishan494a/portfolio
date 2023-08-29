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
        title = "TravelTrove"
        description = "Plan your trip with this AI"
        link = "https://github.com/ishan494a/TravelTrove"
        />
    </div>
  );
}

export default Projects;