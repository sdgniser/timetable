let year = '2026';
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
    'SCS': new School(['CHE', 'C'], 'School of Chemical Sciences', []),
    'SBS': new School(['BIO', 'B'], 'School of Biological Sciences', []),
    'SPS': new School(['P', 'PHY'], 'School of Physical Sciences', []),
    'SMS': new School(['M', 'MAT'], 'School of Mathematical Sciences', []),
    'SCPS': new School(['CS', 'CSE'], 'School of Computer Sciences', []),
    'SHSS': new School(['H', 'HSS'], 'School of Humanities and Social Sciences', []),
    'CMRP': new School(['R', 'MRP'], 'Center for Medical and Radiation Physics', []),
    'SEPS':new School(['EP','EPS'],'School of Earth and Planetary Sciences',[]),
};

let courses = {
    // Biology
    'BIO204': new Course('Cell Biology (LH3)', 'CellBio', 'B'),
    'B204': new Course('Cell Biology (LH3)', 'CellBio', 'B'),
    'B206': new Course('Molecular Biology (LH3)', 'MolBio', 'A'),
    'BIO205': new Course('Molecular Biology (LH3)', 'MolBio', 'A'),
    'BIO206': new Course('Ecology(LH3)', 'Ecology', 'D'),

    'B305': new Course('Immunology (LH3)', 'Immuno', 'E'),
    'B306': new Course('Evolutionary Biology (LH3)', 'EvoBio', 'F'),
    'B307': new Course('Genetics (LH3)', 'Gene', 'C'),

    'B403': new Course('Bioinformatics and Computational Biology (B3)', 'BioInfo', 'E'),
    'B407': new Course('Quantitative and Systems Biology (B3)', 'SysBio', 'D'),

    'B463': new Course('Plant Developmental Biology(B3)', 'AdvBiochem', 'A'),
    //'B553': new Course('Infectious Disease Biology (B5)', 'InfectDis', 'D'),
    //'B462': new Course('Endocrinology (B6)', 'Endo', 'D'),
    'B554': new Course('Cancer Biology (B3)', 'CancerBio', 'C'),
    'B460': new Course('Virology (B4)', 'Virology', 'F'),
    'B465': new Course('Structural Biology (B4)', 'StructBio', 'E'),

    // Chemistry
    'CHE202': new Course('Reagents in Organic Synthesis (C6)', 'Organic', 'D'),
    'CHE204': new Course('Main Group and Organometallic Chemistry (C6)', 'Inorganic', 'C'),
    'CHE206': new Course('Thermodynamics and Electrochemistry(C6)', 'Thermo & Electo', 'B'),
    'C204': new Course('Reagents in Organic Synthesis (C6)', 'Organic', 'D'),
    'C205': new Course('Main Group and Organometallic Chemistry (C6)', 'Inorganic', 'C'),
    'C206': new Course('Quantum Chemistry - I (C2)', 'QC1', 'A'),

    'C307': new Course('Thermodynamics and Electrochemistry(C6)', 'Thermo & Electo', 'B'),
    'C304': new Course('Coorindation Chemistry (LH4)', 'CoordChem', 'D'),
    'C305': new Course('Chemical Binding (C6)', 'ChemBind', 'E'),
    'C306': new Course('Physical Methods in Chemistry I (LH2)', 'PMC', 'A'),

    'C402': new Course('Chemical Rate Processes (LH2)', 'ChemRate', 'B'),
    'C557': new Course('Nuclear Magnetic Resonance(C4)', 'NMR', 'D'),
    'C556': new Course('Advanced Bio-inorganic Chemistry (C6)', 'BioInorg', 'F'),
    //'C559': new Course('Supramolecular Chemistry (C4)', 'Supra', 'D'),
    'C565': new Course('Advanced Organic Chemistry (C4)', 'AdvOrgChem', 'F'),
    'C567': new Course('Advanced Main group Chemistry(C4)', 'AMC', 'C'),
    'C568': new Course('Advanced Fluorescence Spectroscopy (C1)', 'FluoroSpec', 'E'),


    // Computer Science
    //'CS101': new Course('Introduction to Programming (LH5)', 'IntroProg', 'C'),
    //'CS202': new Course('Discrete Mathematics (M4)', 'Discrete', 'J'),
    'CS457': new Course('Parameterized Algorithms (M3)', 'ParamAlgo', 'J'),
    'CS453': new Course('Complexity Theory (M2)', 'CT', 'K'),
    //'CS458': new Course('Secure Multiparty Computation (M4)', 'SMC', 'A'),

    // Mathematics
    'MAT202': new Course('Group Theory (M2)', 'Group-Theory', 'B'),
    'MAT204': new Course('Metric Spaces (M2)', 'Met-Space', 'D'),
    'MAT206': new Course('Probability Theory (M3)', 'Prob-Theory', 'A'),
    'MAT208': new Course('Graph Theory (M3)', 'Graph', 'C'),

    'M301': new Course('Lebesgue Integration (M3)', 'Lebesgue', 'D'),
    'M307': new Course('Field Theory (M3)', 'FT', 'E'),
    'M308': new Course('Complex Analysis (M3)', 'CA', 'F'),
    'M309': new Course('Graph Theory (M3)', 'Graph', 'C'),

    'M402': new Course('Representations of Finite Groups (M2)', 'FG', 'A'),
    'M406': new Course('Geometry of Curves and Surfaces (M3)', 'C&S', 'B'),

    'M451': new Course('Advanced Complex Analysis (M5)', 'AdvCA', 'D'),
    'M454': new Course('Partial Differential Equations (M5)', 'PDE', 'F'),
    'M485': new Course('Algebraic Topology (M2)', 'AlgTopo', 'F'),
    'M553': new Course('Classical Groups (M5)', 'CG', 'A'),
    'M560': new Course('Modular Forms of one Variable(M5)', 'Mod-Forms', 'C'),
    'M468': new Course('Operator Theory(M4)', 'Op-Theory', 'A'),
    'M464': new Course('Information and Coding Theory(M1)', 'ICT', 'A'),
    //'M456': new Course('Algebraic Geometry (M4)', 'AlgGeo', 'C'),
    'M404': new Course('Algebraic Topology (M2)', 'AlgTopo', 'F'),

    // Physics
    'PHY206': new Course('Electromagnetism II (CL-107)', 'EM2', 'D'),
    'PHY204': new Course('Mathematical Methods II (CL-107)', 'MM2', 'B'),
    'PHY202': new Course('Quantum Mechanics I (LH4)', 'QM1', 'C'),

    'P301': new Course('Electromagnetism II (CL-127)', 'EM2', 'B'),
    'P306': new Course('Introduction to Condensed Matter Physics (LH-4)', 'CMP', 'F'),
    'P307': new Course('Nuclei and Particles (LH-4)', 'Nuclei', 'E'),

    'P451': new Course('Advanced Solid-State Physics(CL-107)', 'Adv SSP', 'C'),
    'P457': new Course('General Theory of Relativity and Cosmology (CL-109)', 'GTR', 'B'),
    'P452': new Course('Computational Physics(CL-109)', 'Comp-Phy', 'A'),
    'P462': new Course('Introduction to Quantum Optics(CL-127)', 'Q.optics', 'D'),
    'P471': new Course('Quantum Information And Quantum Computation(CL-127)', 'Q.Comp', 'F'),
    'P474': new Course('Introduction to Cosmology(CL-127)', 'Cosmo', 'C'),


    /* CMRP */
    'MRP521': new Course('Quantum Mechanics (CL-001)', 'QM', 'A'),
    'MRP522': new Course('Electronics and Instrumentation (CL-001)', 'E&I', 'B'),
    'MRP523': new Course('Solid State Physics (CL-001)', 'SSP', 'C'),
    'MRP524': new Course('Nuclear Physics (CL-001)', 'NP', 'D'),

    /* Humanities */
    'HSS227': new Course('Organisational Behaviour (LH5)', 'OB', 'K2'),
    'HSS237': new Course('Science Communication and Citizenship (LH5)', 'SciComm', 'K1'),
    'HSS210': new Course('The City in Modern Fiction (LH5)', 'ModFiction', 'J2'),
    'HSS209': new Course('Speculative Fiction (LH5)', 'SpecFiction', 'J1'),

    /* Earth and Planetary Sciences*/
    'EP206': new Course('Fundamentals of Astronomy and Space Sciences(LH3)','AstroSpace','J'),
    'EPS670': new Course('Atmospheric Thermodynamics and Convention(SEPS)','ATC','D'),
    'EPS655': new Course('Geophysics(SEPS)','GeoPhy','B'),
    'EPS684': new Course('Planetary Atmosphere and Space Weather(SEPS)','PASW','A'),
    'EPS603':new Course('Planetary Sciences(SEPS)','P-Sci','C'),
    'EPS601': new Course('Earth Sciences(SEPS)','ES','E'),

};  //k1,J1->Monday and wednesday. k2,J2 -> for Tuesday and Thursday. 

for (let course in courses) {
    for (let school in schools) {
        if (schools[school].code.includes(course.match(/^[^0-9]*/)[0])) {
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
        ["Monday", "06:30 pm", "07:30 pm"],
        ["Wednesday", "06:30 pm", "07:30 pm"],
    ],
    'K2': [
        ["Tuesday", "05:30 pm", "06:30 pm"],
        ["Thursday", "05:30 pm", "06:30 pm"],
    ],
}


const startdate = new Date();
