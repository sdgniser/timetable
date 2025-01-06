let year = '2025';
let semester = 'Spring';

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
    'CMRP': new School('R', 'Center for Medical and Radiation Physics', []),
};

let courses = {
    // Biology
    'B204': new Course('Cell Biology (LH2)', 'CellBio', 'F'),
    'B206': new Course('Molecular Biology (LH2)', 'MolBio', 'C'),
        
    'B305': new Course('Immunology (B3)', 'Immuno', 'A'),
    'B306': new Course('Evolutionary Biology (LH2)', 'EvoBio', 'D'),
    'B307': new Course('Genetics (B3)', 'Gene', 'E'),
    
    'B403': new Course('Bioinformatics and Computational Biology (LH2)', 'BioInfo', 'B'),
    'B407': new Course('Quantitative and Systems Biology (B3)', 'SysBio', 'F'),

    'B453': new Course('Advanced Biochemistry (B5)', 'AdvBiochem', 'C'),
    'B553': new Course('Infectious Disease Biology (B5)', 'InfectDis', 'D'),
    'B462': new Course('Endocrinology (B6)', 'Endo', 'D'),
    'B554': new Course('Cancer Biology (B6)', 'CancerBio', 'C'),
    'B460': new Course('Virology (LH02)', 'Virology', 'E'),
    'B465': new Course('Structural Biology (B5)', 'StructBio', 'D'),

    // Chemistry
    'C204': new Course('Reagents in Organic Synthesis (LH3)', 'Organic', 'E'),
    'C205': new Course('Main Group and Organometallic Chemistry (LH3)', 'Inorganic', 'A'),
    'C206': new Course('Quantum Chemistry - I (LH3)', 'QC1', 'B'),
    
    'C394': new Course('Coorindation Chemistry (LH1)', 'CoordChem', 'A'),
    'C305': new Course('Chemical Binding (LH3)', 'ChemBind', 'F'),
    'C306': new Course('Physical Methods in Chemistry I (LH3)', 'PMC', 'C'),
    'C402': new Course('Chemical Rate Processes (LH1)', 'ChemRate', 'B'),
    'C554': new Course('Crystallography (C5)', 'Crystallo', 'F'),
    'C556': new Course('Advanced Bio-inorganic Chemistry (C6)', 'BioInorg', 'E'),
    'C559': new Course('Supramolecular Chemistry (C4)', 'Supra', 'D'),
    'C565': new Course('Advanced Organic Chemistry (C5)', 'AdvOrgChem', 'D'),
    'C562': new Course('Polymer Chemistry (C6)', 'PolyChem', 'A'),
    'C568': new Course('Advanced Fluorescence Spectroscopy (C1)', 'FluoroSpec', 'D'),


    // Computer Science
    'CS101': new Course('Introduction to Programming (LH5)', 'IntroProg', 'C'),
    'CS202': new Course('Discrete Mathematics (M4)', 'Discrete', 'J'),
    'CS457': new Course('Parameterized Algorithms (M4)', 'ParamAlgo', 'K'),
    'CS461': new Course('Advanced Machine Learning (M5)', 'AdvML', 'K'),
    'CS458': new Course('Secure Multiparty Computation (M4)', 'SMC', 'A'),

    // Mathematics
    'M202': new Course('Group Theory (M3)', 'GrpTheory', 'F'),
    'M204': new Course('Metric Spaces (M3)', 'MetSpace', 'C'),
    'M206': new Course('Probability Theory (M3)', 'PT', 'B'),

    'M301': new Course('Lebesgue Integration (M1)', 'Lebesgue', 'B'),
    'M307': new Course('Field Theory (M1)', 'FT', 'F'),
    'M308': new Course('Complex Analysis (M1)', 'CA', 'D'),
    'M309': new Course('Graph Theory (M1)', 'Graph', 'H'),
    
    'M402': new Course('Representations of Finite Groups (M2)', 'FG', 'B'),
    'M406': new Course('Geometry of Curves and Surfaces (M2)', 'C&S', 'E'),
    
    'M451': new Course('Advanced Complex Analysis (M2)', 'AdvCA', 'C'),
    'M454': new Course('Partial Differential Equations (M5)', 'PDE', 'A'),
    'M485': new Course('Algebraic Topology (M2)', 'AlgTopo', 'A'),
    'M552': new Course('Analytic Number Theory (M5)', 'AnalyticNT', 'B'),
    'M462': new Course('Cryptology (M1)', 'Crypto', 'C'),
    'M483': new Course('Introduction to Manifolds (M3)', 'Manifolds', 'D'),
    'M472': new Course('Advanced Probability Theory (M2)', 'AdvPT', 'D'),
    'M456': new Course('Algebraic Geometry (M4)', 'AlgGeo', 'C'),

    // Physics
    'P204': new Course('Electromagnetism I (LH4)', 'EM1', 'E'),
    'P205': new Course('Mathematical Methods II (P107)', 'MM2', 'C'),
    'P206': new Course('Quantum Mechanics I (LH4)', 'QM1', 'D'),

    'P301': new Course('Electromagnetism II (P107)', 'EM2', 'B'),
    'P306': new Course('Introduction to Condensed Matter Physics (P107)', 'CMP', 'F'),
    'P307': new Course('Nuclei and Particles (P127)', 'Nuclei', 'E'),
    
    'P454': new Course('Particle Physics (P127)', 'ParticlePhys', 'D'),
    'P457': new Course('General Theory of Relativity and Cosmology (P127)', 'GTR', 'A'),
    'P461': new Course('Physics of Mesoscopic Systems (P107)', 'Mesoscopic', 'D'),
    'P466': new Course('Quantum and Nano-Electronics (P127)', 'NanoElec', 'C'),
    'P467': new Course('Non-Linear Physics, Chaos and Turbulence (P127)', 'NLP', 'B'),
    'P475': new Course('Special Topics in Quantum Mechanics (P127)', 'SpecQM', 'F'),

    /* CMRP */
    'R121': new Course('Quantum Mechanics (CL-001)', 'QM', 'A'),
    'R122': new Course('Electronics and Instrumentation (CL-001)', 'E&I', 'B'),
    'R123': new Course('Solid State Physics (CL-001)', 'SSP', 'C'),
    'R124': new Course('Nuclear Physics (CL-001)', 'NP', 'D'),

    /* Humanities */
    'H227': new Course('Organisational Behaviour (LH5)', 'OB', 'K2'),
    'H237': new Course('Science Communication and Citizenship (LH4)', 'SciComm', 'J'),
    'H210': new Course('The City in Modern Fiction (LH5)', 'ModFiction', 'K1'), 

};

for (let course in courses) {
    for (let school in schools) {
        if (schools[school].code === course.match(/^[^0-9]*/)[0]) {
            schools[school].courses.push(course);
        }
    }
}

console.log(schools);

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
