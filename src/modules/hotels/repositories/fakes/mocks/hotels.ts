import Hotel from '@modules/hotels/infra/typeorm/schemas/Hotel';

// eslint-disable-next-line import/prefer-default-export
export const hotelsMock = ([
  {
    id: '608dc59a692e01344b8a52e3',
    type: 'hotel',
    hotelId: 'RTGYNIBI',
    chainCode: 'RT',
    dupeId: '700084419',
    name: 'ibis Goiania',
    rating: '2',
    cityCode: 'GYN',
    latitude: -16.69031,
    longitude: -49.26406,
    hotelDistance: {
      distance: 171,
      distanceUnit: 'KM',
    },
    address: {
      lines: ['RUA 21 NO 154'],
      postalCode: '71120120',
      cityName: 'GOIANIA',
      countryCode: 'BR',
      stateCode: 'GO',
    },
    contact: {
      phone: '55/62/27656050',
      fax: '55/62/27656051',
      email: 'H3670-RE@accor.com.br',
    },
    description: {
      lang: 'en',
      text:
        'The hotel has 118 rooms and a 24-hour bar in the lobby. Located in an affluent region of the city, with easy access to the main business centers and excellent restaurants, bars and shopping centers, it is 6.2 miles (10 km) from Santa Genoveva Airport and2.5 miles (4 km) from the business center. The hotel offers free WIFI Internet access',
    },
    media: [
      {
        uri:
          'http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/D17A433B4AF4495CA20D93F55754A72D',
        category: 'EXTERIOR',
      },
    ],
    amenities: [
      'ELEVATOR',
      '24_HOUR_FRONT_DESK',
      'PARKING',
      '220_AC',
      'INTERNET_SERVICES',
      'PETS_ALLOWED',
      'ACCESSIBLE_BATHS',
      'WHEELCHAIR_ACCESSIBLE_PUBLIC_AREA',
      'DISABLED_FACILITIES',
      'WIRELESS_CONNECTIVITY',
      'SMOKE_DETECTOR',
      'FIRE_SAFETY',
      'EMERGENCY_BACKUP_GENERATOR',
      'FIRE_DETECTORS',
      'EMERGENCY_LIGHTING',
      'GARAGE_PARKING',
      'PHOTOCOPIER',
      'MEETING_FACILITIES',
      'BUSINESS_CENTER',
      'FAX_MACHINE',
      'WAKEUP_SERVICE',
      'VOICEMAIL_IN_ROOM',
      'WI-FI_IN_ROOM',
      'DIRECT_DIAL_PHONE',
      'HAIR_DRYER',
      'CABLE_TELEVISION',
      'TELEVISION',
      'SATELLITE_TV',
      'CRIBS_AVAILABLE',
      'AIR_CONDITIONING',
      'SAFE',
    ],
    created_at: '2021-05-01T13:26:26.523Z',
    updated_at: '2021-05-01T13:26:26.523Z',
  },
  {
    id: '608dc59b692e01344b8a52ea',
    type: 'hotel',
    hotelId: 'RTBSBMIL',
    chainCode: 'RT',
    dupeId: '700040194',
    name: 'Mercure Brasilia Eixo Hotel',
    rating: '4',
    cityCode: 'BSB',
    latitude: -15.78833,
    longitude: -47.89024,
    hotelDistance: {
      distance: 6.6,
      distanceUnit: 'KM',
    },
    address: {
      lines: ['SETOR HOTELEIRO NORTE QUADRA 5', 'BLOCO G'],
      postalCode: '70710300',
      cityName: 'BRASILIA',
      countryCode: 'BR',
      stateCode: 'DF',
    },
    contact: {
      phone: '55/61/34242000',
      fax: '55/61/34242001',
      email: 'h3632-re@accor.com.br',
    },
    description: {
      lang: 'en',
      text:
        'With 338 apartments, the Mercure Bras??lia Eixo Monumental is located next to the Bras??lia shopping center, the TV Tower and just 9.3 miles (15 km) from Juscelino Kubitschek International Airport.',
    },
    media: [
      {
        uri:
          'http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/EC5CAB35FB8545E9A1FAF7932D162D4A',
        category: 'EXTERIOR',
      },
    ],
    amenities: [
      'ELEVATOR',
      'SAUNA',
      'OUTDOOR_POOL',
      'ROOM_SERVICE',
      'INTERNET_SERVICES',
      '220_AC',
      'PARKING',
      'GIFT_SHOP',
      'ACCESSIBLE_BATHS',
      'WHEELCHAIR_ACCESSIBLE_PUBLIC_AREA',
      'WIRELESS_CONNECTIVITY',
      'CONCIERGE',
      'LOUNGE',
      'COFFEE_SHOP',
      '24_HOUR_FRONT_DESK',
      'SOLARIUM',
      'SMOKE_DETECTOR',
      'FIRE_SAFETY',
      'EMERGENCY_BACKUP_GENERATOR',
      'FIRE_DETECTORS',
      'EMERGENCY_LIGHTING',
      'GARAGE_PARKING',
      'MULTILINGUAL_STAFF',
      'MASSAGE',
      'RESTAURANT',
      'SECRETARIAL_SERVICES',
      'PHOTOCOPIER',
      'OVERHEAD_PROJECTOR',
      'MEETING_FACILITIES',
      'MEETING_ROOMS',
      'BUSINESS_CENTER',
      'AUDIO-VISUAL_EQUIPMENT',
      'ALARM_CLOCK',
      'WAKEUP_SERVICE',
      'VOICEMAIL_IN_ROOM',
      'WI-FI_IN_ROOM',
      'HAIR_DRYER',
      'CABLE_TELEVISION',
      'TELEVISION',
      'SATELLITE_TV',
      'CRIBS_AVAILABLE',
      'DIRECT_DIAL_PHONE',
      'AIR_CONDITIONING',
      'SAFE',
      'NON_SMOKING_ROOMS',
    ],
    created_at: '2021-05-01T13:26:26.523Z',
    updated_at: '2021-05-01T13:26:26.523Z',
  },
] as unknown) as Hotel[]; // to compare strings as ObjectID in-memory
