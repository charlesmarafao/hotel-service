import HotelOffer from '@modules/hotels/infra/typeorm/schemas/HotelOffer';

// eslint-disable-next-line import/prefer-default-export
export const hotelOffersMock = ([
  {
    id: '608dc59b692e01344b8a52e4',
    hotelId: '608dc59a692e01344b8a52e3',
    checkInDate: '2021-05-01',
    checkOutDate: '2021-05-02',
    rateCode: 'RAC',
    boardType: 'ROOM_ONLY',
    self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/SFQEMEN1WQ',
    available: true,
    offerId: 'SFQEMEN1WQ',
    rateFamilyEstimated: {
      code: 'BAR',
      type: 'P',
    },
    commission: {
      amount: '0',
      percentage: '0',
    },
    room: {
      type: 'C1D',
      typeEstimated: {
        category: 'STANDARD_ROOM',
        beds: 1,
        bedType: 'DOUBLE',
      },
      description: {
        text:
          'FLEXIBLE RATE-Room only\nTHE HOTEL DOES NOT ACCEPT INVOICE PAYMENT.\nStandard Room with 1 double bed',
        lang: 'EN',
      },
    },
    guests: {
      adults: 2,
    },
    price: {
      currency: 'BRL',
      total: '159.55',
      taxes: [
        {
          code: 'CITY_TAX',
          pricingFrequency: 'PER_NIGHT',
          pricingMode: 'PER_PRODUCT',
          amount: '0.00',
          currency: 'BRL',
          included: true,
        },
      ],
      variations: {
        average: {
          base: '159.00',
        },
        changes: [
          {
            startDate: '2021-05-01',
            endDate: '2021-05-02',
            base: '159.00',
            total: '159.00',
          },
        ],
      },
    },
    policies: {
      holdTime: {
        deadline: '2021-05-01T18:00:00',
      },
      guarantee: {
        acceptedPayments: {
          creditCards: ['AX', 'CA', 'DC', 'EC', 'IK', 'VI'],
          methods: ['CREDIT_CARD'],
        },
      },
      paymentType: 'guarantee',
    },
  },
  {
    id: '608dc59b692e01344b8a52e5',
    hotelId: '608dc59a692e01344b8a52e3',
    checkInDate: '2021-05-01',
    checkOutDate: '2021-05-02',
    rateCode: 'RDP',
    boardType: 'ROOM_ONLY',
    self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/K2GUKWU1NI',
    available: true,
    offerId: 'K2GUKWU1NI',
    rateFamilyEstimated: {
      code: 'RAC',
      type: 'P',
    },
    commission: {
      amount: '0',
      percentage: '0',
    },
    room: {
      type: 'C1D',
      typeEstimated: {
        category: 'STANDARD_ROOM',
        beds: 1,
        bedType: 'DOUBLE',
      },
      description: {
        text:
          'Rack Rate-Room only\nTHE HOTEL DOES NOT ACCEPT INVOICE PAYMENT.\nStandard Room with 1 double bed',
        lang: 'EN',
      },
    },
    guests: {
      adults: 2,
    },
    price: {
      currency: 'BRL',
      total: '159.55',
      taxes: [
        {
          code: 'CITY_TAX',
          pricingFrequency: 'PER_NIGHT',
          pricingMode: 'PER_PRODUCT',
          amount: '0.00',
          currency: 'BRL',
          included: true,
        },
      ],
      variations: {
        average: {
          base: '159.00',
        },
        changes: [
          {
            startDate: '2021-05-01',
            endDate: '2021-05-02',
            base: '159.00',
            total: '159.00',
          },
        ],
      },
    },
    policies: {
      holdTime: {
        deadline: '2021-05-01T18:00:00',
      },
      guarantee: {
        acceptedPayments: {
          creditCards: ['AX', 'CA', 'DC', 'EC', 'IK', 'VI'],
          methods: ['CREDIT_CARD'],
        },
      },
      paymentType: 'guarantee',
    },
  },
] as unknown) as HotelOffer[]; // to compare strings as ObjectID in-memory
