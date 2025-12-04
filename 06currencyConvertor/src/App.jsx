import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyinfo from './hooks/useCurrencyinfo'

let backgroundImage = 'https://i0.wp.com/picjumbo.com/wp-content/uploads/red-and-blue-pillars-wallpaper-abstract-background-free-image.jpeg?w=2210&quality=70';

function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyinfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom((prevFrom) => {
      setTo(prevFrom)
      return to;
    })
    setTo((amount) => {
      setConvertedAmount(amount)
      return convertedAmount;
    })
  }

  const convert = () => {
    if(!currencyInfo[to]) return;
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}>
              <div className="w-full mb-1">
                <InputBox label="From" amount={amount} currencyOptions={options}
                  onCurrenyChange={(currency) => setFrom(currency)} selectCurrency={from}
                  onAmountChange={(amount) => (setAmount(amount))}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button type="button" onClick={swap} className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 cursor-pointer">swap</button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox label="To" amount={convertedAmount} currencyOptions={options} onCurrenyChange={(currency) => setTo(currency)}
                  amountDisable selectCurrency={to} />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-pointer">Convert {from.toUpperCase()} TO {to.toUpperCase()}</button>
            </form>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
