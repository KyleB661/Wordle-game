// *****Answers*****
const answers = ["aahed", "aalii", "aapas", "aargh", "aarti", "abaca", "abaci", "aback", "abacs", "abaft", "abaht", "abaka", "abamp", "aband", "abase", "abash", "abask", "abate", "abaya", "abbas", "abbed", "abbes", "abbey", "abbot", "abcee", "abeam", "abear", "abeat", "abeer", "abele", "abeng", "abers", "abets", "abeys", "abhor", "abide", "abies", "abius", "abjad", "abjud", "abled", "abler", "ables", "ablet", "ablow", "abmho", "abnet", "abode", "abohm", "aboil", "aboma", "aboon", "abord", "abore", "aborn", "abort", "about", "above", "abram", "abray", "abrim", "abrin", "abris", "absey", "absit", "abuna", "abune", "abura", "aburn", "abuse", "abuts", "abuzz", "abyes", "abysm", "abyss", "acais", "acara", "acari", "accas", "accha", "accoy", "accra", "acedy", "acene", "acerb", "acers", "aceta", "achar", "ached", "acher", "aches", "achey", "achoo", "acids", "acidy", "acies", "acing", "acini", "ackee", "acker", "acmes", "acmic", "acned", "acnes", "acock", "acoel", "acold", "acone", "acorn", "acral", "acred", "acres", "acrid", "acron", "acros", "acryl", "actas", "acted", "actin", "acton", "actor", "actus", "acute", "acyls", "adage", "adapt", "adats", "adawn", "adaws", "adays", "adbot", "addas", "addax", "added", "adder", "addin", "addio", "addle", "addra", "adead", "adeem", "adept", "adhan", "adhoc", "adieu", "adios", "adits", "adlib", "adman", "admen", "admin", "admit", "admix", "adnex", "adobe", "adobo", "adoon", "adopt", "adorb", "adore", "adorn", "adown", "adoze", "adrad", "adraw", "adred", "adret", "adrip", "adsum", "aduki", "adult", "adunc", "adust", "advew", "advts", "adyta", "adyts", "adzed", "adzes", "aecia", "aedes", "aeger", "aegis", "aeons", "aerie", "aeros", "aesir", "aevum", "afald", "afanc", "afara", "afars", "afear", "affix", "affly", "afion", "afire", "afizz", "aflaj", "aflap", "aflow", "afoam", "afoot", "afore", "afoul", "afret", "afrit", "afros", "after", "aftos", "again", "agals", "agama", "agami", "agamy", "agape", "agars", "agasp", "agast", "agate", "agaty", "agave", "agaze", "agbas", "agene", "agent", "agers", "aggag", "agger", "aggie", "aggri", "aggro", "aggry", "aghas", "agidi", "agila", "agile", "aging", "agios", "agism", "agist", "agita", "aglee", "aglet", "agley", "agloo", "aglow", "aglus", "agmas", "agoge", "agogo", "agone", "agons", "agony", "agood", "agora", "agree", "agria", "agrin", "agros", "agrum", "agued", "agues", "aguey", "aguna", "agush", "aguti", "ahead", "aheap", "ahent", "ahigh", "ahind", "ahing", "ahint", "ahold", "ahole", "ahull", "ahuru", "aidas", "aided", "aider", "aides", "aidoi", "aidos", "aiery", "aigas", "aight", "ailed", "aimag", "aimak", "aimed", "aimer", "ainee", "ainga", "aioli", "aired", "airer", "airns", "airth", "airts", "aisle", "aitch", "aitus", "aiver", "aixes", "aiyah", "aiyee", "aiyoh", "aiyoo", "aizle", "ajies", "ajiva", "ajuga", "ajupa", "ajwan", "akara", "akees", "akela", "akene", "aking", "akita", "akkas", "akker", "akoia", "akoja", "akoya", "aksed", "akses", "alaap", "alack", "alala", "alamo", "aland", "alane", "alang", "alans", "alant", "alapa", "alaps", "alarm", "alary", "alata", "alate", "alays", "albas", "albee", "albid", "album", "alcea", "alces", "alcid", "alcos", "aldea", "alder", "aldol"];
// ***********Variables************

const answer = Math.floor(Math.random() * answers.length); 

console.log(answer);

//***********Cached elements****************



// **********Functions************

// const getAnswer = (answers) => {
//     // console.log("Hi");
//     return Math.floor(Math.random() * answers.length);   
// }

const init = () => {
    // const answerIndex = getAnswer(answers);
    // const answer = answers[answerIndex];
    // console.log(`Random answer: ${answer}`);
}

init();

// To do:
//sort answer list? why wont it link with answers.js???? - using small portion within answers array for now
// updateBoard function - ?????
// Make keys functional and correspond with the letter clicked - Eventlistener - handleClick?
// row/guess functionality. would this have to be 2 seperate functions? i.e a counter that hits > row 6 === you lose?
//backspace function for the del
//sumbit function for Enter 


