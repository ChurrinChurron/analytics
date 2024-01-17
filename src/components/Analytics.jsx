import { Chart as ChartJS } from "chart.js/auto" 
import { Doughnut } from "react-chartjs-2"
import "./styles/analytics.css"

const Analytics = () => {
  return (
    <div className="analytics">
        <h2>Traffic source types</h2>
        <p>Views · Last 28 days</p>
        <div className="analytics__content">
            <div className="content__donut">
                <h4>Traffic <br/>
                    sources</h4>
                <Doughnut 
                    data={{
                        datasets: [
                            {
                                data: [37.5, 33.6, 11, 6],
                                backgroundColor: [
                                    "#1a52e1",
                                    "#6792ff",
                                    "#4473ea",
                                    "#96b3ff"
                                ],
                                
                            }
                        ]

                    }} />
            </div>
            <div className="content__progress">
                <div className="progress">
                    <label htmlFor="channel">Channel pages</label>
                    <div className="progress__data">
                        <progress id="channel" value="80" max="100"></progress>
                        <p>37.5%</p>
                    </div>
                </div>
                <div className="progress">
                    <label htmlFor="direct">Direct of unknown</label>
                    <div className="progress__data">
                        <progress id="direct" value="70" max="100"></progress>
                        <p>33.6%</p>
                    </div>
                </div>
                <div className="progress">
                    <label htmlFor="search">Search</label>
                    <div className="progress__data">
                        <progress id="search" value="35" max="100"></progress>
                        <p>11%</p>
                    </div>
                </div>
                <div className="progress">
                    <label htmlFor="external">External</label>
                    <div className="progress__data">
                        <progress id="external" value="15" max="100"></progress>
                        <p>6%</p>
                    </div>
                </div>
                <a href="#">See more</a>
            </div>
        </div>
    </div>
  )
}

export default Analytics