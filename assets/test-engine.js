/* Readiness Test questions, weights and scoring. Edit with care: the review page uses the same rules. */
window.RWAI_DATA = {
 "areas": [
  {
   "key": "data",
   "name": "Data line",
   "weight": 30,
   "why": "Where confidential and personal information is most exposed."
  },
  {
   "key": "check",
   "name": "Checking",
   "weight": 30,
   "why": "Where mistakes reach the people who rely on your work."
  },
  {
   "key": "judge",
   "name": "Judgement",
   "weight": 25,
   "why": "The habit underneath the other three areas."
  },
  {
   "key": "disc",
   "name": "Disclosure",
   "weight": 15,
   "why": "Matters for trust, with less immediate risk."
  }
 ],
 "q": [
  {
   "n": 1,
   "area": "data",
   "opts": [
    [
     "Always",
     3,
     0
    ],
    [
     "Usually",
     2,
     0
    ],
    [
     "Sometimes",
     1,
     0
    ],
    [
     "Never, or I hadn't thought about it",
     0,
     0
    ]
   ],
   "fix": "Before you paste, swap names and addresses for placeholders such as Client A and Site B.",
   "stop": null,
   "mod": "Foundation Module 3: The Data Line You Must Not Cross"
  },
  {
   "n": 2,
   "area": "data",
   "opts": [
    [
     "Only ones my organisation has approved",
     3,
     0
    ],
    [
     "Mostly approved ones, sometimes my own account",
     1,
     0
    ],
    [
     "My own personal or free accounts",
     0,
     1
    ],
    [
     "I'm not sure which are approved",
     0,
     0
    ]
   ],
   "fix": "Use only the AI tools your organisation has approved. If you are not sure which they are, ask before your next deadline.",
   "stop": "Stop using personal or free AI accounts for work from today. Ask which tools your organisation has approved.",
   "mod": "Foundation Module 3: The Data Line You Must Not Cross"
  },
  {
   "n": 3,
   "area": "data",
   "opts": [
    [
     "All of it, so it has full context",
     0,
     1
    ],
    [
     "The email thread only",
     1,
     0
    ],
    [
     "I wouldn't use AI for this",
     2,
     0
    ],
    [
     "My own summary of the key points, with names removed and figures left out",
     3,
     0
    ]
   ],
   "fix": "Summarise the key points yourself, remove names and keep figures out of the prompt.",
   "stop": "Stop pasting whole email threads, spreadsheets and documents into AI tools. Write your own short summary first.",
   "mod": "Foundation Module 3: The Data Line You Must Not Cross"
  },
  {
   "n": 4,
   "area": "check",
   "opts": [
    [
     "Always",
     3,
     0
    ],
    [
     "Usually",
     2,
     0
    ],
    [
     "Sometimes",
     1,
     0
    ],
    [
     "Rarely",
     0,
     1
    ]
   ],
   "fix": "Trace every AI figure, date and reference back to its source before it leaves your desk.",
   "stop": "From your next piece of work, check every AI figure, date and reference against its source before it leaves your desk.",
   "mod": "Foundation Module 4: Check It Before You Ship"
  },
  {
   "n": 5,
   "area": "check",
   "opts": [
    [
     "Keep it, the AI summarised well",
     0,
     1
    ],
    [
     "Soften the wording a little",
     1,
     0
    ],
    [
     "Delete the paragraph",
     1,
     0
    ],
    [
     "Change it back to \"may\", then check the rest of the draft for the same mistake",
     3,
     0
    ]
   ],
   "fix": "Watch for AI turning \"may\" into \"has\". Keep the uncertainty that was in your notes.",
   "stop": "Go back through your recent AI-assisted work and look for \"confirmed\", \"approved\" or \"has been\" that your notes do not support.",
   "mod": "Foundation Module 4: Check It Before You Ship"
  },
  {
   "n": 6,
   "area": "check",
   "opts": [
    [
     "The same quick look for everything",
     1,
     0
    ],
    [
     "A full check on everything, every time",
     2,
     0
    ],
    [
     "More checking when a client, regulator or court will rely on it",
     3,
     0
    ],
    [
     "I don't have a consistent approach",
     0,
     0
    ]
   ],
   "fix": "Match your checking to the reader: a glance for your own notes, all three checks for anything others will rely on.",
   "stop": null,
   "mod": "Foundation Module 4: Check It Before You Ship"
  },
  {
   "n": 7,
   "area": "judge",
   "opts": [
    [
     "Always",
     3,
     0
    ],
    [
     "Usually",
     2,
     0
    ],
    [
     "Sometimes",
     1,
     0
    ],
    [
     "Not really",
     0,
     0
    ]
   ],
   "fix": "Before you open the tool, ask what happens if this output is wrong. That sets how careful you need to be.",
   "stop": null,
   "mod": "Foundation Module 1: What AI Actually Is"
  },
  {
   "n": 8,
   "area": "judge",
   "opts": [
    [
     "Strongly disagree",
     3,
     0
    ],
    [
     "Disagree",
     2,
     0
    ],
    [
     "Agree",
     0,
     0
    ],
    [
     "Strongly agree",
     0,
     1
    ]
   ],
   "fix": "Confident is not the same as correct. Read AI output for its claims, not its tone.",
   "stop": "Treat every AI answer as unchecked until you have checked it, however sure it sounds.",
   "mod": "Foundation Module 2: AI Confidence Isn't Accuracy"
  },
  {
   "n": 9,
   "area": "judge",
   "opts": [
    [
     "Me",
     3,
     0
    ],
    [
     "Whoever reviewed it",
     1,
     0
    ],
    [
     "Shared with the AI provider",
     0,
     0
    ],
    [
     "It depends on the tool",
     0,
     0
    ]
   ],
   "fix": "If your name is on the work, you own it, however it was drafted.",
   "stop": null,
   "mod": "Foundation Module 0: Why This Can't Wait"
  },
  {
   "n": 10,
   "area": "disc",
   "opts": [
    [
     "Yes, I follow a clear rule",
     3,
     0
    ],
    [
     "I decide case by case",
     1,
     0
    ],
    [
     "I've never thought about it",
     0,
     0
    ],
    [
     "I'd rather not mention it",
     0,
     0
    ]
   ],
   "fix": "Learn the three disclosure options and when each one applies.",
   "stop": null,
   "mod": "Foundation Module 5: When Do You Disclose AI Use?"
  },
  {
   "n": 11,
   "area": "disc",
   "opts": [
    [
     "Yes, confidently",
     3,
     0
    ],
    [
     "Roughly",
     2,
     0
    ],
    [
     "I'd struggle",
     1,
     0
    ],
    [
     "I'd avoid the question",
     0,
     0
    ]
   ],
   "fix": "Write your one-sentence AI statement: what you use it for, what never goes in, and how you check.",
   "stop": null,
   "mod": "Foundation Module 5: When Do You Disclose AI Use?"
  },
  {
   "n": 12,
   "area": "disc",
   "opts": [
    [
     "Always",
     3,
     0
    ],
    [
     "Only when asked",
     1,
     0
    ],
    [
     "Sometimes",
     1,
     0
    ],
    [
     "Never",
     0,
     0
    ]
   ],
   "fix": "Keep a short note of where AI was used in work other people rely on.",
   "stop": null,
   "mod": "Foundation Module 5: When Do You Disclose AI Use?"
  }
 ],
 "bands": [
  {
   "name": "Trusted",
   "lo": 85,
   "hi": 100,
   "msg": "You use AI the way clients and employers hope you do. The next step is making it visible with a recognised credential."
  },
  {
   "name": "Solid",
   "lo": 65,
   "hi": 84,
   "msg": "Strong habits with a few gaps. Close them before they cost you."
  },
  {
   "name": "Developing",
   "lo": 40,
   "hi": 64,
   "msg": "Good instincts, but some habits put your work at risk. The fixes are quick."
  },
  {
   "name": "At risk",
   "lo": 0,
   "hi": 39,
   "msg": "Some of your habits are putting your work at risk. These three steps fix the biggest ones."
  }
 ],
 "cappedMsg": "Your habits are strong, but one of them undermines the rest. Fix that first.",
 "courses": {
  "Foundation": {
   "why": "Start with the free Foundation course. It earns 1.5 CPD credits.",
   "url": "https://www.responsiblewithai.com"
  },
  "Practitioner": {
   "why": "Strong habits. Practitioner turns them into a repeatable way of working.",
   "url": "https://www.responsiblewithai.com"
  },
  "Reviewer": {
   "why": "Strong habits, and you sign off other people's work. Reviewer is built for that role.",
   "url": "https://www.responsiblewithai.com"
  }
 },
 "profile": [
  {
   "id": "field",
   "q": "Your field",
   "opts": [
    "Business, operations or management",
    "Finance, accounting or legal",
    "Consulting or advisory",
    "Construction, property or engineering",
    "Health, care or education",
    "Public sector or charity",
    "Marketing, sales or communications",
    "Technology",
    "Other"
   ]
  },
  {
   "id": "role",
   "q": "Your role",
   "opts": [
    "I produce the work",
    "I review or sign off others' work",
    "I lead a team or firm"
   ]
  },
  {
   "id": "size",
   "q": "Organisation size",
   "opts": [
    "Just me",
    "2 to 49",
    "50 to 249",
    "250+"
   ]
  },
  {
   "id": "rics",
   "q": "Are you a member of a professional body?",
   "opts": [
    "Yes",
    "No",
    "Not sure"
   ]
  },
  {
   "id": "help",
   "q": "What would help most right now?",
   "opts": [
    "Using AI safely myself",
    "A recognised CPD credential",
    "Training my team",
    "Understanding the regulations"
   ]
  }
 ],
 "qtext": {
  "1": "Before you paste text into an AI tool, how often do you remove names, addresses and other identifying details?",
  "2": "Which AI tools do you use for work?",
  "3": "You want AI to help you write an update for a client or your manager. You have the full email thread, a spreadsheet of figures and your own notes. What goes into the AI tool?",
  "4": "When AI gives you a figure, date or reference, how often do you check it against the original source before using it?",
  "5": "Your notes say \"the budget may be approved next week\". The AI-written update says \"the budget has been approved\". What do you do?",
  "6": "How much checking do you give AI-assisted work?",
  "7": "Before using AI on a task, do you think about what happens if the output is wrong?",
  "8": "\"If an AI answer sounds confident and well written, it's probably right.\"",
  "9": "AI-assisted work goes out under your name and contains an error. Who is responsible?",
  "10": "Do you know when you're expected to tell a client or employer that AI helped with a piece of work?",
  "11": "If a client or your manager asked \"How did you use AI on this?\", could you answer in one or two sentences?",
  "12": "Do you keep any record of where AI was used in your work, such as a file note?"
 }
};

/* Responsible AI Readiness Test scoring. Shared by the review page and the live test.
   ans: {questionNumber: optionIndex}, profile: {role: index, help: index} */
function rwaiScore(D, ans, profile) {
  var W = {}; D.areas.forEach(function (a) { W[a.key] = a.weight; });
  var per = {}; D.areas.forEach(function (a) { per[a.key] = {pts: 0, max: 0}; });
  var items = [];
  D.q.forEach(function (q) {
    per[q.area].max += 3;
    var i = ans[q.n];
    if (i === undefined || i === null) return;
    var o = q.opts[i];
    per[q.area].pts += o[1];
    items.push({n: q.n, area: q.area, pts: o[1], red: !!o[2], fix: q.fix, stop: q.stop || q.fix, mod: q.mod});
  });
  var pct = {}, total = 0;
  D.areas.forEach(function (a) { pct[a.key] = per[a.key].max ? per[a.key].pts / per[a.key].max * 100 : 0; total += pct[a.key] * a.weight / 100; });
  total = Math.round(total);
  var band = D.bands.filter(function (b) { return total >= b.lo && total <= b.hi; })[0];
  var bandMsg = band.msg, capped = false;
  var reds = items.filter(function (x) { return x.red; }).sort(function (a, b) { return (W[b.area] - W[a.area]) || (a.n - b.n); });
  if (reds.length && (band.name === 'Trusted' || band.name === 'Solid')) {
    band = D.bands.filter(function (b) { return b.name === 'Developing'; })[0];
    bandMsg = D.cappedMsg; capped = true;
  }
  var gaps = items.filter(function (x) { return x.pts < 3; }).sort(function (a, b) {
    return (b.red - a.red) || (a.pts - b.pts) || (W[b.area] - W[a.area]) || (a.n - b.n);
  });
  var fixes = [];
  if (reds.length || band.name === 'At risk') {
    var first = reds[0] || gaps[0];
    if (first) {
      fixes.push({kind: first.red ? 'stop' : 'habit', text: first.red ? first.stop : first.fix, mod: first.mod, n: first.n, red: first.red});
      var more = (reds.length > 1 || gaps.length > 2) ? ' It also covers the other gaps your answers showed.' : '';
      fixes.push({kind: 'foundation', text: 'Start the free Foundation course. Begin with ' + first.mod.split(':')[0].replace('Foundation ', '') + ', which covers exactly this.' + more, mod: first.mod});
      var next = gaps.filter(function (g) { return g.n !== first.n; })[0];
      if (next) fixes.push({kind: next.red ? 'stop' : 'habit', text: next.red ? next.stop : next.fix, mod: next.mod, n: next.n, red: next.red});
    }
  } else {
    fixes = gaps.slice(0, 3).map(function (g) { return {kind: 'habit', text: g.fix, mod: g.mod, n: g.n, red: g.red}; });
  }
  var role = profile && profile.role, help = profile && profile.help;
  var course = 'Foundation', why = D.courses.Foundation.why;
  if (total >= 65 && !capped && role === 1) { course = 'Reviewer'; why = D.courses.Reviewer.why; }
  else if (total >= 65 && !capped) { course = 'Practitioner'; why = D.courses.Practitioner.why; }
  var lowest = D.areas.slice().sort(function (a, b) { return pct[a.key] - pct[b.key]; })[0];
  return {pct: pct, total: total, band: band, bandMsg: bandMsg, capped: capped, reds: reds, fixes: fixes,
          course: course, courseWhy: why, orgLead: role === 2 || help === 2, lowestArea: lowest.name};
}
