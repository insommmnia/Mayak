import React, {useEffect, useState} from "react";
import "./commands_card.css";

function CommandCard() {
  
    const [expandedCards, setExpandedCards] = useState({});

    const handleCardClick = (cardId) => {
        setExpandedCards(prevState => ({
            ...prevState,
            [cardId]: !prevState[cardId]
        }));
    };

    return (
    <div className="command_card_block">
        <div className="command_card_container">
            <div className={`command_card ${expandedCards['card1'] ? 'expanded' : ''}`} onClick={() => handleCardClick('card1')}>
                <div className="command_card_content_block">
                    <div className="command_card_content">
                        <div className="command_name">
                            <h3>/help</h3>
                        </div>
                        
                    </div>
                    <div className="command_descr">
                        <h3>&mdash;&emsp;&nbsp;Описание бота</h3>
                    </div>
                    <div className={`command_arrow ${expandedCards['card1'] ? 'arrow_up' : 'arrow_down'}`}>
                        <svg viewBox="0 -4.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_up [#D9D9D9]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-260.000000, -6684.000000)" fill="#D9D9D9"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M223.707692,6534.63378 L223.707692,6534.63378 C224.097436,6534.22888 224.097436,6533.57338 223.707692,6533.16951 L215.444127,6524.60657 C214.66364,6523.79781 213.397472,6523.79781 212.616986,6524.60657 L204.29246,6533.23165 C203.906714,6533.6324 203.901717,6534.27962 204.282467,6534.68555 C204.671211,6535.10081 205.31179,6535.10495 205.70653,6534.69695 L213.323521,6526.80297 C213.714264,6526.39807 214.346848,6526.39807 214.737591,6526.80297 L222.294621,6534.63378 C222.684365,6535.03868 223.317949,6535.03868 223.707692,6534.63378" id="arrow_up-[#D9D9D9]"> </path> </g> </g> </g> </g></svg>
                    </div>
                </div>
                <div className="command_card_content_info_block">
                    <h3>Использование</h3>
                    <div className="command_card_content_info_container">
                        <div className="command_card_info_content">
                            <div className="command_info_name">

                                <h4>/help</h4>
                            </div>  
                        </div>
                        <div className="command_descr">
                            <h4>&mdash;&emsp;Выводит описание бота с его командами и принципом работы</h4>
                        </div>
                       
                    </div>
                </div>
            </div>


            <div className={`command_card ${expandedCards['card2'] ? 'expanded' : ''}`} onClick={() => handleCardClick('card2')} >
                <div className="command_card_content_block">
                    <div className="command_card_content">
                        <div className="command_name">
                            <h3>/profile</h3>
                        </div>
                        
                    </div>
                    <div className="command_descr">
                        <h3>&mdash;&emsp;&nbsp;Просмотр профиля</h3>
                    </div>
                    <div className={`command_arrow ${expandedCards['card2'] ? 'arrow_up' : 'arrow_down'}`}>
                        <svg viewBox="0 -4.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_up [#D9D9D9]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-260.000000, -6684.000000)" fill="#D9D9D9"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M223.707692,6534.63378 L223.707692,6534.63378 C224.097436,6534.22888 224.097436,6533.57338 223.707692,6533.16951 L215.444127,6524.60657 C214.66364,6523.79781 213.397472,6523.79781 212.616986,6524.60657 L204.29246,6533.23165 C203.906714,6533.6324 203.901717,6534.27962 204.282467,6534.68555 C204.671211,6535.10081 205.31179,6535.10495 205.70653,6534.69695 L213.323521,6526.80297 C213.714264,6526.39807 214.346848,6526.39807 214.737591,6526.80297 L222.294621,6534.63378 C222.684365,6535.03868 223.317949,6535.03868 223.707692,6534.63378" id="arrow_up-[#D9D9D9]"> </path> </g> </g> </g> </g></svg>
                    </div>
                </div>
                <div className="command_card_content_info_block">
                    <h3>Использование</h3>
                    <div className="command_card_content_info_container">
                        <div className="command_card_info_content">
                            <div className="command_info_name">

                                <h4>/profile</h4>
                            </div>  
                        </div>
                        <div className="command_descr">
                            <h4>&mdash;&emsp;Выводит ваш профиль, и возможность его редактирования</h4>
                        </div>
                       
                    </div>
                </div>
            </div>

        </div>
    </div>
    );
}
export default CommandCard;