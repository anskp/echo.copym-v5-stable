const Graph = () => {
  return (
    <svg width="320" height="140" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#120429"/>
          <stop offset="100%" stopColor="#1e003c"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" rx="16" ry="16" fill="url(#bgGradient)" />

      {/* Left Side: Chart */}
      <g transform="translate(25, 25)">
        {/* Bar Chart (green bars) */}
        <rect x="0" y="60" width="16" height="20" fill="#4CAF50" rx="2"/>
        <rect x="25" y="50" width="16" height="30" fill="#4CAF50" rx="2"/>
        <rect x="50" y="30" width="16" height="50" fill="#4CAF50" rx="2"/>
        <rect x="75" y="40" width="16" height="40" fill="#4CAF50" rx="2"/>
        <rect x="100" y="35" width="16" height="45" fill="#4CAF50" rx="2"/>
      </g>

      {/* BNB Circle & Label */}
      <circle cx="45" cy="110" r="12" fill="#FFA500"/>
      <text x="45" y="115" fontSize="12" fontFamily="Arial, sans-serif" fill="white" textAnchor="middle">B</text>
      <text x="45" y="130" fontSize="10" fontFamily="Arial, sans-serif" fill="#F44336" textAnchor="middle">-2.58%</text>

      {/* ETH Circle & Label */}
      <circle cx="85" cy="110" r="12" fill="#627EEA"/>
      <text x="85" y="115" fontSize="12" fontFamily="Arial, sans-serif" fill="white" textAnchor="middle">E</text>
      <text x="85" y="130" fontSize="10" fontFamily="Arial, sans-serif" fill="#4CAF50" textAnchor="middle">+1.32%</text>

      {/* Right Side: BTC Price Panel */}
      <g transform="translate(150, 20)">
        {/* Outer rounded rectangle */}
        <rect x="0" y="0" width="140" height="90" rx="12" ry="12" fill="#1e003c" stroke="#333" strokeWidth="1"/>

        {/* Bitcoin Symbol */}
        <circle cx="18" cy="18" r="18" fill="#FFA500"/>
        <text x="18" y="24" fontSize="20" fontFamily="Arial, sans-serif" fill="white" textAnchor="middle">₿</text>

        {/* BTC Label */}
        <text x="40" y="40" fontSize="16" fontFamily="Arial, bold" fill="white">BTC</text>

        {/* Price */}
        <text x="40" y="65" fontSize="20" fontFamily="Arial, bold" fill="white">$19,606.51</text>

        {/* Change */}
        <text x="40" y="85" fontSize="14" fontFamily="Arial" fill="#4CAF50">+0.90 ↑</text>
      </g>

      {/* Cora AI Branding */}
      <text x="290" y="130" fontSize="10" fontFamily="Arial" fill="#aaa" textAnchor="end">Cora AI</text>
    </svg>
  );
};

export default Graph;