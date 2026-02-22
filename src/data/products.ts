export interface ProductVariant {
    model: string;
    images: string[];
    thumbnail: string;
    colorName: string;
    description?: string;
}

export interface Product {
    id: string;
    name: string;
    brand: string;
    model: string;
    availability: string;
    warranty: string;
    origin: string;
    weight: string;
    dimensions: string;
    material: string;
    description: string;
    images: string[];
    specs: { label: string; value: string }[];
    features: string[];
    colorFamily?: string;
    variants?: ProductVariant[];
    descriptionImage?: string;
}

export interface Category {
    id: string;
    title: string;
    description: string;
    image: string;
    productIds: string[];
    subCategories?: { id: string; title: string; image: string }[];
    hidden?: boolean;
    division: 'hardware' | 'appliances';
}

export interface Brand {
    id: string;
    name: string;
    description: string;
    image: string;
    productIds: string[];
    spec: string;
    division: 'hardware' | 'appliances';
}

export const products: Record<string, Product> = {
    // --- HARDWARE & TOOLS (CLEANED - NOW MANAGED VIA ADMIN) ---

    // --- HOME APPLIANCES ---

    // GREE ACs
    'gree-airy-inverter-1.5ton': {
        id: 'gree-airy-inverter-1.5ton',
        name: 'Gree Airy Inverter AC 1.5 Ton',
        brand: 'Gree',
        model: 'GS-12AITH23-T3 And GS-12AITH23W-T3',
        availability: 'In Stock',
        warranty: '10 Years Compressor, 04 Years PCB Card, 02 Years Evaporator, 01 Year Parts',
        origin: 'China',
        weight: '42kg',
        dimensions: '99x31x23cm',
        material: 'Elegant Silver Brushed Finish',
        description: 'Premium Airy series with T3 G Boost Inverter Compressor - Stable Cooling even at High Temperature 68°C.',
        images: [
            '/images/homeappliances/gree-airy-t3/1.png',
            '/images/homeappliances/gree-airy-t3/2.png',
            '/images/homeappliances/gree-airy-t3/3.png',
            '/images/homeappliances/gree-airy-t3/4.png',
            '/images/homeappliances/gree-airy-t3/5.png'
        ],
        specs: [
            { label: 'Capacity', value: '1.5 Ton' },
            { label: 'Model', value: 'GS-12AITH23-T3 And GS-12AITH23W-T3' },
            { label: 'Compressor', value: 'T3 G Boost Inverter' },
            { label: 'Gas', value: 'R-410' },
            { label: 'Air Supply Distance', value: 'Upto 15.5m' },
            { label: 'WiFi', value: 'Enabled' }
        ],
        features: [
            'T3 G Boost Inverter Compressor - Stable Cooling even at High Temperature 68°C',
            'Indoor/Outdoor Self-cleaning',
            'Independent Smart Dehumidification',
            'Rapid Defrosting Technology',
            'Upto 15.5m Air Supply Distance',
            'Power Gear Control',
            '3 Sleep Modes',
            'Wifi Enabled'
        ],
        colorFamily: 'White / Silver'
    },
    'gree-fairy-inverter-1ton': {
        id: 'gree-fairy-inverter-1ton',
        name: 'Gree Fairy Inverter AC 1 Ton',
        brand: 'Gree',
        model: 'GS-12FITH1C / GS-12FITH7G',
        availability: 'In Stock',
        warranty: '10 Years Compressor, 04 Years PCB Card, 02 Years Evaporator, 01 Year Parts',
        origin: 'China',
        weight: '35kg',
        dimensions: '88.9x29.4x21.2cm',
        material: 'Elegant Champagne Finish / Elegant Grey',
        description: 'Advanced Fairy series with G-10 Inverter technology, featuring Low Voltage Startup (150V), Faster Cooling and Heating, and Big Indoor (1 Meter) width for maximum air throw.',
        images: [
            '/images/homeappliances/gree-fairy-t3/GS-12FITH1C-1.webp',
            '/images/homeappliances/gree-fairy-t3/GS-12FITH1C-2.webp',
            '/images/homeappliances/gree-fairy-t3/GS-12FITH1C-3.webp'
        ],
        specs: [
            { label: 'Capacity', value: '1 Ton' },
            { label: 'Voltage', value: 'Low Voltage Startup – 150V' },
            { label: 'Indoor Size', value: 'Big Indoor (1 Meter)' },
            { label: 'Technology', value: 'State-of-the-art High-Speed DSP Chip' },
            { label: 'Refrigerant', value: 'R-32' },
            { label: 'Air Flow', value: '4-Way AirFlow' },
            { label: 'WiFi', value: 'Enabled' }
        ],
        features: [
            'Elegant Champagne Finish',
            'Low Voltage Startup – 150V',
            'Faster Cooling and Heating',
            'Big Indoor (1 Meter)',
            'X-Fan',
            'Curved Elegant Design',
            'State-of-the-art High-Speed DSP Chip',
            '4-Way AirFlow',
            'Ultra-Low Frequency Torque Control',
            'Precise Temperature Control',
            'Hidden Led Display',
            'Ceiling Cooling and Floor Heating System',
            'Power Factor Correction Technology Up to 99%',
            'Turbo Mode',
            'Sleep Mode',
            'Timer',
            'Auto Restart',
            'Child Lock'
        ],
        variants: [
            {
                model: 'GS-12FITH1C',
                images: [
                    '/images/homeappliances/gree-fairy-t3/GS-12FITH1C-1.webp',
                    '/images/homeappliances/gree-fairy-t3/GS-12FITH1C-2.webp',
                    '/images/homeappliances/gree-fairy-t3/GS-12FITH1C-3.webp'
                ],
                thumbnail: '/images/homeappliances/gree-fairy-t3/GS-12FITH1C-1.webp',
                colorName: 'Champagne Gold'
            },
            {
                model: 'GS-12FITH7G',
                images: ['/images/homeappliances/gree-fairy-t3/GS-12FITH7G.png'],
                thumbnail: '/images/homeappliances/gree-fairy-t3/GS-12FITH7G.png',
                colorName: 'Elegant Grey'
            }
        ]
    },
    'gree-pular-inverter-1ton': {
        id: 'gree-pular-inverter-1ton',
        name: 'Gree Pular Inverter AC Series',
        brand: 'Gree',
        model: 'GS-PITH21 / GS-PITH11',
        availability: 'In Stock',
        warranty: '10 Years Compressor, 1 Year Parts',
        origin: 'China',
        weight: '32kg',
        dimensions: '88x29x19cm',
        material: 'Matte & Glossy Finish Options',
        description: 'The Gree Pular Series combines elegant design with powerful G-10 Inverter technology. Available in Black, White, and Silver finishes to match any interior. Features T3 climate capacity, WiFi control, and 60% energy savings.',
        images: [
            '/images/homeappliances/gree-pular/PITH21B-1.png',
            '/images/homeappliances/gree-pular/PITH21W-1.png',
            '/images/homeappliances/gree-pular/PITH11S-1.png'
        ],
        specs: [
            { label: 'Capacity', value: '1.5 Ton / 1 Ton' },
            { label: 'Inverter', value: 'G-10 Inverter' },
            { label: 'Efficiency', value: 'Class A+ (Up to 60% Saving)' },
            { label: 'Cooling', value: 'Heat & Cool' },
            { label: 'WiFi', value: 'Yes (Enabled Models)' },
            { label: 'Throw', value: '4-Way Airflow' }
        ],
        features: [
            'Elegant Finishes (Black, White, Silver)',
            'G-10 Inverter Technology',
            'WiFi Enabled',
            'Heat & Cool',
            'T3 Climate Capacity',
            'Upto 60% Energy Saving',
            'Low Voltage Startup',
            '4-Way Airflow',
            'i-Feel & Intelligent Defrost',
            'Self-Clean Technology',
            '7 Fan Speeds & Turbo Mode',
            'Power Factor Correction 99%',
            'Fireproof PCB',
            'Child Lock'
        ],
        colorFamily: 'Black / White / Silver',
        variants: [
            {
                model: 'GS-PITH21B-T3',
                images: [
                    '/images/homeappliances/gree-pular/PITH21B-1.png',
                    '/images/homeappliances/gree-pular/PITH21B-2.png'
                ],
                thumbnail: '/images/homeappliances/gree-pular/PITH21B-1.png',
                colorName: 'Elegant Black'
            },
            {
                model: 'GS-PITH21W-T3',
                images: [
                    '/images/homeappliances/gree-pular/PITH21W-1.png',
                    '/images/homeappliances/gree-pular/PITH21W-2.png'
                ],
                thumbnail: '/images/homeappliances/gree-pular/PITH21W-1.png',
                colorName: 'Elegant White'
            },
            {
                model: 'GS-PITH11S',
                images: [
                    '/images/homeappliances/gree-pular/PITH11S-1.png',
                    '/images/homeappliances/gree-pular/PITH11S-2.png'
                ],
                thumbnail: '/images/homeappliances/gree-pular/PITH11S-1.png',
                colorName: 'Glossy Silver',
                description: 'Upgrade your workspace with the Glossy Silver GS-PITH11S, a premium-finish tool designed for both performance and style. Engineered with precision and durability at its core, this model delivers reliable results for professionals and DIY enthusiasts alike.'
            }
        ]
    },
    'gree-lomo-series-non-inverter': {
        id: 'gree-lomo-series-non-inverter',
        name: 'Gree Lomo Series Non-Inverter AC',
        brand: 'Gree',
        model: 'GS-12LM 6L / GS-18LM 6L / GS-24LM 6L',
        availability: 'In Stock',
        warranty: '1 year parts + 5 years compressor',
        origin: 'China',
        weight: 'Varies',
        dimensions: 'Standard Split',
        material: 'U-Type Inner Groove Copper Pipe',
        description: 'Gree Lomo Series Non-Inverter AC featuring Efficient & Quiet Design, Turbo Cooling, and Hidden LED.',
        images: [
            '/images/homeappliances/gree/GREE-Split-AC-Lomo-Series-GS-12LM6L.png'
        ],
        specs: [
            { label: 'BTU Capacity', value: '12000 / 18000 / 24000' },
            { label: 'Compressor (W)', value: '3150 / 4983 / 7034' }
        ],
        features: [
            'U-Type Inner Groove Copper Pipe',
            'Efficient & Quiet Design',
            'Turbo Cooling',
            'Hidden LED Display',
            'Warranty: 1 Year Parts + 5 Years Compressor'
        ],
        variants: [
            {
                model: 'GS-12LM 6L (1 Ton)',
                images: ['/images/homeappliances/gree/GREE-Split-AC-Lomo-Series-GS-12LM6L.png'],
                thumbnail: '/images/homeappliances/gree/GREE-Split-AC-Lomo-Series-GS-12LM6L.png',
                colorName: '1 Ton'
            },
            {
                model: 'GS-18LM 6L (1.5 Ton)',
                images: ['/images/homeappliances/gree/GREE-Split-AC-Lomo-Series-GS-12LM6L.png'],
                thumbnail: '/images/homeappliances/gree/GREE-Split-AC-Lomo-Series-GS-12LM6L.png',
                colorName: '1.5 Ton'
            },
            {
                model: 'GS-24LM 6L (2 Ton)',
                images: ['/images/homeappliances/gree/GREE-Split-AC-Lomo-Series-GS-12LM6L.png'],
                thumbnail: '/images/homeappliances/gree/GREE-Split-AC-Lomo-Series-GS-12LM6L.png',
                colorName: '2 Ton'
            }
        ]
    },
    'gree-water-dispenser-gw-jl500f': {
        id: 'gree-water-dispenser-gw-jl500f',
        name: 'Gree Water Dispenser GW-JL500F',
        brand: 'Gree',
        model: 'GW-JL500F',
        availability: 'In Stock',
        warranty: 'Standard Warranty',
        origin: 'China',
        weight: 'Varies',
        dimensions: '310 × 330 × 1068 mm',
        material: 'Durable ABS Plastic',
        description: 'Premium hot & cold water dispenser featuring compressor cooling, a built-in 20-liter refrigerator cabinet, and a sleek super-slim design.',
        images: [
            '/images/homeappliances/water-dispenser/gree/Gree GW-JL500F–Water Dispenser-Compressor Cooling.png'
        ],
        specs: [
            { label: 'Refrigerator Cabinet', value: '20 Liters' },
            { label: 'Cold Water Capacity', value: '1.5 Liters / Hour' },
            { label: 'Hot Water Capacity', value: '4 Liters / Hour' },
            { label: 'Cold Water Temperature', value: '5–12 °C' },
            { label: 'Hot Water Temperature', value: '85–95 °C' },
            { label: 'Cooling Power Input', value: '100 W' },
            { label: 'Heating Power Input', value: '420 W' },
            { label: 'Cooling Type', value: 'Compressor Cooling' }
        ],
        features: [
            '3 Tap Operation (Hot, Cold, Normal)',
            'Spacious 20L Refrigerator Cabinet',
            'LED Indicators for Hot & Cold',
            'Overheat Protection',
            'Child Lock Safety',
            'Compressor Cooling System',
            'Quiet Operation',
            'Energy Saving',
            'Eco-Friendly Design',
            'Super Slim Modern Design'
        ]
    },
    'gree-infrared-heater-geh-800b-g': {
        id: 'gree-infrared-heater-geh-800b-g',
        name: 'Gree Far Infrared Heater GEH-800B/G',
        brand: 'Gree',
        model: 'GEH-800B/G',
        availability: 'In Stock',
        warranty: 'Standard Warranty',
        origin: 'China',
        weight: 'Lightweight & Portable',
        dimensions: 'Compact & Space-Saving',
        material: 'Stainless Steel Reflective Plate',
        description: 'The GEH-800B/G Far Infrared Heater is a compact yet powerful heating solution designed for both indoor and outdoor use, providing direct sun-like warmth.',
        images: [
            '/images/homeappliances/gree/Gree-GEH-800B-infrared-heater-white-grey.webp',
            '/images/homeappliances/gree/Gree-GEH-800B-infrared-heater-white-blue-2.webp'
        ],
        specs: [
            { label: 'Power Modes', value: '400W / 800W' },
            { label: 'Heating Technology', value: 'Far Infrared Quartz Tube' },
            { label: 'Reflective Plate', value: '430 Stainless Steel (99% Reflection)' },
            { label: 'Safety', value: 'Tip-Over Auto Power-Off' }
        ],
        features: [
            '2 Power Modes (400W / 800W)',
            'Far Infrared Heating Technology',
            'Health & Environment Friendly (No dry air)',
            'Wider Coverage (Big Throw)',
            'Suitable for Outdoor Heating',
            '430 Stainless Steel Reflective Plate (99% Efficiency)',
            'Auto Power-Off Safety Protection (Tip-over)',
            'Plain Quartz Heating Tube',
            'Integrated & Durable Design',
            'Compact & Space-Saving'
        ],
        colorFamily: 'White Grey / White Blue',
        variants: [
            {
                model: 'GEH-800B/G (White Grey)',
                images: ['/images/homeappliances/gree/Gree-GEH-800B-infrared-heater-white-grey.webp'],
                thumbnail: '/images/homeappliances/gree/Gree-GEH-800B-infrared-heater-white-grey.webp',
                colorName: 'White Grey'
            },
            {
                model: 'GEH-800B/G (White Blue)',
                images: ['/images/homeappliances/gree/Gree-GEH-800B-infrared-heater-white-blue-2.webp'],
                thumbnail: '/images/homeappliances/gree/Gree-GEH-800B-infrared-heater-white-blue-2.webp',
                colorName: 'White Blue'
            }
        ]
    },
    'gree-floor-standing-i-shine-2ton': {
        id: 'gree-floor-standing-i-shine-2ton',
        name: 'Gree Floor Standing i-shine',
        brand: 'Gree',
        model: 'GF-24ISH',
        availability: 'In Stock',
        warranty: '10 Years Compressor',
        origin: 'China',
        weight: '55kg',
        dimensions: '180x55x40cm',
        material: 'Elegant Champagne Finish',
        description: 'The i-shine series combines artistic column appearance with powerful vertical cross-flow cooling. Features a state-of-the-art DSP chip and G-10 inverter for ultimate efficiency and comfort.',
        images: [
            '/images/homeappliances/gree-floorstanding/GF-24ISH-1.png',
            '/images/homeappliances/gree-floorstanding/GF-24ISH-2.png'
        ],
        specs: [
            { label: 'Capacity', value: '2 Ton (24000 BTU)' },
            { label: 'Inverter', value: 'G-10 Inverter' },
            { label: 'WiFi', value: 'Yes' },
            { label: 'Design', value: 'Diamond Style Base' }
        ],
        features: [
            'Elegant Champagne Finish',
            'Vertical Cross Flow Fan with Even Air Supply',
            'Wi-Fi Enabled',
            'Sensitive Touch Buttons',
            'Even Thermal Field',
            'State of the Art DSP Chip',
            'Latest Powerful G-10 Inverter',
            'Ultra Low Frequency Technology',
            'Intelligent Defrosting Monitor',
            'Wide Angle Air Swing',
            'Fireproof Design',
            'U Shape Evaporator',
            'Artistic Column Appearance',
            'Diamond Style Base',
            'High Density Antibacterial Filter',
            'Automatic Drying Operation'
        ]
    },
    'gree-floor-standing-t-fresh-2ton-cool': {
        id: 'gree-floor-standing-t-fresh-2ton-cool',
        name: 'Gree T-Fresh Floor Standing 2 Ton (Cool Only)',
        brand: 'Gree',
        model: 'GF-24TF',
        availability: 'In Stock',
        warranty: '10 Years Compressor',
        origin: 'China',
        weight: '50kg',
        dimensions: '175x50x35cm',
        material: 'White Finish',
        description: 'Efficient cooling solution for large spaces. The T-Fresh series offers powerful airflow, smart features like WiFi control and Turbo Cooling, and a sleek modern design.',
        images: [
            '/images/homeappliances/gree-floorstandingtfresh/20.png',
            '/images/homeappliances/gree-floorstandingtfresh/21.png'
        ],
        specs: [
            { label: 'Capacity', value: '2 Ton (24000 BTU)' },
            { label: 'Type', value: 'Cool Only' },
            { label: 'WiFi', value: 'Enabled' }
        ],
        features: [
            'Powerful Compressor',
            'Auto Restart',
            'Low Voltage Startup',
            '4-Way Airflow',
            'Multi Fan',
            'Comfortable Sleeping Mode',
            'Turbo Cooling',
            'Automatic Operation',
            'Hidden LED Display',
            'Self Diagnosis',
            'ON/OFF Timer',
            'Dehumidify',
            'Wi-Fi Enabled',
            'Intelligent Defrosting'
        ]
    },

    // HAIER ACs (LCAC)
    'ecostar-glacier-fsu-floor-standing': {
        id: 'ecostar-glacier-fsu-floor-standing',
        name: 'EcoStar Glacier FSU Floor Standing AC',
        brand: 'Eco Star',
        model: 'FSU-GLACIER',
        availability: 'In Stock',
        warranty: '10 Years Compressor',
        origin: 'China/Pakistan',
        weight: '60kg',
        dimensions: '180x55x40cm',
        material: 'Premium White Finish',
        description: 'The Glacier FSU Series combines stunning design with powerful cooling. Features a built-in E-Heater for winter comfort, 30-second quick cooling, and a gold fin evaporator for durability.',
        images: [
            '/images/homeappliances/ecostar-split/ecotsar-floorstandingglacier.png'
        ],
        specs: [
            { label: 'Capacity', value: '2 Ton / 4 Ton' },
            { label: 'Voltage', value: '130-264V Low Voltage' },
            { label: 'Heating', value: 'E-Heater Belt' },
            { label: 'Cooling', value: '30s Quick Cool' }
        ],
        features: [
            'Stunning Design Enhance your Home\'s Appearance',
            'Low Voltage Running 130-264V',
            'Precise AI Temperature Control (0.1ºC)',
            'Gold Fin Evaporator & Condenser',
            '4D Long Air Throw',
            'Power Off Memory',
            'E-Heater in IDU (Enhancing heating effect)',
            '30 Second Quick Cooling Performance',
            'Environment Protecting Coating',
            'Quick Cooling & Heating'
        ]
    },
    'ecostar-iceberg-fsu-floor-standing': {
        id: 'ecostar-iceberg-fsu-floor-standing',
        name: 'EcoStar Iceberg FSU Floor Standing AC',
        brand: 'Eco Star',
        model: 'FSU-ICEBERG',
        availability: 'In Stock',
        warranty: '10 Years Compressor',
        origin: 'China/Pakistan',
        weight: '62kg',
        dimensions: '185x55x42cm',
        material: 'Premium Finish',
        description: 'The Iceberg FSU Series delivers powerful cooling with intelligent features like Ampere Control and 30-second quick cooling. Features a gold fin evaporator and precise AI temperature control.',
        images: [
            '/images/homeappliances/ecostar-split/ecostar-iceberg-floorstanding-1.png',
            '/images/homeappliances/ecostar-split/ecostar-iceberg-floorstanding-2.png',
            '/images/homeappliances/ecostar-split/ecostar-iceberg-floorstanding-3.png'
        ],
        specs: [
            { label: 'Capacity', value: '2 Ton / 4 Ton' },
            { label: 'Voltage', value: '130-264V Low Voltage' },
            { label: 'Control', value: 'Ampere Control' },
            { label: 'Cooling', value: '30s Quick Cool' }
        ],
        features: [
            'Low Voltage Running 130-264V',
            'Gold Fin Evaporator & Condenser',
            'Precise AI Temperature Control (0.1ºC)',
            '30 Second Quick Cooling Performance',
            'Ampere Control with Remote Controller',
            'Environment Protecting Coating',
            'Quick Cooling & Heating',
            '4D Long Air Throw',
            'Power Off Memory'
        ]
    },

    // AIR PURIFIERS
    'gree-air-purifier-ga-350-w1': {
        id: 'gree-air-purifier-ga-350-w1',
        name: 'Gree Air Purifier GA 350-W1',
        brand: 'Gree',
        model: 'GA-350-W1',
        availability: 'In Stock',
        warranty: '1 Year',
        origin: 'China',
        weight: '6.5kg',
        dimensions: 'Standard Compact',
        material: 'Elegant White Finish',
        description: 'Breathe cleaner air with the Gree GA 350-W1. Featuring a 99.99% sterilization rate, touch controls, and a whisper-quiet eagle wing design. Intelligent sensors monitor air quality in real-time, ensuring a healthy environment for your home.',
        images: [
            '/images/homeappliances/air-purifier/GA350W1/air-purifier-GA350w1-1.png',
            '/images/homeappliances/air-purifier/GA350W1/air-purifier-GA350w1-2.png',
            '/images/homeappliances/air-purifier/GA350W1/air-purifier-GA350w1-3.png'
        ],
        specs: [
            { label: 'Coverage', value: 'Upto 486 sq ft' },
            { label: 'Power', value: '25 Watts' },
            { label: 'Modes', value: 'Auto/Sleep/Turbo' },
            { label: 'Speeds', value: '5 Adjustable' }
        ],
        features: [
            'Elegant White Finish',
            'Kills 99.99% Germs and Bacteria',
            'Touch Control System',
            '3 Modes: Auto, Sleeping, Turbo',
            '5 Adjustable Fan Speeds with Power-off Memory',
            'Cleanable Sensor for Accurate Air Quality Detection',
            'Filter Replacement Reminder',
            'Eagle Wing Design Wind Grille (Low Noise)',
            'Real-time Air Quality Indicator',
            'Energy Efficient (25 Watts)'
        ]
    },
    'gree-air-purifier-ga-170-w1': {
        id: 'gree-air-purifier-ga-170-w1',
        name: 'Gree Air Purifier GA 170-W1',
        brand: 'Gree',
        model: 'GA-170-W1',
        availability: 'In Stock',
        warranty: '1 Year',
        origin: 'China',
        weight: '4.5kg',
        dimensions: 'Compact Design',
        material: 'Premium White Finish',
        description: 'The compact Gree GA 170-W1 is perfect for smaller spaces. It offers the same powerful 99.99% sterilization and smart features as its bigger brother, but in a size that fits anywhere. Features auto/sleep modes and quiet operation.',
        images: [
            '/images/homeappliances/air-purifier/GA350W1/airpurifier-GA 170W1-1.png',
            '/images/homeappliances/air-purifier/GA350W1/airpurifier-GA 170W1-2.png',
            '/images/homeappliances/air-purifier/GA350W1/airpurifier-GA 170W1-3.png'
        ],
        specs: [
            { label: 'Coverage', value: 'Upto 300 sq ft' },
            { label: 'Power', value: '18 Watts' },
            { label: 'Modes', value: 'Auto/Sleep/Turbo' },
            { label: 'Speeds', value: '3 Speeds' }
        ],
        features: [
            'Compact Elegant Design',
            'Effective Sterilization',
            'Smart Air Quality Sensor',
            'Touch Controls',
            'Quiet Sleep Mode',
            'Filter Replacement Indicator',
            'Energy Efficient Operation'
        ]
    },

    'haier-cabinet-24btu': {
        id: 'haier-cabinet-24btu',
        name: 'Haier Cabinet Air Conditioner 24,000 BTU',
        brand: 'Haier',
        model: 'HPU-24CE03/YB (IK) / HPU-24HE03/YB (IK)',
        availability: 'In Stock',
        warranty: 'Standard Haier Warranty',
        origin: 'China',
        weight: '36 kg (Indoor)',
        dimensions: '507 × 322 × 1765 mm',
        material: 'Floor Standing Cabinet',
        description: 'Powerful and space-efficient floor-standing unit designed for medium to large spaces. Delivering consistent cooling even in high ambient temperatures.',
        images: ['/images/homeappliances/Haierac/HPU-24CE03-cabinet.png'],
        specs: [
            { label: 'Cooling Capacity', value: '24,000 Btu/h' },
            { label: 'Air Flow', value: '1200 m³/h' },
            { label: 'Compressor', value: 'Rotary' },
            { label: 'Refrigerant', value: 'R-410A' },
            { label: 'WiFi', value: 'Optional' }
        ],
        features: [
            'Consistent cooling performance in high ambient temperatures',
            'Strong Airflow',
            'Optional WiFi Control',
            'Energy-efficient operation',
            'Reliable Rotary Compressor',
            'Environmentally friendly R-410A refrigerant'
        ]
    },
    'haier-cabinet-48btu': {
        id: 'haier-cabinet-48btu',
        name: 'Haier Cabinet Air Conditioner 48,000 BTU',
        brand: 'Haier',
        model: 'HPU-48CE03/T / HPU-48HE03/T',
        availability: 'In Stock',
        warranty: 'Standard Haier Warranty',
        origin: 'China',
        weight: '59 kg (Indoor)',
        dimensions: '600 × 350 × 1880 mm',
        material: 'Heavy Duty Floor Standing Cabinet',
        description: 'Heavy-duty floor-standing solution designed for large halls, offices, and industrial environments. High airflow capacity and robust cooling power.',
        images: ['/images/homeappliances/Haierac/Haier HPU-48CE03-T.png'],
        specs: [
            { label: 'Cooling Capacity', value: '48,000 Btu/h' },
            { label: 'Air Flow', value: '2000 m³/h' },
            { label: 'Power Supply', value: '3 Phase / 380–415V (Outdoor)' },
            { label: 'Compressor', value: 'Rotary' },
            { label: 'Refrigerant', value: 'R-410A' }
        ],
        features: [
            'Robust cooling power for large spaces',
            'High airflow capacity (2000 m³/h)',
            'Three-phase power supply for industrial use',
            'Reliable Rotary Compressor',
            'Durable construction for demanding conditions'
        ]
    },
    'haier-cassette-r410-kb': {
        id: 'haier-cassette-r410-kb',
        name: 'Haier Cassette Air Conditioner Series (R410)',
        brand: 'Haier',
        model: 'HBU-24CE03/KB | HBU-48CE03/KB | HBU-48HE03/KB',
        availability: 'In Stock',
        warranty: 'Standard Haier Warranty',
        origin: 'China',
        weight: 'Varies',
        dimensions: 'Ceiling Mounted (840x840 mm)',
        material: 'Professional Commercial Finish',
        description: 'Designed for modern commercial and large residential spaces requiring powerful, uniform, and discreet cooling performance. Features 360° airflow distribution for consistent temperature control.',
        images: ['/images/homeappliances/Haierac/HBU-24CE03.jpg'],
        specs: [
            { label: 'Refrigerant', value: 'R-410A' },
            { label: 'Air Flow', value: '360° Distribution' },
            { label: 'Compressor', value: 'High-Efficiency Rotary' },
            { label: 'Max Pipe Length', value: '30m - 50m' }
        ],
        features: [
            '360° airflow distribution for uniform cooling',
            'High-efficiency rotary compressor',
            'Discreet ceiling-mounted design',
            'Ideal for large halls, restaurants, and showrooms',
            'Environmentally friendly R-410A refrigerant',
            'Reliable performance in demanding climate conditions'
        ],
        variants: [
            {
                model: 'HBU-24CE03/KB (2 Ton)',
                images: ['/images/homeappliances/Haierac/HBU-24CE03.jpg'],
                thumbnail: '/images/homeappliances/Haierac/HBU-24CE03.jpg',
                colorName: '24,000 BTU (Cool Only)'
            },
            {
                model: 'HBU-48CE03/KB (4 Ton)',
                images: ['/images/homeappliances/Haierac/HBU-24CE03.jpg'],
                thumbnail: '/images/homeappliances/Haierac/HBU-24CE03.jpg',
                colorName: '48,000 BTU (Cool Only)'
            },
            {
                model: 'HBU-48HE03/KB (4 Ton Heat & Cool)',
                images: ['/images/homeappliances/Haierac/HBU-24CE03.jpg'],
                thumbnail: '/images/homeappliances/Haierac/HBU-24CE03.jpg',
                colorName: '48,000 BTU (Heat & Cool)'
            }
        ]
    },
    'haier-convertible-48btu': {
        id: 'haier-convertible-48btu',
        name: 'Haier Convertible Air Conditioner Series (4-Ton)',
        brand: 'Haier',
        model: 'HCFU-48CE03 | HCFU-48HE03',
        availability: 'In Stock',
        warranty: 'Standard Haier Warranty',
        origin: 'China',
        weight: '47 kg (Indoor)',
        dimensions: '1650 × 680 × 230 mm',
        material: 'Professional Floor/Ceiling Convertible',
        description: 'Flexible installation solutions for large commercial and residential spaces. Can be installed either ceiling-mounted or floor-standing, providing versatility for any interior layout.',
        images: ['/images/homeappliances/Haierac/Haier-convetible-4-Ton-HCFU-48HE03.jpg'],
        specs: [
            { label: 'Cooling Capacity', value: '48,000 Btu/h' },
            { label: 'Air Flow', value: '2350 m³/h' },
            { label: 'Installation', value: 'Ceiling or Floor' },
            { label: 'Compressor', value: 'Durable Rotary' },
            { label: 'Refrigerant', value: 'R-410A' }
        ],
        features: [
            'Versatile installation: Ceiling-mounted or Floor-standing',
            'Powerful 48,000 BTU cooling/heating capacity',
            'High airflow performance (up to 2350 m³/h)',
            'Ideal for large halls, showrooms, and conference rooms',
            'Durable rotary compressor for long service life',
            'Stable operation in high ambient conditions'
        ],
        variants: [
            {
                model: 'HCFU-48CE03 (4 Ton Cool)',
                images: ['/images/homeappliances/Haierac/Haier-convetible-4-Ton-HCFU-48HE03.jpg'],
                thumbnail: '/images/homeappliances/Haierac/Haier-convetible-4-Ton-HCFU-48HE03.jpg',
                colorName: 'Cool Only'
            },
            {
                model: 'HCFU-48HE03 (4 Ton Heat & Cool)',
                images: ['/images/homeappliances/Haierac/Haier-convetible-4-Ton-HCFU-48HE03.jpg'],
                thumbnail: '/images/homeappliances/Haierac/Haier-convetible-4-Ton-HCFU-48HE03.jpg',
                colorName: 'Heat & Cool'
            }
        ]
    },
    'haier-duct-48btu': {
        id: 'haier-duct-48btu',
        name: 'Haier Duct Air Conditioner Series (4-Ton)',
        brand: 'Haier',
        model: 'HDU-48CE03 | HDU-48HE03',
        availability: 'In Stock',
        warranty: 'Standard Haier Warranty',
        origin: 'China',
        weight: '51 kg (Indoor)',
        dimensions: '1500 × 700 × 248 mm',
        material: 'Concealed Duct System',
        description: 'High-capacity concealed climate control system designed for large commercial and residential projects requiring centralized airflow distribution. Ideal for offices and restaurants.',
        images: [
            '/images/homeappliances/Haierac/Haierduct-HDU-48CE03-1.png',
            '/images/homeappliances/Haierac/Haierduct-HDU-48CE03-2.png',
            '/images/homeappliances/Haierac/Haierduct-HDU-48CE03-3.png',
            '/images/homeappliances/Haierac/Haierduct-HDU-48CE03-4.png'
        ],
        specs: [
            { label: 'Cooling Capacity', value: '48,000 Btu/h' },
            { label: 'Air Flow', value: '2600 m³/h' },
            { label: 'Compressor', value: 'Durable Rotary' },
            { label: 'Refrigerant', value: 'R-410A' },
            { label: 'Controller', value: 'YR-E17' }
        ],
        features: [
            'Concealed installation for discreet comfort',
            'Centralized airflow distribution',
            'High-capacity 48,000 BTU systems',
            'Strong airflow performance (up to 2600 m³/h)',
            'Reliable rotary compressor',
            'Suitable for large malls, restaurants, and offices'
        ],
        variants: [
            {
                model: 'HDU-48CE03 (4 Ton Cool)',
                images: ['/images/homeappliances/Haierac/Haierduct-HDU-48CE03-1.png'],
                thumbnail: '/images/homeappliances/Haierac/Haierduct-HDU-48CE03-1.png',
                colorName: 'Cool Only'
            },
            {
                model: 'HDU-48HE03 (4 Ton Heat & Cool)',
                images: ['/images/homeappliances/Haierac/Haierduct-HDU-48CE03-1.png'],
                thumbnail: '/images/homeappliances/Haierac/Haierduct-HDU-48CE03-1.png',
                colorName: 'Heat & Cool'
            }
        ]
    },

    // ECOSTAR ACs
    'ecostar-novo-max-series': {
        id: 'ecostar-novo-max-series',
        name: 'EcoStar Novo MAX Series',
        brand: 'Eco Star',
        model: 'CX-12/18/24-UD',
        availability: 'In Stock',
        warranty: '10 Years Compressor',
        origin: 'China/Pakistan',
        weight: 'Varies',
        dimensions: 'Standard Split',
        material: 'Premium White Finish',
        description: 'The Novo MAX Series delivers powerful cooling with intelligent features like comfortable sleeping mode and self-diagnosis. Available in 1, 1.5, and 2 Ton capacities to suit any room size.',
        images: [
            '/images/homeappliances/ecostar-split/Ecostar-novomax.png',
            '/images/homeappliances/ecostar-split/ecostar-split2.png'
        ],
        specs: [
            { label: 'Capacity', value: '1 / 1.5 / 2 Ton' },
            { label: 'Inverter', value: 'G-10' },
            { label: 'WiFi', value: 'Enabled' },
            { label: 'Cooling', value: 'Turbo Mode' }
        ],
        features: [
            'Powerful Compressor',
            'Auto Restart',
            'Low Voltage Startup',
            '4-Way Airflow',
            'Multi Fan',
            'Comfortable Sleeping Mode',
            'Turbo Cooling',
            'Automatic Operation',
            'Hidden LED Display',
            'Self Diagnosis',
            'ON/OFF Timer',
            'Dehumidify',
            'Wi-Fi Enabled',
            'Intelligent Defrosting'
        ],
        variants: [
            {
                model: 'CX-12UD (1 Ton)',
                images: ['/images/homeappliances/ecostar-split/Ecostar-novomax.png'],
                thumbnail: '/images/homeappliances/ecostar-split/Ecostar-novomax.png',
                colorName: '1 Ton'
            },
            {
                model: 'CX-18UD (1.5 Ton)',
                images: ['/images/homeappliances/ecostar-split/Ecostar-novomax.png'],
                thumbnail: '/images/homeappliances/ecostar-split/Ecostar-novomax.png',
                colorName: '1.5 Ton'
            },
            {
                model: 'CX-24UD (2 Ton)',
                images: ['/images/homeappliances/ecostar-split/Ecostar-novomax.png'],
                thumbnail: '/images/homeappliances/ecostar-split/Ecostar-novomax.png',
                colorName: '2 Ton'
            }
        ]
    },
    'ecostar-ario-max-series': {
        id: 'ecostar-ario-max-series',
        name: 'EcoStar Ario MAX Series',
        brand: 'Eco Star',
        model: 'CX-MAX-12/18/24',
        availability: 'In Stock',
        warranty: '10 Years Compressor',
        origin: 'China/Pakistan',
        weight: 'Varies',
        dimensions: 'Largest Indoor Unit',
        material: 'Premium White Finish',
        description: 'The Ario MAX Series features the largest indoor and outdoor units for superior cooling performance. Equipped with intelligent Wi-Fi, 5-step power limit, and self-cleaning technology.',
        images: [
            '/images/homeappliances/ecostar-split/Ecostar-ariomax.png',
            '/images/homeappliances/ecostar-split/ecostar-ariomax-2.png'
        ],
        specs: [
            { label: 'Capacity', value: '1 / 1.5 / 2 Ton' },
            { label: 'Startup', value: '65 Hz Quick Start' },
            { label: 'Control', value: 'AI Temp Control 0.1ºC' },
            { label: 'WiFi', value: 'Intelligent WiFi' }
        ],
        features: [
            'Intelligent Wi-Fi Function',
            'Largest Indoor & Outdoor Unit',
            '5 Step Power Limit Remote',
            'Superior Remote Control Design (IPX5 Waterproof)',
            'Gold Fin Evaporator & Condenser',
            'Environment Protecting Coating',
            'Precise AI Temperature Control (0.1ºC)',
            '65 Hz Startup – Quick Cooling & Heating',
            'Self-Diagnosis for Low Refrigerant',
            'Multi Health Filters',
            'Aesthetic Design',
            'Pluggable PCB',
            '5th Gen. of Automatic Washing',
            'Cleaning Reminder',
            'Intelligent PCB Control',
            '4D Airflow',
            'PCB Cooling'
        ],
        variants: [
            {
                model: 'CX-12MAX (1 Ton)',
                images: ['/images/homeappliances/ecostar-split/Ecostar-ariomax.png'],
                thumbnail: '/images/homeappliances/ecostar-split/Ecostar-ariomax.png',
                colorName: '1 Ton'
            },
            {
                model: 'CX-18MAX (1.5 Ton)',
                images: ['/images/homeappliances/ecostar-split/Ecostar-ariomax.png'],
                thumbnail: '/images/homeappliances/ecostar-split/Ecostar-ariomax.png',
                colorName: '1.5 Ton'
            },
            {
                model: 'CX-24MAX (2 Ton)',
                images: ['/images/homeappliances/ecostar-split/Ecostar-ariomax.png'],
                thumbnail: '/images/homeappliances/ecostar-split/Ecostar-ariomax.png',
                colorName: '2 Ton'
            }
        ]
    },
    'ecostar-emperor-series': {
        id: 'ecostar-emperor-series',
        name: 'EcoStar Emperor Series',
        brand: 'Eco Star',
        model: 'CX-EMP-12/18/24',
        availability: 'In Stock',
        warranty: '10 Years Compressor',
        origin: 'China/Pakistan',
        weight: 'Varies',
        dimensions: 'Standard Split',
        material: 'Premium Gold Finish',
        description: 'The Emperor Series combines luxury design with advanced technology. Featuring 4D Airflow, R32 eco-friendly refrigerant, and Gold Fin protection against corrosion. The ultimate choice for efficiency and durability.',
        images: [
            '/images/homeappliances/ecostar-split/ecostar-emperor-1.png',
            '/images/homeappliances/ecostar-split/ecostar-emperor-2.png'
        ],
        specs: [
            { label: 'Capacity', value: '1 / 1.5 / 2 Ton' },
            { label: 'Refrigerant', value: 'R32 Eco-Friendly' },
            { label: 'Voltage', value: '150-270V Low Voltage' },
            { label: 'Filter', value: 'Multi-Health Filters' }
        ],
        features: [
            'Multi-Health Filters',
            '5 Step Power Limit Remote',
            'Self-Diagnosis for Low Refrigerant',
            'Superior Remote Control Design (IPX5 Waterproof)',
            'Precise AI Temperature Control (0.1ºC)',
            '4D Airflow',
            'WIFI Ready - USB Connectivity',
            '65 Hz Startup - Quick Cooling & Heating',
            'R32 Refrigerant (Efficient & Cost Effective)',
            'Self-Cleaning Evaporator',
            'Labyrinth Design PCB (Dust/Moisture Proof)',
            'Environmental Protection Coating (EPC)',
            'Gold Fin Evaporator & Condenser',
            'Low Voltage Operation 150-270V'
        ],
        variants: [
            {
                model: 'CX-12EMP (1 Ton)',
                images: ['/images/homeappliances/ecostar-split/ecostar-emperor-1.png'],
                thumbnail: '/images/homeappliances/ecostar-split/ecostar-emperor-1.png',
                colorName: '1 Ton'
            },
            {
                model: 'CX-18EMP (1.5 Ton)',
                images: ['/images/homeappliances/ecostar-split/ecostar-emperor-1.png'],
                thumbnail: '/images/homeappliances/ecostar-split/ecostar-emperor-1.png',
                colorName: '1.5 Ton'
            },
            {
                model: 'CX-24EMP (2 Ton)',
                images: ['/images/homeappliances/ecostar-split/ecostar-emperor-1.png'],
                thumbnail: '/images/homeappliances/ecostar-split/ecostar-emperor-1.png',
                colorName: '2 Ton'
            }
        ]
    },
    'ecostar-duke-series': {
        id: 'ecostar-duke-series',
        name: 'EcoStar Duke Series (1 / 1.5 / 2 Ton)',
        brand: 'Eco Star',
        model: 'CX-DUKE-12/18/24',
        availability: 'In Stock',
        warranty: '10 Years Compressor',
        origin: 'China/Pakistan',
        weight: 'Varies',
        dimensions: 'Modern Glossy Finish',
        material: 'Premium Glossy Finish',
        description: 'The Duke Series offers a stunning design with elegant glossy finishes in White, Black, and Grey. Featuring advanced health filters, 65Hz quick startup, and precise AI temperature control for ultimate comfort.',
        images: [
            '/images/homeappliances/ecostar-split/ecostar-duke-white.png',
            '/images/homeappliances/ecostar-split/ecostar-duke-grey.png',
            '/images/homeappliances/ecostar-split/ecostar-duke-black.png'
        ],
        descriptionImage: '/images/homeappliances/ecostar-split/ecostar-duke-description.png',
        specs: [
            { label: 'Capacity', value: '1 / 1.5 / 2 Ton' },
            { label: 'Refrigerant', value: 'R32 Eco-Friendly' },
            { label: 'Startup', value: '65 Hz Quick Start' },
            { label: 'Filter', value: 'Multi-Health Filters' }
        ],
        features: [
            'Available in Elegant White, Black & Grey Glossy Finish',
            'R32 Refrigerant (Efficient & Cost Less)',
            'Self-Cleaning Evaporator',
            'Labyrinth Design PCB (Dust/Moisture Proof)',
            'Environmental Protection Coating (EPC)',
            'Gold Fin Evaporator & Condenser',
            '4D Airflow',
            'WIFI Ready - USB Connectivity',
            '5 Step Power Limit Remote',
            '65 Hz Startup – Quick Cooling & Heating',
            'Low Voltage Operation 150-270V',
            'Multi - Health Filters',
            'Self-Diagnosis for Low Refrigerant',
            'Superior Remote Control Design (IPX5 Waterproof)',
            'Precise AI Temperature Control (0.1ºC)'
        ],
        variants: [
            {
                model: 'CX-DUKE-White',
                images: ['/images/homeappliances/ecostar-split/ecostar-duke-white.png'],
                thumbnail: '/images/homeappliances/ecostar-split/ecostar-duke-white.png',
                colorName: 'Elegant White'
            },
            {
                model: 'CX-DUKE-Black',
                images: ['/images/homeappliances/ecostar-split/ecostar-duke-black.png'],
                thumbnail: '/images/homeappliances/ecostar-split/ecostar-duke-black.png',
                colorName: 'Glossy Black'
            },
            {
                model: 'CX-DUKE-Grey',
                images: ['/images/homeappliances/ecostar-split/ecostar-duke-grey.png'],
                thumbnail: '/images/homeappliances/ecostar-split/ecostar-duke-grey.png',
                colorName: 'Glossy Grey'
            }
        ],
        colorFamily: 'Multi-Color'
    },
    'ecostar-novo-series-1.5ton': {
        id: 'ecostar-novo-series-1.5ton',
        name: 'EcoStar Novo Series (1 / 1.5 / 2 Ton)',
        brand: 'Eco Star',
        model: 'Novo Series',
        availability: 'In Stock',
        warranty: '10 Years Compressor, 5 Years Parts & Service',
        origin: 'China/Pakistan',
        weight: 'Varies',
        dimensions: 'Standard Split',
        material: 'Aesthetic Design',
        description: 'EcoStar Novo Series Split AC available in 1 / 1.5 / 2 Ton with 5th Gen. Automatic Washing and Intelligent Wi-Fi Function.',
        images: [
            '/images/homeappliances/ecostar-split/ecostar-novoseris-1.png',
            '/images/homeappliances/ecostar-split/ecostar-novoseris-2.png',
            '/images/homeappliances/ecostar-split/ecostar-novoseris-3.png'
        ],
        specs: [
            { label: 'Capacity', value: '1 / 1.5 / 2 Ton' },
            { label: 'Rated Cooling Capacity (BTU/H)', value: '18425/17401/4436 (Max/Avg/Min)' },
            { label: 'Rated Heating Capacity (BTU/H)', value: '19448/17742/4436 (Max/Avg/Min)' },
            { label: 'Power Consumption Cooling (W)', value: '1900/1650/230 (Max/Avg/Min)' },
            { label: 'Power Consumption Heating (W)', value: '1700/1440/230 (Max/Avg/Min)' },
            { label: 'Wi-Fi', value: 'Intelligent Function' },
            { label: 'PCB Control', value: 'Intelligent' }
        ],
        features: [
            'Aesthetic Design',
            'Pluggable PCB',
            '5th Gen. of Automatic Washing',
            'Cleaning Reminder',
            'Intelligent PCB Control',
            '4D Airflow',
            'PCB Cooling',
            'Intelligent Wi-Fi Function',
            'Largest Indoor & Outdoor Unit',
            '5 Step Power Limit Remote',
            'Superior Remote Control Design (Large LCD, IPX5 Waterproof)',
            'Gold Fin Evaporator & Condenser',
            'Environment Protecting Coating',
            'Precise AI Temperature Control Up to 0.1°',
            '65 Hz Startup - Quick Cooling & Heating',
            'Self-Diagnosis for Low Refrigerant',
            'Multi Health Filters'
        ]
    },
    'ecostar-ario-series-1ton': {
        id: 'ecostar-ario-series-1ton',
        name: 'EcoStar Ario Series (1 / 1.5 / 2 Ton)',
        brand: 'Eco Star',
        model: 'Ario Series',
        availability: 'In Stock',
        warranty: '10 Years Compressor, 5 Years Parts & Service',
        origin: 'China/Pakistan',
        weight: 'Varies',
        dimensions: 'Standard Split',
        material: 'Aesthetic Design',
        description: 'EcoStar Ario Series Split AC available in 1 / 1.5 / 2 Ton with Intelligent Wi-Fi Function and Largest Indoor & Outdoor Unit.',
        images: [
            '/images/homeappliances/ecostar-split/ecostar-arioseries-1.png',
            '/images/homeappliances/ecostar-split/ecostar-arioseries-2.png',
            '/images/homeappliances/ecostar-split/ecostar-arioseries-3.png'
        ],
        specs: [
            { label: 'Capacity', value: '1 / 1.5 / 2 Ton' },
            { label: 'Wi-Fi', value: 'Intelligent Function' },
            { label: 'PCB Control', value: 'Intelligent' },
            { label: 'Airflow', value: '4D' }
        ],
        features: [
            'Aesthetic Design',
            'Pluggable PCB',
            '5th Gen. of Automatic Washing',
            'Cleaning Reminder',
            'Intelligent PCB Control',
            '4D Airflow',
            'PCB Cooling',
            'Intelligent Wi-Fi Function',
            'Largest Indoor & Outdoor Unit',
            '5 Step Power Limit Remote',
            'Superior Remote Control Design (Large LCD, IPX5 Waterproof)',
            'Gold Fin Evaporator & Condenser',
            'Environment Protecting Coating',
            'Precise AI Temperature Control Up to 0.1°',
            '65 Hz Startup - Quick Cooling & Heating',
            'Self-Diagnosis for Low Refrigerant',
            'Multi Health Filters'
        ]
    },

    // MIDEA ACs
    'midea-titan-inverter-1ton': {
        id: 'midea-titan-inverter-1ton',
        name: 'Midea Titan Inverter AC Series',
        brand: 'Midea',
        model: 'MSEZ1B-12HRFN1-QC2 / MSEZ1C-18HRFN1-QC2 / MSEZ1D-24HRFN1-QC2W',
        availability: 'In Stock',
        warranty: '10 Years Compressor',
        origin: 'China',
        weight: '30kg',
        dimensions: 'Standard Split',
        material: 'Prime Guard Finish',
        description: 'The Midea Titan Series Inverter AC is engineered for Pakistan’s extreme climate conditions, delivering powerful cooling even during intense heatwaves. Featuring AI ECOMASTER technology, T3 TropicPro performance, and Prime Guard protection, this air conditioner ensures maximum comfort with minimum energy consumption.',
        images: [
            '/images/homeappliances/mideaaircon/MSEZ1B-12HRFN1-QC2-1.png',
            '/images/homeappliances/mideaaircon/MSEZ1B-12HRFN1-QC2-2.png',
            '/images/homeappliances/mideaaircon/MSEZ1B-12HRFN1-QC2-3.png'
        ],
        specs: [
            { label: 'Capacity', value: '1 Ton / 1.5 Ton / 2 Ton' },
            { label: 'Type', value: 'DC Inverter Split AC' },
            { label: 'Energy Saving', value: 'Up to 71% (Non-inverter user comparison)' },
            { label: 'AI Energy Saving', value: 'Extra 30% with AI Mode' },
            { label: 'Cooling & Heating', value: 'Yes' },
            { label: 'T3 Performance', value: '100% Cooling at 48°C' },
            { label: 'Max Operation', value: 'Non-stop performance at 68°C' },
            { label: 'Quick Cooling', value: '30°C to 24°C in 10 minutes' },
            { label: 'Voltage Range', value: '80V – 265V' },
            { label: 'Self-Cleaning', value: '56°C Steam Sterilization' },
            { label: 'Sterilization', value: '99.9% (Dual Negative Ions)' },
            { label: 'WiFi', value: 'Enabled (App Control)' },
            { label: 'Smart Voice', value: 'Alexa, Google Home, Apple Home, IFTTT' },
            { label: 'Max Pipe Length', value: '30m (Horizontal)' },
            { label: 'Max Height', value: '15m (Vertical)' },
            { label: 'Clearance', value: '5cm minimum' },
            { label: 'Coating', value: 'Graphene Dual Layer (Fin + Evaporator)' }
        ],
        features: [
            'AI ECOMASTER Technology (71% + 30% savings)',
            'T3 TropicPro Performance',
            'Prime Guard Protection (Humidity, Dust, Sand)',
            'Air Magic Health Protection',
            'Dual Negative Ions Generator',
            'Self-Cleaning Evaporator (56°C High-Temp)',
            'UV-Protected Conformal Coated Electronics',
            'Graphene Dual-Layer Coating',
            'Dust-Proof Reverse Fan Rotation',
            'Low Voltage Operation (80V – 265V)',
            'Smart Home Integration (App, Voice Control)',
            'Energy Usage Monitoring Reports',
            'Location-Based Auto On/Off',
            'Sleep Curve & Smart Data Tracking'
        ]
    },
    'midea-floor-standing-MFM-48HRDN1': {
        id: 'midea-floor-standing-MFM-48HRDN1',
        name: 'Midea Inverter Floor Standing AC 4 Ton',
        brand: 'Midea',
        model: 'MFM-48HRDN1',
        availability: 'In Stock',
        warranty: '10 Years Compressor',
        origin: 'China',
        weight: 'Varies',
        dimensions: 'Floor Standing',
        material: 'Premium White Finish',
        description: 'The Midea Inverter Floor Standing AC (MFM-48HRDN1) offers strong 4.0 Ton cooling and heating power with up to 70% energy savings. Designed for quick comfort with stylish modern aesthetics.',
        images: ['/images/homeappliances/mideaaircon/midea-floorstanding-MFM-48HRDN1.png'],
        specs: [
            { label: 'Capacity', value: '4 Ton' },
            { label: 'Type', value: 'DC Inverter Floor Standing' },
            { label: 'Energy Saving', value: 'Up to 70%' },
            { label: 'Function', value: 'Heat & Cool' },
            { label: 'Gas', value: 'Eco-Friendly' }
        ],
        features: [
            'Strong 4.0 Ton Cooling & Heating Power',
            'DC Inverter Technology (Up to 70% Saving)',
            'Multi-Bend Heat Exchanger',
            'Fast Cooling Mode',
            'Dry Mode (Moisture Removal)',
            'Low Noise Operation',
            'Refrigerant Leakage Detection',
            'Night Mode for Peaceful Sleep',
            'Stylish Modern Design'
        ]
    },
    'midea-R-410-non-inverter': {
        id: 'midea-R-410-non-inverter',
        name: 'Midea R-410 Non-Inverter AC (Cool Only)',
        brand: 'Midea',
        model: 'R-410',
        availability: 'In Stock',
        warranty: '10 Years Compressor',
        origin: 'China',
        weight: 'Varies',
        dimensions: 'Wall Mounted',
        material: 'White',
        description: 'Midea R-410 Non-Inverter AC offers excellent cooling efficiency with a stylish design. Featuring "Follow Me" technology for precise temperature control and Anticorrosive Green Fin coating for durability.',
        images: [
            '/images/homeappliances/mideaaircon/Midea  R-410 Non Inverter Cool Only-1.webp',
            '/images/homeappliances/mideaaircon/Midea  R-410 Non Inverter Cool Only-2.webp',
            '/images/homeappliances/mideaaircon/Midea  R-410 Non Inverter Cool Only-3.webp',
            '/images/homeappliances/mideaaircon/Midea  R-410 Non Inverter Cool Only-4.webp'
        ],
        specs: [
            { label: 'Type', value: 'Non-Inverter Cool Only' },
            { label: 'Gas', value: 'R-410' },
            { label: 'Energy Saving', value: '40-70% Efficiency' },
            { label: 'Coating', value: 'Anticorrosive Green Fin' },
            { label: 'Heat Exchanger', value: 'Multi-Bend' }
        ],
        features: [
            'High Energy Efficiency',
            'Follow Me Technology (Remote Sensor)',
            'Anticorrosive Green Fin Condenser',
            'Multi-Bend Heat Exchanger',
            'Fast Cooling',
            'Low Noise Operation',
            'Dry Mode',
            'Refrigerant Leakage Detection',
            'Night Mode',
            'Blue Fin Technology',
            'Smart Ionizer'
        ]
    },
    'midea-xtreme-inverter-r410': {
        id: 'midea-xtreme-inverter-r410',
        name: 'Midea Xtreme Series Inverter AC',
        brand: 'Midea',
        model: 'Xtreme Series R410 T3',
        availability: 'In Stock',
        warranty: '10 Years Compressor',
        origin: 'China',
        weight: 'Varies',
        dimensions: 'Wall Mounted',
        material: 'Premium Finish',
        description: 'Midea Xtreme Series Inverter AC uses High-Frequency Racer Tech for faster, more efficient cooling. Features Thermo Static technology for precise micro-adjustments and a Dual Filtration system for fresh, clean air.',
        images: [
            '/images/homeappliances/mideaaircon/MideaXtreme SeriesInverter R410T3-1.png',
            '/images/homeappliances/mideaaircon/MideaXtreme SeriesInverter R410T3-2.png'
        ],
        specs: [
            { label: 'Type', value: 'Full DC Inverter Cooling & Heating' },
            { label: 'Energy Saving', value: 'Up to 71% (SEER A++)' },
            { label: 'T3 Performance', value: 'Non-stop cooling up to 60℃' },
            { label: 'Voltage Range', value: '99V ~ 270V (Wide Range)' },
            { label: 'Pipe Material', value: '100% Copper Connecting Pipe' },
            { label: 'Coating', value: 'Golden Fin (Indoor & Outdoor)' },
            { label: 'WiFi', value: 'Control Anywhere (Midea Air App)' }
        ],
        features: [
            'High-Frequency Startup (Instant Cool Air)',
            'Flash-Cooling Technology',
            'Thermo Static Technology (Precise Control)',
            'Gear Shift Function (50% 75% 100% Output)',
            'i-Clean & Dual Filtration System',
            'Air Magic (99.9% Sterilization & Ionizer)',
            'Smart WiFi Control (Midea Air App)',
            'Golden Fin Coating (Durability & Hygiene)',
            'Hidden LED Display',
            '3D Airflow (Whole Room Comfort)',
            'Low-Noise Design',
            'Smart Diagnosis Function',
            'High Ambient Cooling (60℃)',
            'Optimized Air Duct Design'
        ]
    },
    'midea-ceiling-exposed-r410': {
        id: 'midea-ceiling-exposed-r410',
        name: 'Midea Ceiling Exposed - R410 Heat & Cool',
        brand: 'Midea',
        model: 'Ceiling Exposed - R410',
        availability: 'In Stock',
        warranty: '10 Years Compressor, 2 Years Parts',
        origin: 'China',
        weight: 'Varies',
        dimensions: 'Horizontal Ceiling / Vertical Wall Mounted',
        material: 'Premium Commercial Finish',
        description: 'Midea Ceiling Exposed systems are ideal when traditional split systems are not enough. They can be mounted horizontally on the ceiling or vertically on the wall, delivering a wide and powerful air flow for large spaces.',
        images: [
            '/images/homeappliances/mideaaircon/MideaCeiling Exposed-R410-1.png',
            '/images/homeappliances/mideaaircon/MideaCeiling Exposed-R410-2.png'
        ],
        specs: [
            { label: 'Type', value: 'Ceiling & Floor / Ceiling Exposed' },
            { label: 'Gas', value: 'R-410' },
            { label: 'Function', value: 'Heat & Cool' },
            { label: 'Air Flow', value: '360° Air Flow Panel' },
            { label: 'Mounting', value: 'Horizontal / Vertical' }
        ],
        features: [
            'Multi-Bend Heat Exchanger',
            'Outdoor Unit Design "Brilliant"',
            'Aluminium Heat Exchanger with Hydrophilic Coating',
            'Reserved ON-OFF and Alarm Ports',
            'Night Mode & Dry Mode',
            'Four Way Air Directions',
            'Built-in Drain Pump',
            '360° Air Flow Panel',
            'Three Speeds Fan',
            'Temperature Indicator',
            'Double Protection against Condensate Leakage'
        ]
    },


    'haier-microwave-hmw-25mxp9': {
        id: 'haier-microwave-hmw-25mxp9',
        name: 'Haier Microwave Oven HMW-25MXP9',
        brand: 'Haier',
        model: 'HMW-25MXP9',
        availability: 'In Stock',
        warranty: '1 Year Parts',
        origin: 'China',
        weight: '15kg',
        dimensions: 'Compact Design',
        material: 'Black Glass & Metal',
        description: 'Compact microwave oven with 5 power levels and fast heating capability.',
        images: ['/images/homeappliances/haier-microwave/microwave.jpeg'],
        specs: [{ label: 'Power Levels', value: '5' }, { label: 'Timer', value: '35 Minutes' }],
        features: ['Fast Heating', 'Quick Defrost', 'Compact Design']
    },
    'haier-microwave-hmw-20mxp3': {
        id: 'haier-microwave-hmw-20mxp3',
        name: 'Haier Microwave Oven HMW-20MXP3',
        brand: 'Haier',
        model: 'HMW-20MXP3',
        availability: 'In Stock',
        warranty: '1 Year Parts',
        origin: 'China',
        weight: '12kg',
        dimensions: 'Turntable glass tray 245mm',
        material: 'Sleek Black Finish',
        description: 'Efficient microwave oven with 6 power levels and turntable glass tray.',
        images: ['/images/homeappliances/haier-microwave/microwave (2).jpeg'],
        specs: [{ label: 'Power Levels', value: '6' }, { label: 'Timer', value: '30 Minutes' }],
        features: ['Turntable glass tray 245mm', 'Defrost setting', 'Cooking end signal']
    },
    'haier-microwave-hmw-20mps': {
        id: 'haier-microwave-hmw-20mps',
        name: 'Haier Microwave Oven HMW-20MPS',
        brand: 'Haier',
        model: 'HMW-20MPS',
        availability: 'In Stock',
        warranty: '1 Year Parts',
        origin: 'China',
        weight: '13kg',
        dimensions: 'Compact Design',
        material: 'Silver / Metallic',
        description: 'Stylish silver microwave oven with fast heating and 5 power levels.',
        images: ['/images/homeappliances/haier-microwave/microwave (3).jpeg'],
        specs: [{ label: 'Power Levels', value: '5' }, { label: 'Timer', value: '35 Minutes' }],
        features: ['Fast Heating', 'Quick Defrost', 'Compact Design']
    },
    'haier-microwave-hmw-23200dg': {
        id: 'haier-microwave-hmw-23200dg',
        name: 'Haier Microwave Oven HMW-23200DG',
        brand: 'Haier',
        model: 'HMW-23200DG',
        availability: 'In Stock',
        warranty: '1 Year Parts',
        origin: 'China',
        weight: '16kg',
        dimensions: 'Turntable glass tray 285mm',
        material: 'Digital Touch Panel',
        description: 'Digital touch control microwave with 800W output power and 60 minutes timer.',
        images: ['/images/homeappliances/haier-microwave/microwave (4).jpeg'],
        specs: [{ label: 'Output Power', value: '800W' }, { label: 'Timer', value: '60 Minutes' }],
        features: ['Digital Touch control', 'Turntable glass tray 285mm', 'Defrost setting']
    },
    'haier-microwave-hmw-28100dg': {
        id: 'haier-microwave-hmw-28100dg',
        name: 'Haier Microwave Oven HMW-28100DG',
        brand: 'Haier',
        model: 'HMW-28100DG',
        availability: 'In Stock',
        warranty: '1 Year Parts',
        origin: 'China',
        weight: '18kg',
        dimensions: 'Large Capacity',
        material: 'Premium Black & Steel',
        description: 'Large capacity microwave with 900W output power and Micro+Grill Combi.',
        images: ['/images/homeappliances/haier-microwave/microwave (5).jpeg'],
        specs: [{ label: 'Output Power', value: '900W' }, { label: 'Type', value: 'Micro+Grill Combi' }],
        features: ['Digital Touch control', 'Large capacity', 'Defrost setting']
    },
    'haier-microwave-hmw-32300b': {
        id: 'haier-microwave-hmw-32300b',
        name: 'Haier Microwave Oven HMW-32300B',
        brand: 'Haier',
        model: 'HMW-32300B',
        availability: 'In Stock',
        warranty: '1 Year Parts',
        origin: 'China',
        weight: '20kg',
        dimensions: 'Extra Large Capacity',
        material: 'Piano Black Finish',
        description: 'Premium microwave with grill cooking, built-in recipes, and fast heating.',
        images: ['/images/homeappliances/haier-microwave/microwave (6).jpeg'],
        specs: [{ label: 'Functions', value: 'Grill Cooking' }, { label: 'Power Levels', value: 'Multiple' }],
        features: ['Fast Heating', 'Defrost Function', 'Built in Recipes']
    },
    'haier-microwave-hmw-30afs': {
        id: 'haier-microwave-hmw-30afs',
        name: 'Haier Microwave Oven HMW-30AFS',
        brand: 'Haier',
        model: 'HMW-30AFS',
        availability: 'In Stock',
        warranty: '2 Years',
        origin: 'China',
        weight: '22kg',
        dimensions: '5-in-1 Versatility',
        material: 'Professional Steel Finish',
        description: 'Advanced 5-in-1 microwave with Grill, Convection, and Air Fryer technology.',
        images: ['/images/homeappliances/haier-microwave/microwave (7).jpeg'],
        specs: [{ label: 'Microwave Power', value: '900W' }, { label: 'Convection Power', value: '2500W' }],
        features: ['Microwave, Grill, Cooking, Convection and Air Fryer 5 in 1', '305 Auto Menu', '1100W Grill Power']
    },
    'haier-microwave-hgl-30100': {
        id: 'haier-microwave-hgl-30100',
        name: 'Haier Microwave Oven HGL-30100',
        brand: 'Haier',
        model: 'HGL-30100',
        availability: 'In Stock',
        warranty: '1 Year Parts',
        origin: 'China',
        weight: '19kg',
        dimensions: 'Integrated Rotisserie',
        material: 'Black Glass & LED',
        description: 'Functional microwave with Micro+Grill Combi and 360° Rotisserie Grill.',
        images: ['/images/homeappliances/haier-microwave/microwave (8).jpeg'],
        specs: [{ label: 'Grill Type', value: '360° Rotisserie' }, { label: 'Cooking Menus', value: 'Multiple' }],
        features: ['Micro + Grill Combi', 'Turn Grill Combi Cooking', 'Weight Defrost']
    },
    'haier-microwave-hmn-45200esd': {
        id: 'haier-microwave-hmn-45200esd',
        name: 'Haier Microwave Oven HMN-45200ESD',
        brand: 'Haier',
        model: 'HMN-45200ESD',
        availability: 'In Stock',
        warranty: '1 Year Parts',
        origin: 'China',
        weight: '25kg',
        dimensions: 'Large Benchtop',
        material: 'White & Black Digital',
        description: 'High power microwave with 1100W output power and grill combination.',
        images: ['/images/homeappliances/haier-microwave/microwave (9).jpeg'],
        specs: [{ label: 'Output Power', value: '1100W' }, { label: 'Power Levels', value: '11' }],
        features: ['Digital Control', 'Grill Combination', 'Fast Defrost Function']
    },
    'haier-microwave-hmw-30afr': {
        id: 'haier-microwave-hmw-30afr',
        name: 'Haier Microwave Oven HMW-30AFR',
        brand: 'Haier',
        model: 'HMW-30AFR',
        availability: 'In Stock',
        warranty: '2 Years',
        origin: 'China',
        weight: '22kg',
        dimensions: 'Red & Black Gradient',
        material: 'Premium Glass Finish',
        description: 'Exquisite 5-in-1 microwave with Air Fryer technology and striking Red/Black design.',
        images: ['/images/homeappliances/haier-microwave/microwave (10).jpeg'],
        specs: [{ label: 'Convection Power', value: '2500W' }, { label: 'Microwave Power', value: '900W' }],
        features: ['Microwave, Grill, Cooking, Convection and Air Fryer 5 in 1', '305 Auto Menu', '1100W Grill Power']
    },
    'haier-microwave-hmw-20dgs': {
        id: 'haier-microwave-hmw-20dgs',
        name: 'Haier Microwave Oven HMW-20DGS',
        brand: 'Haier',
        model: 'HMW-20DGS',
        availability: 'In Stock',
        warranty: '1 Year Parts',
        origin: 'China',
        weight: '12kg',
        dimensions: 'Compact Digital',
        material: 'Silver Digital',
        description: 'Digital touch control microwave with grill combination and children safety lock.',
        images: ['/images/homeappliances/haier-microwave/microwave (11).jpeg'],
        specs: [{ label: 'Control', value: 'Digital Touch' }, { label: 'Menus', value: 'Auto Menus' }],
        features: ['Grill Combination', 'Fast Defrost Function', 'Children Safety Lock']
    },
    'haier-microwave-hmn-62mx80': {
        id: 'haier-microwave-hmn-62mx80',
        name: 'Haier Microwave Oven HMN-62MX80',
        brand: 'Haier',
        model: 'HMN-62MX80',
        availability: 'In Stock',
        warranty: '1 Year Parts',
        origin: 'China',
        weight: '30kg',
        dimensions: '62L Big Capacity',
        material: 'Matte Black Finish',
        description: 'Extra-large 62L capacity microwave with touch control and Eco Mode.',
        images: ['/images/homeappliances/haier-microwave/microwave (12).jpeg'],
        specs: [{ label: 'Capacity', value: '62L' }, { label: 'Power Levels', value: '11' }],
        features: ['Touch Control Panel', 'Eco Mode', 'Fast Defrost Function']
    },
    'haier-microwave-hmw-20mhes': {
        id: 'haier-microwave-hmw-20mhes',
        name: 'Haier Microwave Oven HMW-20MHES',
        brand: 'Haier',
        model: 'HMW-20MHES',
        availability: 'In Stock',
        warranty: '1 Year Parts',
        origin: 'China',
        weight: '11kg',
        dimensions: 'Floral Design',
        material: 'Black Cabinet',
        description: 'Stylish microwave with unique floral design and 5 microwave power levels.',
        images: ['/images/homeappliances/haier-microwave/microwave (13).jpeg'],
        specs: [{ label: 'Power Levels', value: '5' }, { label: 'Timer', value: '35 Minutes' }],
        features: ['Turntable glass tray 245mm', 'Cooking end signal', 'Defrost setting']
    },
    'haier-microwave-hmw-20mpb': {
        id: 'haier-microwave-hmw-20mpb',
        name: 'Haier Microwave Oven HMW-20MPB',
        brand: 'Haier',
        model: 'HMW-20MPB',
        availability: 'In Stock',
        warranty: '1 Year Parts',
        origin: 'China',
        weight: '12kg',
        dimensions: 'Compact Design',
        material: 'Black Classic',
        description: 'Classic black compact microwave with fast heating and quick defrost.',
        images: ['/images/homeappliances/haier-microwave/microwave (14).jpeg'],
        specs: [{ label: 'Power Levels', value: '5' }, { label: 'Timer', value: '35 Minutes' }],
        features: ['Fast Heating', 'Quick Defrost', 'Compact Design']
    },
    'haier-microwave-hmw-20dss': {
        id: 'haier-microwave-hmw-20dss',
        name: 'Haier Microwave Oven HMW-20DSS',
        brand: 'Haier',
        model: 'HMW-20DSS',
        availability: 'In Stock',
        warranty: '1 Year Parts',
        origin: 'China',
        weight: '13kg',
        dimensions: 'Digital Compact',
        material: 'Silver Finish',
        description: 'Advanced compact microwave with 8 auto menus and digital touch control.',
        images: ['/images/homeappliances/haier-microwave/microwave (15).jpeg'],
        specs: [{ label: 'Auto Menus', value: '8' }, { label: 'Control', value: 'Digital Touch' }],
        features: ['Fast Defrost Function', 'Fast Heating Function', 'Children Safety Lock']
    },
    'haier-microwave-hmw-20mx11': {
        id: 'haier-microwave-hmw-20mx11',
        name: 'Haier Microwave Oven HMW-20MX11',
        brand: 'Haier',
        model: 'HMW-20MX11',
        availability: 'In Stock',
        warranty: '1 Year Parts',
        origin: 'China',
        weight: '12kg',
        dimensions: 'Turntable glass tray 255mm',
        material: 'White & Black',
        description: 'Contemporary white microwave with 5 power levels and turntable glass tray.',
        images: ['/images/homeappliances/haier-microwave/microwave (16).jpeg'],
        specs: [{ label: 'Power Levels', value: '5' }, { label: 'Timer', value: '35 Minutes' }],
        features: ['Turntable glass tray 255mm', 'Cooking end signal', 'Defrost setting']
    },
    'haier-microwave-hmw-20mx12': {
        id: 'haier-microwave-hmw-20mx12',
        name: 'Haier Microwave Oven HMW-20MX12',
        brand: 'Haier',
        model: 'HMW-20MX12',
        availability: 'In Stock',
        warranty: '1 Year Parts',
        origin: 'China',
        weight: '12kg',
        dimensions: 'Compact Black',
        material: 'Full Black Finish',
        description: 'Sleek all-black compact microwave with fast heating and 5 power levels.',
        images: ['/images/homeappliances/haier-microwave/microwave (17).jpeg'],
        specs: [{ label: 'Power Levels', value: '5' }, { label: 'Timer', value: '35 Minutes' }],
        features: ['Cooking end signal', 'Fast Defrost Function', 'Fast Heating Function']
    },
    'haier-microwave-hmw-32300s': {
        id: 'haier-microwave-hmw-32300s',
        name: 'Haier Microwave Oven HMW-32300S',
        brand: 'Haier',
        model: 'HMW-32300S',
        availability: 'In Stock',
        warranty: '1 Year Parts',
        origin: 'China',
        weight: '20kg',
        dimensions: 'Premium Mirror Finish',
        material: 'Silver/Mirror Glass',
        description: 'Elite mirror finish microwave with grill cooking and built-in recipes.',
        images: ['/images/homeappliances/haier-microwave/microwave.jpeg'],
        specs: [{ label: 'Functions', value: 'Grill Cooking' }, { label: 'Power Levels', value: 'Multiple' }],
        features: ['Fast Heating', 'Defrost Function', 'Built in Recipes']
    }
};

export const categories: Record<string, Category> = {
    // --- HARDWARE & TOOLS ---
    'compressors': {
        id: 'compressors',
        title: 'Air Compressors',
        description: 'Professional grade air compression systems for all industrial needs.',
        image: '/images/heroIndustrial.jpg',
        productIds: [],
        division: 'hardware'
    },
    'electric': {
        id: 'electric',
        title: 'Industrial Power Tools',
        description: 'Top-tier power tools for heavy-duty industrial use.',
        image: '/images/powertoolshero.jpg',
        productIds: [],
        division: 'hardware'
    },
    'blasting': {
        id: 'blasting',
        title: 'Blasting Equipment',
        description: 'Complete sandblasting solutions for surface preparation.',
        image: '/images/heroprecisionfabircation.jpg',
        productIds: [],
        division: 'hardware'
    },
    'hydraulic': {
        id: 'hydraulic',
        title: 'Hydraulic Systems',
        description: 'Powerful hydraulic tools and systems for lifting, pressing, and pulling.',
        image: '/images/heavyworkshiphero.jpg',
        productIds: [],
        division: 'hardware'
    },
    'safety': {
        id: 'safety',
        title: 'Safety Gear',
        description: 'Essential Personal Protective Equipment (PPE) to ensure workplace safety compliance.',
        image: '/images/heroIndustrial.jpg',
        productIds: [],
        division: 'hardware'
    },
    'pneumatic': {
        id: 'pneumatic',
        title: 'Pneumatic Solutions',
        description: 'Air-powered tools for mining, construction, and manufacturing.',
        image: '/images/powertoolshero.jpg',
        productIds: [],
        division: 'hardware'
    },
    'steel': {
        id: 'steel',
        title: 'Steel Profiles',
        description: 'Structural steel components for construction and fabrication.',
        image: '/images/heroprecisionfabircation.jpg',
        productIds: [],
        division: 'hardware'
    },
    'welding': {
        id: 'welding',
        title: 'Welding Equipment',
        description: 'Professional welding machines and accessories.',
        image: '/images/heavyworkshiphero.jpg',
        productIds: [],
        division: 'hardware'
    },
    'pipes': {
        id: 'pipes',
        title: 'Pipes & Fittings',
        description: 'High-quality industrial pipes, valves, and fittings for fluid and gas transportation.',
        image: '/images/heroIndustrial.jpg',
        productIds: [],
        division: 'hardware'
    },

    // --- HOME APPLIANCES ---
    'air-purifiers': {
        id: 'air-purifiers',
        title: 'Air Purifiers',
        description: 'Advanced air purification systems for healthy living environments.',
        image: '/images/homeappliances/airpurifier-categorymain.png',
        productIds: ['gree-air-purifier-ga-350-w1', 'gree-air-purifier-ga-170-w1'],
        division: 'appliances'
    },
    'air-conditioners': {
        id: 'air-conditioners',
        title: 'Air Conditioners', // General Parent
        description: 'Explore our wide range of air conditioning solutions including Wall Mount, Floor Standing, and Commercial units.',
        image: '/images/homeappliances/ac-categorymain.avif',
        productIds: [
            'gree-airy-inverter-1.5ton',
            'gree-fairy-inverter-1ton',
            'gree-pular-inverter-1ton',
            'gree-lomo-series-non-inverter',
            'ecostar-novo-max-series',
            'ecostar-ario-max-series',
            'ecostar-emperor-series',
            'ecostar-duke-series',
            'midea-titan-inverter-1ton',
            'midea-R-410-non-inverter',
            'midea-xtreme-inverter-r410',
            'midea-ceiling-exposed-r410',
            'haier-cassette-r410-kb',
            'haier-convertible-48btu',
            'haier-duct-48btu',
            'haier-cabinet-24btu',
            'haier-cabinet-48btu',
            'gree-floor-standing-i-shine-2ton',
            'gree-floor-standing-t-fresh-2ton-cool',
            'ecostar-glacier-fsu-floor-standing',
            'ecostar-iceberg-fsu-floor-standing',
            'midea-floor-standing-MFM-48HRDN1',
            'ecostar-novo-series-1.5ton',
            'ecostar-ario-series-1ton'
        ],
        division: 'appliances'
    },
    // --- Hidden Sub-Categories for Sidebar Navigation ---
    'wall-mounted-ac': {
        id: 'wall-mounted-ac',
        title: 'Wall Mounted ACs',
        description: 'Energy-efficient inverter ACs for home use.',
        image: '/images/homeappliances/ac-categorymain.avif',
        productIds: ['gree-airy-inverter-1.5ton', 'gree-fairy-inverter-1ton', 'gree-pular-inverter-1ton', 'gree-lomo-series-non-inverter', 'ecostar-novo-max-series', 'ecostar-ario-max-series', 'ecostar-emperor-series', 'ecostar-duke-series', 'midea-titan-inverter-1ton', 'midea-R-410-non-inverter', 'midea-xtreme-inverter-r410', 'ecostar-novo-series-1.5ton', 'ecostar-ario-series-1ton'],
        division: 'appliances',
        hidden: true
    },
    'commercial-ac': {
        id: 'commercial-ac',
        title: 'Light Commercial AC',
        description: 'Cassette and Duct type solutions.',
        image: '/images/categories/commercial-ac.jpg',
        productIds: ['midea-ceiling-exposed-r410', 'haier-cassette-r410-kb', 'haier-convertible-48btu', 'haier-duct-48btu'],
        division: 'appliances',
        hidden: true
    },
    'floor-standing-ac': {
        id: 'floor-standing-ac',
        title: 'Floor Standing AC',
        description: 'Vertical tower ACs.',
        image: '/images/categories/standing-ac.jpg',
        productIds: ['haier-cabinet-24btu', 'haier-cabinet-48btu', 'haier-convertible-48btu', 'gree-floor-standing-i-shine-2ton', 'gree-floor-standing-t-fresh-2ton-cool', 'ecostar-glacier-fsu-floor-standing', 'ecostar-iceberg-fsu-floor-standing', 'midea-floor-standing-MFM-48HRDN1'],
        division: 'appliances',
        hidden: true
    },
    'microwaves': {
        id: 'microwaves',
        title: 'Smart Microwaves',
        description: 'Modern kitchen appliances including microwave and air fryer combos.',
        image: '/images/homeappliances/haier-microwave/microwave-categorymain.webp',
        productIds: [
            'haier-microwave-hmw-25mxp9',
            'haier-microwave-hmw-20mxp3',
            'haier-microwave-hmw-20mps',
            'haier-microwave-hmw-23200dg',
            'haier-microwave-hmw-28100dg',
            'haier-microwave-hmw-32300b',
            'haier-microwave-hmw-30afs',
            'haier-microwave-hgl-30100',
            'haier-microwave-hmn-45200esd',
            'haier-microwave-hmw-30afr',
            'haier-microwave-hmw-20dgs',
            'haier-microwave-hmn-62mx80',
            'haier-microwave-hmw-20mhes',
            'haier-microwave-hmw-20mpb',
            'haier-microwave-hmw-20dss',
            'haier-microwave-hmw-20mx11',
            'haier-microwave-hmw-20mx12',
            'haier-microwave-hmw-32300s'
        ],
        division: 'appliances'
    },
    'water-dispensers': {
        id: 'water-dispensers',
        title: 'Water Dispensers',
        description: 'Sleek and efficient hot & cold water dispensers for home and office use.',
        image: '/images/homeappliances/water-dispenser/gree/Gree GW-JL500F–Water Dispenser-Compressor Cooling.png',
        productIds: ['gree-water-dispenser-gw-jl500f'],
        division: 'appliances'
    },
    'heaters': {
        id: 'heaters',
        title: 'Heaters',
        description: 'Efficient and safe heating solutions for indoor and outdoor comfort.',
        image: '/images/homeappliances/gree/Gree-GEH-800B-infrared-heater-white-grey.webp',
        productIds: ['gree-infrared-heater-geh-800b-g'],
        division: 'appliances'
    }
};

export const brands: Record<string, Brand> = {
    // --- HARDWARE ---
    'harden': {
        id: 'harden',
        name: 'Harden',
        description: 'Professional quality tools and supplies for construction and maintenance.',
        image: '/images/logos/hardenlogo.webp',
        productIds: [],
        spec: 'HAND_TOOLS',
        division: 'hardware'
    },
    'ingco': {
        id: 'ingco',
        name: 'Ingco',
        description: 'Professional quality tools and supplies for construction and maintenance.',
        image: '/images/logos/ingcologo.webp',
        productIds: [],
        spec: 'HARD_TOOLS',
        division: 'hardware'
    },
    'clemco': {
        id: 'clemco',
        name: 'Clemco',
        description: "World's largest manufacturer of air-powered blast equipment.",
        image: '/images/logos/Clemco_logo_footer.webp',
        productIds: [],
        spec: 'AIR_BLASTING',
        division: 'hardware'
    },
    'elcometer': {
        id: 'elcometer',
        name: 'Elcometer',
        description: 'Global leader in coating & concrete inspection equipment and rebar finding.',
        image: '/images/logos/elcometerlogo.png',
        productIds: [],
        spec: 'INSPECTION',
        division: 'hardware'
    },
    'toku': {
        id: 'toku',
        name: 'Toku',
        description: 'Japanese high-quality pneumatic tools for construction and mining.',
        image: '/images/logos/TokuLogo.png',
        productIds: [],
        spec: 'PNEUMATIC',
        division: 'hardware'
    },
    'gison': {
        id: 'gison',
        name: 'Gison',
        description: 'Professional air tools manufacturer for industrial and automotive use.',
        image: '/images/logos/gison-logo.png',
        productIds: [],
        spec: 'PNEUMATIC',
        division: 'hardware'
    },
    'dewalt': {
        id: 'dewalt',
        name: 'Dewalt',
        description: 'High-performance power tools for construction and manufacturing.',
        image: '/images/logos/dewaltlogoo.png',
        productIds: [],
        spec: 'POWER_TOOLS',
        division: 'hardware'
    },
    'makita': {
        id: 'makita',
        name: 'Makita',
        description: 'Japanese engineering excellence in power tools.',
        image: '/images/logos/makita.png',
        productIds: [],
        spec: 'POWER_TOOLS',
        division: 'hardware'
    },
    'aeg': {
        id: 'aeg',
        name: 'AEG',
        description: 'Innovative power tools and solutions for professional craftsmanship.',
        image: '/images/logos/AEGlogog.png',
        productIds: [],
        spec: 'POWER_TOOLS',
        division: 'hardware'
    },
    'hitachi': {
        id: 'hitachi',
        name: 'Hitachi',
        description: 'Reliable power tools engineered for high performance and durability.',
        image: '/images/logos/hitachi-logo.png',
        productIds: [],
        spec: 'POWER_TOOLS',
        division: 'hardware'
    },
    'crown': {
        id: 'crown',
        name: 'Crown',
        description: 'Durable power tools and machinery for industrial environments.',
        image: '/images/logos/crownlogo.webp',
        productIds: [],
        spec: 'POWER_TOOLS',
        division: 'hardware'
    },
    'lg': {
        id: 'lg',
        name: 'LG',
        description: 'Advanced industrial solutions and HVAC systems from a global tech leader.',
        image: '/images/logos/lglogo.png',
        productIds: [],
        spec: 'INDUSTRIAL',
        division: 'hardware'
    },

    // --- APPLIANCES ---
    'haier': {
        id: 'haier',
        name: 'Haier',
        description: 'Global leader in home appliances and commercial climate control solutions.',
        image: '/images/logos/haierlogo.png',
        productIds: [
            'haier-duct-48btu',
            'haier-convertible-48btu',
            'haier-cassette-r410-kb',
            'haier-cabinet-24btu',
            'haier-cabinet-48btu',
            'haier-microwave-hmw-25mxp9',
            'haier-microwave-hmw-20mxp3',
            'haier-microwave-hmw-20mps',
            'haier-microwave-hmw-23200dg',
            'haier-microwave-hmw-28100dg',
            'haier-microwave-hmw-32300b',
            'haier-microwave-hmw-30afs',
            'haier-microwave-hgl-30100',
            'haier-microwave-hmn-45200esd',
            'haier-microwave-hmw-30afr',
            'haier-microwave-hmw-20dgs',
            'haier-microwave-hmn-62mx80',
            'haier-microwave-hmw-20mhes',
            'haier-microwave-hmw-20mpb',
            'haier-microwave-hmw-20dss',
            'haier-microwave-hmw-20mx11',
            'haier-microwave-hmw-20mx12',
            'haier-microwave-hmw-32300s'
        ],
        spec: 'HOME_APPLIANCES',
        division: 'appliances'
    },
    'gree': {
        id: 'gree',
        name: 'Gree',
        description: 'The world’s largest residential air conditioner manufacturer, known for quality and innovation.',
        image: '/images/logos/gree-logo.png',
        productIds: [
            'gree-airy-inverter-1.5ton',
            'gree-fairy-inverter-1ton',
            'gree-pular-inverter-1ton',
            'gree-lomo-series-non-inverter',
            'gree-water-dispenser-gw-jl500f',
            'gree-infrared-heater-geh-800b-g',
            'gree-floor-standing-i-shine-2ton',
            'gree-floor-standing-t-fresh-2ton-cool',
            'gree-air-purifier-ga-350-w1',
            'gree-air-purifier-ga-170-w1'
        ],
        spec: 'AIR_CONDITIONING',
        division: 'appliances'
    },
    'midea': {
        id: 'midea',
        name: 'Midea',
        description: 'Providing surprisingly friendly solutions for families with their high-tech appliances.',
        image: '/images/logos/midea-logo.png',
        productIds: ['midea-titan-inverter-1ton', 'midea-floor-standing-MFM-48HRDN1', 'midea-R-410-non-inverter', 'midea-xtreme-inverter-r410', 'midea-ceiling-exposed-r410'],
        spec: 'HOME_APPLIANCES',
        division: 'appliances'
    },
    'eco-star': {
        id: 'eco-star',
        name: 'Eco Star',
        description: 'A growing brand in Pakistan known for energy-efficient lifestyle solutions.',
        image: '/images/logos/ecostar-logo.webp',
        productIds: [
            'ecostar-novo-max-series',
            'ecostar-ario-max-series',
            'ecostar-emperor-series',
            'ecostar-duke-series',
            'ecostar-glacier-fsu-floor-standing',
            'ecostar-iceberg-fsu-floor-standing',
            'ecostar-novo-series-1.5ton',
            'ecostar-ario-series-1ton'
        ],
        spec: 'HOME_APPLIANCES',
        division: 'appliances'
    }
};
