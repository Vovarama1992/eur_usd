'use client';
import React, { useReducer } from 'react';
import moneyReducer from './reduser';
const input_block = 'w-[100%]  lg:w-[50%] h-[30%]';
const input_style =
  'w-[100%] h-[90%] text-[35px] border-none outline-none pl-[15%] mt-[5px]';
const initial_moneys = {
  eur: 1,
  usd: 1.07,
};
export default function Calc() {
  const [moneys, dispatch] = useReducer(moneyReducer, initial_moneys);
  const { eur, usd } = moneys;
  return (
    <main>
      <div className="absolute flex flex-col lg:flex-row items-center justify-center gap-[5%] left-[5%] lg:left-[15%] top-[5%] lg:top-[15%] w-[90%] lg:w-[60%] h-[90%] lg:h-[60%]">
        <div className={input_block}>
          <label htmlFor="eur">EUR</label>
          <input
            id="eur"
            value={eur === 0 ? '' : eur}
            className={input_style}
            name="usd"
            type="number"
            onChange={(e) => {
              dispatch({
                type: 'eur',
                value: Number(e.target.value),
              });
            }}
          ></input>
        </div>
        <div className={input_block}>
          <label htmlFor="usd">USD</label>
          <input
            id="usd"
            value={usd === 0 ? '' : usd}
            className={input_style}
            name="eur"
            type="number"
            onChange={(e) => {
              dispatch({
                type: 'usd',
                value: Number(e.target.value),
              });
            }}
          ></input>
        </div>
      </div>
    </main>
  );
}
