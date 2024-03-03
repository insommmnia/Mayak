import React, { useRef, useEffect } from "react";
import "./advantages.css";

function Advantages() {

    const aboutBlockRef1 = useRef(null);
    const aboutBlockRef2 = useRef(null);
    const aboutBlockRef3 = useRef(null);

    useEffect(() => {
        const handleScroll = (ref) => {
            if (ref.current) {
                const element = ref.current;
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (ref === aboutBlockRef3) {
                    if (elementPosition < windowHeight * 0.9) {
                        element.classList.add("active");
                    } else {
                        element.classList.remove("active");
                    }
                } else {
                    if (elementPosition < windowHeight * 0.7) {
                        element.classList.add("active");
                    } else {
                        element.classList.remove("active");
                    }
                }
            }
        };

        window.addEventListener("scroll", () => handleScroll(aboutBlockRef1));
        window.addEventListener("scroll", () => handleScroll(aboutBlockRef2));
        window.addEventListener("scroll", () => handleScroll(aboutBlockRef3));

        return () => {
            window.removeEventListener("scroll", () => handleScroll(aboutBlockRef1));
            window.removeEventListener("scroll", () => handleScroll(aboutBlockRef2));
            window.removeEventListener("scroll", () => handleScroll(aboutBlockRef3));
        };
    }, []);

    return (
        <div className='advant_sec'>
            <div className="advant_bg"></div>
            <div className='advant_container'>
                <div className="advant_block" ref={aboutBlockRef1}>
                    <div className="advant_card-1">
                        <img className="advant_card_img" src={require("../../img/cntr_panel.png")} alt="" />
                        <h3 className="advant_title">Панель управления</h3>
                        <h4>Управление легко и интуитивно понятно.Вся функциональность бота, начиная от поиска анкет и настройки профиля до использования фильтров и подписок, доступна в удобной минималистичной панели!</h4>
                    </div>
                    <div className="advant_lines">
                        <img src={require("../../img/lines1.png")} alt="" />
                    </div>
                </div>
                <div className="advant_block" ref={aboutBlockRef2}>
                    <div className="advant_lines">
                        <img className="" src={require("../../img/lines2.png")} alt="" />
                    </div>
                    <div className="advant_card-2">
                        <img className="advant_card_img" src={require("../../img/search.png")} alt="" />
                        <h3 className="advant_title">Два вида поиска!</h3>
                        <h4>Глобальный и локальный поиск открывают море возможностей. Найди интересных людей как на своём сервере, так и из других уголков мира</h4>
                    </div>
                </div>
                <div className="advant_block" ref={aboutBlockRef3}>
                    <div className="advant_card-3">
                            <img className="advant_card_img" src={require("../../img/anket.png")} alt="" />
                            <h3 className="advant_title">Твоя анкета - твоя визитная карточка! </h3>
                            <h4>Создайте анкету по вашему вкусу! Наш бот позволяет настроить свой профиль с любыми параметрами - от интересов до предпочтений в партнерах Здесь ты можешь быть самим собой!</h4>
                    </div>
                    <div className="advant_lines">
                        <img src={require("../../img/lines3.png")} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Advantages;