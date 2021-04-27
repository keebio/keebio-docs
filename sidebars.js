module.exports = {
  docs: [
    {
      'Build Guides': [
        'main',
        'quefrency-rev2-sinc-build-guide',
        'iris-rev3-build-guide',
        'nyquist-rev3-build-guide',
        'bdn9-rev1.3-build-guide',
        'bdn9-rev2-build-guide',
        'levinson-rev3-build-guide',
        'viterbi-rev2-build-guide',
        'stick-build-guide',
        'iris-rev2-build-guide',
        'chocopad-build-guide',
        {
          'Archive': [
            'quefrency-rev1-build-guide',
            'bdn9-build-guide',
            'laplace-build-log',
            'dilly-build-guide',
            'fourier-build-guide',
            'iris-choc-build-guide',
            'iris-led-fix',
            'nyquist-build-guide'
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'Additional Info',
      items: [
        'glossary',
        'soldering-tools',
        'testing-pcb',
        'choc-stabs',
        'lighting-options',
        'adding-rgb-underglow',
        'case-files',
        'flashing-firmware',
        'schematics',
        'troubleshooting',
        'dfu-on-pro-micro'
      ],
      collapsed: false
    }
  ],
  faq: [
    {
      type: 'category',
      label: 'Frequently Asked Questions',
      items: [
        'faq/main',
      ],
      collapsed: false
    }
  ]
};
