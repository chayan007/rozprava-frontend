import moment from 'moment';

export function getSanitizedTime(time) {

    let timestamp = moment(time);

    let today = new Date();
    let todayDate = today.getDate();
    let todayHrs = today.getHours();
    let todayMins = today.getMinutes();

    let casePostedDate = timestamp.format('DD');
    let casePostedMonth = timestamp.format('MM');
    let casePostedYear = timestamp.format('YYYY');
    let casePostedHrs = timestamp.format('HH');
    let casePostedMins = timestamp.format('mm');

    if (todayDate == casePostedDate) {
        if (todayHrs == casePostedHrs) {
            return `${todayMins - casePostedMins}` + ' mins ago';
        } else {
            return `${Math.abs(todayHrs - casePostedHrs)}hr` + ' ' + `${Math.abs(todayMins - casePostedMins)}min` + ' ago';
        }
    }
    else {
        return casePostedHrs + ':' + casePostedMins + ' ' + timestamp.format('A') + ' on ' + casePostedDate + '/' + casePostedMonth + '/' + casePostedYear;
    }
}

