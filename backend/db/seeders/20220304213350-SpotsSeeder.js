'use strict';
const descriptionsNewYork =[
  "Location, location, location! This is NYC Living.Our cozy studio apartment located inside a historic NYC brownstone nestled in one of Manhattan's most central neighborhoods, the Upper West Side. The apartment is small but well designed to maximize the usage of the space.The units re equipped with a private bathroom, comfortable bed, cable TV and WIFI service, fully loaded kitchenette, and a open closet space.",
  "Professionally managed and maintained by National Corporate Housing. Full size kitchen with all essentials. Laundry facilities located on each floor.",
  "Charming townhouse featuring furnished apartments with 1 Bedroom Studio Suites, exposed brick decorative fireplaces, private bath and kitchen in Midtown East/Sutton Place. Your apartment with private entry, accessible by stairwell, is walking distance to notable restaurants, laundry, banks, grocers, patisseries, and public transportation within the surrounding blocks. Each apartment features a fully equipped en suite kitchen, marble bathroom, linens, coffee, wifi and cable tv.",
  "Private room in 4bedroom 1 bath apartment. shared large eat in kitchen, equipped for light cooking only. Electric kettle, microwave, 2 head electric plate. Apartment located 2 blocks from all train, walk to Hudson Yards, Times Sq, This is a 6th floor walk -up. Max will be 4 people at times, all staying min one month.",
  "Come stay in this designer alternative to a hotel one bedroom apartment! The place is located on a ground floor of a walk up building. It has to offer the fastest WIFI, fully equipped kitchen, designer furniture and super chic elegant style of living with the softest linens and towels. It's located right in the center of vibrant New York life - LES on a board with Soho, Chinatown and FIDI, surrounded by plenty of shops, cafes, bars and restaurant"
]

const descriptionsChicago =[
  "Our place is great for couples, solo adventurers, and business travelers. This easily accessible one bedroom is cozy and comfortable with all you could need! The Gold Coast neighborhood offers great restaurants and entertainment or head up to the roof deck to enjoy the breathtaking views!",
  "Equipped with a 70 inch 4K smart TV queen bed in a Beautiful ultra large private room with couch and a coffee table in the room. A large closet and two beautiful nightstands and a compass coffee table. Perfect for couples or solo travelers. Nespresso machine and few upgrades to keep the place accommodating. Perfect location excellent neighborhood. Plenty of parking spaces with a pass provided with your reservation. Welcome in advance.",
  "Take it easy at this unique and tranquil getaway.",
  "Enjoy all of the fantastic food, music, and art that Wicker Park has to offer. A quick trip to downtown, and blocks away from the highway and blue line. It's equipped with easy, keyless entry and common amenities for comfort and convenience.",
  "3rd floor studio apartment in a vintage building in a quiet residential setting. Apartment is cozy, with a Queen bed, couch, private bathroom and small kitchen in a studio format. Short walk to beautiful river path, park and restaurants. Longer walk to bustling Lincoln Square with restaurants, bars, library, shops, etc.",
]

const descriptionsLosAngeles = [
  "Newly settled in Air BNB the first three months of discounted room rates. September $ 70. October $ 75. November 80. with limited supplies. Welcome to our place…….",
  "Located in a quiet and safe neighborhood of North El Monte, very close to Arcadia. This newly remodeled and newly furnished rental unit has one spacious bedroom and one private bathroom, perfect for staying while traveling in LA. It is equipped with a working desk and chair, high speed Internet, independent A/C unit, microwave, hot water kettle, walk-in closet, and washer and dryer on site. We provide towels, bed linens, shampoo, conditioner, body soap, extra beddings and more.",
  "Guest House in Burbank - no private patio. This private guest house is detached from the main house and has it own private/separate entrance. It accommodates up to 3 guests. One bedroom and one living room, separated from each other by walk through kitchen. Street parking only. It is located 1.5 miles from the Burbank Airport and 2.2 miles from Warner Brothers studios and Universal Studios. One queen bed, sofa, table, 4 chairs, Portable AC, TV set. By Hostel International, view all our listings.",
  "Private Bedroom with a FULL Bed, Shared Bath! 5-7 minutes to Americana Glendale.",
  "The apartment is in close proximity to everything including the Walt Disney Concert Hall, the Grand Central Market- the European-style food hall built-in 1917, Staples Center, LA Flower Market, the Griffith Observatory and much more. Simple and Basic studio. Very close to major metro and bus stations."
]



module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Spots', [
     //New York
     {userId: 1,title: "Cozy Flat in the Heart of the Upper West Side", description: descriptionsNewYork[0], costPerNight: 102, address: "153 West 83rd Street, New York, New York", city: "New York"},
     {userId: 2,title: "National at 888 Sixth Avenue", description: descriptionsNewYork[1], costPerNight: 115, address: "888 6th Avenue, New York, New York", city: "New York"},
     {userId: 1,title: "Charming Furnished Suite Sutton Pl/Midtown East #1", description: descriptionsNewYork[2], costPerNight: 107, address: "400 East 58th St, New York, New York", city: "New York"},
     {userId: 3,title: "Hudson Yards Room, 63F3", description: descriptionsNewYork[3], costPerNight: 99, address: "605 West 42nd St, New York, New York", city: "New York"},
     {userId: 2,title: "Brand new designer entire apartment/LES", description: descriptionsNewYork[4], costPerNight: 110, address: "189 Bowery, New York, New York", city: "New York"},

    //Chicago
     {userId: 2,title: "Clean & Renovated, Walking to distance to lake!", description: descriptionsChicago[0], costPerNight: 85, address: "1366 North Dearborn Street, Chicago, Illinois", city: "Chicago"},
     {userId: 3,title: "Perfect 4 long term Ultra Sophisticated large room", description: descriptionsChicago[1], costPerNight: 40, address: "4713 North Drake Ave, Chicago, Illinois", city: "Chicago"},
     {userId: 4,title: "Cozy 1 bedroom Condo in wonderful neighborhood", description: descriptionsChicago[2], costPerNight: 60, address: "4451 South Greenwood Ave, Chicago, Illinois", city: "Chicago"},
     {userId: 7,title: "Pierce Place Garden", description: descriptionsChicago[3], costPerNight: 81, address: "2300 West Wabansia Ave, Chicago, Illinois", city: "Chicago"},
     {userId: 8,title: "Cozy, quiet studio apartment", description: descriptionsChicago[4], costPerNight: 85, address: "2548 West Berteau Ave, Chicago, Illinois", city: "Chicago"},


     //Los Angeles
     {userId: 1,title: "One bed Room K02", description: descriptionsLosAngeles[0], costPerNight: 91, address: "110 Russell Ave, Monterey Park, California", city: "Los Angeles"},
     {userId: 3,title: "New 1 Bedroom Unit w/Private Bath Private Access", description: descriptionsLosAngeles[1], costPerNight: 56, address: "11719 Cherrylee Drive, El Monte, California", city: "Los Angeles"},
     {userId: 5,title: "1 bed Guest House", description: descriptionsLosAngeles[2], costPerNight: 100, address: "1735 North California St, Burbank, California", city: "Los Angeles"},
     {userId: 4,title: "Private Bedroom with a FULL Bed, Shared Bath!", description: descriptionsLosAngeles[3], costPerNight: 55, address: "101 East Broadway, Glendale, California", city: "Los Angeles"},
     {userId: 6,title: "~!Classic Studio near DTLA#16N!~ ", description: descriptionsLosAngeles[4], costPerNight: 98, address: "6533 Hayes Drive, Los Angeles, California", city: "Los Angeles"},


    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Spots', null, {});
  }
};
