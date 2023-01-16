import React from 'react'
import { useState } from 'react';

const AmountCost = ({rangeWitdh,rangeHeight}) => {
    const [sale,setSale] = useState(7140)
    var [finalCost,setFinalCost] = useState(0)
    
  return (
    <div className='amountCost'>
        <h3>Стоимость</h3>
        <p>Расрочка за 791 р/мес.</p>
        <button type='submit'>Получить расчет</button>
    </div>
  )
}
export default AmountCost;