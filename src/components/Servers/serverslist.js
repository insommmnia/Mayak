import React, {useState, useEffect } from "react";
import axios from 'axios';
import "./serverslist.css";

function ServersList() {
    const [guilds, setGuilds] = useState([]);
    const [guildMembers, setGuildMembers] = useState({});

    useEffect(() => {
        const fetchGuilds = async () => {
            try {
                const response = await axios.get('https://discord.com/api/v9/users/@me/guilds', {
                    headers: {
                        Authorization: 'Bot MTIxNDk4NzIyODg4MzcxNDEzOQ.GsZGFD.bbBJrdXEvueLlE6CU5OrdoZELn-ag92Zdv01XY'
                    }
                });
                setGuilds(response.data);

                guilds.forEach(guild => {
                    getGuildMembersCount(guild.id);
                });
            } catch (error) {
                console.error(error);
            }
        };

        fetchGuilds();

    }, []);

    const getGuildMembersCount = async (guildId) => {
        try {
            const response = await axios.get(`http://localhost:3001/guildMembersCount/${guildId}`);
            const membersCount = response.data.membersCount;
            console.log(`Guild ${guildId} has ${membersCount} members`);
            setGuildMembers(prevState => ({
                ...prevState,
                [guildId]: membersCount
            }));
        } catch (error) {
            console.error(error);
        }
    };

    guilds.forEach(guild => {
        console.log(guild);
    });
    return (
        <div className="servers_list_sec">
            <div className="servers_list_container">
                {guilds.map((guild, index) => (
                    <div key={guild.id} className='servers_list_block' id='servers_list_block' >
                    <div className='servers_list_num'>
                        <h2>{index + 1}</h2>
                    </div>
                    <div className='servers_list_descr'>
                        <div className="server_list_card">
                          <img src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} alt="Server Icon" />
                          <div className="server_list_card_info">                  
                            <h2>{guild.name}</h2>
                            <div className="server_list_server_info">
                                <p className="server_list_people_num">
                                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#D9D9D9">

                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

                                    <g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>

                                    </svg>
                                    {`${guildMembers[guild.id]}`}
                                </p>
                                <p className="server_list_anket_num">
                                
                                <svg fill="#000000" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28 9h-1.958v-2.938l-4.042-0.062 0.021 3h-12.146l0.083-3-3.958 0.062v3l-2-0.062c-1.104 0-2 0.896-2 2v14c0 1.104 0.896 2 2 2h24c1.104 0 2-0.896 2-2v-14c0-1.104-0.896-2-2-2zM23 7h2v4h-2v-4zM10 13.812c1.208 0 2.188 1.287 2.188 2.875s-0.98 2.875-2.188 2.875-2.188-1.287-2.188-2.875 0.98-2.875 2.188-2.875zM7 7h2v4h-2v-4zM5.667 22.948c0 0 0.237-1.902 0.776-2.261s2.090-0.598 2.090-0.598 1.006 1.075 1.434 1.075c0.427 0 1.433-1.075 1.433-1.075s1.552 0.238 2.091 0.598c0.633 0.422 0.791 2.261 0.791 2.261h-8.615zM26 22h-9v-1h9v1zM26 20h-9v-1h9v1zM26 18h-9v-1h9v1zM26 16h-9v-1h9v1z"></path>
                                </svg>
                               
                                <span className="tooltiptext">Кол-во анкет на сервере</span>
                                </p>
                              </div>
                          </div>
                        </div>
                    </div>
                    <div className="server_list_btn_block" >
                        <a href={`https://discord.com/channels/${guild.id}`} target="_blank" rel="noopener noreferrer">
                        <div className="server_list_button_i"  id="server_list_button_i">
                            <div id="underline"></div>
                            <a>Войти</a>
                        </div>
                        </a>
                    </div>
                   
                </div>
                ))}

            </div>
        </div>
    );
}
export default ServersList;