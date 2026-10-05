import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'leatherworks',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Leatherwork',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: '5aeb09f1-07de-5c77-8e6d-0fafbac68af4',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: '9ff5077e-cf93-5273-8105-87762d317700',
    dynasty: {
      item: 'bba9a6eb-34f8-578b-b58b-ae4a8784d89d',
      name: 'Aghlabids',
    },
    timeline: {
      code: 'at',
      id: 'aut',
      country: 'Austria',
    },
    partner: {
      id: '8ea7243d-fe8e-5011-a9ca-75ebd26660ac',
      name: 'Ministry of Culture, Directorate for Cultural Heritage',
      city: 'Rabat',
      country: 'Morocco',
      objects: 1,
    },
  },
})
