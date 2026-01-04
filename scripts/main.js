let schoolTabs = document.getElementById('school-tabs');
let schoolList = document.getElementById('school-list');

let occupiedSlotsGlob = [];

const SEMESTER_NAME = "Spring Semester 2026";
const FILE_NAME = "timetable_spring26.pdf";

/* Generating the DOM tree containing the schools
 * and the list of courses */
for (let school in schools) {

    // Making the buttons for each school
    let schoolTab = document.createElement('button');
    schoolTab.textContent = school;
    schoolTab.addEventListener('click', () => {
        document.querySelectorAll('.school').forEach(b => b.classList.add('hidden'));  // Hide all schools
        let schoolCourses = document.getElementById(school);  // get the selected school
        schoolCourses.classList.remove('hidden');  // Show the selected school
        schoolCourses.classList.add('visible');  // Show the selected school
    });
    schoolTabs.appendChild(schoolTab);


    let schoolDiv = document.createElement('div');
    schoolDiv.classList.add('school');
    if (school !== 'SCS') schoolDiv.classList.add('hidden'); // only SCS is visible
    schoolDiv.id = school;

    let schoolHeader = document.createElement('h3');
    schoolHeader.textContent = schools[school].name;

    let schoolUl = document.createElement('ul');
    schoolList.appendChild(schoolDiv);
    schoolDiv.append(schoolHeader, schoolUl);

    schools[school].courses.forEach(course => {
        let courseLabel = document.createElement('label');
        courseLabel.htmlFor = course;
        courseLabel.textContent = course + ": " + courses[course].name;
        // courseLabel.innerHTML += "<strong>(" + courses[course].slot + ")</strong>";

        let courseLi = document.createElement('li');
        courseLi.classList.add('course');

        let courseCheckBox = document.createElement('input');
        courseCheckBox.type = 'checkbox';
        courseCheckBox.id = courseCheckBox.value = course;


        schoolUl.appendChild(courseLi);
        courseLi.append(courseCheckBox, courseLabel);
    });
}


/* A function that cleans the cells of the timetable */
function clean() {
    let slotsInTimetable = document.querySelectorAll('td:not(.lunch)');
    document.getElementById("legend").textContent = "";// Cleans legend

    slotsInTimetable.forEach(slot => {// Removes colors from cells
        slot.textContent = '';
        slot.style.backgroundColor = '#fff';
    });
}


/* To deal with conflicts like A and A1 */
function slotCompare(currentc, newc) {
    return currentc.length != newc.length ? currentc.charAt(0) === newc.charAt(0) : currentc === newc;
}


// Replaces the slots in the timetable with the selected course in that slot
function generate(nick) {
    clean();
    let courseCheckBoxes = document.querySelectorAll("input:not(#color)");
    let occupiedSlots = [];
    let legendItems = [];
    let slotMap = {};

    let h2leg = document.getElementById('h2leg');
    h2leg.classList.remove('hidden');
    h2leg.classList.add('visible');

    let addColors = document.getElementById("color").checked;

    for (const course of courseCheckBoxes) { // forEach doesn't stop inbetween thus multiple alerts and converted to for..of to avoid it!
        if (!course.checked) continue;
        let courseCode = course.id;
        let [courseName, courseNick, courseSlot] = Object.values(courses[courseCode]);
        let slotsArr = Array.isArray(courseSlot) ? courseSlot : [courseSlot];


        legendItems.push([slotsArr.join(','), courseCode, courseNick, courseName]);


        // Conflict detection

        for (const newSlot of slotsArr) {

            for (let i = 0; i < occupiedSlots.length; ++i) {
                if (!slotCompare(occupiedSlots[i], newSlot)) continue;

                alert(`Schedule conflict detected between ${slotMap[newSlot]} and ${courseCode} at ${newSlot}. Course selection may need a modification.`);
                return location.reload();
            }

            occupiedSlots.push(newSlot);
            slotMap[newSlot] = courseCode;

            let courseSlotInTimetable = document.querySelectorAll('td.' + newSlot);
            courseSlotInTimetable.forEach(slotInTimetable => {
                slotInTimetable.textContent = nick ? courseNick : courseCode;
            });
        }



    }

    // Coloring
    if (addColors) {
        occupiedSlots = occupiedSlots.sort();
        occupiedSlots.forEach((courseSlot, i) => {
            let courseSlotInTimetable = document.querySelectorAll('td.' + courseSlot);
            courseSlotInTimetable.forEach(slotInTimetable => {
                slotInTimetable.style.backgroundColor = colors[i];
            });
        });
    }

    // Legend
    legendItems = legendItems.sort((a, b) => a[0] > b[0] ? 1 : -1); // may be do .sort((a, b) => a[0] - b[0])

    legendItems.forEach((element, i) => {
        let listItem = document.createElement("li");
        listItem.textContent = "Slot " + element[0] + ": " + element[1] + " / " + element[2] + ":  " + element[3];
        if (addColors) listItem.style.color = colors[i];
        document.getElementById("legend").appendChild(listItem);
    });


    // Preparing for PDF generation
    occupiedSlotsGlob = legendItems.map(item => nick ? item[2] : item[1]);
}


function generatePdf() {
    let doc = new jspdf.jsPDF({
        orientation: 'landscape',
        unit: 'pt'
    });

    let notPainted = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
        '', 'Day', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
        '08:30', '09:30', '10:30', '11:30', '12:30', '13:30', '14:30', '15:30',
        '16:30', '17:30', '18:30', 'No Class', 'No', 'Lunch Break', 'Lunch'
    ];

    let centerX = doc.internal.pageSize.getWidth() / 2;
    doc.text(`Timetable for ${SEMESTER_NAME}`, centerX, 25, { align: 'center' });
    doc.autoTable({
        html: 'table',
        theme: 'plain',
        styles: {
            cellPadding: 10,
            fontSize: 12,
            lineColor: 10,
            lineWidth: .5,
            overflow: 'linebreak',
            halign: 'center',
            valign: 'middle'
        },
        // Coloring in PDF
        didParseCell(data) {
            let addColors = document.getElementById("color").checked;
            if (addColors && !notPainted.includes(data.cell.text[0])) {
                const indexOfColor = occupiedSlotsGlob.indexOf(data.cell.text[0]);
                if (indexOfColor !== -1 && indexOfColor < colors.length)
                    data.cell.styles.fillColor = colors[indexOfColor];
            }
        }
    });

    // Legend
    let finalY = doc.lastAutoTable.finalY + 30;
    doc.text('Legend', 40, finalY);
    doc.html(document.getElementById('legend'), {
        callback: function (doc) {
            doc.save(FILE_NAME);
        },
        x: 40,
        y: finalY + 7,
        html2canvas: {
            scale: 0.8,
        }
    });
}


function formatted_time_string(day, time) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const targetDayIndex = daysOfWeek.indexOf(day);
    const currentDayIndex = startdate.getDay();
    let dayDifference = (targetDayIndex - currentDayIndex + 7) % 7;
    const nextDate = new Date(startdate);
    nextDate.setDate(startdate.getDate() + dayDifference);
    const formattedDate = `${nextDate.getMonth() + 1}/${nextDate.getDate()}/${nextDate.getFullYear()}`;
    return `${formattedDate} ${time}`;
}


function generateICS() {
    var cal = ics();

    console.log("ICS file generated");
    console.log(occupiedSlotsGlob);  // list of selected course codes

    // if length of occupiedSlotsGlob is 0, then alert the user
    if (occupiedSlotsGlob.length == 0) {
        alert("Please Generate the timetable first!");
        return;
    }

    let location = "NISER";
    let rrule = {
        freq: 'WEEKLY',
        count: 20,
    };

    occupiedSlotsGlob.forEach(courseCode => {
        let [courseName, courseNick, courseSlot] = Object.values(courses[courseCode]);
        let slotsArr = Array.isArray(courseSlot) ? courseSlot : [courseSlot];

        console.log(`courseName=${courseName},\ncourseNick=${courseNick},\ncourseSlot=${courseSlot},\ncourseCode=${courseCode}`);

        let subject = `${courseCode}: ${courseName}`;
        let description = `Class for ${courseNick} at slot ${courseSlot}`;
        slotsArr.forEach(slot => {
            slots[slot].forEach(([day, start, end]) => {
                let begin = formatted_time_string(day, start);
                let finish = formatted_time_string(day, end);

                cal.addEvent(subject, description, location, begin, finish, rrule);
            });
        });

    })

    cal.download("timetable");

}

document.getElementById('gen-code').onclick = () => generate(false);
document.getElementById('gen-nick').onclick = () => generate(true);
document.getElementById('pdf').onclick = generatePdf;
document.getElementById('ics').onclick = generateICS;
document.getElementById('reset').onclick = () => location.reload(); 
