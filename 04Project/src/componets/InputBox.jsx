
function InputBox({
    label,
    amount,
    onAmountchange,
    currencyopetions=[],
    onCurrencychange,
    selectcurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    className = "",
}) {
   

    return (
        <div className={`${className} bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    value={amount}
                    onChange={(e)=>{onAmountchange &&onAmountchange(Number(e.target.value))}}
                    className={` outline-none w-full bg-transparent py-1.5`}
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectcurrency}
                    onChange={(e)=>{onCurrencychange && onCurrencychange(e.target.value)}}
                    disabled={currencyDisable}
                >
                    
                        {
                            currencyopetions.map((c)=>(
                                <option key={c} value={c}>{c}</option>
                            ))
                        }
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
