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
const descriptionsOrlando =[
  "You will be staying at a vacation home in a gated resort, a central spot close to major theme parks and interesting attractions in the Orlando area. You have full access to the clubhouse with a gym, a pool, and a mini store.",
  "This private studio is located in a very safe and low traffic area. The studio has been fully renovated and furnished. One queen bed, and one store-away bed are available to accommodate up to 3 guests (2 adults 1 kid). One small kitchen with the typical accessories.",
  "Enjoy a stylish experience at this centrally-located place. 13 miles from the airport. Close to all Disney parks . Enjoy a beautiful night view through your room . Access to malls and supermarkets is easy and incredibly convenient and close . Beautiful kitchen with all appliances to prepare any meal . You will find a stylish apartment with all amenities to make sure your experience is the best. Access to Walmart walking. The Loop within 5 miles where you find all type of retail stores and more.",
  "Amazing room. Perfectly located for the best possible Orlando Vacation experience. It is just off International Drive close to major Atrractions, Theme Parks, Dining and Shopping. Minutes from Universal. Close to Disney. Close to the Convencion Center. The studio is very cozy with a queen bed, dresser with plenty of space for clothes and essentials, 42 inch tv.",
  "Spacious private room in 2 bedroom high rise located in the heart of downtown Orlando with endless sky views overlooking Lake Eola. Enjoy access to the sky lounge & balcony as well as the rooftop pool. This is our personal residence that we love to share and host the budget friendly traveler looking for an amazing stay with great people. A perfect location for visitors going to Parks, International Drive, Downtown, Amway Center, Dr. Phillips Center and Camping world/Orlando City Stadiums.",
]

const descriptionsSanFrancisco=[
  "The Inn At The Opera has a guest rating of 4.1 out of 5 on Expedia. Please let me know what dates you are interested in & I will check on the availability with my timeshare company",
  "Private entry, sidewalk-level, garden view studio with a small kitchen and bath. Ocean beach just steps outside your doorstep!  Close to Land's End, Sutro Baths, Golden Gate Park, the Cliff House, Beach Chalet, and so much more. Groceries and bus lines are just across. Dining and shopping options along the Balboa corridors all it within walking distance.",
  "Kick back & relax in this calm, stylish space. Only a block away from the water AND 2 from Golden Gate Park. This bedroom comes with its very own patio. Common areas in the house include a fully equipped kitchen, living room & dining room. Coffee and coffee maker included. The room has a desk for working and space to relax. Our neighborhood is full of great restaurants & coffee spots and it is only a delightful 15 minute walk away from San Francisco's famous Lands End.",
  "Relax with the whole family at this peaceful place to stay 1/2 block from famous Golden Gate Park. 15 minute walk from Ocean Beach. Bus lines running on Fulton and Balboa take you downtown quick. Street parking easy to find. Family friendly, park across the street!",
  "Cozy private room in my Victorian home, it’s a nice comfortable place to relax after a busy work day or after a day of adventuring in the city! Located on a quieter street in the SoMa district! A centrally located neighborhood, 5-15 min walking distance to Moscone Center, public transportation - MUNI & BART, shared bikes, mopeds & scooters, Museums, Restaurants, Breweries, Wine bars, Coffee Shops, Nightclubs & Live Music Venues making it the perfect homebase for city exploration."
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
     {userId: 1,title: "Cozy Flat in the Heart of the Upper West Side", description: descriptionsNewYork[0], costPerNight: 102, address: "153 West 83rd Street, New York, New York", city: "NewYork"},
     {userId: 2,title: "National at 888 Sixth Avenue", description: descriptionsNewYork[1], costPerNight: 115, address: "888 6th Avenue, New York, New York", city: "NewYork"},
     {userId: 1,title: "Charming Furnished Suite Sutton Pl/Midtown East #1", description: descriptionsNewYork[2], costPerNight: 107, address: "400 East 58th St, New York, New York", city: "NewYork"},
     {userId: 3,title: "Hudson Yards Room, 63F3", description: descriptionsNewYork[3], costPerNight: 99, address: "605 West 42nd St, New York, New York", city: "NewYork"},
     {userId: 2,title: "Brand new designer entire apartment/LES", description: descriptionsNewYork[4], costPerNight: 110, address: "189 Bowery, New York, New York", city: "NewYork"},

    //Chicago
     {userId: 2,title: "Clean & Renovated, Walking to distance to lake!", description: descriptionsChicago[0], costPerNight: 85, address: "1366 North Dearborn Street, Chicago, Illinois", city: "Chicago", bookedStart:new Date(), bookedEnd:new Date()},
     {userId: 3,title: "Perfect 4 long term Ultra Sophisticated large room", description: descriptionsChicago[1], costPerNight: 40, address: "4713 North Drake Ave, Chicago, Illinois", city: "Chicago"},
     {userId: 4,title: "Cozy 1 bedroom Condo in wonderful neighborhood", description: descriptionsChicago[2], costPerNight: 60, address: "4451 South Greenwood Ave, Chicago, Illinois", city: "Chicago"},
     {userId: 7,title: "Pierce Place Garden", description: descriptionsChicago[3], costPerNight: 81, address: "2300 West Wabansia Ave, Chicago, Illinois", city: "Chicago"},
     {userId: 8,title: "Cozy, quiet studio apartment", description: descriptionsChicago[4], costPerNight: 85, address: "2548 West Berteau Ave, Chicago, Illinois", city: "Chicago"},


     //Los Angeles
     {userId: 1,title: "One bed Room K02", description: descriptionsLosAngeles[0], costPerNight: 91, address: "110 Russell Ave, Monterey Park, California", city: "LosAngeles"},
     {userId: 3,title: "New 1 Bedroom Unit w/Private Bath Private Access", description: descriptionsLosAngeles[1], costPerNight: 56, address: "11719 Cherrylee Drive, El Monte, California", city: "LosAngeles"},
     {userId: 5,title: "1 bed Guest House", description: descriptionsLosAngeles[2], costPerNight: 100, address: "1735 North California St, Burbank, California", city: "LosAngeles"},
     {userId: 4,title: "Private Bedroom with a FULL Bed, Shared Bath!", description: descriptionsLosAngeles[3], costPerNight: 55, address: "101 East Broadway, Glendale, California", city: "LosAngeles"},
     {userId: 6,title: "~!Classic Studio near DTLA#16N!~ ", description: descriptionsLosAngeles[4], costPerNight: 98, address: "6533 Hayes Drive, Los Angeles, California", city: "LosAngeles"},


     //Orlando
     {userId: 3,title: "Private Bedroom, 8 Mins to Disney Main Gate #1", description: descriptionsOrlando[0], costPerNight: 60, address: "2700 Roadster Lane, Kissimmee, Florida", city: "Orlando"},
     {userId: 5,title: "Alexa's Blue Studio. Close to MCO", description: descriptionsOrlando[1], costPerNight: 53, address: "807 Hendry Drive, Orlando, Florida", city: "Orlando"},
     {userId: 8,title: "Great location, near Disney and Airport", description: descriptionsOrlando[2], costPerNight: 63, address: "189 Harwood Circle, Kissimmee, Florida", city: "Orlando"},
     {userId: 2,title: "Perfect Studio and location 3214 / Free parking", description: descriptionsOrlando[3], costPerNight: 72, address: "7035 Grand National Drive, Orlando, Florida", city: "Orlando"},
     {userId: 1,title: "What-a-View", description: descriptionsOrlando[4], costPerNight: 109, address: "60 North Court Avenue, Orlando, Florida", city: "Orlando"},


     //San Francisco
     {userId: 4,title: "Inn at the Opera'", description: descriptionsSanFrancisco[0], costPerNight: 86, address: "333 Fulton Street, San Francisco, California", city: "SanFrancisco"},
     {userId: 7,title: "Studio steps from the ocean", description: descriptionsSanFrancisco[1], costPerNight: 161, address: "787 La Playa Street, San Francisco, California", city: "SanFrancisco"},
     {userId: 6,title: "Sunset-Beach-GG Park 2nd Flr Bdrm/Patio/ Pvt Bath", description: descriptionsSanFrancisco[2], costPerNight: 89, address: "1275 48th Avenue, San Francisco, California", city: "SanFrancisco"},
     {userId: 8,title: "Family Friendly Apt. Next to Golden Gate Park!", description: descriptionsSanFrancisco[3], costPerNight: 85, address: "770 39th Avenue, San Francisco, California", city: "SanFrancisco"},
     {userId: 2,title: "Cozy bedroom in Victorian home. SoMa", description: descriptionsSanFrancisco[4], costPerNight: 86, address: "46 Rausch Street, San Francisco, California", city: "SanFrancisco"},
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
