import getValue from '../getValue';
import {
  RANK_VALUE_TO_DISPLAY,
  DEGREE_TYPE_TO_DISPLAY,
} from '../../../common/constants';

export const arxivCategoryOptions = [
  { value: 'astro-ph' },
  { value: 'cond-mat' },
  { value: 'cs' },
  { value: 'econ' },
  { value: 'eess' },
  { value: 'gr-qc' },
  { value: 'hep-ex' },
  { value: 'hep-lat' },
  { value: 'hep-ph' },
  { value: 'hep-th' },
  { value: 'math' },
  { value: 'math-ph' },
  { value: 'nlin' },
  { value: 'nucl-ex' },
  { value: 'nucl-th' },
  { value: 'physics' },
  { value: 'physics.acc-ph' },
  { value: 'physics.ins-det' },
  { value: 'q-bio' },
  { value: 'q-fin' },
  { value: 'quant-ph' },
  { value: 'stat' },
];
const otherSchemaArxivCategoryValues = [
  'astro-ph.CO',
  'astro-ph.EP',
  'astro-ph.GA',
  'astro-ph.HE',
  'astro-ph.IM',
  'astro-ph.SR',
  'cond-mat.dis-nn',
  'cond-mat.mes-hall',
  'cond-mat.mtrl-sci',
  'cond-mat.other',
  'cond-mat.quant-gas',
  'cond-mat.soft',
  'cond-mat.stat-mech',
  'cond-mat.str-el',
  'cond-mat.supr-con',
  'cs.AI',
  'cs.AR',
  'cs.CC',
  'cs.CE',
  'cs.CG',
  'cs.CL',
  'cs.CR',
  'cs.CV',
  'cs.CY',
  'cs.DB',
  'cs.DC',
  'cs.DL',
  'cs.DM',
  'cs.DS',
  'cs.ET',
  'cs.FL',
  'cs.GL',
  'cs.GR',
  'cs.GT',
  'cs.HC',
  'cs.IR',
  'cs.IT',
  'cs.LG',
  'cs.LO',
  'cs.MA',
  'cs.MM',
  'cs.MS',
  'cs.NA',
  'cs.NE',
  'cs.NI',
  'cs.OH',
  'cs.OS',
  'cs.PF',
  'cs.PL',
  'cs.RO',
  'cs.SC',
  'cs.SD',
  'cs.SE',
  'cs.SI',
  'cs.SY',
  'econ.EM',
  'econ.GN',
  'econ.TH',
  'eess.AS',
  'eess.IV',
  'eess.SP',
  'eess.SY',
  'math.AC',
  'math.AG',
  'math.AP',
  'math.AT',
  'math.CA',
  'math.CO',
  'math.CT',
  'math.CV',
  'math.DG',
  'math.DS',
  'math.FA',
  'math.GM',
  'math.GN',
  'math.GR',
  'math.GT',
  'math.HO',
  'math.IT',
  'math.KT',
  'math.LO',
  'math.MG',
  'math.MP',
  'math.NA',
  'math.NT',
  'math.OA',
  'math.OC',
  'math.PR',
  'math.QA',
  'math.RA',
  'math.RT',
  'math.SG',
  'math.SP',
  'math.ST',
  'nlin.AO',
  'nlin.CD',
  'nlin.CG',
  'nlin.PS',
  'nlin.SI',
  'physics.ao-ph',
  'physics.app-ph',
  'physics.atm-clus',
  'physics.atom-ph',
  'physics.bio-ph',
  'physics.chem-ph',
  'physics.class-ph',
  'physics.comp-ph',
  'physics.data-an',
  'physics.ed-ph',
  'physics.flu-dyn',
  'physics.gen-ph',
  'physics.geo-ph',
  'physics.hist-ph',
  'physics.med-ph',
  'physics.optics',
  'physics.plasm-ph',
  'physics.pop-ph',
  'physics.soc-ph',
  'physics.space-ph',
  'q-bio.BM',
  'q-bio.CB',
  'q-bio.GN',
  'q-bio.MN',
  'q-bio.NC',
  'q-bio.OT',
  'q-bio.PE',
  'q-bio.QM',
  'q-bio.SC',
  'q-bio.TO',
  'q-fin.CP',
  'q-fin.EC',
  'q-fin.GN',
  'q-fin.MF',
  'q-fin.PM',
  'q-fin.PR',
  'q-fin.RM',
  'q-fin.ST',
  'q-fin.TR',
  'stat.AP',
  'stat.CO',
  'stat.ME',
  'stat.ML',
  'stat.OT',
  'stat.TH',
];
export const arxivCategoryValues = arxivCategoryOptions
  .map(getValue)
  .concat(otherSchemaArxivCategoryValues);

export const inspireCategoryOptions = [
  { value: 'Accelerators' },
  { value: 'Astrophysics' },
  { value: 'Computing' },
  { value: 'Data Analysis and Statistics' },
  { value: 'Experiment-HEP' },
  { value: 'Experiment-Nucl' },
  { value: 'General Physics' },
  { value: 'Gravitation and Cosmology' },
  { value: 'Instrumentation' },
  { value: 'Lattice' },
  { value: 'Math and Math Physics' },
  { value: 'Other' },
  { value: 'Phenomenology-HEP' },
  { value: 'Theory-HEP' },
  { value: 'Theory-Nucl' },
];
export const inspireCategoryValues = inspireCategoryOptions.map(getValue);

export const rankOptions = Object.keys(RANK_VALUE_TO_DISPLAY).map(key => ({
  value: key,
  display: RANK_VALUE_TO_DISPLAY[key],
}));
export const rankValues = rankOptions.map(getValue);

export const degreeTypeOptions = Object.keys(DEGREE_TYPE_TO_DISPLAY).map(
  key => ({
    value: key,
    display: DEGREE_TYPE_TO_DISPLAY[key],
  })
);
export const degreeTypeValues = degreeTypeOptions.map(getValue);

export const countryOptions = [
  { value: 'Afghanistan' },
  { value: 'Åland Islands' },
  { value: 'Albania' },
  { value: 'Algeria' },
  { value: 'American Samoa' },
  { value: 'Andorra' },
  { value: 'Angola' },
  { value: 'Anguilla' },
  { value: 'Antarctica' },
  { value: 'Antigua and Barbuda' },
  { value: 'Argentina' },
  { value: 'Armenia' },
  { value: 'Aruba' },
  { value: 'Australia' },
  { value: 'Austria' },
  { value: 'Azerbaijan' },
  { value: 'Bahamas' },
  { value: 'Bahrain' },
  { value: 'Bangladesh' },
  { value: 'Barbados' },
  { value: 'Belarus' },
  { value: 'Belgium' },
  { value: 'Belize' },
  { value: 'Benin' },
  { value: 'Bermuda' },
  { value: 'Bhutan' },
  { value: 'Bolivia' },
  { value: 'Bosnia and Herzegovina' },
  { value: 'Botswana' },
  { value: 'Bouvet Island' },
  { value: 'Brazil' },
  { value: 'British Indian Ocean Territory' },
  { value: 'Brunei Darussalam' },
  { value: 'Bulgaria' },
  { value: 'Burkina Faso' },
  { value: 'Burundi' },
  { value: 'Cambodia' },
  { value: 'Cameroon' },
  { value: 'Canada' },
  { value: 'Cape Verde' },
  { value: 'Cayman Islands' },
  { value: 'Central African Republic' },
  { value: 'Chad' },
  { value: 'Chile' },
  { value: 'China' },
  { value: 'Christmas Island' },
  { value: 'Cocos (Keeling) Islands' },
  { value: 'Colombia' },
  { value: 'Comoros' },
  { value: 'Congo' },
  { value: 'Congo, The Democratic Republic of the' },
  { value: 'Cook Islands' },
  { value: 'Costa Rica' },
  { value: "Cote D'Ivoire" },
  { value: 'Croatia' },
  { value: 'Cuba' },
  { value: 'Cyprus' },
  { value: 'Czech Republic' },
  { value: 'Denmark' },
  { value: 'Djibouti' },
  { value: 'Dominica' },
  { value: 'Dominican Republic' },
  { value: 'Ecuador' },
  { value: 'Egypt' },
  { value: 'El Salvador' },
  { value: 'Equatorial Guinea' },
  { value: 'Eritrea' },
  { value: 'Estonia' },
  { value: 'Ethiopia' },
  { value: 'Falkland Islands (Malvinas' },
  { value: 'Faroe Islands' },
  { value: 'Fiji' },
  { value: 'Finland' },
  { value: 'France' },
  { value: 'French Guiana' },
  { value: 'French Polynesia' },
  { value: 'French Southern Territories' },
  { value: 'Gabon' },
  { value: 'Gambia' },
  { value: 'Georgia' },
  { value: 'Germany' },
  { value: 'Ghana' },
  { value: 'Gibraltar' },
  { value: 'Greece' },
  { value: 'Greenland' },
  { value: 'Grenada' },
  { value: 'Guadeloupe' },
  { value: 'Guam' },
  { value: 'Guatemala' },
  { value: 'Guernsey' },
  { value: 'Guinea' },
  { value: 'Guinea-Bissau' },
  { value: 'Guyana' },
  { value: 'Haiti' },
  { value: 'Heard Island and Mcdonald Islands' },
  { value: 'Holy See (Vatican City State' },
  { value: 'Honduras' },
  { value: 'Hong Kong' },
  { value: 'Hungary' },
  { value: 'Iceland' },
  { value: 'India' },
  { value: 'Indonesia' },
  { value: 'Iran, Islamic Republic Of' },
  { value: 'Iraq' },
  { value: 'Ireland' },
  { value: 'Isle of Man' },
  { value: 'Israel' },
  { value: 'Italy' },
  { value: 'Jamaica' },
  { value: 'Japan' },
  { value: 'Jersey' },
  { value: 'Jordan' },
  { value: 'Kazakhstan' },
  { value: 'Kenya' },
  { value: 'Kiribati' },
  { value: "Korea, Democratic People'S Republic of" },
  { value: 'Korea, Republic of' },
  { value: 'Kuwait' },
  { value: 'Kyrgyzstan' },
  { value: "Lao People'S Democratic Republic" },
  { value: 'Latvia' },
  { value: 'Lebanon' },
  { value: 'Lesotho' },
  { value: 'Liberia' },
  { value: 'Libyan Arab Jamahiriya' },
  { value: 'Liechtenstein' },
  { value: 'Lithuania' },
  { value: 'Luxembourg' },
  { value: 'Macao' },
  { value: 'Macedonia, The Former Yugoslav Republic of' },
  { value: 'Madagascar' },
  { value: 'Malawi' },
  { value: 'Malaysia' },
  { value: 'Maldives' },
  { value: 'Mali' },
  { value: 'Malta' },
  { value: 'Marshall Islands' },
  { value: 'Martinique' },
  { value: 'Mauritania' },
  { value: 'Mauritius' },
  { value: 'Mayotte' },
  { value: 'Mexico' },
  { value: 'Micronesia, Federated States of' },
  { value: 'Moldova' },
  { value: 'Monaco' },
  { value: 'Mongolia' },
  { value: 'Montserrat' },
  { value: 'Morocco' },
  { value: 'Mozambique' },
  { value: 'Myanmar' },
  { value: 'Namibia' },
  { value: 'Nauru' },
  { value: 'Nepal' },
  { value: 'Netherlands' },
  { value: 'Netherlands Antilles' },
  { value: 'New Caledonia' },
  { value: 'New Zealand' },
  { value: 'Nicaragua' },
  { value: 'Niger' },
  { value: 'Nigeria' },
  { value: 'Niue' },
  { value: 'Norfolk Island' },
  { value: 'Northern Mariana Islands' },
  { value: 'Norway' },
  { value: 'Oman' },
  { value: 'Pakistan' },
  { value: 'Palau' },
  { value: 'Palestinian Territory, Occupied' },
  { value: 'Panama' },
  { value: 'Papua New Guinea' },
  { value: 'Paraguay' },
  { value: 'Peru' },
  { value: 'Philippines' },
  { value: 'Pitcairn' },
  { value: 'Poland' },
  { value: 'Portugal' },
  { value: 'Puerto Rico' },
  { value: 'Qatar' },
  { value: 'Reunion' },
  { value: 'Romania' },
  { value: 'Russian Federation' },
  { value: 'RWANDA' },
  { value: 'Saint Helena' },
  { value: 'Saint Kitts and Nevis' },
  { value: 'Saint Lucia' },
  { value: 'Saint Pierre and Miquelon' },
  { value: 'Saint Vincent and the Grenadines' },
  { value: 'Samoa' },
  { value: 'San Marino' },
  { value: 'Sao Tome and Principe' },
  { value: 'Saudi Arabia' },
  { value: 'Senegal' },
  { value: 'Serbia and Montenegro' },
  { value: 'Seychelles' },
  { value: 'Sierra Leone' },
  { value: 'Singapore' },
  { value: 'Slovakia' },
  { value: 'Slovenia' },
  { value: 'Solomon Islands' },
  { value: 'Somalia' },
  { value: 'South Africa' },
  { value: 'South Georgia and the South Sandwich Islands' },
  { value: 'Spain' },
  { value: 'Sri Lanka' },
  { value: 'Sudan' },
  { value: 'Surivalue' },
  { value: 'Svalbard and Jan Mayen' },
  { value: 'Swaziland' },
  { value: 'Sweden' },
  { value: 'Switzerland' },
  { value: 'Syrian Arab Republic' },
  { value: 'Taiwan' },
  { value: 'Tajikistan' },
  { value: 'Tanzania' },
  { value: 'Thailand' },
  { value: 'Timor-Leste' },
  { value: 'Togo' },
  { value: 'Tokelau' },
  { value: 'Tonga' },
  { value: 'Trinidad and Tobago' },
  { value: 'Tunisia' },
  { value: 'Turkey' },
  { value: 'Turkmenistan' },
  { value: 'Turks and Caicos Islands' },
  { value: 'Tuvalu' },
  { value: 'Uganda' },
  { value: 'Ukraine' },
  { value: 'United Arab Emirates' },
  { value: 'United Kingdom' },
  { value: 'United States' },
  { value: 'United States Minor Outlying Islands' },
  { value: 'Uruguay' },
  { value: 'Uzbekistan' },
  { value: 'Vanuatu' },
  { value: 'Venezuela' },
  { value: 'Vietnam' },
  { value: 'Virgin Islands, British' },
  { value: 'Virgin Islands, U.S' },
  { value: 'Wallis and Futuna' },
  { value: 'Western Sahara' },
  { value: 'Yemen' },
  { value: 'Zambia' },
  { value: 'Zimbabwe' },
];
export const countryValues = countryOptions.map(getValue);
