function tellFortune(jobTitle, location, partner, numKids) {
    var fortune = 'You will be a ' + jobTitle + ' in ' + location  + ' and married to ' +
   partner  + ' ' + ' with ' + numKids + ' kids.';
    console.log(fortune);
    return fortune
}

tellFortune('teacher', 'united Kingdom', 'Abiodun', 4);
tellFortune('Doctor', 'Newyork', 'wunmi', 7);
tellFortune('software developer', 'Canada', 'baby', 12);