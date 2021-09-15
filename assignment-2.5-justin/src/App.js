import image1 from './image1.jpeg';
import image2 from './image2.jpeg';
import image3 from './image3.jpeg';
import './App.css';

function App() {
  return (
    <>
    <div className="whole-container">
      <div className="top-container">
        <h1 className="headerTop">Business and<br />Industrial Parks</h1>
        <img src={image1} className="image1" alt="image1" />
      </div>

      <div className="middle-container">
        <img src={image2} className="image2" alt="image2" />
        <div className="text-box1"><p className="text1">We have several business and industrial parks with available space for your business<br /><br />
        <a class="btn" href="mailto:chiukoonhung1991@gmail.com">Read More</a></p></div> 
      </div>

      <div className="bottom-container">
        <div className="text-box2">
        <h2>Construction Machinery Co.</h2>
        <h3>We has a proud tradition of service as a General Contractor since 1974</h3>
        <p>We headquartered in San Diego, brings over 42 years of local and national
        construction experience; with a reputation for delivering large and unique design-
        build projects ahead of schedule and on budget.  Our company has served clients and
        building owners for over four decades.<br /><br />
        <a class="btn" href="mailto:chiukoonhung1991@gmail.com">Read More</a></p></div>
        <img src={image3} className="image3" alt="image3" />
      </div>
      
    </div>
    </>
  );
}

export default App;

