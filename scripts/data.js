let year = '2026';
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
    'SCS': new School(['CHE', 'C'], 'School of Chemical Sciences', []),
    'SBS': new School(['BIO', 'B'], 'School of Biological Sciences', []),
    'SPS': new School(['P', 'PHY'], 'School of Physical Sciences', []),
    'SMS': new School(['M', 'MAT'], 'School of Mathematical Sciences', []),
    'SCoS': new School(['CS', 'CSE'], 'School of Computer Sciences', []),
    'SHSS': new School(['H', 'HSS'], 'School of Humanities and Social Sciences', []),
    'CMRP': new School(['R', 'MRP'], 'Center for Medical and Radiation Physics', []),
    'SEPS':new School(['EP','EPS'],'School of Earth and Planetary Sciences',[]),
};

let courses = {

    /* Biology */

    'BIO201': new Course('Microbiology (LH-02)', 'Microbio', 'D'),
    'BIO202': new Course('Biochemistry (LH-01)', 'Biochem', 'F'),
    'B202': new Course('Biochemistry (LH-01)', 'Biochem', 'F'),
    'BIO203': new Course('Evolutionary Biology (LH-02)', 'EvoBio', 'A'),
    'B306': new Course('Evolutionary Biology (LH-02)', 'EvoBio', 'A'),
    'BIO301': new Course('Physiology-I (Animal) (LH-03)', 'Physio-I', 'A'),
    'BIO302': new Course('Physiology-II (Plant) (LH-02)', 'Physio-II', 'C'),
    'BIO303': new Course('Introductory Biophysics (LH-03)', 'Biophysics', 'E'),
    'B406': new Course('Introductory Biophysics (LH-03)', 'Biophysics', 'E'),
    'B402': new Course('Developmental Biology (LH-02)', 'DevBio', 'B'),
    'B405': new Course('Bio-techniques (LH-01)', 'BioTech', 'A'),
    'B455': new Course('Enzymology (B-3)', 'Enzymology', 'C'),
    'B551': new Course('Advanced Molecular Biology (B-4)', 'AdvMolBio', 'C'),
    'B556': new Course('Immune Regulation and Infection (B-5)', 'ImmReg', 'C'),
    'B452': new Course('Genetic Engineering (B-6)', 'GenEng', 'D'),
    'BIO602': new Course('Biotechniques (LH-01)', 'BioTech', 'A'),
    'BIO701': new Course('Advanced Molecular Biology (B-4)', 'AdvMolBio', 'C'),
    'BIO652': new Course('Genetic Engineering (B-6)', 'GenEng', 'D'),
    'BIO655': new Course('Enzymology (B-3)', 'Enzymology', 'C'),
    'BIO659': new Course('Plant Physiology (LH-02)', 'PlantPhys', 'C'),
    'BIO660': new Course('Developmental Biology (LH-02)', 'DevBio', 'B'),
    'BIO755': new Course('Immune Regulation and Infection (B-5)', 'ImmReg', 'C'),
    'BIO704': new Course('Introductory Biophysics (LH-03)', 'Biophysics', 'E'),
    'BIO705': new Course('Cellular Biochemistry (LH-01)', 'CellBiochem', 'F'),
    'BIO737': new Course('Evolutionary Biology (LH-02)', 'EvoBio', 'A'),
    'BIO708': new Course('Physiology (LH-03)', 'Physiology', 'A'),
    'BIO709': new Course('Bio-Techniques (LH-01)', 'BioTech', 'A'),
    'BIO712': new Course('Enzymology (B-3)', 'Enzymology', 'C'),
    'BIO717': new Course('Developmental Biology (LH-02)', 'DevBio', 'B'),
    'BIO718': new Course('Genetic Engineering (B-6)', 'GenEng', 'D'),
    'BIO721': new Course('Immune Regulation and Infection (B-5)', 'ImmReg', 'C'),

    
    /* Chemistry */

    'CHE201': new Course('Basic Inorganic Chemistry (C-6)', 'BasicInorg', 'F'),
    'C201': new Course('Basic Inorganic Chemistry (C-6)', 'BasicInorg', 'F'),
    'CHE203': new Course('Reaction Mechanism in Organic Chemistry (C-6)', 'ReactMech', 'D'),
    'C203': new Course('Reaction Mechanism in Organic Chemistry (C-6)', 'ReactMech', 'D'),
    'CHE205': new Course('Mathematical Methods for Chemists (C-6)', 'MathMethods', 'A'),
    'C207': new Course('Mathematical Methods for Chemists (C-6)', 'MathMethods', 'A'),
    'CHE301': new Course('Physical Organic Chemistry (LH-02)', 'PhysOrg', 'F'),
    'C301': new Course('Physical Organic Chemistry (LH-02)', 'PhysOrg', 'F'),
    'CHE303': new Course('Physical Methods in Chemistry I (LH-03)', 'PMC-I', 'J'),
    'C306': new Course('Physical Methods in Chemistry I (LH-03)', 'PMC-I', 'J'),
    'CHE305': new Course('Molecular Quantum Mechanics (C-6)', 'MolQM', 'B'),
    'C401': new Course('Physical Methods in Chemistry II (LH-01)', 'PMC-II', 'C'),
    'C403': new Course('Chemistry of Heterocycles and Natural Products (LH-01)', 'Heterocycles', 'D'),
    'C554': new Course('Crystallography (C-1)', 'Crystal', 'A'),
    'C559': new Course('Supramolecular Chemistry (C-2)', 'Supra', 'A'),
    'C560': new Course('Chemistry of Nanomaterials (C-1)', 'NanoChem', 'B'),
    'C566': new Course('Catalysis: Reaction Mechanism and Applications (C-1)', 'Catalysis', 'E'),
    'C568': new Course('Advanced Fluorescence Spectroscopy (C-2)', 'FluoroSpec', 'B'),
    'C571': new Course('Statistical Mechanics (C-3)', 'StatMech', 'B'),

    'CHE601': new Course('Physical Methods in Chemistry II (LH-01)', 'PMC-II', 'C'),
    'CHE603': new Course('Chemistry of Heterocycles and Natural Products (LH-01)', 'Heterocycles', 'D'),
    'CHE606': new Course('Physical Methods in Chemistry I (LH-03)', 'PMC-I', 'J'),
    'CHE654': new Course('Crystallography (C-1)', 'Crystal', 'A'),
    'CHE659': new Course('Supramolecular Chemistry (C-2)', 'Supra', 'A'),
    'CHE660': new Course('Chemistry of Nanomaterials (C-1)', 'NanoChem', 'B'),
    'CHE666': new Course('Catalysis: Reaction Mechanism and Applications (C-1)', 'Catalysis', 'E'),
    'CHE668': new Course('Advanced Fluorescence Spectroscopy (C-2)', 'FluoroSpec', 'B'),
    'CHE671': new Course('Statistical Mechanics (C-3)', 'StatMech', 'B'),

    'CHE701': new Course('Physical Organic Chemistry (LH-02)', 'PhysOrg', 'F'),
    'CHE702': new Course('Molecular Quantum Mechanics (C-6)', 'MolQM', 'B'),
    'CHE703': new Course('Chemistry of Main Group (s & p-block) Elements (C-3)', 'MainGroup', 'A'),

    'CHE801': new Course('Heterocyclic & Natural Product Chemistry (LH-01)', 'HeteroNP', 'D'),
    'CHE802': new Course('Organometallic Chemistry (C-2)', 'Organomet', 'C'),
    'CHE906': new Course('Crystallography (C-1)', 'Crystal', 'A'),
    'CHE911': new Course('Supramolecular Chemistry (C-2)', 'Supra', 'A'),
    'CHE912': new Course('Chemistry of Nanomaterials (C-1)', 'NanoChem', 'B'),
    'CHE918': new Course('Catalysis: Reaction Mechanism and Applications (C-1)', 'Catalysis', 'E'),
    'CHE920': new Course('Advanced Fluorescence Spectroscopy (C-2)', 'FluoroSpec', 'B'),
    'CHE923': new Course('Statistical Mechanics (C-3)', 'StatMech', 'B'),

    /* Computer Science */

    'CSE601': new Course('Mathematics for Computer Science (M-2)', 'MathCS', 'C'),
    'CSE628': new Course('Advanced Data Structures (M-4)', 'AdvDS', 'D'),
    'CSE629': new Course('Linear Programming and Combinatorial Optimization (M-2)', 'LPCO', 'B'),
    'CSE660': new Course('Machine Learning (M-2)', 'ML', 'D'),
    'CSE700': new Course('Research Methodology and Research Publication Ethics', 'RMRPE', '-'),

    'CS454': new Course('Linear Programming and Combinatorial Optimization (M-2)', 'LPCO', 'B'),
    'CS455': new Course('Information Theory (M-2)', 'InfoTheory', 'A'),
    'CS460': new Course('Machine Learning (M-2)', 'ML', 'D'),

    /* Earth and Planetary Sciences */

    'EPS101': new Course('Earth and Environmental Science (LH-05)', 'EarthEnv', 'E'),
    'EP303': new Course('Structural Geology and Dynamics (B-7)', 'GeoDynamics', 'D'),
    'EPS305': new Course('Structural Geology and Dynamics (B-7)', 'GeoDynamics', 'D'),

    'EP603': new Course('Planetary Sciences (SEPS)', 'PlanetSci', 'C'),
    'EP654': new Course('Geochemistry and Geochronology (SEPS)', 'GeoChem', 'B'),
    'EP667': new Course('Atmospheric Boundary Layer Meteorology and Air Pollution Modeling (SEPS)', 'ABLM', 'A'),

    /* Humanities */

    'HSS109': new Course('Technical Communication (LH-05)', 'TechComm', 'F'),
    'HSS205': new Course('Environmental Economics and Environmental Impact Assessment (M-4)', 'EnvEco', 'B'),
    'HSS210': new Course('The City in Modern Fiction (LH-02)', 'CityFiction', 'J'),
    'HSS225': new Course('Introduction to Psychology (LH-05)', 'Psychology', 'K'),
    'HSS238': new Course('Life & Community in Urban World (M-5)', 'UrbanLife', 'B'),

    'HSS613': new Course('Issues in Public Finance (HSS)', 'PublicFinance', 'C'),
    'HSS633': new Course('The Idea of the Nation in Indian English Fiction (HSS)', 'NationFiction', 'B'),
    'HSS634': new Course('Black Intellectual Traditions and the Narratives of Race in America (HSS)', 'RaceAmerica', 'A'),
    'HSS636': new Course('Translation and Culture: Issues and Perspectives (HSS)', 'Translation', 'D'),
    'HSS671': new Course('Classical Sociological Theory (HSS)', 'SocTheory', 'E'),
    'HSS676': new Course('Quantitative Research Method (HSS)', 'QuantResearch', 'I'),

    /* Mathematics */

    'MAT201': new Course('Real Analysis (M-1)', 'RealAnalysis', 'D'),
    'M201': new Course('Real Analysis (M-1)', 'RealAnalysis', 'D'),
    'MAT203': new Course('Discrete Mathematics (M-1)', 'DiscreteMath', 'A'),
    'MAT205': new Course('Linear Algebra (M-1)', 'LinAlg', 'E'),
    'MAT207': new Course('Number Theory (M-1)', 'NumTheory', 'F'),
    'MAT301': new Course('Rings & Modules (M-1)', 'RingsModules', 'B'),
    'M302': new Course('Rings & Modules (M-1)', 'RingsModules', 'B'),
    'MAT303': new Course('Differential Equations (M-5)', 'DiffEq', 'A'),
    'M303': new Course('Differential Equations (M-5)', 'DiffEq', 'A'),
    'MAT305': new Course('Calculus of Several Variables (M-5)', 'CSV', 'E'),
    'M306': new Course('Calculus of Several Variables (M-5)', 'CSV', 'E'),
    'MAT307': new Course('Topology (M-5)', 'Topology', 'C'),
    'M401': new Course('Functional Analysis (M-2)', 'FuncAnalysis', 'E'),
    'M405': new Course('Topology (M-5)', 'Topology', 'C'),
    'M470': new Course('Commutative Algebra (M-3)', 'CommAlg', 'B'),
    'M472': new Course('Advanced Probability (M-5)', 'AdvProb', 'D'),
    'M552': new Course('Analytic Number Theory (M-5)', 'ANT', 'I'),
    'M554': new Course('Ergodic Theory (M-3)', 'Ergodic', 'A'),
    'M457': new Course('Algebraic Graph Theory (M-4)', 'AlgGraph', 'A'),
    'M451': new Course('Advanced Complex Analysis (M-5)', 'AdvCA', 'G'),
    'M555': new Course('Harmonic Analysis (M-5)', 'Harmonic', 'H'),
    'MAT601': new Course('Algebra I (M-3)', 'AlgebraI', 'F'),
    'MAT603': new Course('Analysis I (M-3)', 'AnalysisI', 'E'),
    'MAT605': new Course('Topology I (M-3)', 'TopologyI', 'D'),
    'MAT602': new Course('Algebra II (M-4)', 'AlgebraII', 'H'),
    'MAT604': new Course('Analysis II (M-4)', 'AnalysisII', 'C'),
    'MAT607': new Course('Complex Analysis (M-5)', 'ComplexAnalysis', 'G'),
    'MAT701': new Course('Linear Algebra (M-4)', 'LinAlg', 'G'),
    'MAT702': new Course('Mathematical Analysis (M-3)', 'MathAnalysis', 'H'),
    'MAT703': new Course('Number Theory (M-1)', 'NumTheory', 'F'),
    'MAT704': new Course('Differential Equations (M-5)', 'DiffEq', 'A'),
    'MAT705': new Course('Calculus of Several Variables (M-5)', 'CSV', 'E'),
    'MAT801': new Course('Functional Analysis (M-2)', 'FuncAnalysis', 'E'),
    'MAT802': new Course('Module Theory (M-2)', 'ModuleTheory', 'F'),
    'MAT803': new Course('Topology (M-5)', 'Topology', 'C'),
    'MAT877': new Course('Commutative Algebra (M-3)', 'CommAlg', 'B'),
    'MAT868': new Course('Advanced Probability (M-5)', 'AdvProb', 'D'),
    'MAT879': new Course('Analytic Number Theory (M-5)', 'ANT', 'I'),
    'MAT881': new Course('Ergodic Theory (M-3)', 'Ergodic', 'A'),
    'MAT856': new Course('Algebraic Graph Theory (M-4)', 'AlgGraph', 'A'),
    'MAT852': new Course('Advanced Complex Analysis (M-5)', 'AdvCA', 'G'),
    'MAT882': new Course('Harmonic Analysis (M-5)', 'Harmonic', 'H'),

    /* Physics */

    'PHY201': new Course('Classical Mechanics (CL-107)', 'ClassMech', 'A'),
    'P201': new Course('Classical Mechanics (CL-107)', 'ClassMech', 'A'),
    'PHY203': new Course('Mathematical Methods-I (CL-107)', 'MathMethods-I', 'C'),
    'P203': new Course('Mathematical Methods-I (CL-107)', 'MathMethods-I', 'C'),
    'PHY205': new Course('Electronics-I (CL-107)', 'Electronics-I', 'F'),
    'P205': new Course('Electronics-I (CL-107)', 'Electronics-I', 'F'),
    'PHY301': new Course('Statistical Mechanics (CL-109)', 'StatMech', 'D'),
    'P302': new Course('Statistical Mechanics (CL-109)', 'StatMech', 'D'),
    'PHY302': new Course('Quantum Mechanics-II (CL-109)', 'QM-II', 'B'),
    'P303': new Course('Quantum Mechanics-II (CL-109)', 'QM-II', 'B'),
    'PHY303': new Course('Electronics-II (CL-109)', 'Electronics-II', 'E'),
    'P304': new Course('Electronics-II (CL-109)', 'Electronics-II', 'E'),
    'P453': new Course('Nuclear and Particle Physics (CL-127)', 'NPP', 'A'),
    'P454': new Course('Atomic and Molecular Physics (CL-127)', 'AMP', 'C'),
    'P455': new Course('Advanced Quantum Mechanics (CL-127)', 'AdvQM', 'D'),
    'P456': new Course('General Theory of Relativity (CL-109)', 'GTR', 'F'),
    'P458': new Course('Lasers and Nonlinear Optics (CL-127)', 'LaserNLO', 'B'),
    'P459': new Course('Condensed Matter Physics (CL-109)', 'CMP', 'E'),
    'P460': new Course('Particle Physics (CL-127)', 'ParticlePhy', 'G'),
    'P461': new Course('Astrophysics and Cosmology (CL-109)', 'AstroCosmo', 'H'),
    'PHY601': new Course('Classical Mechanics (CL-107)', 'ClassMech', 'A'),
    'PHY602': new Course('Quantum Mechanics (CL-109)', 'QM', 'B'),
    'PHY603': new Course('Electrodynamics (CL-107)', 'Electrodynamics', 'C'),
    'PHY604': new Course('Statistical Mechanics (CL-109)', 'StatMech', 'D'),
    'PHY701': new Course('Mathematical Methods-I (CL-107)', 'MathMethods-I', 'C'),
    'PHY702': new Course('Electronics-I (CL-107)', 'Electronics-I', 'F'),
    'PHY703': new Course('Quantum Mechanics-II (CL-109)', 'QM-II', 'B'),
    'PHY704': new Course('Electronics-II (CL-109)', 'Electronics-II', 'E'),
    'PHY801': new Course('Nuclear and Particle Physics (CL-127)', 'NPP', 'A'),
    'PHY802': new Course('Atomic and Molecular Physics (CL-127)', 'AMP', 'C'),
    'PHY803': new Course('Advanced Quantum Mechanics (CL-127)', 'AdvQM', 'D'),
    'PHY804': new Course('General Theory of Relativity (CL-109)', 'GTR', 'F'),
    'PHY805': new Course('Lasers and Nonlinear Optics (CL-127)', 'LaserNLO', 'B'),
    'PHY806': new Course('Condensed Matter Physics (CL-109)', 'CMP', 'E'),
    'PHY807': new Course('Particle Physics (CL-127)', 'ParticlePhy', 'G'),
    'PHY808': new Course('Astrophysics and Cosmology (CL-109)', 'AstroCosmo', 'H'),

    /* Centre for Medical and Radiation Physics */

    'MPH511': new Course('Applied Mathematical Physics (CL-001)', 'AppMathPhys', 'A'),
    'MPH512': new Course('Electrodynamics and Quantum Mechanics (CL-001)', 'EDQM', 'F'),
    'MPH513': new Course('Medical Electronics and Instrumentation (CL-001)', 'MedElectronics', 'C'),
    'MPH514': new Course('Anatomy, Physiology, Tumor Pathology and Genetics (CL-001)', 'AnatPhysTumor', 'D'),
    'MPH515': new Course('Solid State Physics and Radiation Detectors (CL-001)', 'SolidState', 'B'),
    'MPH516': new Course('Programming, Data Science, and Computational Methods for Medical Physics (CL-001)', 'MedComp', 'G'),
    'MPH518': new Course('Electronics and Radiation Instrumentation Lab (TL-001/TL-002)', 'RadInstrLab', 'G-I'),

    'MRP611': new Course('Radiation Physics & Radiation Generators (CL-002)', 'RadPhysics', 'A'),
    'MRP612': new Course('Radiological Mathematics (CL-002)', 'RadMath', 'B'),
    'MRP613': new Course('Radiation Dosimetry and Standardization (CL-002)', 'Dosimetry', 'C'),
    'MRP614': new Course('Radiation Detectors and Instrumentation (CL-002)', 'RadDetectors', 'D'),
    'MRP615': new Course('Medical Physics Laboratory-I (TL-101)', 'MedPhysLab', 'F-I'),

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
