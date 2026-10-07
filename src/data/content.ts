export const STANFORD_DONOR_URL =
  'https://www.stanfordhealthcarelivedonors.org/';

export const STANFORD_EXPECT_URL =
  'https://stanfordhealthcare.org/medical-treatments/k/kidney-transplant-surgery/what-to-expect.html';

export const STANFORD_DONATION_URL =
  'https://stanfordhealthcare.org/medical-treatments/k/kidney-transplant-surgery/kidney-donation.html';

export const STANFORD_SCREENER_URL =
  'https://kidney-survey.stanfordhealthcarelivedonors.org/shc-transplant-kidney/donor-prereq-1/dialogs/landing-page.stanford?&markers=survey.ljs.language:en&?ljs=en';

export const MYTHS = [
  {
    myth: '"I need both kidneys to stay healthy."',
    mythDetail:
      'The human body functions perfectly well with one kidney. The remaining one adapts over time.',
    fact: 'You can live a full, healthy life with one kidney.',
    factDetail:
      'Millions of people — including tens of thousands of living donors — live normal, active lives on a single kidney. Stanford confirms your individual kidney health before any decision is made.',
  },
  {
    myth: '"I have to be a blood relative."',
    mythDetail:
      "Many assume only family members can donate. This simply isn't true — and it stops many potential donors from ever asking.",
    fact: 'Friends, acquaintances, and strangers can all donate.',
    factDetail:
      'Altruistic (non-directed) donors with no connection to the recipient are welcomed. What matters is your health, not your relationship.',
  },
  {
    myth: '"Wrong blood type means I can\'t help."',
    mythDetail:
      'Blood type incompatibility sounds like a closed door — but modern transplant programs have changed this completely.',
    fact: 'Paired exchange means even incompatible donors can help.',
    factDetail:
      "Your kidney goes to someone you are compatible with — and their donor's kidney goes to Mama Kim. Two people get transplants. Your willingness is what matters.",
  },
  {
    myth: '"Surgery is major — recovery takes months."',
    mythDetail:
      'The mental image of surgery is often far worse than the reality of modern donor procedures.',
    fact: 'Home in 2–3 days. Back to normal life in 4–6 weeks.',
    factDetail:
      "Minimally invasive laparoscopic surgery, ~3 hours. Stanford's outcomes consistently exceed national benchmarks. Most donors describe the experience as deeply positive.",
  },
  {
    myth: '"I\'ll have to pay large medical bills."',
    mythDetail:
      'Fear of financial burden stops many people from even starting the conversation.',
    fact: "The recipient's insurance typically covers all medical costs.",
    factDetail:
      "Evaluation, surgery, and follow-up care are generally covered. Stanford's financial coordinators verify this before any step. You only pay personal expenses like travel.",
  },
];

export const EVAL_STEPS = [
  {
    title: 'Phone Screening',
    tag: '~30 min · no commitment',
    body: "You initiate the process by calling Stanford's living donor coordinator at 650-498-8382 or completing the online screener. The team asks about your medical history, demographic info, and general health. This call is entirely confidential and carries zero obligation. Nothing moves forward without your explicit agreement.",
  },
  {
    title: 'Psychosocial Evaluation',
    tag: 'In-person or virtual',
    body: 'A transplant social worker meets with you — and sometimes your family — to assess your emotional readiness and confirm this decision is entirely your own, free from pressure or financial motivation. This step protects you. A transplant psychiatrist may also be involved in some cases.',
  },
  {
    title: 'Medical Evaluation',
    tag: 'Clinic visit · costs covered',
    body: "After compatibility results are received, you attend a clinic visit for a physical exam. Tests include blood and urine samples, a chest X-ray, and an EKG. This is also when the crossmatch test happens — a critical blood test that determines whether your cells and the recipient's immune system are compatible.",
  },
  {
    title: 'Surgical Evaluation',
    tag: 'Outpatient imaging',
    body: 'An ultrasound and CT scan allow the surgical team to view your kidneys and blood vessels — identifying which kidney is best to donate and confirming whether laparoscopic surgery is appropriate for your anatomy. This is the final step before a surgery date is set. You can stop at any point — no explanation needed.',
  },
];

export const CARE_TIMELINE = [
  {
    dot: 'primary',
    when: 'Surgery Day',
    title: '~3-hour minimally invasive procedure',
    desc: 'Hand-assisted laparoscopic surgery — incisions the size of a dime, kidney removed through a 3–4 inch opening. The donated kidney is transplanted into Mama Kim within hours of removal.',
  },
  {
    dot: 'primary',
    when: 'Days 1–3',
    title: 'Hospital stay: 2–3 days',
    desc: "You're monitored closely as your body adjusts. The team manages pain and ensures your remaining kidney is functioning well before discharge.",
  },
  {
    dot: 'peach',
    when: 'Week 2',
    title: 'First follow-up at Stanford',
    desc: "A wound-healing check and general health assessment. Your Independent Donor Advocate remains available — separate from the recipient's care team.",
  },
  {
    dot: 'sage',
    when: 'Weeks 4–6',
    title: 'Return to normal life',
    desc: 'Most donors resume normal activities within 4–6 weeks. Return to work depends on physical demands — typically 6 weeks for active roles.',
  },
  {
    dot: 'sage',
    when: '6 months · 1 year · 2 years',
    title: 'Long-term follow-up appointments',
    desc: 'Stanford schedules check-ins to confirm your remaining kidney is healthy. Most donors report no long-term health consequences. Donation does not shorten life expectancy.',
  },
];

export const STANFORD_STATS = [
  {
    value: '98.8%',
    label: 'Patient survival at 1 year — above national avg of 97.6%',
  },
  {
    value: '97.6%',
    label: 'Kidney survival at 1 year — above national avg of 93.8%',
  },
  {
    value: '90,000+',
    label: 'Americans on the kidney waitlist at any given time',
  },
  {
    value: '1960',
    label: "Year of California's first kidney transplant — at Stanford",
  },
];

export const STANFORD_INNOVATIONS = [
  {
    title: 'Desensitization (IVIG)',
    desc: "IVIG infusions help sensitized patients accept a kidney they'd otherwise reject. Stanford is one of few US centers with an active desensitization program.",
  },
  {
    title: 'ABO-Incompatible Transplants',
    desc: 'Plasmapheresis removes blood-type antibodies — making transplant possible between incompatible blood types.',
  },
  {
    title: 'Living Donor Mentor Program',
    desc: 'Stanford connects potential donors with past donors who share their real, unfiltered experience — no pressure, no scripts.',
  },
  {
    title: 'Muscle-Sparing Open Nephrectomy',
    desc: "For cases requiring open surgery, Stanford's muscle-sparing technique shortens recovery vs. traditional approaches.",
  },
];

export const FAQ_ITEMS = [
  {
    q: 'Will I have an advocate who represents only me?',
    a: "Yes. Stanford assigns every potential donor an Independent Donor Advocate (IDA) whose sole responsibility is to represent your interests — not the recipient's. Your medical information is never shared with Mama Kim's family without your consent.",
  },
  {
    q: 'Can I change my mind after starting the evaluation?',
    a: 'Absolutely. You can stop at any point — before, during, or after evaluation — for any reason, no explanation required. "At no time did anyone put any pressure on me. I was respectfully reminded I had the choice to change my mind at any time." — Stanford donor',
  },
  {
    q: 'Why is a living donor better than waiting for a deceased donor?',
    a: 'Over 90,000 Americans are on the kidney waitlist — a wait that can stretch many years. Living donor kidneys offer the best compatibility outcomes and result in longer average kidney survival rates. For Mama Kim, a living donor is the most direct path to leaving dialysis behind.',
  },
  {
    q: 'What happens to my health insurance after I donate?',
    a: 'Most donors have no difficulty obtaining health insurance after donation. A small number have reported occasional difficulty with life insurance (not health insurance), though Stanford notes this is rare. Financial coordinators can help navigate these questions.',
  },
  {
    q: 'Can I talk to someone who has already donated at Stanford?',
    a: "Yes. Stanford's Living Donor Mentor Program connects potential donors with past donors for a real, unscripted conversation — no pressure, at any point in the process.",
  },
];

export const DONOR_CRITERIA = [
  {
    title: 'Age 18 or older',
    desc: 'Must be a legal adult to give informed consent.',
  },
  {
    title: 'Generally good health',
    desc: 'No active diabetes, heart/lung disease, HIV, or chronic hepatitis.',
  },
  {
    title: 'Compatible blood type',
    desc: 'Tested early. Incompatible types may still qualify via paired exchange.',
  },
  {
    title: 'BMI under 30',
    desc: 'Required for donor surgical safety. Assessed individually.',
  },
  {
    title: 'Emotionally ready & freely willing',
    desc: 'No coercion, no financial incentive. Decision must be entirely your own.',
  },
  {
    title: 'Willing to attend follow-up care',
    desc: 'Check-ins at 2 weeks, 6 months, 1 year, and 2 years post-donation.',
  },
  {
    title: 'No IV drug history',
    desc: 'No active malignancy or serious uncontrolled chronic illness.',
  },
  {
    title: 'Any relationship — or none',
    desc: 'Family, friend, coworker, acquaintance, or compassionate stranger.',
  },
];
