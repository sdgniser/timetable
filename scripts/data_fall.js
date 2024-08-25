let year = '2024';
let semester = 'Fall';

function School(code, name, courses) {
    this.code = code;
    this.name = name;
    this.courses = courses;
}

function short_name(school) {
    return school.name.split(' ').slice(2).join(' ')
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
    // always use A1, A2, ... for degenerates of slot A
    /* Biology */
    'B201': new Course('Microbiology (B1)', 'MicroBio', 'A'),
    'B202': new Course('Biochemistry (B1)', 'Biochem', 'B'),

    'B301': new Course('Animal Physiology (B2)', 'Animal Physio', 'B'),
    'B302': new Course('Plant Physiology (B2)', 'Plant Physio', 'C'),
    'B303': new Course('Ecology (LH3)', 'Ecology', 'A'),
    'B353': new Course('Plant Developmental Biology (B2)', 'Plant DevBio', 'E'),
    'B354': new Course('Neurobiology (B4)', 'Neuro', 'C'),

    'B402': new Course('Developmental Biology (LH2)', 'DevBio', 'B'),
    'B405': new Course('Biotechniques (LH2)', 'Biotech', 'A'),
    'B406': new Course('Introductory Biophysics (LH3)', 'Biophys', 'C'),
    'B451': new Course('Advanced Cell Biology (B1)', 'Adv CellBio', 'D'),
    'B455': new Course('Enzymology (B5)', 'Enzymo', 'C'),
    'B466': new Course('Model organisms in Biomedical Research (B5)','BioMed','B'),
    // 'B465': new Course('Structural Biology (B5)', 'StrBio', 'B'),

    'B551': new Course('Advanced Molecular Biology (B3)', 'Adv MolBio', 'D'), 
    'B552': new Course('Advanced Immunology (B4)', 'Adv Immuno', 'A'), 
    'B555': new Course('Advanced Genetics (B6)', 'Adv Genetics', 'B'), 

    /* Chemistry */
    'C201': new Course('Basic Inorganic Chemistry (C6)', 'Inorganic', 'D'),
    'C203': new Course('Reaction Mechanism in Organic Chemistry (LH4)', 'Organic', 'C'),
    'C207': new Course('Mathematical Methods for Chemists (C6)', 'MMC', 'E'),

    'C301': new Course('Physical Organic Chemistry (C1)', 'POC', 'D'),
    'C302': new Course('Molecular Spectroscopy and Group Theory (C5)', 'MolSpec', 'B'),
    'C307': new Course('Thermodynamics and Electrochemistry (LH4)', 'Thermo', 'A'),

    'C401': new Course('Physical Methods in Chemsitry-II (C4)', 'PMC2', 'B'),
    'C403': new Course('Chemistry of Heterocycles and Natural Products (C5)', 'Hetero cycles', 'E'),

    // 'C552': new Course('Solid State Chemistry (LH4)', 'SSC', 'C'),
    // 'C557': new Course('Nuclear Magnetic Resonance (C5)', 'NMR', 'A'),
    'C560': new Course('Chemistry of Nanomaterials (C6)', 'Nano', 'A'),
    'C568': new Course('Advanced Fluoroscence Spectroscopy (LH1)', 'Fluoro Spec', 'A'),
    'C572': new Course('Frontiers in Organic Synthesis (C2)', 'OrgSynth', 'B'),

    /* Computer Science */
    'CS201': new Course('Theory of Computation (M1)', 'ToC', 'J'),
    'CS301': new Course('Design and Analysis of Algorithm (M4)', 'DAA', 'K'),
    'CS452': new Course('Algorithmic Coding Theory (M4)', 'AlgoCode', 'B'),
    'CS425': new Course('Randomized Algorithms (M5)', 'RA', 'K'),
    'CS453': new Course('Compexity Theory (M5)', 'CompTheory', 'A'),
    // 'CS461': new Course('Advanced Machine Learning (M5)', 'AdvML', 'J'),
    // 'CS452': new Course('Algorithmic Coding Theory (M5)', 'ACT', 'K'),

    /* Humanities */
    'H209': new Course('Speculative Fiction (LH5)', 'Spec Fiction', 'K1'),
    'H225': new Course('Introduction to Psychology (LH5)', 'Psycho', 'K2'),
    'H235': new Course('Sociology of Science & Technology (LH4)', 'Socio', 'J2'),
    'H238': new Course('Life & Communication in Urban (LH4)', 'Urban', 'J1'),

    /* Mathematics */
    'M201': new Course('Real Analysis (M1)', 'Real', 'A'),
    'M203': new Course('Discrete Mathematics (M1)', 'DM', 'B'),
    'M205': new Course('Linear Algebra (M1)', 'LinAl', 'C'),

    'M302': new Course('Rings and Modules (M2)', 'R&M', 'A'),
    'M303': new Course('Differential Equation (M2)', 'DE', 'E'),
    'M305': new Course('Number Theory (M2)', 'NT', 'B'),
    'M306': new Course('Calculus of Several Variables (M2)', 'CSV', 'C'),
    // 'M305': new Course('Statistics (M5)', 'Stats', 'B'),

    'M401': new Course('Functional Analysis (M3)', 'FA', 'F'),
    'M405': new Course('Topology (M3)', 'Topology', 'D'),
    'M484': new Course('Commutative Algebra (M3)', 'CA', 'B'),
    'M479': new Course('Random Graphs (M3)', 'RG', 'C'),
    'M453': new Course('Advanced Linear Algebra (M3)', 'ALA', 'A'),
    'M476': new Course('Lie Algebras (M3)', 'LA', 'E'),
    'M478': new Course('Advanced Partial Differential Equations (M2)', 'APDE', 'D'),
    // 'M466': new Course('Measure Theory (M5)', 'MT', 'A'),
    // 'M464': new Course('Information and Coding Theory (M4)', 'ICT', 'G'),
    // 'M459*': new Course('Statistics (M4)', 'Stat', 'B'),
    // 'M458': new Course('Algebraic Number Theory (M4)', 'ANT', 'I'),

    // 'M562': new Course('Brownian Motion and Stochastic Calculus (M5)', 'BM&SC', 'H'),
    // 'M556*': new Course('Lie Groups and Lie Algebra I (M4)', 'LG&LA', 'H'),

    /* Physics */
    'P201': new Course('Classical Mechanics I (P127)', 'CM1', 'A'),
    'P202': new Course('Mathematical Methods I (P127)', 'MM1', 'C'),
    'P207': new Course('Linear Optics (P127)', 'Lin Optics', 'B'),
    'P245': new Course('Basic Electronics Theory and Lab (P127)', 'Electro Lab', 'D'),

    'P302': new Course('Statistical Mechanics (P126)', 'StatMech', 'E'),
    'P303': new Course('Quantum Mechanics - II (P126)', 'QM2', 'D'),
    'P304': new Course('Special Theory of Relativity (P126)', 'STR', 'C'),

    'P401': new Course('Classical Mechanics II: Mechanics of Continuous Media (P107)', 'CM2', 'F'),
    'P405': new Course('Atoms, molecules and Radiation (P107)', 'AMR', 'E'),
    
    'P453': new Course('Quantum Field Theory I (P107)', 'QFT1', 'C'),
    // 'P451': new Course('Advanced Solid State Physics (P107)', 'ASS', 'B'),
    // 'P462': new Course('Introduction to Quantum Optics (P108)', 'IQO', 'C'),
    // 'P473': new Course('Experimental Techniques (LH1)', 'ExpTech', 'A'),
    // 'P474': new Course('Introduction to Cosmology (P127)', 'Cosmo', 'D'),
    'P460': new Course('Many Particle Physics (P126)', 'Many Particle', 'F'),
    'P463': new Course('Astronomy and Astrophysics (P127)', 'Astro', 'F'),
    'P469': new Course('Density Functional Theory of Atoms, Molecules and Solids (P156)', 'DFT', 'A'),
    'P472': new Course('Experimental High Energy Physics (P126)', 'Expt HEP', 'B'),
    'P476': new Course('Non-Equilibrium Statistical Mechanics (P127)', 'NE StatMech', 'D'),

    /* CMRP */
    '11-PHYS26-511-C': new Course('Classical Mechanics (CL-001)', 'CM', 'A'),
    '11-PHYS26-512-C': new Course('Statistical Mechanics and Thermodynamics (CL-001)', 'SM& Thermo', 'B'),
    '11-PHYS26-513-C': new Course('Mathematical Physics (CL-001)', 'MP', 'C'),
    '11-PHYS26-514-C': new Course('Electrodynamics (CL-001)', 'Electro', 'D'),

    'R211': new Course('Radiation Physics and Radiation Generators (CL-002)', 'RadGen', 'A'),
    'R212': new Course('Radiological Mathematics (CL-002)', 'RadMath', 'B'),
    'R213': new Course('Radiation Dosimetry and Standardization (CL-002)', 'RadDosi', 'C'),
    'R214': new Course('Radiation Detectors and Instrumentation (CL-002)', 'RadDetec', 'D'),
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
