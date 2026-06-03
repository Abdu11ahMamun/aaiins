export default function LogoSVG({ size = 300, className = '' }) {
  return (
    <svg
      className={className}
      width={size} height={size}
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="AAIINS Lab logo — a circular wreath of scientific symbols including a neural brain, DNA helix, camera apertures, organic leaves, circuit traces, a 3D cube, and a handshake"
    >
      {/* Outer rings */}
      <circle cx="150" cy="150" r="138" stroke="rgba(255,255,255,0.22)" strokeWidth="0.8"/>
      <circle cx="150" cy="150" r="124" stroke="rgba(255,255,255,0.14)" strokeWidth="0.5"/>
      {/* Inner center ring */}
      <circle cx="150" cy="150" r="84" stroke="white" strokeWidth="1.5"/>

      {/* ── Neural Brain (top) ── */}
      <ellipse cx="134" cy="40" rx="17" ry="13" stroke="white" strokeWidth="1.3" fill="none"/>
      <ellipse cx="166" cy="40" rx="17" ry="13" stroke="white" strokeWidth="1.3" fill="none"/>
      <line x1="147" y1="40" x2="153" y2="40" stroke="white" strokeWidth="1.2"/>
      <path d="M126 40 Q131 33 134 31 Q137 29 141 32" stroke="white" strokeWidth="0.9" fill="none"/>
      <path d="M174 40 Q169 33 166 31 Q163 29 159 32" stroke="white" strokeWidth="0.9" fill="none"/>
      <path d="M126 42 Q124 48 126 53" stroke="white" strokeWidth="0.9" fill="none"/>
      <path d="M174 42 Q176 48 174 53" stroke="white" strokeWidth="0.9" fill="none"/>
      {/* Brain nodes */}
      <circle cx="130" cy="36" r="1.8" fill="white" opacity="0.9"/>
      <circle cx="140" cy="30" r="1.8" fill="white" opacity="0.9"/>
      <circle cx="150" cy="28" r="1.8" fill="white" opacity="0.9"/>
      <circle cx="160" cy="30" r="1.8" fill="white" opacity="0.9"/>
      <circle cx="170" cy="36" r="1.8" fill="white" opacity="0.9"/>
      <line x1="130" y1="36" x2="140" y2="30" stroke="white" strokeWidth="0.75" opacity="0.7"/>
      <line x1="140" y1="30" x2="150" y2="28" stroke="white" strokeWidth="0.75" opacity="0.7"/>
      <line x1="150" y1="28" x2="160" y2="30" stroke="white" strokeWidth="0.75" opacity="0.7"/>
      <line x1="160" y1="30" x2="170" y2="36" stroke="white" strokeWidth="0.75" opacity="0.7"/>

      {/* ── Circuit traces (top-right) ── */}
      <path d="M204 68 L220 68 L220 80 L232 80" stroke="white" strokeWidth="0.95" fill="none" opacity="0.6"/>
      <path d="M220 68 L228 60" stroke="white" strokeWidth="0.8" fill="none" opacity="0.5"/>
      <circle cx="232" cy="80" r="2.5" stroke="white" strokeWidth="1" fill="none" opacity="0.6"/>
      <circle cx="228" cy="60" r="1.8" fill="white" opacity="0.5"/>
      <path d="M226 90 L240 90 L240 100" stroke="white" strokeWidth="0.8" fill="none" opacity="0.4"/>
      <circle cx="240" cy="100" r="1.8" fill="white" opacity="0.5"/>
      <path d="M234 108 L246 108" stroke="white" strokeWidth="0.75" fill="none" opacity="0.35"/>
      <circle cx="248" cy="108" r="1.5" fill="white" opacity="0.4"/>

      {/* ── Camera aperture (top-right) ── */}
      <circle cx="244" cy="82" r="16" stroke="white" strokeWidth="1.2" fill="none" opacity="0.72"/>
      <circle cx="244" cy="82" r="7" stroke="white" strokeWidth="0.9" fill="none" opacity="0.5"/>
      <path d="M235 74 L244 67 L253 74" stroke="white" strokeWidth="0.95" fill="none" opacity="0.62"/>
      <path d="M253 82 L253 91 L244 97" stroke="white" strokeWidth="0.95" fill="none" opacity="0.62"/>
      <path d="M244 97 L235 91 L235 82" stroke="white" strokeWidth="0.95" fill="none" opacity="0.62"/>

      {/* ── DNA double helix (right) ── */}
      <path d="M250 132 Q241 145 250 158 Q259 171 250 184 Q241 197 250 210 Q259 223 250 236 Q241 249 250 262" stroke="white" strokeWidth="1.3" fill="none" opacity="0.68"/>
      <path d="M263 128 Q254 145 263 158 Q272 171 263 184 Q254 197 263 210 Q254 223 263 236 Q254 249 263 262" stroke="white" strokeWidth="1.1" fill="none" opacity="0.52"/>
      {[136,148,160,172,184,196,208,220,234,248].map((y, i) => (
        <line key={i} x1={250} y1={y} x2={263} y2={y+4} stroke="white" strokeWidth="0.85" opacity="0.52"/>
      ))}
      <circle cx="275" cy="145" r="1.8" fill="white" opacity="0.38"/>
      <circle cx="278" cy="165" r="1.5" fill="white" opacity="0.3"/>
      <circle cx="276" cy="185" r="1.8" fill="white" opacity="0.38"/>
      <line x1="265" y1="147" x2="275" y2="145" stroke="white" strokeWidth="0.7" opacity="0.32"/>

      {/* ── Scattered dots (top-left) ── */}
      {[[56,76,2.2,0.52],[68,64,2.8,0.42],[82,56,1.8,0.48],[64,86,1.4,0.32],[50,92,1.8,0.38],[76,44,3.2,0.32],[60,52,1.4,0.28],[88,68,0.9,0.38]].map(([x,y,r,op],i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="white" opacity={op}/>
      ))}
      <path d="M52 74 Q64 54 86 50" stroke="white" strokeWidth="0.75" fill="none" opacity="0.28"/>

      {/* ── Contour leaf (left-top) ── */}
      <path d="M34 104 Q20 122 26 146 Q30 162 46 160 Q62 158 66 142 Q70 124 56 104 Q46 94 34 104Z" stroke="white" strokeWidth="1.2" fill="none" opacity="0.62"/>
      <path d="M34 104 Q50 128 40 160" stroke="white" strokeWidth="0.75" fill="none" opacity="0.42"/>
      <path d="M38 116 Q52 118 62 126" stroke="white" strokeWidth="0.6" fill="none" opacity="0.32"/>
      <path d="M36 128 Q50 130 64 136" stroke="white" strokeWidth="0.6" fill="none" opacity="0.3"/>
      <path d="M36 140 Q50 142 62 148" stroke="white" strokeWidth="0.55" fill="none" opacity="0.26"/>
      <path d="M38 152 Q48 154 56 158" stroke="white" strokeWidth="0.55" fill="none" opacity="0.22"/>

      {/* ── Camera aperture (left) ── */}
      <circle cx="24" cy="186" r="16" stroke="white" strokeWidth="1.2" fill="none" opacity="0.72"/>
      <circle cx="24" cy="186" r="7" stroke="white" strokeWidth="0.9" fill="none" opacity="0.5"/>
      <path d="M15 178 L24 171 L33 178" stroke="white" strokeWidth="0.95" fill="none" opacity="0.62"/>
      <path d="M33 186 L33 195 L24 201" stroke="white" strokeWidth="0.95" fill="none" opacity="0.62"/>
      <path d="M24 201 L15 195 L15 186" stroke="white" strokeWidth="0.95" fill="none" opacity="0.62"/>
      {/* Triangle near aperture */}
      <path d="M48 170 L58 154 L68 170Z" stroke="white" strokeWidth="1.05" fill="none" opacity="0.48"/>

      {/* ── Contour leaf 2 (bottom-left) ── */}
      <path d="M40 218 Q26 234 32 256 Q38 274 56 270 Q72 266 74 248 Q76 230 60 216 Q50 208 40 218Z" stroke="white" strokeWidth="1.1" fill="none" opacity="0.58"/>
      <path d="M40 218 Q58 240 48 270" stroke="white" strokeWidth="0.75" fill="none" opacity="0.38"/>
      <path d="M46 228 Q62 232 70 242" stroke="white" strokeWidth="0.55" fill="none" opacity="0.28"/>
      <path d="M44 240 Q60 244 70 254" stroke="white" strokeWidth="0.55" fill="none" opacity="0.26"/>
      <path d="M46 252 Q58 256 66 264" stroke="white" strokeWidth="0.55" fill="none" opacity="0.22"/>

      {/* ── 3D Cube (bottom-left) ── */}
      <path d="M100 264 L114 255 L128 264 L128 284 L114 293 L100 284Z" stroke="white" strokeWidth="1.1" fill="none" opacity="0.62"/>
      <path d="M114 255 L114 275 L100 284" stroke="white" strokeWidth="0.85" fill="none" opacity="0.42"/>
      <path d="M114 275 L128 264" stroke="white" strokeWidth="0.85" fill="none" opacity="0.42"/>
      {/* small cube */}
      <path d="M86 280 L94 275 L102 280 L102 292 L94 297 L86 292Z" stroke="white" strokeWidth="0.85" fill="none" opacity="0.38"/>

      {/* ── Handshake / collaboration (bottom-center) ── */}
      <path d="M134 282 Q140 274 150 277 Q158 279 156 287 Q154 294 146 292" stroke="white" strokeWidth="1.1" fill="none" opacity="0.62"/>
      <path d="M170 282 Q164 274 154 277" stroke="white" strokeWidth="1.1" fill="none" opacity="0.62"/>
      <path d="M170 282 Q176 289 172 296 Q168 302 160 300 Q152 298 150 292" stroke="white" strokeWidth="1" fill="none" opacity="0.58"/>
      {/* head silhouette */}
      <circle cx="184" cy="268" r="6.5" stroke="white" strokeWidth="0.9" fill="none" opacity="0.42"/>
      <path d="M180 275 Q180 286 188 286 Q196 286 196 275" stroke="white" strokeWidth="0.85" fill="none" opacity="0.38"/>
      {/* teardrop / neural */}
      <path d="M202 272 Q208 266 210 276 Q212 286 204 288 Q198 286 202 272Z" stroke="white" strokeWidth="0.95" fill="none" opacity="0.42"/>
      <path d="M206 288 Q210 300 208 308" stroke="white" strokeWidth="0.75" fill="none" opacity="0.32"/>

      {/* ── CENTER WORDMARK ── */}
      <text x="150" y="143" textAnchor="middle"
        fontFamily="Cinzel, serif" fontSize="30" fontWeight="600"
        fill="white" letterSpacing="4">AAIINS</text>
      <text x="150" y="173" textAnchor="middle"
        fontFamily="Cinzel, serif" fontSize="20" fontWeight="400"
        fill="white" letterSpacing="6">LAB</text>
    </svg>
  );
}
