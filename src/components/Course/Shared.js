const terms = { F: 'Fall', W: 'Winter', S: 'Spring'};
const meetsPat = /^ *((?:M|Tu|W|Th|F)+) +(\d\d?):(\d\d) *[ -] *(\d\d?):(\d\d) *$/;

const timeParts = meets => {
    const [match, days, hh1, mm1, hh2, mm2] = meetsPat.exec(meets) || [];
    return !match ? {} : {
    days,
    hours: {
    start: hh1 * 60 + mm1 * 1,
    end: hh2 * 60 + mm2 * 1
    }
    };
    };

const getCourseTerm = course => (
terms[course.id.charAt(0)]
);

const buttonColor = selected => (
selected ? 'success' : null
);

export {
    timeParts,
    terms,
    buttonColor,
    getCourseTerm
};