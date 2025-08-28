// Trimmed to only relevant update areas: courses and necessary structures
let year = '2025';
let semester = 'Fall';

function School(code, name, courses) {
    this.code = code;
    this.name = name;
    this.courses = courses;
}

function short_name(school) {
    return school.name.split(' ').slice(2).join(' ');
}

function Course(name, nick, slot) {
    this.name = name;
    this.nick = nick;
    this.slot = slot;
}

let schools = {
    'SCS': new School('C', 'School of Chemical Sciences', []),
    'SBS': new School('B', 'School of Biological Sciences', []),
    'SPS': new School('P', 'School of Physical Sciences', []),
    'SMS': new School('M', 'School of Mathematical Sciences', []),
    'SCPS': new School('CS', 'School of Computer Sciences', []),
    'SHSS': new School('H', 'School of Humanities and Social Sciences', []),
    'CMRP': new School('MRP', 'Center for Medical and Radiation Physics', []),
    'SEPS': new School('EP', 'School of Earth and Planetary Sciences', [])
};

let courses = {
    // --- Biology ---
    'B201': new Course('Microbiology (LH1)', 'MicroBio', 'B'),
    'B202': new Course('Biochemistry (LH1)', 'Biochem', 'D'),
    'B203': new Course('Evolutionary Biology (LH1)', 'EvoBio', 'F'),
    
    'B301': new Course('Animal Physiology (LH1)', 'Animal Physio', 'C'),
    'B302': new Course('Plant Physiology (LH1)', 'Plant Physio', 'A'),
    'B303': new Course('Ecology (LH2)', 'Ecology', 'B'),

    // 'B341': new Course('Animal Physiology Lab (GHI)', 'Animal Phys Lab', 'GHI'),
    // 'B342': new Course('Plant Physiology Lab (GHI)', 'Plant Phys Lab', 'GHI'),
    'B402': new Course('Developmental Biology (B3)', 'DevBio', 'D'),
    'B405': new Course('Bio-techniques (B3)', 'Biotech', 'C'),
    'B406': new Course('Introductory Biophysics (B3)', 'Biophys', 'A'),
    
    'B452': new Course('Genetic Engineering (B6)', 'GenEng', 'A'),
    'B455': new Course('Enzymology (B4)', 'Enzymo', 'B'),
    'B457': new Course('Chemical Biology (B5)', 'ChemBio', 'A'),
    'B464': new Course('Neurobiology (B4)', 'Neuro', 'E'),
    'B551': new Course('Advanced Molecular Biology (B5)', 'Adv MolBio', 'B'),
    'B552': new Course('Advanced Immunology (B6)', 'Adv Immuno', 'F'),

    // --- Chemistry ---
    'C201': new Course('Basic Inorganic Chemistry (LH2)', 'Inorganic', 'D'),
    'C203': new Course('Organic Mechanism (LH2)', 'Organic', 'C'),
    'C207': new Course('Math Methods for Chemists (LH2)', 'MMC', 'A'),
    
    'C301': new Course('Physical Organic Chemistry (LH3)', 'POC', 'B'),
    'C302': new Course('Mol. Spectroscopy & GT (C6)', 'MolSpec', 'A'),
    'C307': new Course('Thermo and Electrochemistry (LH2)', 'Thermo', 'E'),
    
    'C401': new Course('Physical Methods in Chem II (LH3)', 'PMC2', 'A'),
    'C403': new Course('Heterocycles & Natural Prod (LH1)', 'Hetero', 'E'),
    'C552': new Course('Solid State Chemistry (LH3)', 'SSC', 'C'),
    'C563': new Course('Molecular Reaction Dynamics (C5)', 'MRD', 'B'),
    'C566': new Course('Catalysis and Mechanisms (C6)', 'Catalysis', 'B'),

    // --- Computer Science ---
    'CS301': new Course('Design and Analysis of Algorithms (M4)', 'Algo', 'J'),
    'CS452': new Course('Algorithmic Coding Theory (M2)', 'AlgoCode', 'J'),
    'CS454': new Course('Linear Programming & Convex Optimization (M2)', 'LP&CO', 'B'),
    'CS456': new Course('Computational Geometry (M2)', 'CompGeo', 'K'),

    // --- Humanities ---
    'H225': new Course('Introduction to Psychology (LH5)', 'Psych', 'K2'),
    'H238': new Course('Life in Urban World (LH5)', 'Urban', 'J1'),
    'H205': new Course('Environmental Economics (LH5)', 'EnvEcon', 'K1'),

    // --- Mathematics ---
    'M201': new Course('Real Analysis (M5)', 'Real', 'C'),
    'M203': new Course('Discrete Mathematics (M5)', 'DM', 'F'),
    'M205': new Course('Linear Algebra (M5)', 'LinAl', 'A'),
    'M207': new Course('Number Theory (M3)', 'NT', 'B'),

    'M302': new Course('Rings and Modules (M5)', 'R&M', 'D'),
    'M303': new Course('Differential Equations (M3)', 'DE', 'J'),
    'M305': new Course('Number Theory (M3)', 'NT', 'B'),
    'M306': new Course('Calc. of Several Vars. (M4)', 'CSV', 'F'),
    
    'M401': new Course('Functional Analysis (M5)', 'Fun Anal', 'G'),
    'M405': new Course('Topology (M4)', 'Topology', 'D'),
    
    'M478': new Course('Adv PDEs (M2)', 'APDE', 'B'),
    'M455': new Course('Intro to Stochastic Processes (M4)', 'ISP', 'B'),
    'M484': new Course('Commutative Algebra (M5)', 'CA', 'B'),
    'M555': new Course('Harmonic Analysis (M1)', 'Harmonic', 'I'),
    'M561': new Course('Elliptic Curves (M4)', 'Elliptic', 'A'),
    'M463': new Course('Finite Fields (M5)', 'FiniteFields', 'I'),

    // --- Physics ---
    'P201': new Course('Classical Mechanics (CL-107)', 'CM', 'A'),
    'P205': new Course('Electromagnetism (CL-107)', 'EM', 'D'),
    'P203': new Course('Mathematical Methods 1 (CL-107)', 'MM1', 'E'),
    'P241': new Course('Electronics - Theory + Laboratory (CL-107)', 'Electronics', 'C'),

    'P302': new Course('Statistical Mechanics (LH5)', 'StatMech', 'D'),
    'P303': new Course('Quantum Mechanics II (CL-127)', 'QM2', 'A'),
    'P304': new Course('Special Relativity (LH5)', 'STR', 'B'),


    'P401': new Course('Classical Mechanics II (CL-126)', 'CM2', 'E'),
    'P405': new Course('Atoms Molecules Radiation (CL-127)', 'AMR', 'C'),
    'P453': new Course('Quantum Field Theory I (CL-108)', 'QFT1', 'F'),
    'P455': new Course('Phase Transitions (CL-108)', 'PhaseTrans', 'D'),
    'P468': new Course('Magnetism & Superconductivity (CL-109)', 'Magnetism', 'D'),
    'P473': new Course('Experimental Techniques (CL-127)', 'ExpTech', 'A'),
    'P477': new Course('QGP & Nucleus Collisions (CL-127)', 'QGP', 'D'),


    // --- CMRP ---
    'MRP511': new Course('Classical Mechanics (CL-001)', 'CM', 'A'),
    'MRP512': new Course('Stat Mech & Thermo (CL-001)', 'SMThermo', 'B'),
    'MRP513': new Course('Math Physics (CL-001)', 'MathPhys', 'C'),
    'MRP514': new Course('Electrodynamics (CL-001)', 'Electro', 'D'),
    'MRP611': new Course('Rad Physics & Generators (CL-002)', 'RadGen', 'A'),
    'MRP612': new Course('Radiological Math (CL-002)', 'RadMath', 'B'),
    'MRP613': new Course('Rad Dosimetry (CL-002)', 'RadDosi', 'C'),
    'MRP614': new Course('Rad Detectors (CL-002)', 'RadDetec', 'D'),


    'EP303' : new Course('Earth Structure and Dynamics (LH1)', 'EarthDyn', 'K'),

};

for (let course in courses) {
    for (let school in schools) {
        if (schools[school].code === course.match(/^[^0-9]*/)[0]) {
            schools[school].courses.push(course);
        }
    }
}

// Colorblindness-friendly color palette from: https://davidmathlogic.com/colorblind/
// let colors = [
//     '#117733',
//     '#44aa99',
//     '#d55e00',
//     '#88ccee',
//     '#0072b2',
//     '#ddcc77',
//     '#cc6677',
//     '#aa4499',
//     '#882255',
//     '#e69f00'
// ];


let colors = [
    "#1f77b4",  // tab:blue
    "#ff7f0e",  // tab:orange
    "#2ca02c",  // tab:green
    "#d62728",  // tab:red
    "#9467bd",  // tab:purple
    "#8c564b",  // tab:brown
    "#e377c2",  // tab:pink
    "#7f7f7f",  // tab:gray
    "#bcbd22",  // tab:olive
    "#17becf",   // tab:cyan
]

let slots = {  // only used for ICS generation
    'A': [
        ["Monday", "08:30 am", "09:30 am"],
        ["Tuesday", "9:30 am", "10:30 am"],
        ["Wednesday", "10:30 am", "11:30 am"],
        ["Thursday", "11:30 am", "12:30 pm"],
    ],
    'B': [
        ["Monday", "09:30 am", "10:30 am"],
        ["Tuesday", "10:30 am", "11:30 am"],
        ["Wednesday", "11:30 am", "12:30 pm"],
        ["Thursday", "01:30 pm", "02:30 pm"],
    ],
    'C': [
        ["Monday", "10:30 am", "11:30 am"],
        ["Tuesday", "11:30 am", "12:30 pm"],
        ["Wednesday", "01:30 pm", "02:30 pm"],
        ["Friday", "08:30 am", "09:30 am"],
    ],
    'D': [
        ["Monday", "11:30 am", "12:30 pm"],
        ["Tuesday", "01:30 pm", "02:30 pm"],
        ["Thursday", "08:30 am", "09:30 am"],
        ["Friday", "09:30 am", "10:30 am"],
    ],
    'E': [
        ["Monday", "01:30 pm", "02:30 pm"],
        ["Wednesday", "08:30 am", "09:30 am"],
        ["Thursday", "09:30 am", "10:30 am"],
        ["Friday", "10:30 am", "11:30 am"],
    ],
    'F': [
        ["Tuesday", "08:30 am", "09:30 am"],
        ["Wednesday", "09:30 am", "10:30 am"],
        ["Thursday", "10:30 am", "11:30 am"],
        ["Friday", "11:30 am", "12:30 pm"],
    ],
    'G': [
        ["Monday", "02:30 pm", "03:30 pm"],
        ["Tuesday", "02:30 pm", "03:30 pm"],
        ["Wednesday", "02:30 pm", "03:30 pm"],
        ["Thursday", "02:30 pm", "03:30 pm"],
    ],
    'H': [
        ["Monday", "03:30 pm", "04:30 pm"],
        ["Tuesday", "03:30 pm", "04:30 pm"],
        ["Wednesday", "03:30 pm", "04:30 pm"],
        ["Thursday", "03:30 pm", "04:30 pm"],
    ],
    'I': [
        ["Monday", "04:30 pm", "05:30 pm"],
        ["Tuesday", "04:30 pm", "05:30 pm"],
        ["Wednesday", "04:30 pm", "05:30 pm"],
        ["Thursday", "04:30 pm", "05:30 pm"],
    ],
    'J': [
        ["Monday", "05:30 pm", "06:30 pm"],
        ["Tuesday", "06:30 pm", "07:30 pm"],
        ["Wednesday", "05:30 pm", "06:30 pm"],
        ["Thursday", "06:30 pm", "07:30 pm"],
    ],
    'K': [
        ["Monday", "04:30 pm", "05:30 pm"],
        ["Tuesday", "06:30 pm", "07:30 pm"],
        ["Wednesday", "04:30 pm", "05:30 pm"],
        ["Thursday", "06:30 pm", "07:30 pm"],
    ],
    'J1': [
        ["Monday", "05:30 pm", "06:30 pm"],
        ["Wednesday", "05:30 pm", "06:30 pm"],
    ],
    'J2': [
        ["Tuesday", "06:30 pm", "07:30 pm"],
        ["Thursday", "06:30 pm", "07:30 pm"],

    ],
    'K1': [
        ["Monday", "04:30 pm", "05:30 pm"],
        ["Wednesday", "04:30 pm", "05:30 pm"],
    ],
    'K2': [
        ["Tuesday", "06:30 pm", "07:30 pm"],
        ["Thursday", "06:30 pm", "07:30 pm"],
    ],
}


const startdate = new Date();


// Note: slots object and colors array remain the same
// Update slot schedule if any new formats (e.g., GHI, F-I) need precise timing.
