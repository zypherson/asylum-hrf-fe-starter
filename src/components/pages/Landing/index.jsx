import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';

export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    window.location.href = 'https://www.humanrightsfirst.org/';
  };

  return (
    <div className='flex flex-col w-[100vw] bg-[#f9f9f9]'>
      <section className='flex bg-[#666555] pt-4 pb-8'>
        <div className='flex flex-col mx-auto'>
          <h1 className='text-6xl mb-8 text-white'>Asylum Office Grant Rate Tracker</h1>
          <h3 className='text-white'>
            The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers, and the public an interactive tool to explore USCIS data on
            Asylum Office decisions
          </h3>
        </div>
      </section>

      <section className='graphs-section flex flex-col pt-10'>
        <div className='flex flex-col '>
          <div className='flex justify-center m-14 gap-20 text-2xl'>
            <div className='flex flex-col gap-3'>
              <img src={barGraph} alt='' className='h-[300px] w-[500px]' />
              <h3>Search Grant Rates By Office</h3>
            </div>
            <div className='flex flex-col gap-3'>
              <img src={pieChart} alt='' className='h-[300px] contain-content' />
              <h3>Search Grant Rates By Nationality</h3>
            </div>
            <div className='flex flex-col gap-3'>
              <img src={lineGraph} alt='' className='h-[300px] w-[500px]' />
              <h3>Search Grant Rates Over Time</h3>
            </div>
          </div>

          <div className='flex align-center mx-auto gap-8'>
            <button onClick={() => navigate('/graphs')} className='bg-[#aaa] px-[10px] py-[5px] text-white text-md font-semibold'>
              View the Data
            </button>
            <button onClick={downloadCSV} className='bg-[#aaa] px-[10px] py-[5px] text-white text-md font-semibold'>
              Download the Data
            </button>
          </div>
        </div>
      </section>

      <section className='middle-section flex '>
        <div className='flex-1 hrf-img-container content-center p-20'>
          <img src={paperStack} alt='Human Rights First' className='hrf-img rounded-2xl h-[70%] w-[100%]' />
        </div>
        <div className='middle-section-text-container flex-1 content-center p-20'>
          <p className='text-xl'>
            Human Rights First has created a search tool to give you a user-friendly way to explore a data set of asylum decisions between FY 2016 and May 2021
            by the USCIS Asylum Office, which we received through a Freedom of Information Act request. You can search for information on asylum grant rates by
            year, nationality, and asylum office, visualize the data with charts and heat maps, and download the data set.
          </p>
        </div>
      </section>

      <section className='insights-section flex flex-col gap-16 '>
        <div className='insights-section-header'>
          <h3 className='text-5xl'>Systemic Disparity Insights</h3>
        </div>

        <div className='insights-section-details flex justify-center m-14 gap-20 text-2xl'>
          <div className='flex flex-col flex-1 gap-12'>
            <div className='insights-details-header'>
              <h3 className='text-4xl'>36%</h3>
            </div>
            <div className='insights-details-content'>
              <p className='text-lg'>
                By the end of the Trump administration, the average asylum office grant rate had fallen 36% from an average of 44 percent in fiscal year 2016 to
                28 percent in fiscal year 20202.
              </p>
            </div>
          </div>
          <div className='flex flex-col flex-1 gap-12'>
            <div className='insights-details-header'>
              <h3 className='text-4xl'>5%</h3>
            </div>
            <div className='insights-details-content'>
              <p className='text-lg'>The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.</p>
            </div>
          </div>
          <div className='flex flex-col flex-1 gap-12'>
            <div className='insights-details-header'>
              <h3 className='text-4xl'>6x Lower</h3>
            </div>
            <div className='insights-details-content'>
              <p className='text-lg'>
                Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was 6 times lower than the San Francisco asylum office.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='read-more-section'>
        <button className='bg-[#666555] text-white px-4 py-2' onClick={handleReadMore}>
          Read More
        </button>
      </section>

      <section className='back-to-top p-16'>
        <button onClick={() => scrollToTop()} className='back-to-top font-medium'>
          Back To Top ^
        </button>
      </section>
    </div>
  );
};
