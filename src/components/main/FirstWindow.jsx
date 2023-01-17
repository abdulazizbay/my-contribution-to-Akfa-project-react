import React from "react";
import '../../styles/base.scss'
import { AdvantagesIcons } from "../../Helpers/AdvantagesIcons";
import { AdvantageIconsMaped } from "../secondary/AdvantageIconsMaped";



function FirstWindow() {
    return (
      
      <div className="firstWindow">
        <div className="oknoprofi">
            <div>
              <h1>ОКНОПРОФИ</h1>
            </div>
            <div className="buttons">
              <button>Калькулятор окон</button>
              <button>Бесплатный замер</button>
            </div>
            <div className="grayBox"></div>
            <div className="adress">
              <p>г. Челябинск,<br/>ул. Валдайская 25, оф.51 <br/>Пн-Сб с 9:00 до 18:00</p>
            </div>
            <div className="call">
              <p className="number">+7 (800) 000-00-00</p>
              <p className="bookCall">или закажите звонок</p>
            </div>
        </div>

        <div className="choices">
          <p>Окна</p>
          <p>Остекление балконов</p>
          <p>Остекление коттеджей</p>
          <p>Преимущества</p>
          <p>Отзывы</p>
          <p>Контакты</p>
        </div>

        <div className="announceCalculator">
          <h1>Остекление квартир и домов от производителя </h1>
          <h6>Установим без наценок посредников за 5 дней с расширенной гарантией</h6>
          <div className="choicesWarranty">
            <div className="smallGrayBox"></div>
            <p>Гарантия до 10 лет</p>
            <div className="smallGrayBox"></div>
            <p>Рассрочка 0% без переплат</p>
            <div className="smallGrayBox"></div>
            <p>Бесплатный замер</p>
          </div>
          <button>Рассчитать стоимость</button>
        </div>

        <div className="specialOffer">
          <h4>Специальное предложение</h4>
          <div className="windowImages">
            <div className="firstWindow">
              <h5>Двухстворчатое окно</h5>
              <img src="data:image/jpeg;base64,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"/>
              <div className="cost">
                <p className="saleCost"><del>7 018 руб.</del></p>
                <p className="realCost">4 742 руб.</p>
                <p>Расрочка за 791 р/мес.</p>
              </div>
              <button>Заказать сейчас</button>

            </div>
            <div className="secondWindow">
              <h5>Трехстворчатое окно</h5>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfdGfegpgqShkliPDNBALbD21lnHUHyOjhdA&usqp=CAU" alt="" />
              <div className="cost">
                <p className="saleCost"><del>7 018 руб.</del></p>
                <p className="realCost">4 742 руб.</p>
                <p>Расрочка за 791 р/мес.</p>
              </div>
              <button>Заказать сейчас</button>
            </div>
            <div className="thirdWindow">
              <h5>Балконный блок</h5>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ64-oNn75MCbTs260-fvZ6euTX3rCfYfnlbw&usqp=CAU" alt="" />
              <div className="cost">
                <p className="saleCost"><del>7 018 руб.</del></p>
                <p className="realCost">4 742 руб.</p>
                <p>Расрочка за 791 р/мес.</p>
              </div>
              
              <button>Заказать сейчас</button>
            </div>

          </div>
        </div>

        <div className="advCompany">
          <h5>Почему выбирают нас?</h5>
          <div className="advSingle">
            {AdvantagesIcons.map((item)=>{
              return <AdvantageIconsMaped item={item} key={item.id}/>
            })}

            
          </div>
        </div>

      </div>
    );
  }
  
  export default FirstWindow;   
  