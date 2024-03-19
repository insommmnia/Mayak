import React, {useEffect } from "react";
import "./stats_graphs.css";
import BotsChart from './bots_chart';
import AnketCharts from './anket_charts';

function StatsGraphs() {
  
  useEffect(() => {
    const element = document.getElementById('servers_hero_block');
    if (element) {
        element.classList.add("active");
    }
  }, []);
  

    return (
        <div className="stats_graphs_hero_sec">
            <div className="stats_graphs_hero_container">
                <div className='stats_graphs_hero_block' id='stats_graphs_hero_block' >
                    <div className='stats_graphs_hero_title'>
                        <h3>
                            Количество ботов на серверах
                        </h3>
                    </div>
                    <div className="chart">  
                        <BotsChart></BotsChart>
                    </div>
                </div>
                <div className='stats_graphs_hero_block-2' id='stats_graphs_hero_block' >
                    <div className='stats_graphs_hero_title'>
                        <h3>
                            Количество взаимных симпатий
                        </h3>
                    </div>
                    <div className="chart">   
                        <AnketCharts></AnketCharts>
                    </div>
                </div>
            </div>
            
        </div>
        
    );
}
export default StatsGraphs;