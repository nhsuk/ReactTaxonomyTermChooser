const taxTerms = [{
  label: 'Subjects',
  code: 'subject',
  type: 'volcabulary',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
  children: [
    {
     label: 'Literacy',
     code: 'literacy',
     type: 'term',
     children: []
    },{
      label: 'Mathematics',
      code: 'mathematics',
      type: 'term',
      children: [
        {
          label: 'Pure maths',
          code: 'pure-maths',
          type: 'term',
          children: []
        },{
          label: 'Applied maths',
          code: 'applied-maths',
          type: 'term',
          children: []
        },{
          label: 'Further maths',
          code: 'further-maths',
          type: 'term',
          children: []
        }
      ]
    },{
      label: 'English',
      code: 'english',
      type: 'term',
      children: [
        {
          label: 'Spelling',
          code: 'spelling',
          type: 'term',
          children: []
        },{
          label: 'Oral',
          code: 'oral',
          type: 'term',
          children: []
        }
      ]
    },{
      label: 'PE',
      code: 'pe',
      type: 'term',
      children: []
    },{
      label: 'PSHE',
      code: 'pshe',
      type: 'term',
      children: []
    },{
      label: 'Art & Design',
      code: 'art-and-design',
      type: 'term',
      children: []
    },{
      label: 'Computing',
      code: 'computing',
      type: 'term',
      children: []
    },{
      label: 'Science',
      code: 'science',
      type: 'term',
      children: [
        {
          label: 'Pure science',
          code: 'pure-science',
          type: 'term',
          children: [
            {
              label: 'Chemistry',
              code: 'chemistry',
              type: 'term',
              children: []
            },{
              label: 'Physics',
              code: 'physics',
              type: 'term',
              children: []
            },{
              label: 'Biology',
              code: 'biology',
              type: 'term',
              children: []
            }
          ]
        },{
          label: 'Social science',
          code: 'social-science',
          type: 'term',
          children: []
        }
      ]
    },{
      label: 'D&T',
      code: 'd-and-t',
      type: 'term',
      children: []
    },{
      label: 'SMSC',
      code: 'smsc',
      type: 'term',
      children: []
    },{
      label: 'Music',
      code: 'music',
      type: 'term',
      children: []
    }
  ]
},{
  label: 'Categories',
  code: 'categories',
  type: 'volcabulary',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
  children: [
    {
      label: 'Reception',
      code: 'reception',
      type: 'term',
      children: []
    },{
      label: 'Year 6',
      code: 'year-6',
      type: 'term',
      children: []
    },{
      label: 'Headteacher',
      code: 'headteacher',
      type: 'term',
      children: []
    },{
      label: 'School nurses',
      code: 'school-nurses',
      type: 'term',
      children: []
    },{
      label: 'English',
      code: 'english',
      type: 'term',
      children: []
    },{
      label: 'Maths',
      code: 'maths',
      type: 'term',
      children: []
    },{
      label: 'Science',
      code: 'science',
      type: 'term',
      children: []
    },{
      label: 'Beyound the classroom',
      code: 'beyond-the-classroom',
      type: 'term',
      children: []
    },{
      label: 'Active school day',
      code: 'active-school-day',
      type: 'term',
      children: []
    },{
      label: 'Engaging families',
      code: 'engaging-families',
      type: 'term',
      children: []
    },{
      label: 'Top tips for school leaders',
      code: 'top-tips-for-school-leaders',
      type: 'term',
      children: []
    }
  ]
},{
  label: 'Age',
  code: 'age',
  type: 'volcabulary',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
  children: [
    {
      label: 'KS1',
      code: 'ks1',
      type: 'term',
      children: []
    },{
      label: 'KS2',
      code: 'ks2',
      type: 'term',
      children: []
    },{
      label: 'EYFS',
      code: 'eyfs',
      type: 'term',
      children: []
    }
  ]
}];

//assume these have already been selected for the page
const taxSelected = [
  {
    label: 'Mathematics',
    code: 'mathematics'
  },{
    label: 'Computing',
    code: 'computing'
  },{
    label: 'Maths',
    code: 'maths'
  },{
    label: 'Biology',
    code: 'biology'
  },{
    label: 'Year 6',
    code: 'year-6'
  },{
    label: 'KS2',
    code: 'ks2'
  }
];

export { taxTerms, taxSelected }
