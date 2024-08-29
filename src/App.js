import React from 'react';

function App() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Lilianfeld Candle Image Test</h1>
      <div className="aspect-[3/4] bg-[#F0EAD6] rounded-lg overflow-hidden">
        <img
          src="https://i.ibb.co/bgcxhGp/Picture1.png"
          alt="Lilianfeld Candle product showcasing its elegant design with a golden base and a glowing flame"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <p className="mt-4 text-sm text-gray-600">
        If you can see the Lilianfeld Candle image above, the test is successful.
      </p>
    </div>
  );
}

export default App;