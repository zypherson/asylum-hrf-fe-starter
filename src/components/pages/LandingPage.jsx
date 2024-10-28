import pieChart from '../../assets/pie-chart.png';
import lineGraph from '../../assets/line-graph.png';
import barGraph from '../../assets/bar-graph.png';

export default function LandingPage(props) {
    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <div className="flex flex-col w-[100vw]">
            <div className="flex bg-[#666555] p-10">
                <div className="flex flex-col mx-auto">
                    <h1 className="text-6xl mb-8 text-white">Asylum Office Grant Rate Tracker</h1>
                    <h3 className="text-white">
                        The Asylum Office Grant Rate Tracker provides asylum seekers,
                        researchers, policymakers, and the public an interactive tool to
                        explore USCIS data on Asylum Office decisions
                    </h3>
                </div>
            </div>

            <div className="graphs-section">
                <div className="flex flex-col">
                    <div className="flex justify-center m-14 gap-20 text-2xl">
                        <div className="flex flex-col gap-3">
                            <img src={barGraph} alt="" className="h-[300px] w-[500px]"/>
                            <h3>Search Grant Rates By Office</h3>
                        </div>
                        <div className="flex flex-col gap-3">
                            <img src={pieChart} alt="" className="h-[300px]"/>
                            <h3>Search Grant Rates By Nationality</h3>
                        </div>
                        <div className="flex flex-col gap-3">
                            <img src={lineGraph} alt="" className="h-[300px] w-[500px]"/>
                            <h3>Search Grant Rates Over Time</h3>
                        </div>
                    </div>
                    <div className="flex align-center mx-auto gap-8">
                        <button className="bg-[#aaa] px-[10px] py-[5px] text-white text-md font-semibold">
                            View the Data
                        </button>
                        <button className="bg-[#aaa] px-[10px] py-[5px] text-white text-md font-semibold">
                            Download the Data
                        </button>

                    </div>
                </div>
            </div>
            <div className="middle-section">
                <div className="hrf-img-container">
                    <img src="" alt="Human Rights First" className="hrf-img"/>
                </div>
                <div className="middle-section-text-container">
                    <h3>
                        Human Rights First has created a search tool to give you a
                        user-friendly way to explore a data set of asylum decisions between
                        FY 2016 and May 2021 by the USCIS Asylum Office, which we received
                        through a Freedom of Information Act request. You can search for
                        information on asylum grant rates by year, nationality, and asylum
                        office, visualize the data with charts and heat maps, and download
                        the data set
                    </h3>
                </div>
            </div>
            <div>
                {/* Bottom Section: Add code here for the graphs section for your first ticket */}
                {/* <div className="bottom-section">*/}
                <p onClick={() => scrollToTop()} className="back-to-top">
                    Back To Top ^
                </p>
            </div>
        </div>
    );
}