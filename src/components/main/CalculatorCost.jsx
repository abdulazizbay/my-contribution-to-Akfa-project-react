import React, { useState } from 'react'
export const CalculatorCost = () => {
  const [rangeWitdh,setrangeWitdh] = useState(800);
  const [rangeHeight,setrangeHeight] = useState(800);
  const [sale,setSale] = useState(7140)
  var [finalCost,setFinalCost] = useState(0)

  const maxValue = 2500;
  const minValue = 800;
  function handleSubmit(event){
    event.preventDefault()
    setFinalCost(rangeHeight * rangeWitdh - sale)
    console.log(finalCost)
}
  return (
        <div className='CalculatorCost'>
          <h1>Калькулятор стоимости</h1>
          <div className='windowOrBalcony'>
              <button>Калькулятор окон</button>
              <button>Калькулятор балконов</button>
          </div>

          

          <div className='preferences'>
            <form onSubmit={handleSubmit}>
              <div className='typeOfWindow'>
                <h4>Тип окна</h4>
                <button>Двустворчатое</button>
                <button>Трехстворчатое</button>
                <button>Балконный блок</button>

              </div>
              <div className='typeOfHome'>
                  <h4>Тип дома</h4>
                  <input type="radio"  value="panel" name='foo1'/>
                  <label htmlFor="panel">Панельный</label>
                  <input type="radio"   value="kirpich" name='foo1'/>
                  <label htmlFor="kirpich">Кирпичный</label>
              </div>

              <div className='typeOfProfile'>
              <h4>Тип профиля</h4>
                  <input type="radio"  value="econom" name='foo2'/>
                  <label htmlFor="econom">Эконом (Alpenprof)</label>
                  <input type="radio"   value="standart" name='foo2'/>
                  <label htmlFor="standart">Стандарт (GoodWin, EXPROF)</label><br/>
                  <input type="radio"   value="comfort" name='foo2'/>
                  <label htmlFor="comfort">Комфорт (КБЕ, Grain)</label>
                  <input type="radio"   value="premium" name='foo2'/>
                  <label htmlFor="premium">Премиум (Veka, Rehau)</label>
              </div>
              
              <div className='othersAndLamination'>
                <div className='others'>
                <h4>Дополнительно</h4>
                    <input type="radio"  value="montaj" name='foo3'/>
                    <label htmlFor="montaj">Монтажные работы</label><br/>
                    <input type="radio"   value="podokolnik" name='foo3'/>
                    <label htmlFor="podokolnik">Подоконник, водоотлив</label>
                </div>

                <div className='lamination'>
                <h4>Ламинация</h4>
                    <input type="radio"  value="noLamination" name='foo4'/>
                    <label htmlFor="noLamination">Без ламинации</label><br/>
                    <input type="radio"   value="withLamination" name='foo4'/>
                    <label htmlFor="withLamination">С ламинацией</label>
                </div>
              </div>
              <div className='getFinalResult'><button type='submit'>Получить расчет</button></div>
            </form>
          </div>
          
          <div className='sizeImageCost'>
            <div className='size'>
              <h4>Размеры</h4>
              <div className='witHeight'>
                <p>Ширина</p>
                <input type="number"  value={rangeWitdh} onChange={(e)=>setrangeWitdh(e.target.value)} min={minValue} />
                <p>Высота</p>
                <input type="number" value={rangeHeight} onChange={(e)=>setrangeHeight(e.target.value)} min={minValue}/>
              </div>
            </div>
            <div className='imageVerticalRange'>
                <input type="range" orient='vertical' value={rangeHeight} max={maxValue} min={minValue} onChange={(e)=>setrangeHeight(e.target.value)}/>
                <img src="data:image/jpeg;base64,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" alt='imag'/>
            </div>
            <div className='imageHorizontalRange'>
            <input type="range" value={rangeWitdh} max={maxValue} min={minValue} onChange={(e)=>setrangeWitdh(e.target.value)}/>
            </div>

            <div className='amountCost'>
              <h3>Стоимость: <span className='stoimost'>{finalCost} руб</span></h3>
              <p>Расрочка за 791 р/мес.</p>
              
    
            </div>
          </div>


        </div>
    
  )
}
