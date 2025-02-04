
import pieChart from '../../../assets/pie-chart.png';
 import lineGraph from '../../../assets/line-graph.png';
 import barGraph from '../../../assets/bar-graph.png';
 import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import {decodeBase64} from '../../../utils/decodeBase64.js';

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    console.log('here')
    let scrollStep = -window.scrollY / 15; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  

  return (
    <div>
    <section className="container mx-auto px-4 py-10">
                  {/* Top Graph section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        
        {/* Bar Graph */}
        <div className="flex flex-col items-center justify-start"
        >
          <img src={barGraph} alt="Bar Graph" className="max-h-[229px] h-full w-full max-w-xs" />
          <p className="mt-2 text-gray-700">Search Grant Rates By Office</p>
        </div>

        {/* Pie Chart */}
        <div class="flex flex-col items-center justify-start">
          <img src={pieChart} alt="Pie Chart" className="max-h-[229px] h-full  w-full max-w-xs" />
          <p className="mt-2 text-gray-700 mb-6">Search Grant Rates By Nationality</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="px-4 py-2 bg-gray-400 text-white rounded-none hover:bg-blue-600">View The Data</a>
            <a href="#" className="px-4 py-2 bg-gray-400 text-white rounded-none hover:bg-blue-600">Download Data</a>
          </div>
        </div>

        {/* Line Graph */}
        <div class="flex flex-col items-center justify-start" >
          <img src={lineGraph} alt="Line Graph" className="max-h-[229px] h-full  w-full max-w-xs" />
          <p className="mt-2 text-gray-700">Search Grant Rates Over Time</p>
        </div>
      </div>
   </section>

                          {/* Middle Paper stack section */}
  <section class="container mx-auto px-4 py-10">
  <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
    
   
    <div class="flex-1">
      <img src={paperStack} alt="descriptive img" class="w-full max-w-md mx-auto md:ml-0 md:mr-auto rounded-lg shadow-lg" />
    </div>
    <div class="flex-1 flex items-center justify-center p-20 text-left">
      <p class="text-gray-700 text-lg leading-relaxed">
      Humans Rights First has created a search tool to give you a user-friendly way to explore a data set of asylum decisions between FY 2016 and May 2021 by the USCIS asylum office, which we recieved through a Freedom of Informaton Act Request.
      You can search for information on asylum grant rates by year, nationality, and asylum office, visualize the data with charts and heat maps, and download the data set.
      </p>
    </div>

  </div>
</section>

                             {/* Bottom stats section */}
<section class="container mx-auto px-4 py-10">
  
  <div class="text-center mb-10">
    <h2 class="text-2xl font-bold mb-24">Systematic Disparity Insights</h2>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    <div class="text-center">
      <h3 class="text-xl font-bold mb-8">36%</h3>
      <p class="text-gray-700">By the end of the of the Trump administration, the average asylum office grant rate fell by 36% from an average of 44% in fiscal year 2016 to 28% in fiscal year 2022</p>
    </div>

   
    <div class="text-center">
      <h3 class="text-xl font-bold mb-8">5%</h3>
      <p class="text-gray-700">The New york asylum office grant rate dropped to 5% in fiscal year 2020</p>
    </div>

   
    <div class="text-center">
      <h3 class="text-xl font-bold mb-8">6x Lower</h3>
      <p class="text-gray-700">Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was 6x lower than San Francisco's asylum office.</p>
    </div>
  </div>
</section>
<section class="container mx-auto px-4 py-10 text-center">
 
  <div class="mb-6">
    <a 
      href="https://humanrightsfirst.org"
      class="inline-block px-6 py-3 bg-yellow-400 text-white rounded-lg text-lg hover:bg-gray transition duration-300"
    >
      Read More
    </a>
  </div>

  
  <div>
    <a 
      href="#"
      class="inline-block text-black-500 text-lg hover:text-gray  transition duration-300"
      onClick={scrollToTop}
    >
      Back to Top ^</a>
  </div>
</section>

   </div>
  );
};

