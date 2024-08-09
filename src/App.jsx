import Navbar from "./components/navbar";
import Hero from "./components/hero";
import HomeCards from "./components/HomeCards";
import JobListing from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";
const App = () => {
    return (
      <>
        <Navbar />
        <Hero />
        <HomeCards />
        <JobListing />
        <ViewAllJobs />
      </>
    )
  }
  
  export default App;