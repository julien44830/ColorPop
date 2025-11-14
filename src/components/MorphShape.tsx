// MorphShape.tsx

// 3 blobs très arrondis avec la même structure (M + 5 Q + Z)
const BLOB_1 = `
M0 -40
Q45 -95 80 -60
Q105 -25 90 15
Q75 60 25 85
Q-25 100 -70 75
Q-105 35 -20 -20
Z`;

const BLOB_2 = `
M0 -45
Q50 -75 85 -40
Q110 0 95 35
Q80 75 35 95
Q-10 105 -55 85
Q-95 60 -80 40
Z`;

const BLOB_3 = `
M0 -30
Q40 -100 75 -70
Q110 -35 105 10
Q100 55 55 85
Q5 105 -45 90
Q-95 70 -90 30
Z`;

// forme de fond animée en SVG
export function MorphShape() {
    return (
        <svg
            className="bg-morph rotatation"
            viewBox="0 0 400 400"
            preserveAspectRatio="xMidYMid meet"
        >
            {/* on centre et on scale les formes */}
            <g transform="translate(200 200) scale(1.8)">
                {/* blob principal rempli */}
                <path
                    d={BLOB_1}
                    fill="var(--theme-color-3)"
                    strokeWidth={6}
                    strokeOpacity={0.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {/* morphing fluide entre les 3 blobs */}
                    <animate
                        attributeName="d"
                        dur="10s"
                        repeatCount="indefinite"
                        values={`${BLOB_1};${BLOB_2};${BLOB_3};${BLOB_1}`}
                        keyTimes="0;0.33;0.66;1"
                        calcMode="linear"
                    />
                </path>
            </g>
        </svg>
    );
}

//
